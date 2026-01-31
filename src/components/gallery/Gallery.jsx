import { useState } from 'react';
import styles from '../../assets/styles/gallery/Gallery.module.css';

import img1 from '../../assets/images/gallery/1000040963.webp';
import img2 from '../../assets/images/gallery/20180809.webp';
import img3 from '../../assets/images/gallery/1000040970.webp';
import img4 from '../../assets/images/gallery/1000058539.webp';
import img5 from '../../assets/images/gallery/food.webp';
import img6 from '../../assets/images/gallery/1000040963.webp';
import img7 from '../../assets/images/gallery/1000040963.webp';
import img8 from '../../assets/images/gallery/20180809.webp';

const filters = ['All', 'Yogashram', 'Classes', 'Happy Students', 'Food'];

const galleryData = [
  { id: 1, category: 'Classes', img: img1 },
  { id: 2, category: 'Classes', img: img2 },
  { id: 3, category: 'Food', img: img3 },
  { id: 4, category: 'Yogashram', img: img4 },
  { id: 5, category: 'Happy Students', img: img5 },
  { id: 6, category: 'Happy Students', img: img6 },
  { id: 7, category: 'Yogashram', img: img7 },
  { id: 8, category: 'Food', img: img8 },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [modalIndex, setModalIndex] = useState(null);

  const filteredImages =
    active === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const prevImage = () => {
    setModalIndex(
      modalIndex === 0 ? filteredImages.length - 1 : modalIndex - 1,
    );
  };

  const nextImage = () => {
    setModalIndex(
      modalIndex === filteredImages.length - 1 ? 0 : modalIndex + 1,
    );
  };

  return (
    <section className={styles.wrapper}>
      {/* ================= HERO HEADER ================= */}
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

      {/* ================= MAIN CONTENT ================= */}
      <div className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>
          Explore Our Journey Through Images
        </h2>

        <p className={styles.description}>
          Take a visual journey through Rishikesh Yogkulam® and witness the transformative 
          experiences of our students, the serene beauty of our ashram, and the authentic 
          yogic lifestyle we nurture together.
        </p>

        {/* ================= FILTER TABS ================= */}
        <div className={styles.filterTabs}>
          {filters.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterTab} ${active === tab ? styles.activeTab : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= IMAGE GRID ================= */}
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

      {/* ================= MODAL ================= */}
      {modalIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.closeBtn} onClick={closeModal}>
            ×
          </span>

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
            alt={filteredImages[modalIndex].category}
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
            {filteredImages[modalIndex].category} - {modalIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;