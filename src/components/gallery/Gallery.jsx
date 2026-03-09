import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../assets/styles/gallery/Gallery.module.css";

const API = "http://localhost:8000/api/gallery-heading";
const IMAGE = "http://localhost:8000/uploads/";

const filters = ["All", "Yogashram", "Classes", "Happy Students", "Food"];

const Gallery = () => {

  const [galleryData, setGalleryData] = useState([]);
  const [active, setActive] = useState("All");
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  // FETCH DATA FROM BACKEND
  const fetchGallery = async () => {
    try {
      const res = await axios.get(API);

      const formatted = [];

      res.data.data.forEach((item) => {
        item.img.forEach((image) => {
          formatted.push({
            id: Math.random(),
            category: item.category,
            img: IMAGE + image,
          });
        });
      });

      setGalleryData(formatted);

    } catch (error) {
      console.log(error);
    }
  };

  const filteredImages =
    active === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const prevImage = () => {
    setModalIndex(
      modalIndex === 0 ? filteredImages.length - 1 : modalIndex - 1
    );
  };

  const nextImage = () => {
    setModalIndex(
      modalIndex === filteredImages.length - 1 ? 0 : modalIndex + 1
    );
  };

  return (
    <section className={styles.wrapper}>

      {/* HERO */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>
            Moments That Inspire & Transform
          </span>

          <h1 className={styles.pageTitle}>
            Gallery - Rishikesh Yogkulam®
          </h1>

          <div className={styles.breadcrumb}>
            Home <span>/</span> Gallery
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.contentSection}>

        <h2 className={styles.sectionTitle}>
          Explore Our Journey Through Images
        </h2>

        <p className={styles.description}>
          Take a visual journey through Rishikesh Yogkulam® and witness the transformative
          experiences of our students.
        </p>

        {/* FILTER */}
        <div className={styles.filterTabs}>
          {filters.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterTab} ${
                active === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className={styles.imageGrid}>
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className={styles.imageCard}
              onClick={() => openModal(index)}
            >
              <img src={item.img} alt={item.category} />
              <div className={styles.overlay}>
                <span className={styles.viewText}>View Image</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {modalIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>

          <span className={styles.closeBtn}>×</span>

          <button
            className={styles.prevBtn}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <img
            src={filteredImages[modalIndex].img}
            alt=""
            className={styles.modalImg}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className={styles.nextBtn}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          <div className={styles.modalCaption}>
            {filteredImages[modalIndex].category} - {modalIndex + 1} /{" "}
            {filteredImages.length}
          </div>

        </div>
      )}
    </section>
  );
};

export default Gallery;