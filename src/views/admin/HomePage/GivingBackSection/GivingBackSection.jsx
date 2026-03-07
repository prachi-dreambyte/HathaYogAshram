import React, { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:8000/api";

function HomeGivingBack() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    image: null,
    mainHeading: "",
    subHeading:"",
    Paragraph: "",
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

for (let i = 0; i < formData.image.length; i++) {
  sendData.append("images", formData.image[i]);
}

sendData.append("mainHeading", formData.mainHeading);
sendData.append("subHeading", formData.subHeading);
sendData.append("Paragraph", formData.Paragraph);
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
      mainHeading: "",
    subHeading:"",
    Paragraph: "",
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
       mainHeading: item.mainHeading,
       subHeading: item.subHeading,
       Paragraph: item.Paragraph,
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
                <th>mainHeading</th>
                <th>subHeading</th>
                <th>Paragraph</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
  {item.image.map((img, i) => (
    <img
      key={i}
      src={`http://localhost:8000/${img}`}
      alt='image1'
      width="60"
      style={{ marginRight: "5px" }}
    />
  ))}
</td>
                  <td>{item.mainHeading}</td>
                  <td>{item.subHeading}</td>
                  <td>{item.Paragraph}</td>

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
            <input type="file" name="image" className="form-control" multiple onChange={(e) =>
              setFormData({ ...formData, image: e.target.files })
               }
            />
          </div>

          <div className="mb-3">
            <label>mainHeading</label>
            <input
              type="text"
              name="mainHeading"
              className="form-control"
              value={formData.mainHeading}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>subHeading</label>
            <input
              type="text"
              name="subHeading"
              className="form-control"
              value={formData.subHeading}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Paragraph</label>
            <textarea
              name="Paragraph"
              className="form-control"
              value={formData.Paragraph}
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

export default HomeGivingBack;