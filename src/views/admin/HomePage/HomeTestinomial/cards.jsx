import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/testimonials";

function AdminTestimonialForm() {

  const [formData, setFormData] = useState({
    name: "",
    place: "",
    review: "",
    stars: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("place", formData.place);
    data.append("review", formData.review);
    data.append("stars", formData.stars);
    data.append("image", image);

    try {

      const res = await axios.post(API, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(res.data);

      alert("Testimonial Added Successfully");

      setFormData({
        name: "",
        place: "",
        review: "",
        stars: ""
      });

      setImage(null);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h3>Add Testimonial</h3>

      <form onSubmit={handleSubmit} className="card p-4">

        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImage}
            required
          />
        </div>

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

        <div className="mb-3">
          <label>Place</label>
          <input
            type="text"
            name="place"
            className="form-control"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Review</label>
          <textarea
            name="review"
            className="form-control"
            value={formData.review}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Stars (1-5)</label>
          <select
            name="stars"
            className="form-control"
            value={formData.stars}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>
        </div>

        <button className="btn btn-primary">
          Save Testimonial
        </button>

      </form>

    </div>
  );
}

export default AdminTestimonialForm;