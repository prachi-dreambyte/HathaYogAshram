import React, { useState, useEffect } from "react";
import axios from "axios";
import Section1 from "./Section1";

const API = "http://localhost:8000/api/section1";

const AdminPanel = () => {

  const initialFormState = {
    mainHeading: "",
    subHeading: "",
    heading1: "",
    paragraph: "",

    img1: null,
    img2: null,
    img3: null,
    img4: null,

    img1Preview: null,
    img2Preview: null,
    img3Preview: null,
    img4Preview: null,

    img1Existing: null,
    img2Existing: null,
    img3Existing: null,
    img4Existing: null,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [aboutList, setAboutList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // ✅ FETCH DATA
  const fetchSection1 = async () => {
    try {
      const res = await axios.get(API);
      console.log(res);
      setAboutList(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchSection1();
  }, []);

  // ✅ CREATE MODE
  const handleOpenCreate = () => {
    setFormData(initialFormState);
    setEditId(null);
    setIsFormOpen(true);
  };

  // ✅ EDIT MODE
  const handleEdit = (item) => {
    if (!item) return;

    setFormData({
      ...initialFormState,

      mainHeading: item.mainHeading || "",
      subHeading: item.subHeading || "",
      heading1: item.heading1 || "",
      paragraph: item.paragraph || "",

      img1Existing: item.img1 || null,
      img2Existing: item.img2 || null,
      img3Existing: item.img3 || null,
      img4Existing: item.img4 || null,

      img1Preview: item.img1
        ? `http://localhost:8000/uploads/${item.img1}`
        : null,

      img2Preview: item.img2
        ? `http://localhost:8000/uploads/${item.img2}`
        : null,

      img3Preview: item.img3
        ? `http://localhost:8000/uploads/${item.img3}`
        : null,

      img4Preview: item.img4
        ? `http://localhost:8000/uploads/${item.img4}`
        : null,
    });

    setEditId(item._id);
    setIsFormOpen(true);
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    try {
      const form = new FormData();

      form.append("mainHeading", formData.mainHeading);
      form.append("subHeading", formData.subHeading);
      form.append("heading1", formData.heading1);
      form.append("paragraph", formData.paragraph);

      ["img1", "img2", "img3", "img4"].forEach((field) => {
        if (formData[field] instanceof File) {
          form.append(field, formData[field]);
        }

        if (formData[`${field}Existing`]) {
          form.append(
            `${field}Existing`,
            formData[`${field}Existing`]
          );
        }
      });

      if (editId) {
        await axios.put(`${API}/${editId}`, form);
      } else {
        await axios.post(API, form);
      }

      fetchSection1();
      setFormData(initialFormState);
      setEditId(null);
      setIsFormOpen(false);

    } catch (error) {
      console.error("Save Error:", error);
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchSection1();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="container mt-5 pt-5"mon>

      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-primary" onClick={handleOpenCreate}>
          + Create Section1
        </button>
      </div>

      {isFormOpen && (
        <Section1
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancel={() => setIsFormOpen(false)}
          isEditMode={!!editId}
        />
      )}

      <div className="card p-4 shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Main</th>
              <th>Sub</th>
              <th>Heading</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {aboutList.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No Data Found
                </td>
              </tr>
            ) : (
              aboutList.map((item) => (
                <tr key={item._id}>
                  <td>{item.mainHeading}</td>
                  <td>{item.subHeading}</td>
                  <td>{item.heading1}</td>

                  <td>
                    <div className="d-flex gap-2">
                      {[1,2,3,4].map((num) =>
                        item[`img${num}`] ? (
                          <img
                            key={num}
                            src={`http://localhost:8000/uploads/${item[`img${num}`]}`}
                            alt=""
                            style={{
                              width: 50,
                              height: 50,
                              objectFit: "cover",
                            }}
                          />
                        ) : null
                      )}
                    </div>
                  </td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
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
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminPanel;