import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/home-video-section";

function HomeVideoSection() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    heading: "",
    paragraph: "",
    video: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.data);
  };

  const handleChange = (e) => {
    if (e.target.name === "video") {
      setFormData({ ...formData, video: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();
      dataToSend.append("heading", formData.heading);
      dataToSend.append("paragraph", formData.paragraph);

      if (formData.video) {
        dataToSend.append("video", formData.video);
      }

      if (editId) {
        await axios.put(`${API}/${editId}`, dataToSend);
      } else {
        await axios.post(API, dataToSend);
      }

      fetchData();
      setShowForm(false);
      setEditId(null);
      setFormData({ heading: "", paragraph: "", video: null });
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
      heading: item.heading || "",
      paragraph: item.paragraph || "",
      video: null, // ⚠️ file input cannot auto-fill
    });

    setEditId(item._id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({ heading: "", paragraph: "", video: null });
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
                <th>Video</th>
                <th>Heading</th>
                <th>Paragraph</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <video
                      src={`http://localhost:8000/uploads/${item.video}`}
                      width="120"
                      controls
                    />
                  </td>
                  <td>{item.heading}</td>
                  <td>{item.paragraph}</td>
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
          <h5 className="mb-3">{editId ? "Edit" : "Create"} Home Video Section</h5>

          <label>Heading*</label>
          <input
            type="text"
            name="heading"
            className="form-control mb-2"
            value={formData.heading}
            onChange={handleChange}
            required
          />

          <label>Paragraph*</label>
          <textarea
            name="paragraph"
            className="form-control mb-2"
            rows={4}
            value={formData.paragraph}
            onChange={handleChange}
            required
          />

          <label>Video{!editId && "*"}</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            className="form-control mb-3"
            onChange={handleChange}
            {...(!editId && { required: true })}
          />

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">
              {editId ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
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

export default HomeVideoSection;