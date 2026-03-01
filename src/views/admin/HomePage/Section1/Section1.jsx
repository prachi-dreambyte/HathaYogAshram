import React from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Section1 = ({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isEditMode,
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      setFormData((prev) => ({
        ...prev,
        [name]: file,
        [`${name}Preview`]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="card p-4 mb-5 shadow">

      <h4>{isEditMode ? "Edit" : "Create"} Section1</h4>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Main Heading</label>
          <input
            type="text"
            className="form-control"
            name="mainHeading"
            value={formData.mainHeading || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Sub Heading</label>
          <input
            type="text"
            className="form-control"
            name="subHeading"
            value={formData.subHeading || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Heading 1</label>
          <input
            type="text"
            className="form-control"
            name="heading1"
            value={formData.heading1 || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Paragraph</label>

          {/* <CKEditor
            editor={ClassicEditor}
            data={formData.paragraph || ""}
            onChange={(e, editor) => {
              setFormData((prev) => ({
                ...prev,
                paragraph: editor.getData(),
              }));
            }}
          /> */}
        </div>

        {[1,2,3,4].map((num) => {
          const field = `img${num}`;
          const preview = formData[`${field}Preview`];

          return (
            <div className="col-md-3 mb-3" key={num}>
              <label>Image {num}</label>

              <input
                type="file"
                className="form-control"
                name={field}
                onChange={handleImageChange}
              />

              {preview && (
                <img
                  src={preview}
                  alt=""
                  className="img-fluid mt-2"
                  style={{ height: 100, objectFit: "cover" }}
                />
              )}
            </div>
          );
        })}

      </div>

      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={onSubmit}>
          {isEditMode ? "Update" : "Create"}
        </button>

        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>

    </div>
  );
};

export default Section1;