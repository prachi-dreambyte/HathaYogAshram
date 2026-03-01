import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/teacher-name";

function TeacherName() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    teacherName: "",
    specialty: "",
    subPara: "",
    experience: "",
    img: null
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.data);
  };

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const dataToSend = new FormData();
    dataToSend.append("teacherName", formData.teacherName);
    dataToSend.append("specialty", formData.specialty);
    dataToSend.append("subPara", formData.subPara);
    dataToSend.append("experience", formData.experience);

    if (formData.img) {
      dataToSend.append("img", formData.img);
    }

    if (editId) {
      await axios.put(`${API}/${editId}`, dataToSend);
    } else {
      await axios.post(API, dataToSend);
    }

    fetchData();
    setShowForm(false);
    setEditId(null);

  } catch (error) {
    console.error("UPLOAD ERROR:", error.response || error.message);
  }
};

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
  setFormData({
    teacherName: item.teacherName || "",
    specialty: item.specialty || "",
    subPara: item.subPara || "",
    experience: item.experience || "",
    img: null   // ⚠️ file input cannot auto-fill
  });

  setEditId(item._id);
  setShowForm(true);
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
                <th>Image</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Description</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
               {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>   
                  <td>
                    <img
                      src={`http://localhost:8000/uploads/${item.img}`}
                      width="60"
                      alt=""
                    />
                  </td>
                  <td>{item.teacherName}</td>
                  <td>{item.subPara}</td>
                  <td>{item.specialty}</td>
                  <td>{item.experience}</td>
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
             <label>Teacher Name*</label>
         <input
  type="text"
  name="teacherName"
  className="form-control mb-2"
  value={formData.teacherName}
  onChange={handleChange}
  required
/>
             <label>Teacher Specialty*</label>
         <input
  type="text"
  name="specialty"
  className="form-control mb-2"
  value={formData.specialty}
  onChange={handleChange}
  required
/>

            <label>Teacher Description*</label>
         <textarea
  name="subPara"
  className="form-control mb-2"
  value={formData.subPara}
  onChange={handleChange}
  required
/>
             <label>Teacher Experience*</label>
          <input
  type="text"
  name="experience"
  className="form-control mb-2"
  value={formData.experience}
  onChange={handleChange}
  required
/>
            <label>Teacher Images*</label>
          <input
  type="file"
  name="img"
  className="form-control mb-2"
  onChange={handleChange}
/>

          <button className="btn btn-success">
            {editId ? "Update" : "Save"}
          </button>
        </form>
      )}
    </div>
  );
}

export default TeacherName;