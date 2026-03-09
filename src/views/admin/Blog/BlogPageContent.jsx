import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/blog-page";

const EMPTY_FORM = {
  topLabel: "",
  title: "",
  breadcrumbLabel: "",
  sectionTitle: "",
  description: "",
};

function BlogPageContent() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setFormData({ ...EMPTY_FORM, ...(res.data?.data || {}) });
      } catch (error) {
        console.error("Failed to load blog page content:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(API, formData);
    } catch (error) {
      console.error("Failed to save blog page content:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container pt-5 mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <h4 className="mb-3">Blog Page Content</h4>

        <div className="mb-3">
          <label className="form-label">Top Label</label>
          <input
            type="text"
            className="form-control"
            name="topLabel"
            value={formData.topLabel}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Page Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Breadcrumb Label</label>
          <input
            type="text"
            className="form-control"
            name="breadcrumbLabel"
            value={formData.breadcrumbLabel}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Section Title</label>
          <input
            type="text"
            className="form-control"
            name="sectionTitle"
            value={formData.sectionTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default BlogPageContent;
