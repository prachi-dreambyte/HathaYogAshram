import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/vedic-mantra";

const EMPTY_FORM = {
  mantraTitle: "",
  mantraDescription: "",
  mantraImage:[],
  whyTitle: "",
  whyDescription: "",
  Icon:"",
  Myntra:"",
  typesTitle: "",
  typesDescription: "",
  gayatriTitle: "",
  gayatriText: "",
  benefitsTitle: "",
  benefitsDescription: "",
  courseTitle: "",
  courseDescription: "",
  donationPrice: ""
};

function VedicMantraForm() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    fetchData();
  }, []);

  // GET DATA
  const fetchData = async () => {
    const res = await axios.get(API);
    setData(Array.isArray(res.data.data) ? res.data.data : []);
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT FORM
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

  // EDIT
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
    setShowForm(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  return (
    <div className="container mt-5">

      <h2>Vedic Mantra Page Content</h2>

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
                <th>Mantra Title</th>
                <th>Why Title</th>
                <th>Types Title</th>
                <th>Course Title</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.mantraTitle}</td>
                  <td>{item.whyTitle}</td>
                  <td>{item.typesTitle}</td>
                  <td>{item.courseTitle}</td>

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

          <h4 className="mb-3">Vedic Mantra Section</h4>

          <div className="mb-3">
            <label>Mantra Title</label>
            <input
              type="text"
              name="mantraTitle"
              className="form-control"
              value={formData.mantraTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Mantra Description</label>
            <textarea
              name="mantraDescription"
              className="form-control"
              value={formData.mantraDescription}
              onChange={handleChange}
            />
          </div>

          <h4 className="mt-4">Why Vedic Mantra</h4>

          <div className="mb-3">
            <label>Why Title</label>
            <input
              type="text"
              name="whyTitle"
              className="form-control"
              value={formData.whyTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Why Description</label>
            <textarea
              name="whyDescription"
              className="form-control"
              value={formData.whyDescription}
              onChange={handleChange}
            />
          </div>

          <h4 className="mt-4">Types of Mantras</h4>

          <div className="mb-3">
            <label>Types Title</label>
            <input
              type="text"
              name="typesTitle"
              className="form-control"
              value={formData.typesTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Types Description</label>
            <textarea
              name="typesDescription"
              className="form-control"
              value={formData.typesDescription}
              onChange={handleChange}
            />
          </div>

          <h4 className="mt-4">Gayatri Mantra</h4>

          <div className="mb-3">
            <label>Gayatri Title</label>
            <input
              type="text"
              name="gayatriTitle"
              className="form-control"
              value={formData.gayatriTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Gayatri Mantra Text</label>
            <textarea
              name="gayatriText"
              className="form-control"
              value={formData.gayatriText}
              onChange={handleChange}
            />
          </div>

          <h4 className="mt-4">Benefits Section</h4>

          <div className="mb-3">
            <label>Benefits Title</label>
            <input
              type="text"
              name="benefitsTitle"
              className="form-control"
              value={formData.benefitsTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Benefits Description</label>
            <textarea
              name="benefitsDescription"
              className="form-control"
              value={formData.benefitsDescription}
              onChange={handleChange}
            />
          </div>

          <h4 className="mt-4">Course Section</h4>

          <div className="mb-3">
            <label>Course Title</label>
            <input
              type="text"
              name="courseTitle"
              className="form-control"
              value={formData.courseTitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Course Description</label>
            <textarea
              name="courseDescription"
              className="form-control"
              value={formData.courseDescription}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Donation Price</label>
            <input
              type="text"
              name="donationPrice"
              className="form-control"
              value={formData.donationPrice}
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

export default VedicMantraForm;