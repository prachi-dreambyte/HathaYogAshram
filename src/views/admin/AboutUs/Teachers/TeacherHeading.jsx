import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/about-teacher-heading";

const EMPTY_VIDEO = { type: "upload", file: null, link: "" };

const EMPTY_FORM = {
  mainHeading:     "",
  subHeading:      "",
  paragraph:       "",
  videoHeading:    "",
  videoSubHeading: "",
  videos: [
    { ...EMPTY_VIDEO },
    { ...EMPTY_VIDEO },
    { ...EMPTY_VIDEO },
    { ...EMPTY_VIDEO },
  ],
  lastHeading:   "",
  lastParagraph: "",
};

function AboutTeacherHeading() {
  const [data, setData]         = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId]     = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

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

  // ── Video slot helpers ────────────────────────────────────────────────────
  const handleVideoType = (index, type) => {
    setFormData((prev) => {
      const videos = [...prev.videos];
      videos[index] = { type, file: null, link: "" };
      return { ...prev, videos };
    });
  };

  const handleVideoFile = (index, file) => {
    setFormData((prev) => {
      const videos = [...prev.videos];
      videos[index] = { ...videos[index], file };
      return { ...prev, videos };
    });
  };

  const handleVideoLink = (index, link) => {
    setFormData((prev) => {
      const videos = [...prev.videos];
      videos[index] = { ...videos[index], link };
      return { ...prev, videos };
    });
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("mainHeading",     formData.mainHeading);
      fd.append("subHeading",      formData.subHeading);
      fd.append("paragraph",       formData.paragraph);
      fd.append("videoHeading",    formData.videoHeading);
      fd.append("videoSubHeading", formData.videoSubHeading);
      fd.append("lastHeading",     formData.lastHeading);
      fd.append("lastParagraph",   formData.lastParagraph);

      formData.videos.forEach((v, i) => {
        fd.append(`videoType_${i}`, v.type);
        if (v.type === "upload" && v.file) {
          fd.append(`videoFile_${i}`, v.file);
        } else if (v.type === "link" && v.link) {
          fd.append(`videoLink_${i}`, v.link);
        }
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
    const videos = Array.from({ length: 4 }, (_, i) => ({
      type: item.videos?.[i]?.type || "upload",
      file: null,
      link: item.videos?.[i]?.url  || "",
    }));

    setFormData({
      mainHeading:     item.mainHeading     || "",
      subHeading:      item.subHeading      || "",
      paragraph:       item.paragraph       || "",
      videoHeading:    item.videoHeading    || "",
      videoSubHeading: item.videoSubHeading || "",
      videos,
      lastHeading:     item.lastHeading     || "",
      lastParagraph:   item.lastParagraph   || "",
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

  // ── UI Helpers ────────────────────────────────────────────────────────────
  const Field = ({ label, name, required }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}{required && " *"}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        value={formData[name]}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  const TextArea = ({ label, name }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <textarea
        name={name}
        className="form-control"
        rows={3}
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  const SectionTitle = ({ title }) => (
    <h5 className="mt-4 mb-3 border-bottom pb-2 text-primary">{title}</h5>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="container pt-5 mt-5">
      <h3 className="mb-4">About Teacher Heading</h3>

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
                  <th>Main Heading</th>
                  <th>Sub Heading</th>
                  <th>Paragraph</th>
                  <th>Video Heading</th>
                  <th>Video Sub Heading</th>
                  <th>Last Heading</th>
                  <th>Last Paragraph</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center text-muted">
                      No records found.
                    </td>
                  </tr>
                )}
                {data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.mainHeading}</td>
                    <td>{item.subHeading}</td>
                    <td>{item.paragraph}</td>
                    <td>{item.videoHeading}</td>
                    <td>{item.videoSubHeading}</td>
                    <td>{item.lastHeading}</td>
                    <td>{item.lastParagraph}</td>
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
            <h5 className="mb-0">{editId ? "Edit" : "Create"} Teacher Section</h5>
            <button type="button" className="btn-close" onClick={resetForm} />
          </div>

          {/* ── Teacher Section ── */}
          <SectionTitle title="Teacher Section" />
          <Field label="Main Heading" name="mainHeading" required />
          <Field label="Sub Heading"  name="subHeading" />
          <TextArea label="Paragraph" name="paragraph" />

          {/* ── Teacher Videos ── */}
          <SectionTitle title="Teacher Videos" />
          <Field label="Video Section Heading"     name="videoHeading" />
          <Field label="Video Section Sub Heading" name="videoSubHeading" />

          <div className="row g-3 mt-1">
            {formData.videos.map((v, i) => (
              <div key={i} className="col-md-6">
                <div className="border rounded p-3 h-100 bg-light">

                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-semibold text-dark">Video {i + 1}</span>
                    <div className="btn-group btn-group-sm">
                      <button
                        type="button"
                        className={`btn ${v.type === "upload" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => handleVideoType(i, "upload")}
                      >
                        📁 Upload
                      </button>
                      <button
                        type="button"
                        className={`btn ${v.type === "link" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => handleVideoType(i, "link")}
                      >
                        🔗 Link
                      </button>
                    </div>
                  </div>

                  {v.type === "upload" ? (
                    <>
                      <input
                        type="file"
                        accept="video/*"
                        className="form-control form-control-sm"
                        onChange={(e) => handleVideoFile(i, e.target.files[0])}
                      />
                      {v.file && (
                        <small className="text-success mt-1 d-block">
                          ✅ {v.file.name}
                        </small>
                      )}
                    </>
                  ) : (
                    <>
                      <input
                        type="url"
                        className="form-control form-control-sm"
                        placeholder="https://youtube.com/watch?v=..."
                        value={v.link}
                        onChange={(e) => handleVideoLink(i, e.target.value)}
                      />
                      {v.link && (
                        <small className="text-muted mt-1 d-block text-truncate">
                          🔗 {v.link}
                        </small>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Last Section ── */}
          <SectionTitle title="Teacher Last Section" />
          <Field label="Heading"      name="lastHeading" />
          <TextArea label="Paragraph" name="lastParagraph" />

          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? "Saving…" : editId ? "Update" : "Save"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AboutTeacherHeading;