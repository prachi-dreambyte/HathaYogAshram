import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/about-founder-details";

const EMPTY_PHILOSOPHY = { iconFile: null, iconUrl: "", heading: "", paragraph: "" };

const EMPTY_FORM = {
  founderName: "",
  role: "",
  img: null,
  shortTitle: "",
  stats: "",
  mainQuote: "",
  quoteTitle: "",
  mainBiography: "",
  bioTitle: "",
  mainPhilosophy: "",
  philosophyItems: [
    { ...EMPTY_PHILOSOPHY },
    { ...EMPTY_PHILOSOPHY },
    { ...EMPTY_PHILOSOPHY },
    { ...EMPTY_PHILOSOPHY },
  ],
  mainAchievements: "",
  text: "",
};

const Field = ({ label, name, required, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}{required && " *"}</label>
    <input
      type="text"
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const TextArea = ({ label, name, required, value, onChange, placeholder, rows = 3 }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}{required && " *"}</label>
    <textarea
      name={name}
      className="form-control"
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const FileField = ({ label, name, onChange, accept = "image/*" }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <input
      type="file"
      name={name}
      className="form-control"
      accept={accept}
      onChange={onChange}
    />
  </div>
);

const SectionTitle = ({ title }) => (
  <h5 className="mt-4 mb-3 border-bottom pb-2 text-primary">{title}</h5>
);

function AboutFounderDetails() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (err) {
      setError("Failed to fetch data.");
    }
  };

  // ── Generic field change ──────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ── Philosophy item helpers ───────────────────────────────────────────────
  const handlePhilosophyIcon = (index, file) => {
    setFormData((prev) => {
      const philosophyItems = [...prev.philosophyItems];
      philosophyItems[index] = {
        ...philosophyItems[index],
        iconFile: file,
      };
      return { ...prev, philosophyItems };
    });
  };

  const handlePhilosophyField = (index, field, value) => {
    setFormData((prev) => {
      const philosophyItems = [...prev.philosophyItems];
      philosophyItems[index] = { ...philosophyItems[index], [field]: value };
      return { ...prev, philosophyItems };
    });
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();

      // Basic fields
      const basicFields = [
        "founderName","role","shortTitle","stats",
        "mainQuote","quoteTitle","mainBiography","bioTitle",
        "mainPhilosophy","mainAchievements","text",
      ];
      basicFields.forEach((key) => {
        if (formData[key] !== "") fd.append(key, formData[key]);
      });
      if (formData.img) fd.append("img", formData.img);

      // 4 philosophy items
      formData.philosophyItems.forEach((item, i) => {
        fd.append(`philoHeading_${i}`, item.heading);
        fd.append(`philoParagraph_${i}`, item.paragraph);
        if (item.iconFile) fd.append(`philoIcon_${i}`, item.iconFile);
      });

      if (editId) {
        await axios.put(`${API}/${editId}`, fd);
      } else {
        await axios.post(API, fd);
      }

      fetchData();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ── Edit ──────────────────────────────────────────────────────────────────
  const handleEdit = (item) => {
    const philosophyItems = Array.from({ length: 4 }, (_, i) => ({
      iconFile: null, // file inputs can't be pre-filled
      iconUrl:  item.philosophyItems?.[i]?.icon || "",
      heading:   item.philosophyItems?.[i]?.heading   || "",
      paragraph: item.philosophyItems?.[i]?.paragraph || "",
    }));

    setFormData({
      founderName:      item.founderName      || "",
      role:             item.role             || "",
      img:              null,
      shortTitle:       item.shortTitle       || "",
      stats:            item.stats            || "",
      mainQuote:        item.mainQuote        || "",
      quoteTitle:       item.quoteTitle       || "",
      mainBiography:    item.mainBiography    || "",
      bioTitle:         item.bioTitle         || "",
      mainPhilosophy:   item.mainPhilosophy   || "",
      philosophyItems,
      mainAchievements: item.mainAchievements || "",
      text:             item.text             || "",
    });
    setEditId(item._id);
    setShowForm(true);
  };

  // ── Delete ────────────────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      fetchData();
    } catch (err) {
      setError("Delete failed.");
    }
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="container pt-5 mt-5">
      <h3 className="mb-4">About Founder Details</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showForm ? (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Create
          </button>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Short Title</th>
                  <th>Stats</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center text-muted">
                      No records found.
                    </td>
                  </tr>
                )}
                {data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.img ? (
                        <img
                          src={item.img}
                          width="60"
                          height="60"
                          style={{ objectFit: "cover", borderRadius: 4 }}
                          alt="founder"
                        />
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                    <td>{item.founderName}</td>
                    <td>{item.role}</td>
                    <td>{item.shortTitle}</td>
                    <td>{item.stats}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">{editId ? "Edit" : "Create"} Founder Details</h5>
            <button type="button" className="btn-close" onClick={resetForm} />
          </div>

          {/* ── Founder Details ── */}
          <SectionTitle title="Founder Details" />
          <Field
            label="Founder Name"
            name="founderName"
            required
            value={formData.founderName}
            onChange={handleChange}
          />
          <TextArea
            label="Role"
            name="role"
            required
            placeholder="Example: Vinyasa Yogashala | Founder"
            value={formData.role}
            onChange={handleChange}
          />
          <FileField label="Founder Image" name="img" onChange={handleChange} />
          <Field
            label="Short Title"
            name="shortTitle"
            value={formData.shortTitle}
            onChange={handleChange}
          />
          <TextArea
            label="Stats"
            name="stats"
            placeholder="Example: 20+ | Years Experience"
            value={formData.stats}
            onChange={handleChange}
          />

          {/* ── Quotes ── */}
          <SectionTitle title="Quotes" />
          <TextArea
            label="Main Quote"
            name="mainQuote"
            value={formData.mainQuote}
            onChange={handleChange}
          />
          <Field
            label="Quote Title"
            name="quoteTitle"
            value={formData.quoteTitle}
            onChange={handleChange}
          />

          {/* ── Biography ── */}
          <SectionTitle title="Biography" />
          <TextArea
            label="Main Biography"
            name="mainBiography"
            value={formData.mainBiography}
            onChange={handleChange}
          />
          <Field
            label="Bio Title"
            name="bioTitle"
            value={formData.bioTitle}
            onChange={handleChange}
          />

          {/* ── Philosophy ── */}
          <SectionTitle title="Philosophy" />
          <TextArea
            label="Main Philosophy"
            name="mainPhilosophy"
            value={formData.mainPhilosophy}
            onChange={handleChange}
          />

          <div className="row g-3 mb-3">
            {formData.philosophyItems.map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="border rounded p-3 h-100 bg-light">
                  <span className="fw-semibold d-block mb-2 text-dark">
                    Philosophy {i + 1}
                  </span>

                  {/* Icon upload */}
                  <label className="form-label small fw-semibold">Icon</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control form-control-sm mb-2"
                    onChange={(e) =>
                      handlePhilosophyIcon(i, e.target.files?.[0] || null)
                    }
                  />
                  {item.iconUrl && (
                    <img
                      src={item.iconUrl}
                      alt={`Icon ${i + 1}`}
                      style={{ width: 36, height: 36, objectFit: "contain" }}
                      className="mb-2 d-block"
                    />
                  )}
                  {item.iconFile && (
                    <small className="text-success d-block mb-2">
                      ✅ {item.iconFile.name}
                    </small>
                  )}
                  {!item.iconFile && editId && (
                    <small className="text-muted d-block mb-2">
                      (existing icon will be kept if no new file chosen)
                    </small>
                  )}

                  {/* Heading */}
                  <label className="form-label small fw-semibold">Heading</label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder={`Heading ${i + 1}`}
                    value={item.heading}
                    onChange={(e) => handlePhilosophyField(i, "heading", e.target.value)}
                  />

                  {/* Paragraph */}
                  <label className="form-label small fw-semibold">Paragraph</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows={3}
                    placeholder={`Paragraph ${i + 1}`}
                    value={item.paragraph}
                    onChange={(e) => handlePhilosophyField(i, "paragraph", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>


          {/* ── Achievements ── */}
          <SectionTitle title="Achievements" />
          <TextArea
            label="Main Achievements"
            name="mainAchievements"
            value={formData.mainAchievements}
            onChange={handleChange}
          />
          <Field
            label="Text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />

          <div className="d-flex gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Saving…" : editId ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AboutFounderDetails;
