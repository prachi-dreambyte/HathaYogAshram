import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/about-teacher-details";

const EMPTY_FORM = {
  name: "",
  role: [""],
  image: null,
  bio: [""],
  education: [""],
  experience: [""],
  expertise: [""]
};

function AboutTeacherDetails() {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    const arr = [...formData[field]];
    arr[index] = value;

    setFormData((prev) => ({
      ...prev,
      [field]: arr
    }));
  };

  const addField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const removeField = (field, index) => {
    const arr = [...formData[field]];
    arr.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      [field]: arr
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("name", formData.name);
    fd.append("image", formData.image);

    fd.append("role", JSON.stringify(formData.role));
    fd.append("bio", JSON.stringify(formData.bio));
    fd.append("education", JSON.stringify(formData.education));
    fd.append("experience", JSON.stringify(formData.experience));
    fd.append("expertise", JSON.stringify(formData.expertise));

    if (editId) {
      await axios.put(`${API}/${editId}`, fd);
    } else {
      await axios.post(API, fd);
    }

    fetchData();
    resetForm();
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      role: item.role || [""],
      image: null,
      bio: item.bio || [""],
      education: item.education || [""],
      experience: item.experience || [""],
      expertise: item.expertise || [""]
    });

    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  const renderArrayField = (label, field) => (
    <div className="mb-3">
      <label className="fw-semibold">{label}</label>

      {formData[field].map((item, index) => (
        <div key={index} className="d-flex gap-2 mb-2">

          <input
            type="text"
            className="form-control"
            value={item}
            onChange={(e) =>
              handleArrayChange(field, index, e.target.value)
            }
          />

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeField(field, index)}
          >
            -
          </button>

        </div>
      ))}

      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => addField(field)}
      >
        + Add
      </button>
    </div>
  );

  return (
    <div className="container pt-5 mt-5">

      <h3>About Teacher Details</h3>

      {!showForm ? (
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
                <th>Name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>

                  <td>{index + 1}</td>
                  <td>{item.name}</td>

                  <td>
                    <img
                      src={item.image}
                      width="60"
                      alt=""
                    />
                  </td>

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

        <form onSubmit={handleSubmit} className="card p-4">

          <h5>{editId ? "Edit Teacher" : "Create Teacher"}</h5>

          <div className="mb-3">
            <label>Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {renderArrayField("Role", "role")}

          <div className="mb-3">
            <label>Teacher Image</label>

            <input
              type="file"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {renderArrayField("Bio", "bio")}
          {renderArrayField("Education", "education")}
          {renderArrayField("Experience", "experience")}
          {renderArrayField("Expertise", "expertise")}

          <div className="d-flex gap-2">

            <button className="btn btn-success">
              {editId ? "Update" : "Save"}
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

export default AboutTeacherDetails;