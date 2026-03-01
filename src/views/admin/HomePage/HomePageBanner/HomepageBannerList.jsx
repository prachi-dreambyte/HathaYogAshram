import { useState, useRef, useEffect } from "react";

const API_BASE_URL = "http://localhost:8000";

export default function HomepageBannerList() {

  /* ================= STATES ================= */
  const [banners, setBanners] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // ✅ FIXED FORM STATE
  const [form, setForm] = useState({
    image: null,
  });

  const [previewImg, setPreviewImg] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [deleteHover, setDeleteHover] = useState(null);

  const fileRef = useRef();

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/banners`);
      const data = await res.json();

      if (data.success) {
        setBanners(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const err = {};
    if (!form.image) err.image = "Banner image required";
    return err;
  };

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImg(URL.createObjectURL(file));
      setForm((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    const formData = new FormData();
    formData.append("image", form.image);

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/banners`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        await fetchBanners();

        // ✅ RESET FORM
        setForm({ image: null });
        setPreviewImg(null);
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
      setErrors({ api: "Network Error" });
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete banner?")) return;

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/banners/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setBanners((prev) =>
          prev.filter((b) => b._id !== id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= UI ================= */
  return (
    <div style={{ padding: 40 }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>All Banners</h2>

        <button
          onClick={() => {
            setShowForm(!showForm);
            setErrors({});
            setPreviewImg(null);
          }}
        >
          {showForm ? "Cancel" : "Add Banner"}
        </button>
      </div>

      {/* ================= FORM ================= */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>

          {errors.api && (
            <p style={{ color: "red" }}>{errors.api}</p>
          )}

          <div
            style={{
              border: "2px dashed #ccc",
              padding: 20,
              cursor: "pointer",
              width: 250,
            }}
            onClick={() => fileRef.current.click()}
          >
            {previewImg ? (
              <img
                src={previewImg}
                alt=""
                width="200"
              />
            ) : (
              <p>Click to upload image</p>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />

          {errors.image && (
            <p style={{ color: "red" }}>
              {errors.image}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: 15 }}
          >
            {loading ? "Saving..." : "Save Banner"}
          </button>
        </form>
      )}

      {/* ================= TABLE ================= */}
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: 30, width: "100%" }}
      >
        <thead>
          <tr>
            <th>Banner</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loading && banners.length === 0 ? (
            <tr>
              <td colSpan="2">Loading...</td>
            </tr>
          ) : banners.length === 0 ? (
            <tr>
              <td colSpan="2">No Data</td>
            </tr>
          ) : (
            banners.map((banner) => (
              <tr key={banner._id}>
                <td>
                  <img
                    src={`${API_BASE_URL}${banner.image}`}
                    width="200"
                    alt=""
                  />
                </td>

                <td>
                  <button
                    onMouseEnter={() =>
                      setDeleteHover(banner._id)
                    }
                    onMouseLeave={() =>
                      setDeleteHover(null)
                    }
                    style={{
                      background:
                        deleteHover === banner._id
                          ? "red"
                          : "#bd0005",
                      color: "#fff",
                      padding: "8px 15px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleDelete(banner._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <p>
        Showing {banners.length} banner
        {banners.length !== 1 && "s"}
      </p>
    </div>
  );
}