import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api/courses";

const EMPTY_BASE = {
  title: "",
  slug: "",
  shortTitle: "",
  category: "",
  homeSections: "",
  featured: false,
  homeOrder: 0,
  legacyPath: "",
  banner: null,
  bannerUrl: "",
  description: "",
  duration: "",
  level: "",
  location: "",
  included: "",
};

const EMPTY_CARD = {
  title: "",
  price: "",
  image: "",
  formLink: "",
  link: "",
};

const EMPTY_TEACHER = {
  images: [""],
  duration: "",
  privateRoom: "",
  sharedRoom: "",
  certification: "",
  style: "",
  path: "",
};

const EMPTY_KUNDALINI = {
  label: "",
  badge: "",
  date: "",
  detailsRoute: "",
};

const EMPTY_RETREAT = {
  privatePrice: "",
  sharedPrice: "",
  image: "",
  path: "",
};

const EMPTY_AYURVEDA = {
  label: "",
  badge: "",
  date: "",
  detailsRoute: "",
};

const EMPTY_HOME = {
  images: [""],
  privateRoom: "",
  sharedRoom: "",
  certification: "",
  style: "",
  date: "",
  badge: "",
};

const EMPTY_INFO_CARD = { title: "", tag: "", detail: "", icon: "" };
const EMPTY_WHY_ITEM = { icon: "", title: "", description: "" };
const EMPTY_CURRICULUM_ITEM = { category: "", items: [""] };
const EMPTY_SCHEDULE_ITEM = { time: "", activity: "" };
const EMPTY_FEATURE_ITEM = { icon: "", title: "", desc: "" };
const EMPTY_TESTIMONIAL = { name: "", country: "", text: "" };
const EMPTY_FAQ = { q: "", a: "" };
const EMPTY_INCLUSION_ITEM = { icon: "", text: "" };

const EMPTY_CONTENT = {
  hero: { quoteText: "", title: "", breadcrumbLabel: "", bannerImage: "" },
  overview: { tag: "", title: "", description: "" },
  infoCards: [{ ...EMPTY_INFO_CARD }],
  whyRishikesh: { tag: "", title: "", description: "", items: [{ ...EMPTY_WHY_ITEM }] },
  curriculum: { tag: "", title: "", items: [{ ...EMPTY_CURRICULUM_ITEM }] },
  dailySchedule: { tag: "", title: "", items: [{ ...EMPTY_SCHEDULE_ITEM }] },
  features: { tag: "", title: "", items: [{ ...EMPTY_FEATURE_ITEM }] },
  included: {
    tag: "",
    title: "",
    includedTitle: "",
    notIncludedTitle: "",
    toBringTitle: "",
    items: [""],
    notIncluded: [""],
    toBringImage: "",
  },
  testimonials: { tag: "", title: "", items: [{ ...EMPTY_TESTIMONIAL }] },
  faqs: { tag: "", title: "", items: [{ ...EMPTY_FAQ }] },
  cta: {
    title: "",
    subtitle: "",
    primaryLabel: "",
    primaryLink: "",
    secondaryLabel: "",
    secondaryLink: "",
  },
  certificate: {
    hero: { badgeText: "", title: "", subtitle: "", description: "" },
    program: { title: "", duration: "" },
    pricing: { offerBadge: "", regularLabel: "", currentPrice: "", payNotice: "", ctaLabel: "" },
    certification: { title: "", text: "", name: "" },
    eligibility: { title: "", items: [""] },
    inclusions: { title: "", items: [{ ...EMPTY_INCLUSION_ITEM }] },
    location: { title: "", school: "", address: "", description: "", mapSrc: "" },
  },
};

const ensureArray = (value, fallback) =>
  Array.isArray(value) && value.length ? value : fallback;

const cleanStringArray = (items) =>
  (items || [])
    .map((item) => String(item || "").trim())
    .filter(Boolean);

const cleanObjectArray = (items, fields) =>
  (items || [])
    .map((item) => ({ ...item }))
    .filter((item) =>
      fields.some((field) => String(item[field] || "").trim())
    );

const buildContentState = (content) => {
  const payload = content || {};
  return {
    hero: { ...EMPTY_CONTENT.hero, ...(payload.hero || {}) },
    overview: { ...EMPTY_CONTENT.overview, ...(payload.overview || {}) },
    infoCards: ensureArray(payload.infoCards, [{ ...EMPTY_INFO_CARD }]).map(
      (item) => ({ ...EMPTY_INFO_CARD, ...item })
    ),
    whyRishikesh: {
      ...EMPTY_CONTENT.whyRishikesh,
      ...(payload.whyRishikesh || {}),
      items: ensureArray(payload.whyRishikesh?.items, [{ ...EMPTY_WHY_ITEM }]).map(
        (item) => ({ ...EMPTY_WHY_ITEM, ...item })
      ),
    },
    curriculum: {
      ...EMPTY_CONTENT.curriculum,
      ...(payload.curriculum || {}),
      items: ensureArray(payload.curriculum?.items, [{ ...EMPTY_CURRICULUM_ITEM }]).map(
        (item) => ({
          category: item.category || "",
          items: ensureArray(item.items, [""]),
        })
      ),
    },
    dailySchedule: {
      ...EMPTY_CONTENT.dailySchedule,
      ...(payload.dailySchedule || {}),
      items: ensureArray(payload.dailySchedule?.items, [{ ...EMPTY_SCHEDULE_ITEM }]).map(
        (item) => ({ ...EMPTY_SCHEDULE_ITEM, ...item })
      ),
    },
    features: {
      ...EMPTY_CONTENT.features,
      ...(payload.features || {}),
      items: ensureArray(payload.features?.items, [{ ...EMPTY_FEATURE_ITEM }]).map(
        (item) => ({ ...EMPTY_FEATURE_ITEM, ...item })
      ),
    },
    included: {
      ...EMPTY_CONTENT.included,
      ...(payload.included || {}),
      items: ensureArray(payload.included?.items, [""]),
      notIncluded: ensureArray(payload.included?.notIncluded, [""]),
    },
    testimonials: {
      ...EMPTY_CONTENT.testimonials,
      ...(payload.testimonials || {}),
      items: ensureArray(payload.testimonials?.items, [{ ...EMPTY_TESTIMONIAL }]).map(
        (item) => ({ ...EMPTY_TESTIMONIAL, ...item })
      ),
    },
    faqs: {
      ...EMPTY_CONTENT.faqs,
      ...(payload.faqs || {}),
      items: ensureArray(payload.faqs?.items, [{ ...EMPTY_FAQ }]).map((item) => ({
        ...EMPTY_FAQ,
        ...item,
      })),
    },
    cta: { ...EMPTY_CONTENT.cta, ...(payload.cta || {}) },
    certificate: {
      hero: { ...EMPTY_CONTENT.certificate.hero, ...(payload.certificate?.hero || {}) },
      program: {
        ...EMPTY_CONTENT.certificate.program,
        ...(payload.certificate?.program || {}),
      },
      pricing: {
        ...EMPTY_CONTENT.certificate.pricing,
        ...(payload.certificate?.pricing || {}),
      },
      certification: {
        ...EMPTY_CONTENT.certificate.certification,
        ...(payload.certificate?.certification || {}),
      },
      eligibility: {
        ...EMPTY_CONTENT.certificate.eligibility,
        ...(payload.certificate?.eligibility || {}),
        items: ensureArray(payload.certificate?.eligibility?.items, [""]),
      },
      inclusions: {
        ...EMPTY_CONTENT.certificate.inclusions,
        ...(payload.certificate?.inclusions || {}),
        items: ensureArray(payload.certificate?.inclusions?.items, [
          { ...EMPTY_INCLUSION_ITEM },
        ]).map((item) => ({ ...EMPTY_INCLUSION_ITEM, ...item })),
      },
      location: {
        ...EMPTY_CONTENT.certificate.location,
        ...(payload.certificate?.location || {}),
      },
    },
  };
};

function CoursesDetails() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [baseData, setBaseData] = useState(EMPTY_BASE);
  const [cardData, setCardData] = useState(EMPTY_CARD);
  const [teacherData, setTeacherData] = useState(EMPTY_TEACHER);
  const [kundaliniData, setKundaliniData] = useState(EMPTY_KUNDALINI);
  const [retreatData, setRetreatData] = useState(EMPTY_RETREAT);
  const [ayurvedaData, setAyurvedaData] = useState(EMPTY_AYURVEDA);
  const [homeData, setHomeData] = useState(EMPTY_HOME);
  const [contentData, setContentData] = useState(EMPTY_CONTENT);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_BASE);
      setData(res.data?.data || []);
    } catch (err) {
      setError("Failed to fetch courses.");
    }
  };

  const resetForm = () => {
    setBaseData(EMPTY_BASE);
    setCardData(EMPTY_CARD);
    setTeacherData(EMPTY_TEACHER);
    setKundaliniData(EMPTY_KUNDALINI);
    setRetreatData(EMPTY_RETREAT);
    setAyurvedaData(EMPTY_AYURVEDA);
    setHomeData(EMPTY_HOME);
    setContentData(EMPTY_CONTENT);
    setEditId(null);
    setShowForm(false);
    setError("");
  };

  const handleBaseChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setBaseData((prev) => ({ ...prev, [name]: checked }));
    } else if (files) {
      setBaseData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setBaseData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeacherImageChange = (index, value) => {
    setTeacherData((prev) => {
      const images = [...prev.images];
      images[index] = value;
      return { ...prev, images };
    });
  };

  const addTeacherImage = () =>
    setTeacherData((prev) => ({ ...prev, images: [...prev.images, ""] }));

  const removeTeacherImage = (index) =>
    setTeacherData((prev) => {
      const images = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: images.length ? images : [""] };
    });

  const handleKundaliniChange = (e) => {
    const { name, value } = e.target;
    setKundaliniData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRetreatChange = (e) => {
    const { name, value } = e.target;
    setRetreatData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAyurvedaChange = (e) => {
    const { name, value } = e.target;
    setAyurvedaData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHomeChange = (e) => {
    const { name, value } = e.target;
    setHomeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHomeImageChange = (index, value) => {
    setHomeData((prev) => {
      const images = [...prev.images];
      images[index] = value;
      return { ...prev, images };
    });
  };

  const addHomeImage = () =>
    setHomeData((prev) => ({ ...prev, images: [...prev.images, ""] }));

  const removeHomeImage = (index) =>
    setHomeData((prev) => {
      const images = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: images.length ? images : [""] };
    });

  const updateContentSection = (section, field, value) => {
    setContentData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const updateInfoCard = (index, field, value) => {
    setContentData((prev) => {
      const infoCards = [...prev.infoCards];
      infoCards[index] = { ...infoCards[index], [field]: value };
      return { ...prev, infoCards };
    });
  };

  const addInfoCard = () =>
    setContentData((prev) => ({
      ...prev,
      infoCards: [...prev.infoCards, { ...EMPTY_INFO_CARD }],
    }));

  const removeInfoCard = (index) =>
    setContentData((prev) => {
      const infoCards = prev.infoCards.filter((_, i) => i !== index);
      return { ...prev, infoCards: infoCards.length ? infoCards : [{ ...EMPTY_INFO_CARD }] };
    });

  const updateNestedItem = (section, index, field, value) => {
    setContentData((prev) => {
      const items = [...prev[section].items];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, [section]: { ...prev[section], items } };
    });
  };

  const addNestedItem = (section, emptyItem) =>
    setContentData((prev) => ({
      ...prev,
      [section]: { ...prev[section], items: [...prev[section].items, { ...emptyItem }] },
    }));

  const removeNestedItem = (section, index, emptyItem) =>
    setContentData((prev) => {
      const items = prev[section].items.filter((_, i) => i !== index);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          items: items.length ? items : [{ ...emptyItem }],
        },
      };
    });

  const updateStringListItem = (section, listKey, index, value) => {
    setContentData((prev) => {
      const items = [...prev[section][listKey]];
      items[index] = value;
      return { ...prev, [section]: { ...prev[section], [listKey]: items } };
    });
  };

  const addStringListItem = (section, listKey) =>
    setContentData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [listKey]: [...prev[section][listKey], ""] },
    }));

  const removeStringListItem = (section, listKey, index) =>
    setContentData((prev) => {
      const items = prev[section][listKey].filter((_, i) => i !== index);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [listKey]: items.length ? items : [""],
        },
      };
    });

  const updateCurriculumCategory = (index, value) => {
    setContentData((prev) => {
      const items = [...prev.curriculum.items];
      items[index] = { ...items[index], category: value };
      return { ...prev, curriculum: { ...prev.curriculum, items } };
    });
  };

  const updateCurriculumItem = (categoryIndex, itemIndex, value) => {
    setContentData((prev) => {
      const categories = [...prev.curriculum.items];
      const category = categories[categoryIndex];
      const items = [...category.items];
      items[itemIndex] = value;
      categories[categoryIndex] = { ...category, items };
      return { ...prev, curriculum: { ...prev.curriculum, items: categories } };
    });
  };

  const addCurriculumCategory = () =>
    setContentData((prev) => ({
      ...prev,
      curriculum: {
        ...prev.curriculum,
        items: [...prev.curriculum.items, { ...EMPTY_CURRICULUM_ITEM }],
      },
    }));

  const removeCurriculumCategory = (index) =>
    setContentData((prev) => {
      const items = prev.curriculum.items.filter((_, i) => i !== index);
      return {
        ...prev,
        curriculum: {
          ...prev.curriculum,
          items: items.length ? items : [{ ...EMPTY_CURRICULUM_ITEM }],
        },
      };
    });

  const addCurriculumItem = (categoryIndex) =>
    setContentData((prev) => {
      const categories = [...prev.curriculum.items];
      const category = categories[categoryIndex];
      categories[categoryIndex] = {
        ...category,
        items: [...category.items, ""],
      };
      return { ...prev, curriculum: { ...prev.curriculum, items: categories } };
    });

  const removeCurriculumItem = (categoryIndex, itemIndex) =>
    setContentData((prev) => {
      const categories = [...prev.curriculum.items];
      const category = categories[categoryIndex];
      const items = category.items.filter((_, i) => i !== itemIndex);
      categories[categoryIndex] = {
        ...category,
        items: items.length ? items : [""],
      };
      return { ...prev, curriculum: { ...prev.curriculum, items: categories } };
    });

  const updateCertificateSection = (section, field, value) => {
    setContentData((prev) => ({
      ...prev,
      certificate: {
        ...prev.certificate,
        [section]: { ...prev.certificate[section], [field]: value },
      },
    }));
  };

  const updateCertificateEligibilityItem = (index, value) => {
    setContentData((prev) => {
      const items = [...prev.certificate.eligibility.items];
      items[index] = value;
      return {
        ...prev,
        certificate: {
          ...prev.certificate,
          eligibility: { ...prev.certificate.eligibility, items },
        },
      };
    });
  };

  const addCertificateEligibilityItem = () =>
    setContentData((prev) => ({
      ...prev,
      certificate: {
        ...prev.certificate,
        eligibility: {
          ...prev.certificate.eligibility,
          items: [...prev.certificate.eligibility.items, ""],
        },
      },
    }));

  const removeCertificateEligibilityItem = (index) =>
    setContentData((prev) => {
      const items = prev.certificate.eligibility.items.filter((_, i) => i !== index);
      return {
        ...prev,
        certificate: {
          ...prev.certificate,
          eligibility: {
            ...prev.certificate.eligibility,
            items: items.length ? items : [""],
          },
        },
      };
    });

  const updateCertificateInclusionItem = (index, field, value) => {
    setContentData((prev) => {
      const items = [...prev.certificate.inclusions.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        certificate: {
          ...prev.certificate,
          inclusions: { ...prev.certificate.inclusions, items },
        },
      };
    });
  };

  const addCertificateInclusionItem = () =>
    setContentData((prev) => ({
      ...prev,
      certificate: {
        ...prev.certificate,
        inclusions: {
          ...prev.certificate.inclusions,
          items: [...prev.certificate.inclusions.items, { ...EMPTY_INCLUSION_ITEM }],
        },
      },
    }));

  const removeCertificateInclusionItem = (index) =>
    setContentData((prev) => {
      const items = prev.certificate.inclusions.items.filter((_, i) => i !== index);
      return {
        ...prev,
        certificate: {
          ...prev.certificate,
          inclusions: {
            ...prev.certificate.inclusions,
            items: items.length ? items : [{ ...EMPTY_INCLUSION_ITEM }],
          },
        },
      };
    });

  const handleEdit = (item) => {
    setBaseData({
      title: item.title || "",
      slug: item.slug || "",
      shortTitle: item.shortTitle || "",
      category: item.category || "",
      homeSections: (item.homeSections || []).join(", "),
      featured: !!item.featured,
      homeOrder: item.homeOrder || 0,
      legacyPath: item.legacyPath || "",
      banner: null,
      bannerUrl: item.banner || "",
      description: item.description || "",
      duration: item.duration || "",
      level: item.level || "",
      location: item.location || "",
      included: item.included || "",
    });

    setCardData({ ...EMPTY_CARD, ...(item.card || {}) });
    setTeacherData({
      ...EMPTY_TEACHER,
      ...(item.teacherTraining || {}),
      images: ensureArray(item.teacherTraining?.images, [""]),
    });
    setKundaliniData({ ...EMPTY_KUNDALINI, ...(item.kundalini || {}) });
    setRetreatData({ ...EMPTY_RETREAT, ...(item.retreat || {}) });
    setAyurvedaData({ ...EMPTY_AYURVEDA, ...(item.ayurveda || {}) });
    setHomeData({
      ...EMPTY_HOME,
      ...(item.home || {}),
      images: ensureArray(item.home?.images, [""]),
    });
    setContentData(buildContentState(item.content));

    setEditId(item._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course? This will also delete batches and bookings.")) {
      return;
    }
    await axios.delete(`${API_BASE}/${id}`);
    fetchData();
  };

  const buildContentPayload = () => {
    const infoCards = cleanObjectArray(contentData.infoCards, [
      "title",
      "tag",
      "detail",
      "icon",
    ]);
    const whyItems = cleanObjectArray(contentData.whyRishikesh.items, [
      "icon",
      "title",
      "description",
    ]);
    const curriculumItems = (contentData.curriculum.items || [])
      .map((item) => ({
        category: String(item.category || "").trim(),
        items: cleanStringArray(item.items),
      }))
      .filter((item) => item.category || item.items.length);
    const scheduleItems = cleanObjectArray(contentData.dailySchedule.items, [
      "time",
      "activity",
    ]);
    const featureItems = cleanObjectArray(contentData.features.items, [
      "icon",
      "title",
      "desc",
    ]);
    const includedItems = cleanStringArray(contentData.included.items);
    const notIncludedItems = cleanStringArray(contentData.included.notIncluded);
    const testimonialItems = cleanObjectArray(contentData.testimonials.items, [
      "name",
      "country",
      "text",
    ]);
    const faqItems = cleanObjectArray(contentData.faqs.items, ["q", "a"]);
    const eligibilityItems = cleanStringArray(
      contentData.certificate.eligibility.items
    );
    const inclusionItems = cleanObjectArray(
      contentData.certificate.inclusions.items,
      ["icon", "text"]
    );

    return {
      hero: { ...contentData.hero },
      overview: { ...contentData.overview },
      infoCards,
      whyRishikesh: { ...contentData.whyRishikesh, items: whyItems },
      curriculum: { ...contentData.curriculum, items: curriculumItems },
      dailySchedule: { ...contentData.dailySchedule, items: scheduleItems },
      features: { ...contentData.features, items: featureItems },
      included: {
        ...contentData.included,
        items: includedItems,
        notIncluded: notIncludedItems,
      },
      testimonials: { ...contentData.testimonials, items: testimonialItems },
      faqs: { ...contentData.faqs, items: faqItems },
      cta: { ...contentData.cta },
      certificate: {
        hero: { ...contentData.certificate.hero },
        program: { ...contentData.certificate.program },
        pricing: { ...contentData.certificate.pricing },
        certification: { ...contentData.certificate.certification },
        eligibility: {
          ...contentData.certificate.eligibility,
          items: eligibilityItems,
        },
        inclusions: {
          ...contentData.certificate.inclusions,
          items: inclusionItems,
        },
        location: { ...contentData.certificate.location },
      },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("title", baseData.title);
      fd.append("slug", baseData.slug);
      fd.append("shortTitle", baseData.shortTitle);
      fd.append("category", baseData.category);
      fd.append("homeSections", baseData.homeSections);
      fd.append("featured", baseData.featured ? "true" : "false");
      fd.append("homeOrder", String(baseData.homeOrder || 0));
      fd.append("legacyPath", baseData.legacyPath);

      if (baseData.banner) {
        fd.append("banner", baseData.banner);
      } else if (baseData.bannerUrl) {
        fd.append("banner", baseData.bannerUrl);
      }

      fd.append("description", baseData.description);
      fd.append("duration", baseData.duration);
      fd.append("level", baseData.level);
      fd.append("location", baseData.location);
      fd.append("included", baseData.included);

      const teacherPayload = {
        ...teacherData,
        images: cleanStringArray(teacherData.images),
      };
      const homePayload = { ...homeData, images: cleanStringArray(homeData.images) };

      fd.append("card", JSON.stringify(cardData));
      fd.append("teacherTraining", JSON.stringify(teacherPayload));
      fd.append("kundalini", JSON.stringify(kundaliniData));
      fd.append("retreat", JSON.stringify(retreatData));
      fd.append("ayurveda", JSON.stringify(ayurvedaData));
      fd.append("home", JSON.stringify(homePayload));
      fd.append("content", JSON.stringify(buildContentPayload()));

      if (editId) {
        await axios.put(`${API_BASE}/${editId}`, fd);
      } else {
        await axios.post(API_BASE, fd);
      }

      await fetchData();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save course.");
    }

    setLoading(false);
  };

  return (
    <div className="container pt-5 mt-5">
      <h3 className="mb-4">Courses Catalog</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!showForm ? (
        <>
          <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>
            + Create Course
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Category</th>
                <th>Home Sections</th>
                <th>Featured</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.slug}</td>
                  <td>{item.category}</td>
                  <td>{(item.homeSections || []).join(", ")}</td>
                  <td>{item.featured ? "Yes" : "No"}</td>
                  <td>{item.homeOrder || 0}</td>
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
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="d-flex justify-content-between mb-3">
            <h5>{editId ? "Edit Course" : "Create Course"}</h5>
            <button type="button" className="btn-close" onClick={resetForm} />
          </div>

          <h6 className="mb-3 text-primary">Basics</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={baseData.title}
                onChange={handleBaseChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Slug</label>
              <input
                type="text"
                name="slug"
                className="form-control"
                value={baseData.slug}
                onChange={handleBaseChange}
                placeholder="auto-generated if left blank"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Short Title</label>
              <input
                type="text"
                name="shortTitle"
                className="form-control"
                value={baseData.shortTitle}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                value={baseData.category}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Home Sections</label>
              <input
                type="text"
                name="homeSections"
                className="form-control"
                value={baseData.homeSections}
                onChange={handleBaseChange}
                placeholder="top-courses, teacher-training, retreat"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-semibold">Home Order</label>
              <input
                type="number"
                name="homeOrder"
                className="form-control"
                value={baseData.homeOrder}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-3 mb-3 d-flex align-items-end">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="featured"
                  name="featured"
                  checked={baseData.featured}
                  onChange={handleBaseChange}
                />
                <label className="form-check-label fw-semibold" htmlFor="featured">
                  Featured
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Legacy Path</label>
              <input
                type="text"
                name="legacyPath"
                className="form-control"
                value={baseData.legacyPath}
                onChange={handleBaseChange}
                placeholder="/YogaCourse100"
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Banner</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Banner URL</label>
              <input
                type="text"
                name="bannerUrl"
                className="form-control"
                value={baseData.bannerUrl}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Banner Upload</label>
              <input
                type="file"
                name="banner"
                className="form-control"
                onChange={handleBaseChange}
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Core Details</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Duration</label>
              <input
                type="text"
                name="duration"
                className="form-control"
                value={baseData.duration}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Level</label>
              <input
                type="text"
                name="level"
                className="form-control"
                value={baseData.level}
                onChange={handleBaseChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={baseData.location}
                onChange={handleBaseChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows={3}
              name="description"
              value={baseData.description}
              onChange={handleBaseChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Included (Text)</label>
            <textarea
              className="form-control"
              rows={3}
              name="included"
              value={baseData.included}
              onChange={handleBaseChange}
            />
          </div>

          <h6 className="mt-4 mb-3 text-primary">Card</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Card Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={cardData.title}
                onChange={handleCardChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Card Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                value={cardData.price}
                onChange={handleCardChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Card Image URL</label>
              <input
                type="text"
                name="image"
                className="form-control"
                value={cardData.image}
                onChange={handleCardChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Card Link</label>
              <input
                type="text"
                name="link"
                className="form-control"
                value={cardData.link}
                onChange={handleCardChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Card Form Link</label>
              <input
                type="text"
                name="formLink"
                className="form-control"
                value={cardData.formLink}
                onChange={handleCardChange}
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Teacher Training Card</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Duration</label>
              <input
                type="text"
                name="duration"
                className="form-control"
                value={teacherData.duration}
                onChange={handleTeacherChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Certification</label>
              <input
                type="text"
                name="certification"
                className="form-control"
                value={teacherData.certification}
                onChange={handleTeacherChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Private Room</label>
              <input
                type="text"
                name="privateRoom"
                className="form-control"
                value={teacherData.privateRoom}
                onChange={handleTeacherChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shared Room</label>
              <input
                type="text"
                name="sharedRoom"
                className="form-control"
                value={teacherData.sharedRoom}
                onChange={handleTeacherChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Style</label>
              <input
                type="text"
                name="style"
                className="form-control"
                value={teacherData.style}
                onChange={handleTeacherChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Details Path</label>
              <input
                type="text"
                name="path"
                className="form-control"
                value={teacherData.path}
                onChange={handleTeacherChange}
              />
            </div>
          </div>

          <label className="form-label fw-semibold">Teacher Training Images</label>
          {teacherData.images.map((img, index) => (
            <div key={index} className="d-flex gap-2 mb-2">
              <input
                type="text"
                className="form-control"
                value={img}
                onChange={(e) => handleTeacherImageChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeTeacherImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={addTeacherImage}>
            + Add Image
          </button>

          <h6 className="mt-4 mb-3 text-primary">Kundalini</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Label</label>
              <input
                type="text"
                name="label"
                className="form-control"
                value={kundaliniData.label}
                onChange={handleKundaliniChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Badge</label>
              <input
                type="text"
                name="badge"
                className="form-control"
                value={kundaliniData.badge}
                onChange={handleKundaliniChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Date</label>
              <input
                type="text"
                name="date"
                className="form-control"
                value={kundaliniData.date}
                onChange={handleKundaliniChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Details Route</label>
              <input
                type="text"
                name="detailsRoute"
                className="form-control"
                value={kundaliniData.detailsRoute}
                onChange={handleKundaliniChange}
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Retreat</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Private Price</label>
              <input
                type="text"
                name="privatePrice"
                className="form-control"
                value={retreatData.privatePrice}
                onChange={handleRetreatChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shared Price</label>
              <input
                type="text"
                name="sharedPrice"
                className="form-control"
                value={retreatData.sharedPrice}
                onChange={handleRetreatChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                className="form-control"
                value={retreatData.image}
                onChange={handleRetreatChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Path</label>
              <input
                type="text"
                name="path"
                className="form-control"
                value={retreatData.path}
                onChange={handleRetreatChange}
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Ayurveda</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Label</label>
              <input
                type="text"
                name="label"
                className="form-control"
                value={ayurvedaData.label}
                onChange={handleAyurvedaChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Badge</label>
              <input
                type="text"
                name="badge"
                className="form-control"
                value={ayurvedaData.badge}
                onChange={handleAyurvedaChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Date</label>
              <input
                type="text"
                name="date"
                className="form-control"
                value={ayurvedaData.date}
                onChange={handleAyurvedaChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Details Route</label>
              <input
                type="text"
                name="detailsRoute"
                className="form-control"
                value={ayurvedaData.detailsRoute}
                onChange={handleAyurvedaChange}
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Home Overrides</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Private Room</label>
              <input
                type="text"
                name="privateRoom"
                className="form-control"
                value={homeData.privateRoom}
                onChange={handleHomeChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Shared Room</label>
              <input
                type="text"
                name="sharedRoom"
                className="form-control"
                value={homeData.sharedRoom}
                onChange={handleHomeChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Certification</label>
              <input
                type="text"
                name="certification"
                className="form-control"
                value={homeData.certification}
                onChange={handleHomeChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Style</label>
              <input
                type="text"
                name="style"
                className="form-control"
                value={homeData.style}
                onChange={handleHomeChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Date</label>
              <input
                type="text"
                name="date"
                className="form-control"
                value={homeData.date}
                onChange={handleHomeChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Badge</label>
              <input
                type="text"
                name="badge"
                className="form-control"
                value={homeData.badge}
                onChange={handleHomeChange}
              />
            </div>
          </div>

          <label className="form-label fw-semibold">Home Images</label>
          {homeData.images.map((img, index) => (
            <div key={index} className="d-flex gap-2 mb-2">
              <input
                type="text"
                className="form-control"
                value={img}
                onChange={(e) => handleHomeImageChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeHomeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={addHomeImage}>
            + Add Image
          </button>

          <h6 className="mt-4 mb-3 text-primary">Hero Section</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Quote Text</label>
              <input
                type="text"
                className="form-control"
                value={contentData.hero.quoteText}
                onChange={(e) => updateContentSection("hero", "quoteText", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Hero Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.hero.title}
                onChange={(e) => updateContentSection("hero", "title", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Breadcrumb Label</label>
              <input
                type="text"
                className="form-control"
                value={contentData.hero.breadcrumbLabel}
                onChange={(e) =>
                  updateContentSection("hero", "breadcrumbLabel", e.target.value)
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Banner Image URL</label>
              <input
                type="text"
                className="form-control"
                value={contentData.hero.bannerImage}
                onChange={(e) =>
                  updateContentSection("hero", "bannerImage", e.target.value)
                }
              />
            </div>
          </div>

          <h6 className="mt-4 mb-3 text-primary">Overview</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.overview.tag}
                onChange={(e) => updateContentSection("overview", "tag", e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.overview.title}
                onChange={(e) => updateContentSection("overview", "title", e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows={3}
              value={contentData.overview.description}
              onChange={(e) =>
                updateContentSection("overview", "description", e.target.value)
              }
            />
          </div>

          <h6 className="mt-4 mb-3 text-primary">Info Cards</h6>
          {contentData.infoCards.map((card, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="row">
                <div className="col-md-3 mb-2">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={card.title}
                    onChange={(e) => updateInfoCard(index, "title", e.target.value)}
                  />
                </div>
                <div className="col-md-3 mb-2">
                  <label className="form-label fw-semibold">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    value={card.tag}
                    onChange={(e) => updateInfoCard(index, "tag", e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={card.detail}
                    onChange={(e) => updateInfoCard(index, "detail", e.target.value)}
                  />
                </div>
                <div className="col-md-2 mb-2">
                  <label className="form-label fw-semibold">Icon</label>
                  <input
                    type="text"
                    className="form-control"
                    value={card.icon}
                    onChange={(e) => updateInfoCard(index, "icon", e.target.value)}
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeInfoCard(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary" onClick={addInfoCard}>
            + Add Info Card
          </button>

          <h6 className="mt-4 mb-3 text-primary">Why Rishikesh</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.whyRishikesh.tag}
                onChange={(e) =>
                  updateContentSection("whyRishikesh", "tag", e.target.value)
                }
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.whyRishikesh.title}
                onChange={(e) =>
                  updateContentSection("whyRishikesh", "title", e.target.value)
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows={3}
              value={contentData.whyRishikesh.description}
              onChange={(e) =>
                updateContentSection("whyRishikesh", "description", e.target.value)
              }
            />
          </div>
          {contentData.whyRishikesh.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="row">
                <div className="col-md-2 mb-2">
                  <label className="form-label fw-semibold">Icon</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.icon}
                    onChange={(e) =>
                      updateNestedItem("whyRishikesh", index, "icon", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.title}
                    onChange={(e) =>
                      updateNestedItem("whyRishikesh", index, "title", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label fw-semibold">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.description}
                    onChange={(e) =>
                      updateNestedItem("whyRishikesh", index, "description", e.target.value)
                    }
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeNestedItem("whyRishikesh", index, EMPTY_WHY_ITEM)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addNestedItem("whyRishikesh", EMPTY_WHY_ITEM)}
          >
            + Add Why Item
          </button>

          <h6 className="mt-4 mb-3 text-primary">Curriculum</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.curriculum.tag}
                onChange={(e) => updateContentSection("curriculum", "tag", e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.curriculum.title}
                onChange={(e) => updateContentSection("curriculum", "title", e.target.value)}
              />
            </div>
          </div>
          {contentData.curriculum.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input
                type="text"
                className="form-control mb-2"
                value={item.category}
                onChange={(e) => updateCurriculumCategory(index, e.target.value)}
              />
              <label className="form-label fw-semibold">Items</label>
              {item.items.map((entry, itemIndex) => (
                <div key={itemIndex} className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    value={entry}
                    onChange={(e) =>
                      updateCurriculumItem(index, itemIndex, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removeCurriculumItem(index, itemIndex)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => addCurriculumItem(index)}
              >
                + Add Item
              </button>
              <button
                type="button"
                className="btn btn-outline-danger ms-2"
                onClick={() => removeCurriculumCategory(index)}
              >
                Remove Category
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary" onClick={addCurriculumCategory}>
            + Add Category
          </button>

          <h6 className="mt-4 mb-3 text-primary">Daily Schedule</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.dailySchedule.tag}
                onChange={(e) =>
                  updateContentSection("dailySchedule", "tag", e.target.value)
                }
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.dailySchedule.title}
                onChange={(e) =>
                  updateContentSection("dailySchedule", "title", e.target.value)
                }
              />
            </div>
          </div>
          {contentData.dailySchedule.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.time}
                    onChange={(e) =>
                      updateNestedItem("dailySchedule", index, "time", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-8 mb-2">
                  <label className="form-label fw-semibold">Activity</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.activity}
                    onChange={(e) =>
                      updateNestedItem("dailySchedule", index, "activity", e.target.value)
                    }
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeNestedItem("dailySchedule", index, EMPTY_SCHEDULE_ITEM)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addNestedItem("dailySchedule", EMPTY_SCHEDULE_ITEM)}
          >
            + Add Schedule Item
          </button>

          <h6 className="mt-4 mb-3 text-primary">Features</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.features.tag}
                onChange={(e) => updateContentSection("features", "tag", e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.features.title}
                onChange={(e) => updateContentSection("features", "title", e.target.value)}
              />
            </div>
          </div>
          {contentData.features.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="row">
                <div className="col-md-2 mb-2">
                  <label className="form-label fw-semibold">Icon</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.icon}
                    onChange={(e) =>
                      updateNestedItem("features", index, "icon", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.title}
                    onChange={(e) =>
                      updateNestedItem("features", index, "title", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label fw-semibold">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.desc}
                    onChange={(e) =>
                      updateNestedItem("features", index, "desc", e.target.value)
                    }
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeNestedItem("features", index, EMPTY_FEATURE_ITEM)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addNestedItem("features", EMPTY_FEATURE_ITEM)}
          >
            + Add Feature
          </button>

          <h6 className="mt-4 mb-3 text-primary">Included Section</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.tag}
                onChange={(e) => updateContentSection("included", "tag", e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.title}
                onChange={(e) => updateContentSection("included", "title", e.target.value)}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Included Heading</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.includedTitle}
                onChange={(e) =>
                  updateContentSection("included", "includedTitle", e.target.value)
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Not Included Heading</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.notIncludedTitle}
                onChange={(e) =>
                  updateContentSection("included", "notIncludedTitle", e.target.value)
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">To Bring Heading</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.toBringTitle}
                onChange={(e) =>
                  updateContentSection("included", "toBringTitle", e.target.value)
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">To Bring Image URL</label>
              <input
                type="text"
                className="form-control"
                value={contentData.included.toBringImage}
                onChange={(e) =>
                  updateContentSection("included", "toBringImage", e.target.value)
                }
              />
            </div>
          </div>
          <label className="form-label fw-semibold">Included Items</label>
          {contentData.included.items.map((item, index) => (
            <div key={index} className="d-flex gap-2 mb-2">
              <input
                type="text"
                className="form-control"
                value={item}
                onChange={(e) =>
                  updateStringListItem("included", "items", index, e.target.value)
                }
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeStringListItem("included", "items", index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            onClick={() => addStringListItem("included", "items")}
          >
            + Add Included Item
          </button>

          <label className="form-label fw-semibold">Not Included Items</label>
          {contentData.included.notIncluded.map((item, index) => (
            <div key={index} className="d-flex gap-2 mb-2">
              <input
                type="text"
                className="form-control"
                value={item}
                onChange={(e) =>
                  updateStringListItem("included", "notIncluded", index, e.target.value)
                }
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeStringListItem("included", "notIncluded", index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            onClick={() => addStringListItem("included", "notIncluded")}
          >
            + Add Not Included Item
          </button>

          <h6 className="mt-4 mb-3 text-primary">Testimonials</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.testimonials.tag}
                onChange={(e) =>
                  updateContentSection("testimonials", "tag", e.target.value)
                }
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.testimonials.title}
                onChange={(e) =>
                  updateContentSection("testimonials", "title", e.target.value)
                }
              />
            </div>
          </div>
          {contentData.testimonials.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.name}
                    onChange={(e) =>
                      updateNestedItem("testimonials", index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="form-label fw-semibold">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.country}
                    onChange={(e) =>
                      updateNestedItem("testimonials", index, "country", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <label className="form-label fw-semibold">Text</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={item.text}
                    onChange={(e) =>
                      updateNestedItem("testimonials", index, "text", e.target.value)
                    }
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeNestedItem("testimonials", index, EMPTY_TESTIMONIAL)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addNestedItem("testimonials", EMPTY_TESTIMONIAL)}
          >
            + Add Testimonial
          </button>

          <h6 className="mt-4 mb-3 text-primary">FAQs</h6>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold">Tag</label>
              <input
                type="text"
                className="form-control"
                value={contentData.faqs.tag}
                onChange={(e) => updateContentSection("faqs", "tag", e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.faqs.title}
                onChange={(e) => updateContentSection("faqs", "title", e.target.value)}
              />
            </div>
          </div>
          {contentData.faqs.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <label className="form-label fw-semibold">Question</label>
              <input
                type="text"
                className="form-control mb-2"
                value={item.q}
                onChange={(e) => updateNestedItem("faqs", index, "q", e.target.value)}
              />
              <label className="form-label fw-semibold">Answer</label>
              <textarea
                className="form-control"
                rows={2}
                value={item.a}
                onChange={(e) => updateNestedItem("faqs", index, "a", e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-danger mt-2"
                onClick={() => removeNestedItem("faqs", index, EMPTY_FAQ)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addNestedItem("faqs", EMPTY_FAQ)}
          >
            + Add FAQ
          </button>

          <h6 className="mt-4 mb-3 text-primary">CTA Section</h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Title</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.title}
                onChange={(e) => updateContentSection("cta", "title", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Subtitle</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.subtitle}
                onChange={(e) => updateContentSection("cta", "subtitle", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Primary Label</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.primaryLabel}
                onChange={(e) =>
                  updateContentSection("cta", "primaryLabel", e.target.value)
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Primary Link</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.primaryLink}
                onChange={(e) =>
                  updateContentSection("cta", "primaryLink", e.target.value)
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Secondary Label</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.secondaryLabel}
                onChange={(e) =>
                  updateContentSection("cta", "secondaryLabel", e.target.value)
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Secondary Link</label>
              <input
                type="text"
                className="form-control"
                value={contentData.cta.secondaryLink}
                onChange={(e) =>
                  updateContentSection("cta", "secondaryLink", e.target.value)
                }
              />
            </div>
          </div>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-success" disabled={loading}>
              {loading ? "Saving..." : editId ? "Update" : "Save"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CoursesDetails;
