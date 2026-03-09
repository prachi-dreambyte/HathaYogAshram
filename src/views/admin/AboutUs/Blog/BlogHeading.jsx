import React, { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:8000/api/blog-heading";

function BlogHeadingForm() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Data
  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (editId) {
        await axios.put(`${API}/${editId}`, formData);
      } else {
        await axios.post(API, formData);
      }

      fetchData();

      setFormData({
        title: "",
        description: ""
      });

      setEditId(null);
      setShowForm(false);

    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const handleDelete = async (id) => {

    if (window.confirm("Delete this item?")) {
      await axios.delete(`${API}/${id}`);
      fetchData();
    }

  };

  // Edit
  const handleEdit = (item) => {

    setFormData({
      title: item.title,
      description: item.description
    });

    setEditId(item._id);
    setShowForm(true);

  };

  return (
    <div className="container mt-5 pt-5">

      {!showForm && (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Add Data
          </button>

          <table className="table table-bordered">

            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>

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

        <form onSubmit={handleSubmit} className="card p-4 shadow">

          <h4 className="mb-3">
            {editId ? "Update Data" : "Add Data"}
          </h4>

          <label>Title</label>

          <input
            type="text"
            name="title"
            className="form-control mb-3"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description</label>

          <textarea
            name="description"
            className="form-control mb-3"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-success me-2">
            {editId ? "Update" : "Save"}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>

      )}

    </div>
  );
}

export default BlogHeadingForm;