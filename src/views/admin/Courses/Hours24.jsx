import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/hours24";

function Hours24Form() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({

    mainHeading: "",
    subHeading: "",

    week1Icon: "",
    week1Title: "",
    week1Description: "",

    week2Icon: "",
    week2Title: "",
    week2Description: "",

    week3Icon: "",
    week3Title: "",
    week3Description: "",

    week4Icon: "",
    week4Title: "",
    week4Description: "",

    whyHeading: "",

    card1Icon: "",
    card1Title: "",
    card1Description: "",

    card2Icon: "",
    card2Title: "",
    card2Description: "",

    card3Icon: "",
    card3Title: "",
    card3Description: "",

    card4Icon: "",
    card4Title: "",
    card4Description: ""

  });

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

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {
        await axios.put(`${API}/${editId}`, formData);
      } else {
        await axios.post(API, formData);
      }

      fetchData();

      setFormData({

        mainHeading: "",
        subHeading: "",

        week1Icon: "",
        week1Title: "",
        week1Description: "",

        week2Icon: "",
        week2Title: "",
        week2Description: "",

        week3Icon: "",
        week3Title: "",
        week3Description: "",

        week4Icon: "",
        week4Title: "",
        week4Description: "",

        whyHeading: "",

        card1Icon: "",
        card1Title: "",
        card1Description: "",

        card2Icon: "",
        card2Title: "",
        card2Description: "",

        card3Icon: "",
        card3Title: "",
        card3Description: "",

        card4Icon: "",
        card4Title: "",
        card4Description: ""

      });

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

    setFormData(item);
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
            + Add Data
          </button>

          <table className="table table-bordered">

            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Main Heading</th>
                <th>Why Heading</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>
                  <td>{item.mainHeading}</td>
                  <td>{item.whyHeading}</td>

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

        <form onSubmit={handleSubmit} className="card p-4 shadow">

          <h4 className="mb-3">
            {editId ? "Update Data" : "Add Data"}
          </h4>

          <h5>24-Day Journey Section</h5>

          <label>Main Heading</label>
          <input
            type="text"
            name="mainHeading"
            className="form-control mb-3"
            value={formData.mainHeading}
            onChange={handleChange}
          />

          <label>Sub Heading</label>
          <input
            type="text"
            name="subHeading"
            className="form-control mb-3"
            value={formData.subHeading}
            onChange={handleChange}
          />

          <h6>Week 1</h6>

          <input
            type="text"
            name="week1Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.week1Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="week1Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.week1Title}
            onChange={handleChange}
          />

          <textarea
            name="week1Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.week1Description}
            onChange={handleChange}
          />

          <h6>Week 2</h6>

          <input
            type="text"
            name="week2Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.week2Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="week2Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.week2Title}
            onChange={handleChange}
          />

          <textarea
            name="week2Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.week2Description}
            onChange={handleChange}
          />

          <h6>Week 3</h6>

          <input
            type="text"
            name="week3Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.week3Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="week3Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.week3Title}
            onChange={handleChange}
          />

          <textarea
            name="week3Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.week3Description}
            onChange={handleChange}
          />

          <h6>Week 4</h6>

          <input
            type="text"
            name="week4Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.week4Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="week4Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.week4Title}
            onChange={handleChange}
          />

          <textarea
            name="week4Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.week4Description}
            onChange={handleChange}
          />

          <hr/>

          <h5>Why Choose Our Training</h5>

          <label>Heading</label>
          <input
            type="text"
            name="whyHeading"
            className="form-control mb-3"
            value={formData.whyHeading}
            onChange={handleChange}
          />

          <h6>Card 1</h6>

          <input
            type="text"
            name="card1Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.card1Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="card1Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.card1Title}
            onChange={handleChange}
          />

          <textarea
            name="card1Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.card1Description}
            onChange={handleChange}
          />

          <h6>Card 2</h6>

          <input
            type="text"
            name="card2Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.card2Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="card2Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.card2Title}
            onChange={handleChange}
          />

          <textarea
            name="card2Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.card2Description}
            onChange={handleChange}
          />

          <h6>Card 3</h6>

          <input
            type="text"
            name="card3Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.card3Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="card3Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.card3Title}
            onChange={handleChange}
          />

          <textarea
            name="card3Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.card3Description}
            onChange={handleChange}
          />

          <h6>Card 4</h6>

          <input
            type="text"
            name="card4Icon"
            className="form-control mb-2"
            placeholder="Icon"
            value={formData.card4Icon}
            onChange={handleChange}
          />

          <input
            type="text"
            name="card4Title"
            className="form-control mb-2"
            placeholder="Title"
            value={formData.card4Title}
            onChange={handleChange}
          />

          <textarea
            name="card4Description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.card4Description}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-success me-2">
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

export default Hours24Form;