import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/accommodation";

function AccommodationForm() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    sectionTitle: "",
    description: "",

    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",

    building1Title: "",
    building1Images: [],

    building2Title: "",
    building2Images: [],

    note: "",

    foodTitle: "",
    foodDescription: "",

    foodFeature1: "",
    foodFeature2: "",
    foodFeature3: "",
    foodFeature4: "",
     foodImages: [],
  });

  const [preview1, setPreview1] = useState([]);
  const [preview2, setPreview2] = useState([]);
  const [previewFood, setPreviewFood] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Data
  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Input
  const handleChange = (e) => {

    if (e.target.name === "building1Images") {

      const files = Array.from(e.target.files);

      setFormData({ ...formData, building1Images: files });

      const previewImages = files.map(file =>
        URL.createObjectURL(file)
      );

      setPreview1(previewImages);

    }

    else if (e.target.name === "building2Images") {

      const files = Array.from(e.target.files);

      setFormData({ ...formData, building2Images: files });

      const previewImages = files.map(file =>
        URL.createObjectURL(file)
      );

      setPreview2(previewImages);

    }
    else if (e.target.name === "foodImages") {

  const files = Array.from(e.target.files);

  setFormData({ ...formData, foodImages: files });

  const previewImages = files.map(file =>
    URL.createObjectURL(file)
  );

  setPreviewFood(previewImages);
}

    else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    }

  };

  // Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const dataToSend = new FormData();

      Object.keys(formData).forEach((key) => {

        if (key === "building1Images") {

          formData.building1Images.forEach((file) => {
            dataToSend.append("building1Images", file);
          });

        }

        else if (key === "building2Images") {

          formData.building2Images.forEach((file) => {
            dataToSend.append("building2Images", file);
          });

        }
        else if (key === "foodImages") {

  formData.foodImages.forEach((file) => {
    dataToSend.append("foodImages", file);
  });

}

        else {

          dataToSend.append(key, formData[key]);

        }

      });

      if (editId) {

        await axios.put(`${API}/${editId}`, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });

      } else {

        await axios.post(API, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });

      }

      fetchData();

      setFormData({
        sectionTitle: "",
        description: "",
        feature1: "",
        feature2: "",
        feature3: "",
        feature4: "",
        feature5: "",
        building1Title: "",
        building1Images: [],
        building2Title: "",
        building2Images: [],
        note: "",
        foodTitle: "",
        foodDescription: "",
        foodFeature1: "",
        foodFeature2: "",
        foodFeature3: "",
        foodFeature4: "",
         foodImages: [],
      });

      setPreview1([]);
      setPreview2([]);
      setEditId(null);
      setPreviewFood([]);
      setShowForm(false);

    } catch (error) {

      console.log("Submit Error:", error);

    }

  };

  // Delete
  const handleDelete = async (id) => {

    if (window.confirm("Delete this record?")) {

      await axios.delete(`${API}/${id}`);
      fetchData();

    }

  };

  // Edit
  const handleEdit = (item) => {

    setFormData({
      sectionTitle: item.sectionTitle,
      description: item.description,

      feature1: item.feature1,
      feature2: item.feature2,
      feature3: item.feature3,
      feature4: item.feature4,
      feature5: item.feature5,

      building1Title: item.building1Title,
      building1Images: [],

      building2Title: item.building2Title,
      building2Images: [],

      note: item.note,

      foodTitle: item.foodTitle,
      foodDescription: item.foodDescription,

      foodFeature1: item.foodFeature1,
      foodFeature2: item.foodFeature2,
      foodFeature3: item.foodFeature3,
      foodFeature4: item.foodFeature4,
       foodImages: []
    });

    setPreview1(
      item.building1Images?.map(img =>
        `http://localhost:8000/uploads/${img}`
      )
    );

    setPreview2(
      item.building2Images?.map(img =>
        `http://localhost:8000/uploads/${img}`
      )
    );
     setPreviewFood(
      item.foodImages?.map(img =>
        `http://localhost:8000/uploads/${img}`
      )
    );

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
            + Add Accommodation
          </button>

          <div className="table-responsive">

          <table className="table table-bordered table-striped">

            <thead className="table-dark">

              <tr>
                <th>S.No</th>
                <th>Section Title</th>
                <th>Description</th>
                <th>Feature1</th>
                <th>Feature2</th>
                <th>Feature3</th>
                <th>Feature4</th>
                <th>Feature5</th>
                <th>Building1</th>
                <th>Building1 Images</th>
                <th>Building2</th>
                <th>Building2 Images</th>
                <th>Note</th>
                <th>Food Title</th>
                <th>Food Description</th>
                <th>Food Feature1</th>
                <th>Food Feature2</th>
                <th>Food Feature3</th>
                <th>Food Feature4</th>
                 <th>foodImages</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {data.map((item, index) => (

                <tr key={item._id}>

                  <td>{index + 1}</td>

                  <td>{item.sectionTitle}</td>
                  <td>{item.description}</td>

                  <td>{item.feature1}</td>
                  <td>{item.feature2}</td>
                  <td>{item.feature3}</td>
                  <td>{item.feature4}</td>
                  <td>{item.feature5}</td>

                  <td>{item.building1Title}</td>

                  <td>
                    {item.building1Images?.map((img, i) => (
                      <img
                        key={i}
                        src={`http://localhost:8000/uploads/${img}`}
                        width="40"
                        className="me-1"
                        alt=""
                      />
                    ))}
                  </td>

                  <td>{item.building2Title}</td>

                  <td>
                    {item.building2Images?.map((img, i) => (
                      <img
                        key={i}
                        src={`http://localhost:8000/uploads/${img}`}
                        width="40"
                        className="me-1"
                        alt=""
                      />
                    ))}
                  </td>

                  <td>{item.note}</td>

                  <td>{item.foodTitle}</td>
                  <td>{item.foodDescription}</td>

                  <td>{item.foodFeature1}</td>
                  <td>{item.foodFeature2}</td>
                  <td>{item.foodFeature3}</td>
                  <td>{item.foodFeature4}</td>
                  <td>
  {item.foodImages?.map((img, i) => (
    <img
      key={i}
      src={`http://localhost:8000/uploads/${img}`}
      width="40"
      className="me-1"
      alt=""
    />
  ))}
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
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          </div>

        </>
      )}

      {showForm && (

        <form
          onSubmit={handleSubmit}
          className="card p-4 shadow"
          encType="multipart/form-data"
        >

          <h4 className="mb-3">
            {editId ? "Update Accommodation" : "Add Accommodation"}
          </h4>

          <input
            type="text"
            name="sectionTitle"
            placeholder="Section Title"
            className="form-control mb-3"
            value={formData.sectionTitle}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="form-control mb-3"
            value={formData.description}
            onChange={handleChange}
          />

          <input type="text" name="feature1" placeholder="Feature 1" className="form-control mb-3" value={formData.feature1} onChange={handleChange}/>
          <input type="text" name="feature2" placeholder="Feature 2" className="form-control mb-3" value={formData.feature2} onChange={handleChange}/>
          <input type="text" name="feature3" placeholder="Feature 3" className="form-control mb-3" value={formData.feature3} onChange={handleChange}/>
          <input type="text" name="feature4" placeholder="Feature 4" className="form-control mb-3" value={formData.feature4} onChange={handleChange}/>
          <input type="text" name="feature5" placeholder="Feature 5" className="form-control mb-3" value={formData.feature5} onChange={handleChange}/>

          <input type="text" name="building1Title" placeholder="Building 1 Title" className="form-control mb-3" value={formData.building1Title} onChange={handleChange}/>

          <label>Building 1 Images (4)</label>
          <input type="file" name="building1Images" multiple className="form-control mb-3" onChange={handleChange}/>

          {preview1.map((img,i)=>(
            <img key={i} src={img} width="100" className="me-2 mb-2" alt="" />
          ))}

          <input type="text" name="building2Title" placeholder="Building 2 Title" className="form-control mb-3" value={formData.building2Title} onChange={handleChange}/>

          <label>Building 2 Images (2)</label>
          <input type="file" name="building2Images" multiple className="form-control mb-3" onChange={handleChange}/>

          {preview2.map((img,i)=>(
            <img key={i} src={img} width="100" className="me-2 mb-2" alt="" />
          ))}

          <input type="text" name="note" placeholder="Note" className="form-control mb-3" value={formData.note} onChange={handleChange}/>

          <input type="text" name="foodTitle" placeholder="Food Title" className="form-control mb-3" value={formData.foodTitle} onChange={handleChange}/>

          <textarea name="foodDescription" placeholder="Food Description" className="form-control mb-3" value={formData.foodDescription} onChange={handleChange}/>

          <input type="text" name="foodFeature1" placeholder="Food Feature 1" className="form-control mb-3" value={formData.foodFeature1} onChange={handleChange}/>
          <input type="text" name="foodFeature2" placeholder="Food Feature 2" className="form-control mb-3" value={formData.foodFeature2} onChange={handleChange}/>
          <input type="text" name="foodFeature3" placeholder="Food Feature 3" className="form-control mb-3" value={formData.foodFeature3} onChange={handleChange}/>
          <input type="text" name="foodFeature4" placeholder="Food Feature 4" className="form-control mb-3" value={formData.foodFeature4} onChange={handleChange}/>
           <label>Food Images</label>
           <input type="file" name="foodImages" multiple  className="form-control mb-3"  onChange={handleChange}/>

{previewFood.map((img, i) => (
  <img
    key={i}
    src={img}
    width="100"
    className="me-2 mb-2"
    alt=""
  />
))}

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

export default AccommodationForm;