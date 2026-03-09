import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/gallery-heading";

function GalleryHeadingForm() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    category: "",
    img: []
  });

  const [preview, setPreview] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    if (e.target.name === "img") {

      const files = Array.from(e.target.files);

      setFormData({ ...formData, img: files });

      const previewImages = files.map((file) =>
        URL.createObjectURL(file)
      );

      setPreview(previewImages);

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const dataToSend = new FormData();

      dataToSend.append("category", formData.category);

      formData.img.forEach((file) => {
        dataToSend.append("img", file);
      });

      if (editId) {

        await axios.put(`${API}/${editId}`, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });

      } else {

        await axios.post(API, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });

      }

      fetchData();

      setFormData({
        category: "",
        img: []
      });

      setPreview([]);
      setEditId(null);
      setShowForm(false);

    } catch (error) {
      console.log(error);
    }

  };

  const handleDelete = async (id) => {

    if (window.confirm("Delete this item?")) {

      await axios.delete(`${API}/${id}`);
      fetchData();

    }

  };

  const handleEdit = (item) => {

    setFormData({
      category: item.category,
      img: []
    });

    setPreview(
      item.img.map((image) =>
        `http://localhost:8000/uploads/${image}`
      )
    );

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
            + Add Gallery
          </button>

          <table className="table table-bordered">

            <thead className="table-dark">

              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Category</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={`http://localhost:8000/uploads/${item.img[0]}`}
                      width="70"
                      alt=""
                    />
                  </td>

                  <td>{item.category}</td>

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

        <form
          onSubmit={handleSubmit}
          className="card p-4 shadow"
          encType="multipart/form-data"
        >

          <h4>{editId ? "Update Gallery" : "Add Gallery"}</h4>

          <label>Category*</label>

          <select
            name="category"
            className="form-control mb-3"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Yogashram">Yogashram</option>
            <option value="Classes">Classes</option>
            <option value="Happy Students">Happy Students</option>
            <option value="Food">Food</option>
          </select>

          <label>Upload Images*</label>

          <input
            type="file"
            name="img"
            multiple
            className="form-control mb-3"
            onChange={handleChange}
            required={!editId}
          />

          {preview.map((img, i) => (
            <img
              key={i}
              src={img}
              width="120"
              className="me-2 mb-3"
              alt=""
            />
          ))}

          <button className="btn btn-success me-2">
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

export default GalleryHeadingForm;