import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/home-facility-cards";

function HomeFacilityCards() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    image: null,
    heading: "",
    subParagraph: "",
    mainParagraph: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.error(error);
      setData([]);
    }
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

  const sendData = new FormData();
  sendData.append("image", formData.image);
  sendData.append("heading", formData.heading);
  sendData.append("subParagraph", formData.subParagraph);
  sendData.append("mainParagraph", formData.mainParagraph);

  try {
    if (editId) {
      await axios.put(`${API}/${editId}`, sendData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await axios.post(API, sendData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    setFormData({
      image: null,
      heading: "",
      subParagraph: "",
      mainParagraph: ""
    });

    setEditId(null);
    setShowForm(false);
    fetchData();

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
  }
};

  const handleEdit = (item) => {
    setFormData({
      image: null,
      heading: item.heading,
      subParagraph: item.subParagraph,
      mainParagraph: item.mainParagraph
    });

    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
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
                <th>Heading</th>
                <th>Sub Paragraph</th>
                <th>Main Paragraph</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt=""
                      width="80"
                    />
                  </td>

                  <td>{item.heading}</td>
                  <td>{item.subParagraph}</td>
                  <td>{item.mainParagraph}</td>

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
            <label>Image</label>
            <input type="file" name="image" className="form-control" onChange={(e) => 
             setFormData({ ...formData, image: e.target.files[0] })}
            />
          </div>

          <div className="mb-3">
            <label>Heading</label>
            <input
              type="text"
              name="heading"
              className="form-control"
              value={formData.heading}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Sub Paragraph</label>
            <textarea
              name="subParagraph"
              className="form-control"
              value={formData.subParagraph}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Main Paragraph</label>
            <textarea
              name="mainParagraph"
              className="form-control"
              value={formData.mainParagraph}
              onChange={handleChange}
              required
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

export default HomeFacilityCards;