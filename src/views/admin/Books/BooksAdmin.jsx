import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api/books";
const LIST_API = `${API_BASE}?includeUnpublished=true`;
const FILE_BASE = "http://localhost:8000/uploads/books";

const EMPTY_FORM = {
  title: "",
  author: "",
  description: "",
  category: "",
  pages: "",
  language: "",
  coverImage: null,
  pdfFile: null,
  isPublished: true,
};

function BooksAdmin() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(LIST_API);
    setData(res.data.data || []);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("author", formData.author);
    fd.append("description", formData.description);
    fd.append("category", formData.category);
    fd.append("pages", formData.pages);
    fd.append("language", formData.language);
    fd.append("isPublished", formData.isPublished ? "true" : "false");

    if (formData.coverImage) fd.append("coverImage", formData.coverImage);
    if (formData.pdfFile) fd.append("pdfFile", formData.pdfFile);

    if (editId) {
      await axios.put(`${API_BASE}/${editId}`, fd);
    } else {
      await axios.post(API_BASE, fd);
    }

    await fetchData();
    setShowForm(false);
    setEditId(null);
    setFormData(EMPTY_FORM);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title || "",
      author: item.author || "",
      description: item.description || "",
      category: item.category || "",
      pages: item.pages || "",
      language: item.language || "",
      coverImage: null,
      pdfFile: null,
      isPublished: item.isPublished !== false,
    });
    setEditId(item._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                <th>Author</th>
                <th>Category</th>
                <th>Pages</th>
                <th>Language</th>
                <th>PDF</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.coverImage && (
                      <img
                        src={`${FILE_BASE}/${item.coverImage}`}
                        width="60"
                        alt=""
                      />
                    )}
                  </td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>
                  <td>{item.pages}</td>
                  <td>{item.language}</td>
                  <td>
                    {item.pdfFile && (
                      <a
                        href={`${FILE_BASE}/${item.pdfFile}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View PDF
                      </a>
                    )}
                  </td>
                  <td>{item.isPublished ? "Yes" : "No"}</td>
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
          <label>Book Title*</label>
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Author*</label>
          <input
            type="text"
            name="author"
            className="form-control mb-2"
            value={formData.author}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            className="form-control mb-2"
            value={formData.description}
            onChange={handleChange}
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            className="form-control mb-2"
            value={formData.category}
            onChange={handleChange}
          />

          <label>Pages</label>
          <input
            type="number"
            name="pages"
            className="form-control mb-2"
            value={formData.pages}
            onChange={handleChange}
          />

          <label>Language</label>
          <input
            type="text"
            name="language"
            className="form-control mb-2"
            value={formData.language}
            onChange={handleChange}
          />

          <label>Cover Image</label>
          <input
            type="file"
            name="coverImage"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <label>PDF File</label>
          <input
            type="file"
            name="pdfFile"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isPublished"
              id="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isPublished">
              Show on site
            </label>
          </div>

          <button className="btn btn-success">
            {editId ? "Update" : "Save"}
          </button>
        </form>
      )}
    </div>
  );
}

export default BooksAdmin;
