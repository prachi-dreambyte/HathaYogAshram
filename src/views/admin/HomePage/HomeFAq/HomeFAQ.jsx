import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/faq-heading";

function HomeFaqHeading() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ mainHeading: "", subHeading: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error(err);
      setData([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
    if (!allowed.includes(file.type)) {
      setError("Only JPEG, PNG, GIF, or WEBP images are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be smaller than 5 MB.");
      return;
    }

    setError("");
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("mainHeading", formData.mainHeading);
      payload.append("subHeading", formData.subHeading);
      if (imageFile) payload.append("image", imageFile);

      if (editId) {
        await axios.put(`${API}/${editId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(API, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      resetForm();
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setFormData({ mainHeading: item.mainHeading, subHeading: item.subHeading });
    setImageFile(null);
    // item.image is already a full URL — use directly
    setImagePreview(item.image || null);
    setEditId(item._id);
    setShowForm(true);
    setError("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      fetchData();
    } catch {
      alert("Failed to delete record.");
    }
  };

  const resetForm = () => {
    setFormData({ mainHeading: "", subHeading: "" });
    setImageFile(null);
    setImagePreview(null);
    setEditId(null);
    setShowForm(false);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="container pt-5 mt-5">

      {!showForm && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">FAQ Headings</h4>
            <button className="btn btn-primary" onClick={() => { resetForm(); setShowForm(true); }}>
              + Create
            </button>
          </div>

          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Main Heading</th>
                <th>Sub Heading</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-muted">
                    No records found. Click <strong>+ Create</strong> to add one.
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.image ? (
                        <img
                          src={item.image}  // ← full URL, no BASE_URL needed
                          alt="faq"
                          style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 6, border: "1px solid #dee2e6" }}
                        />
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                    <td>{item.mainHeading}</td>
                    <td>{item.subHeading}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}

      {showForm && (
        <div className="card p-4 shadow-sm" style={{ maxWidth: 560 }}>
          <h5 className="mb-4">{editId ? "Edit FAQ Heading" : "Create FAQ Heading"}</h5>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Main Heading <span className="text-danger">*</span></label>
              <input type="text" name="mainHeading" className="form-control" value={formData.mainHeading} onChange={handleChange} placeholder="Enter main heading" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Sub Heading <span className="text-danger">*</span></label>
              <input type="text" name="subHeading" className="form-control" value={formData.subHeading} onChange={handleChange} placeholder="Enter sub heading" required />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Image</label>

              {imagePreview && (
                <div className="mb-2 position-relative" style={{ display: "inline-block" }}>
                  <img
                    src={imagePreview}  // ← full URL or base64 preview, works either way
                    alt="preview"
                    style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8, border: "2px solid #0d6efd", display: "block" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm position-absolute"
                    style={{ top: -8, right: -8, borderRadius: "50%", padding: "2px 7px" }}
                    onClick={handleRemoveImage}
                  >✕</button>
                </div>
              )}

              <input type="file" accept="image/jpeg,image/jpg,image/png,image/gif,image/webp" className="form-control" onChange={handleImageChange} ref={fileInputRef} />
              <div className="form-text">Accepted: JPEG, PNG, GIF, WEBP · Max size: 5 MB</div>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success" disabled={loading}>
                {loading ? <><span className="spinner-border spinner-border-sm me-1" />Saving...</> : editId ? "Update" : "Save"}
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default HomeFaqHeading;