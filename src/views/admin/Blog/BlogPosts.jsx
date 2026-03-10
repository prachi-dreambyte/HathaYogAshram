import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api/blogs";
const LIST_API = `${API_BASE}?includeUnpublished=true`;
const ASSET_BASE = "http://localhost:8000";

const EMPTY_FORM = {
  title: "",
  slug: "",
  category: "",
  badge: "",
  subtitle: "",
  excerpt: "",
  readTime: "",
  publishedAt: "",
  coverImageUrl: "",
  coverImageFile: null,
  contentHtml: "",
  isPublished: true,
};

const toAssetUrl = (value) => {
  if (!value) return "";
  if (typeof value !== "string") return value;
  if (value.startsWith("http") || value.startsWith("data:")) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, "")}`;
};

const toDateInput = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

function BlogPosts() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [coverPreview, setCoverPreview] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(LIST_API);
    setData(res.data?.data || []);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
      if (name === "coverImageFile") {
        setCoverPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === "coverImageUrl") {
        setCoverPreview(value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("slug", formData.slug);
    fd.append("category", formData.category);
    fd.append("badge", formData.badge);
    fd.append("subtitle", formData.subtitle);
    fd.append("excerpt", formData.excerpt);
    fd.append("readTime", formData.readTime);
    fd.append("contentHtml", formData.contentHtml);
    fd.append("isPublished", formData.isPublished ? "true" : "false");
    if (formData.publishedAt) fd.append("publishedAt", formData.publishedAt);

    if (formData.coverImageFile) {
      fd.append("cover", formData.coverImageFile);
    } else if (formData.coverImageUrl) {
      fd.append("coverImage", formData.coverImageUrl);
    }

    if (editId) {
      await axios.put(`${API_BASE}/${editId}`, fd);
    } else {
      await axios.post(API_BASE, fd);
    }

    await fetchData();
    setShowForm(false);
    setEditId(null);
    setFormData(EMPTY_FORM);
    setCoverPreview("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title || "",
      slug: item.slug || "",
      category: item.category || "",
      badge: item.badge || "",
      subtitle: item.subtitle || "",
      excerpt: item.excerpt || "",
      readTime: item.readTime || "",
      publishedAt: toDateInput(item.publishedAt || item.createdAt),
      coverImageUrl: item.coverImage || "",
      coverImageFile: null,
      contentHtml: item.contentHtml || "",
      isPublished: item.isPublished !== false,
    });
    setCoverPreview(item.coverImage ? toAssetUrl(item.coverImage) : "");
    setEditId(item._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData(EMPTY_FORM);
    setCoverPreview("");
  };

  return (
    <div className="container pt-5 mt-5">
      {!showForm && (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Create
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Category</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    {item.coverImage ? (
                      <img
                        src={toAssetUrl(item.coverImage)}
                        alt={item.title}
                        style={{ width: "80px", borderRadius: "6px" }}
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.isPublished ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4">
          <h4 className="mb-3">{editId ? "Edit Blog Post" : "Create Blog Post"}</h4>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Slug</label>
              <input
                type="text"
                className="form-control"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="auto-generated if empty"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Badge</label>
              <input
                type="text"
                className="form-control"
                name="badge"
                value={formData.badge}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Read Time</label>
              <input
                type="text"
                className="form-control"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="e.g. 5 min read"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Subtitle</label>
              <input
                type="text"
                className="form-control"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Published Date</label>
              <input
                type="date"
                className="form-control"
                name="publishedAt"
                value={formData.publishedAt}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Excerpt</label>
            <textarea
              className="form-control"
              rows="3"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Cover Image URL</label>
              <input
                type="text"
                className="form-control"
                name="coverImageUrl"
                value={formData.coverImageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Upload Cover Image</label>
              <input
                type="file"
                className="form-control"
                name="coverImageFile"
                onChange={handleChange}
              />
            </div>
          </div>

          {coverPreview && (
            <div className="mb-3">
              <img
                src={coverPreview}
                alt="Cover preview"
                style={{ maxWidth: "220px", borderRadius: "8px" }}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Content (HTML)</label>
            <textarea
              className="form-control"
              rows="12"
              name="contentHtml"
              value={formData.contentHtml}
              onChange={handleChange}
              placeholder="<h2>Section Title</h2><p>Write your content...</p>"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              id="isPublished"
            />
            <label className="form-check-label" htmlFor="isPublished">
              Published
            </label>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-success" type="submit">
              {editId ? "Update" : "Create"}
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BlogPosts;
