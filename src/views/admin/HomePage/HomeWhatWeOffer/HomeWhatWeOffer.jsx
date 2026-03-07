import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/home-what-we-offer";

function HomeWhatWeOffer() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    icon: "",
    title: "",
    text: "",
    modalTitle: "",
    modalDescription: "",
    features: "",
    image: null
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.data);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    dataToSend.append("icon", formData.icon);
    dataToSend.append("title", formData.title);
    dataToSend.append("text", formData.text);
    dataToSend.append("modalTitle", formData.modalTitle);
    dataToSend.append("modalDescription", formData.modalDescription);
    dataToSend.append("features", formData.features);

    if (formData.image) {
      dataToSend.append("image", formData.image);
    }

    if (editId) {
      await axios.put(`${API}/${editId}`, dataToSend);
    } else {
      await axios.post(API, dataToSend);
    }

    fetchData();
    setShowForm(false);
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({
      icon: item.icon || "",
      title: item.title || "",
      text: item.text || "",
      modalTitle: item.modalContent?.title || "",
      modalDescription: item.modalContent?.description || "",
      features: item.modalContent?.features?.join(", ") || "",
      image: null
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
                <th>Icon</th>
                <th>Title</th>
                <th>Text</th>
                <th>Modal Title</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`http://localhost:8000/uploads/${item.image}`}
                      width="60"
                      alt=""
                    />
                  </td>

                  <td>{item.icon}</td>

                  <td>{item.title}</td>

                  <td>{item.text}</td>

                  <td>{item.modalContent?.title}</td>

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

          <label>Icon (Example: FaBook)</label>
          <input
            type="text"
            name="icon"
            className="form-control mb-2"
            value={formData.icon}
            onChange={handleChange}
            required
          />

          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Text</label>
          <textarea
            name="text"
            className="form-control mb-2"
            value={formData.text}
            onChange={handleChange}
            required
          />

          <label>Modal Title</label>
          <input
            type="text"
            name="modalTitle"
            className="form-control mb-2"
            value={formData.modalTitle}
            onChange={handleChange}
            required
          />

          <label>Modal Description</label>
          <textarea
            name="modalDescription"
            className="form-control mb-2"
            value={formData.modalDescription}
            onChange={handleChange}
            required
          />

          <label>Features (comma separated)</label>
          <textarea
            name="features"
            className="form-control mb-2"
            value={formData.features}
            onChange={handleChange}
            placeholder="feature1, feature2, feature3"
          />

          <label>Image</label>
          <input
            type="file"
            name="image"
            className="form-control mb-3"
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

export default HomeWhatWeOffer;