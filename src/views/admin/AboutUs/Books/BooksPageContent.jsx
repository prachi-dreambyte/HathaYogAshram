import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/books-page";

const EMPTY_FORM = {
  heroQuote: "",
  heroTitle: "",
  heroBreadcrumb: "",
  libraryTitle: "",
  librarySubtitle: "",
  libraryDescription: "",
};

function BooksPageContent() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(Array.isArray(res.data.data) ? res.data.data : []);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${API}/${editId}`, formData);
    } else {
      await axios.post(API, formData);
    }

    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({
      heroQuote: item.heroQuote || "",
      heroTitle: item.heroTitle || "",
      heroBreadcrumb: item.heroBreadcrumb || "",
      libraryTitle: item.libraryTitle || "",
      librarySubtitle: item.librarySubtitle || "",
      libraryDescription: item.libraryDescription || "",
    });
    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  return (
    <div className="container mt-5">
      <h2>Books Page Content</h2>

      {!showForm && (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            Create
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Hero Title</th>
                <th>Library Title</th>
                <th>Library Subtitle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.heroTitle}</td>
                  <td>{item.libraryTitle}</td>
                  <td>{item.librarySubtitle}</td>
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
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4">
          <div className="mb-3">
            <label>Hero Quote</label>
            <input
              type="text"
              name="heroQuote"
              className="form-control"
              value={formData.heroQuote}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Hero Title</label>
            <input
              type="text"
              name="heroTitle"
              className="form-control"
              value={formData.heroTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Breadcrumb Label</label>
            <input
              type="text"
              name="heroBreadcrumb"
              className="form-control"
              value={formData.heroBreadcrumb}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Library Title</label>
            <input
              type="text"
              name="libraryTitle"
              className="form-control"
              value={formData.libraryTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Library Subtitle</label>
            <input
              type="text"
              name="librarySubtitle"
              className="form-control"
              value={formData.librarySubtitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Library Description</label>
            <textarea
              name="libraryDescription"
              className="form-control"
              value={formData.libraryDescription}
              onChange={handleChange}
            />
          </div>

          <div className="mt-3">
            <button className="btn btn-success">
              {editId ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setShowForm(false);
                setEditId(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BooksPageContent;
