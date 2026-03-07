import { useState, useEffect, useRef } from "react";

const API_BASE_URL = "http://localhost:8000";

export default function HomepageBannerList() {

  const [banners, setBanners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const fileRef = useRef();

  /* ================= FETCH BANNERS ================= */

  const fetchBanners = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/banners`);
      const data = await res.json();

      if (data.success) {
        setBanners(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ================= IMAGE CHANGE ================= */

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= VALIDATE ================= */

  const validate = () => {
    let err = {};

    if (!image) {
      err.image = "Banner image required";
    }

    return err;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);

    try {

      const res = await fetch(`${API_BASE_URL}/api/banners`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {

        fetchBanners();

        setImage(null);
        setPreview(null);
        setErrors({});
        setShowForm(false);

        if (fileRef.current) {
          fileRef.current.value = "";
        }

      } else {
        setErrors({ api: data.error });
      }

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {

    if (!window.confirm("Delete banner?")) return;

    try {

      const res = await fetch(`${API_BASE_URL}/api/banners/${id}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (data.success) {
        setBanners((prev) => prev.filter((b) => b._id !== id));
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 80 }}>

      {/* HEADER */}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <h2>Homepage Banners</h2> */}

        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary"
        >
          {showForm ? "Cancel" : "Add Banner"}
        </button>
      </div>

      {/* ================= FORM ================= */}

      {showForm && (
        <div className="card shadow-sm mt-4">
          <div className="card-body">

            <h5 className="mb-4">Add Homepage Banner</h5>

            <form onSubmit={handleSubmit}>

              {errors.api && (
                <p className="text-danger">{errors.api}</p>
              )}

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Banner Image*
                </label>

                <input
                  type="file"
                  className="form-control"
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              {preview && (
                <div className="mb-3">
                  <img
                    src={preview}
                    alt="preview"
                    style={{
                      width: "300px",
                      borderRadius: "6px"
                    }}
                  />
                </div>
              )}

              {errors.image && (
                <p className="text-danger">{errors.image}</p>
              )}

              <div className="d-flex gap-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-success"
                >
                  {loading ? "Saving..." : "Save"}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

      {/* ================= TABLE ================= */}

      <table
        className="table table-bordered mt-4"
      >

        <thead className="table-light">
          <tr>
            <th style={{ width: "80px" }}>S.No</th>
            <th>Banner</th>
            <th style={{ width: "150px" }}>Action</th>
          </tr>
        </thead>

        <tbody>

          {banners.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No banners found
              </td>
            </tr>
          ) : (

            banners.map((banner, index) => (

              <tr key={banner._id}>

                <td>
                  <strong>{index + 1}</strong>
                </td>

                <td>
                  <p className="mb-2">
                    <strong>Banner {index + 1}</strong>
                  </p>

                  <img
                    src={`${API_BASE_URL}${banner.image}`}
                    width="250"
                    alt={`Banner ${index + 1}`}
                    style={{ borderRadius: "6px" }}
                  />
                </td>

                <td>

                  <button
                    onClick={() => handleDelete(banner._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

      <p className="mt-3">
        Showing {banners.length} banner{banners.length !== 1 && "s"}
      </p>

    </div>
  );
}