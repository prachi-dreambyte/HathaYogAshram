import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/our-school";

const ICON_OPTIONS = [
  "School",
  "Heart",
  "Mountain",
  "Sparkles",
  "Target",
  "BookOpen",
  "Star",
  "Zap",
  "Users",
  "Award",
  "Globe",
  "MapPin",
  "Shield",
  "Lightbulb",
];

const EMPTY_SECTION = {
  title: "",
  image: "",
  imageAlt: "",
  contentHtml: "",
};

const createEmptySchool = () => ({
  id: "",
  name: "",
  iconKey: "School",
  sections: {
    about: { ...EMPTY_SECTION },
    vision: { ...EMPTY_SECTION },
    teaching: { ...EMPTY_SECTION },
    values: { ...EMPTY_SECTION },
    edge: { ...EMPTY_SECTION },
  },
});

const DEFAULT_NAV = [
  { id: "about", label: "About School", iconKey: "School" },
  { id: "vision", label: "Vision & Mission", iconKey: "Target" },
  { id: "teaching", label: "Teaching", iconKey: "BookOpen" },
  { id: "values", label: "Values", iconKey: "Star" },
  { id: "edge", label: "Our Edge", iconKey: "Zap" },
];

const DEFAULT_STATE = {
  hero: { title: "", subtitle: "", omText: "ॐ" },
  sectionNav: DEFAULT_NAV,
  schools: [createEmptySchool()],
};

const normalizeSchool = (school) => ({
  id: school?.id || "",
  name: school?.name || "",
  iconKey: school?.iconKey || "School",
  sections: {
    about: { ...EMPTY_SECTION, ...(school?.sections?.about || {}) },
    vision: { ...EMPTY_SECTION, ...(school?.sections?.vision || {}) },
    teaching: { ...EMPTY_SECTION, ...(school?.sections?.teaching || {}) },
    values: { ...EMPTY_SECTION, ...(school?.sections?.values || {}) },
    edge: { ...EMPTY_SECTION, ...(school?.sections?.edge || {}) },
  },
});

const normalizeData = (data) => ({
  hero: { ...DEFAULT_STATE.hero, ...(data?.hero || {}) },
  sectionNav:
    data?.sectionNav?.length > 0
      ? data.sectionNav
      : DEFAULT_STATE.sectionNav,
  schools: data?.schools?.length
    ? data.schools.map(normalizeSchool)
    : [createEmptySchool()],
});

function OurSchoolAdmin() {
  const [formData, setFormData] = useState(DEFAULT_STATE);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setFormData(normalizeData(res.data?.data));
      } catch (error) {
        console.error("Failed to load Our School content:", error);
      }
    };
    fetchData();
  }, []);

  const updateHero = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  const updateNav = (index, field, value) => {
    setFormData((prev) => {
      const sectionNav = [...prev.sectionNav];
      sectionNav[index] = { ...sectionNav[index], [field]: value };
      return { ...prev, sectionNav };
    });
  };

  const updateSchool = (index, field, value) => {
    setFormData((prev) => {
      const schools = [...prev.schools];
      schools[index] = { ...schools[index], [field]: value };
      return { ...prev, schools };
    });
  };

  const updateSection = (schoolIndex, sectionKey, field, value) => {
    setFormData((prev) => {
      const schools = [...prev.schools];
      const sections = {
        ...schools[schoolIndex].sections,
        [sectionKey]: {
          ...schools[schoolIndex].sections[sectionKey],
          [field]: value,
        },
      };
      schools[schoolIndex] = { ...schools[schoolIndex], sections };
      return { ...prev, schools };
    });
  };

  const addSchool = () => {
    setFormData((prev) => ({
      ...prev,
      schools: [...prev.schools, createEmptySchool()],
    }));
  };

  const removeSchool = (index) => {
    setFormData((prev) => ({
      ...prev,
      schools: prev.schools.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(API, formData);
    } catch (error) {
      console.error("Failed to save Our School content:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container pt-5 mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <h4 className="mb-3">Our School Page Content</h4>

        <h5 className="mt-4">Hero</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={formData.hero.title}
              onChange={(e) => updateHero("title", e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Subtitle</label>
            <input
              type="text"
              className="form-control"
              value={formData.hero.subtitle}
              onChange={(e) => updateHero("subtitle", e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Om Text</label>
          <input
            type="text"
            className="form-control"
            value={formData.hero.omText}
            onChange={(e) => updateHero("omText", e.target.value)}
          />
        </div>

        <h5 className="mt-4">Section Navigation</h5>
        {formData.sectionNav.map((nav, index) => (
          <div className="row mb-3" key={nav.id || index}>
            <div className="col-md-3">
              <label className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                value={nav.id}
                readOnly
              />
            </div>
            <div className="col-md-5">
              <label className="form-label">Label</label>
              <input
                type="text"
                className="form-control"
                value={nav.label}
                onChange={(e) => updateNav(index, "label", e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Icon</label>
              <select
                className="form-select"
                value={nav.iconKey}
                onChange={(e) => updateNav(index, "iconKey", e.target.value)}
              >
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <div className="d-flex align-items-center justify-content-between mt-4">
          <h5 className="mb-0">Schools</h5>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={addSchool}
          >
            + Add School
          </button>
        </div>

        {formData.schools.map((school, schoolIndex) => (
          <details className="mt-3" key={`${school.id}-${schoolIndex}`}>
            <summary className="fw-bold">
              {school.name || `School ${schoolIndex + 1}`}
            </summary>

            <div className="row mt-3">
              <div className="col-md-3 mb-3">
                <label className="form-label">School ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={school.id}
                  onChange={(e) =>
                    updateSchool(schoolIndex, "id", e.target.value)
                  }
                />
              </div>
              <div className="col-md-5 mb-3">
                <label className="form-label">School Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={school.name}
                  onChange={(e) =>
                    updateSchool(schoolIndex, "name", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Tab Icon</label>
                <select
                  className="form-select"
                  value={school.iconKey}
                  onChange={(e) =>
                    updateSchool(schoolIndex, "iconKey", e.target.value)
                  }
                >
                  {ICON_OPTIONS.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mb-3 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeSchool(schoolIndex)}
                >
                  Remove
                </button>
              </div>
            </div>

            {Object.keys(school.sections).map((sectionKey) => {
              const section = school.sections[sectionKey];
              return (
                <details className="mt-3" key={sectionKey}>
                  <summary className="fw-semibold text-capitalize">
                    {sectionKey} Section
                  </summary>
                  <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={section.title}
                        onChange={(e) =>
                          updateSection(
                            schoolIndex,
                            sectionKey,
                            "title",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Image URL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={section.image}
                        onChange={(e) =>
                          updateSection(
                            schoolIndex,
                            sectionKey,
                            "image",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image Alt</label>
                    <input
                      type="text"
                      className="form-control"
                      value={section.imageAlt}
                      onChange={(e) =>
                        updateSection(
                          schoolIndex,
                          sectionKey,
                          "imageAlt",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Content (HTML)</label>
                    <textarea
                      className="form-control"
                      rows="8"
                      value={section.contentHtml}
                      onChange={(e) =>
                        updateSection(
                          schoolIndex,
                          sectionKey,
                          "contentHtml",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </details>
              );
            })}
          </details>
        ))}

        <button className="btn btn-success mt-4" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

export default OurSchoolAdmin;