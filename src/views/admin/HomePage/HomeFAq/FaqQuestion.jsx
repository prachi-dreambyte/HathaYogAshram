import React, { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:8000/api/faqs";

function FaqQuestion() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        mainHeading: "",
        subHeading: ""
    });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    try {
        const res = await axios.get(API);
        setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
        console.error(error);
        setData([]);
    }
};

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (editId) {
            await axios.put(`${API}/${editId}`, formData);
        } else {
            await axios.post(API, formData);
        }

        setFormData({ mainHeading: "", subHeading: "" });
        setEditId(null);
        setShowForm(false);
        fetchData();

    } catch (error) {
        console.error("FULL ERROR:", error.response || error.message);
    }
};

    const handleEdit = (item) => {
        setFormData({
            mainHeading: item.mainHeading,
            subHeading: item.subHeading
        });
        setEditId(item._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API}/${id}`);
        fetchData();
    };

    return (
        <div className="container mt-5">
            <h2>Teacher Heading Admin</h2>

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
                                <th>Main Heading</th>
                                <th>Sub Heading</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                             {data.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>   
                                    <td>{item.mainHeading}</td>
                                    <td>{item.subHeading}</td>
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
                <form onSubmit={handleSubmit} className="card p-4">
                    <div className="mb-3">
                        <label>Main Heading</label>
                        <input
                            type="text"
                            name="mainHeading"
                            className="form-control"
                            value={formData.mainHeading}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Sub Heading</label>
                        <input
                            type="text"
                            name="subHeading"
                            className="form-control"
                            value={formData.subHeading}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-success">
                        {editId ? "Update" : "Save"}
                    </button>
                    <button 
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                            setShowForm(false);
                            setEditId(null);
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

export default FaqQuestion;