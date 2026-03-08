import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/student-review";

function HomeStudentReview() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    studentName: "",
    reviewText: "",
    videoLink: "",
    img: null
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Reviews
  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    if (e.target.name === "img") {

      const file = e.target.files[0];

      setFormData({ ...formData, img: file });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }

    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const dataToSend = new FormData();

      dataToSend.append("studentName", formData.studentName);
      dataToSend.append("reviewText", formData.reviewText);
      dataToSend.append("videoLink", formData.videoLink);

      if (formData.img) {
        dataToSend.append("img", formData.img);
      }

      if (editId) {
        await axios.put(`${API}/${editId}`, dataToSend);
      } else {
        await axios.post(API, dataToSend);
      }

      fetchData();

      // Reset Form
      setFormData({
        studentName: "",
        reviewText: "",
        videoLink: "",
        img: null
      });

      setPreview(null);
      setEditId(null);
      setShowForm(false);

    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  // Delete Review
  const handleDelete = async (id) => {
    try {

      if (window.confirm("Are you sure you want to delete this review?")) {
        await axios.delete(`${API}/${id}`);
        fetchData();
      }

    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // Edit Review
  const handleEdit = (item) => {

    setFormData({
      studentName: item.studentName,
      reviewText: item.reviewText,
      videoLink: item.videoLink,
      img: null
    });

    setPreview(`http://localhost:8000/uploads/${item.img}`);

    setEditId(item._id);
    setShowForm(true);
  };

  return (
    <div className="container mt-5 pt-5">

      {/* ADD BUTTON */}
      {!showForm && (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Add Review
          </button>

          {/* TABLE */}
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Student</th>
                <th>Review</th>
                <th>Video</th>
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
                      width="70"
                      alt=""
                    />
                  </td>

                  <td>{item.studentName}</td>

                  <td style={{ maxWidth: "250px" }}>
                    {item.reviewText}
                  </td>

                  <td>
                    <a
                      href={item.videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-info"
                    >
                      View Video
                    </a>
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

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 shadow">

          <h4 className="mb-3">
            {editId ? "Update Review" : "Add Student Review"}
          </h4>

          <label>Student Name*</label>
          <input
            type="text"
            name="studentName"
            className="form-control mb-3"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          <label>Review Text*</label>
          <textarea
            name="reviewText"
            className="form-control mb-3"
            value={formData.reviewText}
            onChange={handleChange}
            required
          />

          <label>Video Link*</label>
          <input
            type="text"
            name="videoLink"
            className="form-control mb-3"
            value={formData.videoLink}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
            required
          />

          <label>Thumbnail Image</label>
          <input
            type="file"
            name="img"
            className="form-control mb-3"
            onChange={handleChange}
          />

          {/* IMAGE PREVIEW */}
          {preview && (
            <div className="mb-3">
              <img
                src={preview}
                alt="preview"
                width="120"
                className="border"
              />
            </div>
          )}

          <div>

            <button
              type="submit"
              className="btn btn-success me-2"
            >
              {editId ? "Update Review" : "Save Review"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowForm(false);
                setEditId(null);
                setPreview(null);
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

export default HomeStudentReview;