import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/homewhychoosecard";

function HomeWhyChooseCard() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    icon: "",
    heading: "",
    paragraph: "",
    image: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  const handleChange = (e) => {

    if (e.target.name === "image") {

      setFormData({
        ...formData,
        image: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const sendData = new FormData();

    sendData.append("icon", formData.icon);
    sendData.append("heading", formData.heading);
    sendData.append("paragraph", formData.paragraph);

    if (formData.image) {
      sendData.append("image", formData.image);
    }

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
        icon: "",
        heading: "",
        paragraph: "",
        image: null,
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
      icon: item.icon,
      heading: item.heading,
      paragraph: item.paragraph,
      image: null,
    });

    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {

    try {

      await axios.delete(`${API}/${id}`);
      fetchData();

    } catch (error) {

      console.log(error);

    }
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
                <th>Icon</th>
                <th>Heading</th>
                <th>Paragraph</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>

                  <td>{item.icon}</td>

                  <td>{item.heading}</td>

                  <td>{item.paragraph}</td>

                  <td>

                    {item.image && (
                      <img
                        src={`http://localhost:8000/${item.image}`}
                        alt="img"
                        width="60"
                      />
                    )}

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
      )}

      {showForm && (

        <form onSubmit={handleSubmit} className="card p-4">

          <div className="mb-3">

            <label>Icon</label>

            <input
              type="text"
              name="icon"
              className="form-control"
              value={formData.icon}
              onChange={handleChange}
              required
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

            <label>Paragraph</label>

            <textarea
              name="paragraph"
              className="form-control"
              value={formData.paragraph}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label>Image</label>

            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleChange}
            />

          </div>

          <div className="mt-3">

            <button type="submit" className="btn btn-success">
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

export default HomeWhyChooseCard;