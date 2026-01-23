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
    <section className={styles.gallery}>
      {/* FILTER TABS */}
      <div className={styles.tabs}>
        {filters.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${active === tab ? styles.active : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className={styles.grid}>
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => openModal(index)}
          >
            <img src={item.img} alt={item.category} />
            <div className={styles.overlay}>View</div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalIndex !== null && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>
            ×
          </span>

          <button className={styles.prev} onClick={prevImage}>
            ‹
          </button>

          <img
            src={filteredImages[modalIndex].img}
            alt=""
            className={styles.modalImg}
          />

          <button className={styles.next} onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
