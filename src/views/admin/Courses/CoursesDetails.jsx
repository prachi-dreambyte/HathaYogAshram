import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/yoga-courses";

const EMPTY_CURRICULUM = { title: "", items: "" };

const EMPTY_FORM = {
  title: "",
  duration: "",
  level: "",
  location: "",
  description: "",
  banner: null,
  curriculum: [
    { ...EMPTY_CURRICULUM },
    { ...EMPTY_CURRICULUM },
    { ...EMPTY_CURRICULUM },
  ],
  included: "",
};

function AboutCoursesDetails() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch {
      setError("Failed to fetch courses.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCurriculumChange = (index, field, value) => {
    const updated = [...formData.curriculum];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      curriculum: updated,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fd = new FormData();

      fd.append("title", formData.title);
      fd.append("duration", formData.duration);
      fd.append("level", formData.level);
      fd.append("location", formData.location);
      fd.append("description", formData.description);
      fd.append("included", formData.included);

      if (formData.banner) {
        fd.append("banner", formData.banner);
      }

      formData.curriculum.forEach((item, i) => {
        fd.append(`curriculumTitle_${i}`, item.title);
        fd.append(`curriculumItems_${i}`, item.items);
      });

      if (editId) {
        await axios.put(`${API}/${editId}`, fd);
      } else {
        await axios.post(API, fd);
      }

      fetchData();
      resetForm();
    } catch {
      setError("Failed to save.");
    }

    setLoading(false);
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      duration: item.duration,
      level: item.level,
      location: item.location,
      description: item.description,
      banner: null,
      included: item.included,
      curriculum: item.curriculum || EMPTY_FORM.curriculum,
    });

    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  const Field = ({ label, name }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  const TextArea = ({ label, name }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <textarea
        className="form-control"
        rows={3}
        name={name}
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );

  const SectionTitle = ({ title }) => (
    <h5 className="mt-4 mb-3 border-bottom pb-2 text-primary">{title}</h5>
  );

  return (
    <div className="container pt-5 mt-5">

      <h3 className="mb-4">Yoga Courses</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showForm ? (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Create Course
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>TopHeading</th>
                <th>MainHeading</th>
                <th>TopHeading1</th>
                <th>MainHeading4</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.duration}</td>
                  <td>{item.level}</td>
                  <td>{item.location}</td>

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
        </>
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

          <div className="d-flex justify-content-between mb-3">
            <h5>{editId ? "Edit Course" : "Create Course"}</h5>

            <button
              type="button"
              className="btn-close"
              onClick={resetForm}
            />
          </div>

          <SectionTitle title="Course Details" />
          <Field label="Course Top Heading" name="TopHeading" />
          <Field label="Course Overview" name="MainHeading" />
           <Field label="Course Heading" name="TopHeading1" />
           <Field label="Course " name="MainHeading1" />
           <Field label="Course Title" name="title" />
          <Field label="Duration" name="duration" />
          <Field label="Level" name="level" />
          <Field label="Location" name="location" />

          <TextArea label="Course Description" name="description" />

          <div className="mb-3">
            <label className="form-label fw-semibold">Banner Image</label>
            <input
              type="file"
              name="banner"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <SectionTitle title="Curriculum" />

          <div className="row g-3">
            {formData.curriculum.map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="border rounded p-3 bg-light">

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Category"
                    value={item.title}
                    onChange={(e) =>
                      handleCurriculumChange(i, "title", e.target.value)
                    }
                  />

                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Items (comma separated)"
                    value={item.items}
                    onChange={(e) =>
                      handleCurriculumChange(i, "items", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <SectionTitle title="What's Included" />

          <TextArea label="Included Items" name="included" />

          <div className="d-flex gap-2 mt-4">

            <button className="btn btn-success" disabled={loading}>
              {loading ? "Saving..." : editId ? "Update" : "Save"}
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

export default AboutCoursesDetails;