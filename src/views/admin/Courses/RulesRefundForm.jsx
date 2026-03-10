import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/rules-refund";

function RulesRefundForm() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({

    mainHeading: "",

    preTitle: "",
    preDesc1: "",
    preDesc2: "",

    rulesTitle: "",
    rulesDesc1: "",
    rulesDesc2: "",

    refundTitle: "",
    refundDesc1: "",
    refundDesc2: ""

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

        preTitle: "",
        preDesc1: "",
        preDesc2: "",

        rulesTitle: "",
        rulesDesc1: "",
        rulesDesc2: "",

        refundTitle: "",
        refundDesc1: "",
        refundDesc2: ""

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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>
                  <td>{item.mainHeading}</td>

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

          <label>Main Heading</label>
          <input
            type="text"
            name="mainHeading"
            className="form-control mb-3"
            value={formData.mainHeading}
            onChange={handleChange}
          />

          <h5>Prerequisites</h5>

          <input
            type="text"
            name="preTitle"
            placeholder="Title"
            className="form-control mb-2"
            value={formData.preTitle}
            onChange={handleChange}
          />

          <textarea
            name="preDesc1"
            placeholder="Description 1"
            className="form-control mb-2"
            value={formData.preDesc1}
            onChange={handleChange}
          />

          <textarea
            name="preDesc2"
            placeholder="Description 2"
            className="form-control mb-3"
            value={formData.preDesc2}
            onChange={handleChange}
          />

          <h5>Rules For Students</h5>

          <input
            type="text"
            name="rulesTitle"
            className="form-control mb-2"
            value={formData.rulesTitle}
            onChange={handleChange}
          />

          <textarea
            name="rulesDesc1"
            className="form-control mb-2"
            value={formData.rulesDesc1}
            onChange={handleChange}
          />

          <textarea
            name="rulesDesc2"
            className="form-control mb-3"
            value={formData.rulesDesc2}
            onChange={handleChange}
          />

          <h5>Refund Policy</h5>

          <input
            type="text"
            name="refundTitle"
            className="form-control mb-2"
            value={formData.refundTitle}
            onChange={handleChange}
          />

          <textarea
            name="refundDesc1"
            className="form-control mb-2"
            value={formData.refundDesc1}
            onChange={handleChange}
          />

          <textarea
            name="refundDesc2"
            className="form-control mb-3"
            value={formData.refundDesc2}
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

export default RulesRefundForm;