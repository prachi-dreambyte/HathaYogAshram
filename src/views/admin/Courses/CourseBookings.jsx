import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api";
const STATUS_OPTIONS = ["confirmed", "pending", "cancelled"];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  source: "",
  seats: 1,
  status: "confirmed",
};

const formatDateDisplay = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString();
};

function CourseBookings() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [editMeta, setEditMeta] = useState({ course: "", batch: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get(`${API_BASE}/course-bookings`, {
      params: { populate: true },
    });
    setData(res.data?.data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCourseLabel = (item) => {
    if (!item?.course) return "Unknown Course";
    if (typeof item.course === "string") return item.course;
    return item.course.title || item.course.shortTitle || "Unknown Course";
  };

  const getBatchLabel = (item) => {
    if (!item?.batch || typeof item.batch === "string") return "Unknown Batch";
    return `${formatDateDisplay(item.batch.startDate)} - ${formatDateDisplay(item.batch.endDate)}`;
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name || "",
      email: item.email || "",
      phone: item.phone || "",
      address: item.address || "",
      country: item.country || "",
      source: item.source || "",
      seats: item.seats || 1,
      status: item.status || "confirmed",
    });
    setEditMeta({
      course: getCourseLabel(item),
      batch: getBatchLabel(item),
    });
    setEditId(item._id);
    setShowForm(true);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const payload = {
        ...formData,
        seats: Number(formData.seats || 1),
      };
      await axios.put(`${API_BASE}/course-bookings/${editId}`, payload);
      await fetchBookings();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update booking.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    await axios.delete(`${API_BASE}/course-bookings/${id}`);
    fetchBookings();
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
    setEditMeta({ course: "", batch: "" });
  };

  return (
    <div className="container pt-5 mt-5">
      <h3 className="mb-4">Course Bookings</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showForm ? (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{getCourseLabel(item)}</td>
                  <td>{getBatchLabel(item)}</td>
                  <td>{item.seats}</td>
                  <td>{item.status}</td>
                  <td>{formatDateDisplay(item.createdAt)}</td>
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
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="d-flex justify-content-between mb-3">
            <h5>Edit Booking</h5>
            <button type="button" className="btn-close" onClick={resetForm} />
          </div>

          <div className="mb-3">
            <strong>Course:</strong> {editMeta.course}
          </div>
          <div className="mb-3">
            <strong>Batch:</strong> {editMeta.batch}
          </div>

          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control mb-3"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Address</label>
          <input
            type="text"
            name="address"
            className="form-control mb-3"
            value={formData.address}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Country</label>
          <input
            type="text"
            name="country"
            className="form-control mb-3"
            value={formData.country}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Source</label>
          <input
            type="text"
            name="source"
            className="form-control mb-3"
            value={formData.source}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Seats</label>
          <input
            type="number"
            name="seats"
            className="form-control mb-3"
            min="1"
            value={formData.seats}
            onChange={handleChange}
          />

          <label className="form-label fw-semibold">Status</label>
          <select
            name="status"
            className="form-select mb-3"
            value={formData.status}
            onChange={handleChange}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-success">Update</button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CourseBookings;
