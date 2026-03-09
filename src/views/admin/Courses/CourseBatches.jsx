import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api";

const EMPTY_FORM = {
  course: "",
  startDate: "",
  endDate: "",
  capacity: "",
  priceShared: "",
  priceSharedOld: "",
  pricePrivate: "",
  pricePrivateOld: "",
  status: "",
};

const formatDateInput = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

const formatDateDisplay = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString();
};

function CourseBatches() {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
    fetchBatches();
  }, []);

  const fetchCourses = async () => {
    const res = await axios.get(`${API_BASE}/courses`);
    setCourses(res.data?.data || []);
  };

  const fetchBatches = async () => {
    const res = await axios.get(`${API_BASE}/course-batches`);
    setBatches(res.data?.data || []);
  };

  const courseMap = useMemo(() => {
    return new Map(courses.map((course) => [course._id, course]));
  }, [courses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.course) {
      setError("Please select a course.");
      return;
    }

    const payload = {
      course: formData.course,
      startDate: formData.startDate,
      endDate: formData.endDate,
      capacity: formData.capacity,
      priceShared: formData.priceShared,
      priceSharedOld: formData.priceSharedOld,
      pricePrivate: formData.pricePrivate,
      pricePrivateOld: formData.pricePrivateOld,
      status: formData.status,
    };

    if (editId) {
      await axios.put(`${API_BASE}/course-batches/${editId}`, payload);
    } else {
      await axios.post(`${API_BASE}/course-batches`, payload);
    }

    await fetchBatches();
    resetForm();
  };

  const handleEdit = (item) => {
    const courseId = typeof item.course === "object" ? item.course._id : item.course;
    setFormData({
      course: courseId || "",
      startDate: formatDateInput(item.startDate),
      endDate: formatDateInput(item.endDate),
      capacity: item.capacity ?? "",
      priceShared: item.priceShared || "",
      priceSharedOld: item.priceSharedOld || "",
      pricePrivate: item.pricePrivate || "",
      pricePrivateOld: item.pricePrivateOld || "",
      status: item.status || "",
    });
    setEditId(item._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this batch?")) return;
    await axios.delete(`${API_BASE}/course-batches/${id}`);
    fetchBatches();
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setEditId(null);
    setShowForm(false);
  };

  return (
    <div className="container pt-5 mt-5">
      <h3 className="mb-4">Course Batches</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showForm ? (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(true)}
          >
            + Create Batch
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Course</th>
                <th>Date Range</th>
                <th>Capacity</th>
                <th>Shared Price</th>
                <th>Private Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {batches.map((item, index) => {
                const courseId = typeof item.course === "object" ? item.course._id : item.course;
                const courseTitle =
                  (typeof item.course === "object" && item.course.title) ||
                  courseMap.get(courseId)?.title ||
                  "Unknown Course";

                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{courseTitle}</td>
                    <td>
                      {formatDateDisplay(item.startDate)} - {formatDateDisplay(item.endDate)}
                    </td>
                    <td>{item.capacity}</td>
                    <td>{item.priceShared}</td>
                    <td>{item.pricePrivate}</td>
                    <td>{item.status || "Auto"}</td>
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
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="d-flex justify-content-between mb-3">
            <h5>{editId ? "Edit Batch" : "Create Batch"}</h5>
            <button type="button" className="btn-close" onClick={resetForm} />
          </div>

          <label className="form-label fw-semibold">Course</label>
          <select
            name="course"
            className="form-select mb-3"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="form-control"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">End Date</label>
              <input
                type="date"
                name="endDate"
                className="form-control"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Capacity</label>
              <input
                type="number"
                name="capacity"
                className="form-control"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Status Override</label>
              <input
                type="text"
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
                placeholder="Waiting List / Fully Booked"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shared Price</label>
              <input
                type="text"
                name="priceShared"
                className="form-control"
                value={formData.priceShared}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shared Old Price</label>
              <input
                type="text"
                name="priceSharedOld"
                className="form-control"
                value={formData.priceSharedOld}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Private Price</label>
              <input
                type="text"
                name="pricePrivate"
                className="form-control"
                value={formData.pricePrivate}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Private Old Price</label>
              <input
                type="text"
                name="pricePrivateOld"
                className="form-control"
                value={formData.pricePrivateOld}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-success">
              {editId ? "Update" : "Save"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CourseBatches;
