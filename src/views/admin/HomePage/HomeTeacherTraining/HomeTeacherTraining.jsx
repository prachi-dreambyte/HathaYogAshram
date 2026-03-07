import React, { useEffect, useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const API = "http://localhost:8000/api/teacher-training";

function TeacherTraining() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    mainHeading: "",
    subHeading: "",
    paragraph: "",
    video: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(API);
    setData(res.data.data);
  };

  // ================= INPUT =================
  const handleChange = (e) => {
    if (e.target.name === "video") {
      setFormData({
        ...formData,
        video: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // ================= SUBMIT =================
 const handleSubmit = async (e) => {
  e.preventDefault();

  const sendData = new FormData();

  sendData.append("mainHeading", formData.mainHeading ||"");
  sendData.append("subHeading", formData.subHeading ||"");
  sendData.append("paragraph", formData.paragraph || "");

  if (formData.video) {
    sendData.append("video", formData.video ||"");
  }

  try {

    if (editId) {
      await axios.put(`${API}/${editId}`, sendData);
    } else {
     await axios.post(API, sendData);
    }

    setShowForm(false);
    setEditId(null);
    fetchData();

  } catch (error) {
    console.error(
      "SAVE ERROR:",
      error.response?.data || error.message
    );
  }
};

  // ================= EDIT =================
  const handleEdit = (item) => {
    setEditId(item._id);
    setShowForm(true);

    setFormData({
      mainHeading: item.mainHeading,
      subHeading: item.subHeading,
      paragraph: item.paragraph,
      video: null,
    });
  };

  // ================= DELETE =================
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
            Create
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>MainHeading</th>
                <th>SubHeading</th>
                <th>Paragraph</th>
                <th>Video</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>   
                  <td>{item.mainHeading}</td>
                  <td>{item.subHeading}</td>
                  {/* <td dangerouslySetInnerHTML={{ __html: item.paragraph }}></td> */}
                 <td dangerouslySetInnerHTML={{ __html: item.paragraph }} ></td>

                  <td>
                    {item.video && (
                      <video width="120" controls>
                        <source
                          src={`http://localhost:8000/uploads/videos/${item.video}`}
                        />
                      </video>
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
                      onClick={() =>
                        handleDelete(item._id)
                      }
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
        <form onSubmit={handleSubmit}>

          <label>Main Heading</label>
          <input
            name="mainHeading"
            className="form-control mb-3"
            value={formData.mainHeading}
            onChange={handleChange}
            required
          />

          <label>Sub Heading</label>
          <input
            name="subHeading"
            className="form-control mb-3"
            value={formData.subHeading}
            onChange={handleChange}
            required
          />

          <label>Paragraph</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.paragraph}
            onChange={(e, editor) =>
              setFormData({
                ...formData,
                paragraph: editor.getData(),
              })
            }
          />
          {/* <CKEditor
  editor={ClassicEditor}
  data={formData.paragraph}
  config={{
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo"
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph"
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3"
        }
      ]
    }
  }}
  onChange={(event, editor) => {
    const data = editor.getData();
    setFormData({
      ...formData,
      paragraph: data
    });
  }}
/> */}

          <label className="mt-3">Video</label>
          <input
            type="file"
            name="video"
            className="form-control"
            onChange={handleChange}
          />

          <button className="btn btn-success mt-3">
            {editId ? "Update" : "Save"}
          </button>

        </form>
      )}
    </div>
  );
}

export default TeacherTraining;