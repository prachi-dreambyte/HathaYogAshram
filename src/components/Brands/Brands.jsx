import React, { useState } from 'react';
import styles from '../../assets/styles/Brands/Brand.module.css';

const Brands= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mountain Vista',
      description: 'Breathtaking mountain landscape'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      title: 'Ocean Waves',
      description: 'Serene beach scenery'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop',
      title: 'Forest Path',
      description: 'Mystical woodland trail'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
      title: 'Desert Sunset',
      description: 'Golden hour in the desert'
    }
  ];

  return (
    <div className={styles.container}>
      <div className="container py-5">
        <div className={styles.header}>
          <h2 className={styles.title}>Visual Gallery</h2>
          <p className={styles.subtitle}>Explore our curated collection</p>
        </div>

        <div className="row g-4">
          {images.map((image, index) => (
            <div key={image.id} className="col-12 col-md-6 col-lg-3">
              <div
                className={`${styles.imageCard} ${activeIndex === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className={styles.image}
                  />
                  <div className={`${styles.overlay} ${activeIndex === index ? styles.overlayActive : ''}`}>
                    <h4 className={styles.imageTitle}>{image.title}</h4>
                    <p className={styles.imageDescription}>{image.description}</p>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.badge}>0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
