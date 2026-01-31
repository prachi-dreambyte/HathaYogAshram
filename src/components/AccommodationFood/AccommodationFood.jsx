import React from 'react';
import styles from '../../assets/styles/AccommodationFood/AccommodationFood.module.css';

/* ================= IMAGES (Google) ================= */

const building1Images = [
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
  'https://images.unsplash.com/photo-1582719478181-2b6d7b2c1b4c',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
];

const building2Images = [
  'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  'https://images.unsplash.com/photo-1618220179428-22790b461013',
];

const foodImages = [
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  'https://images.unsplash.com/photo-1572441710534-6801c27c29db',
  'https://images.unsplash.com/photo-1542444459-db3e07fdbf15',
];

const AccommodationFood = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        {/* ================= HEADER ================= */}
        <span className={styles.topLabel}>
          Say Hello To Your Home Away From Home!
        </span>

        <h1 className={styles.pageTitle}>
          Accommodation & Food At Rishikesh Yogkulam®
        </h1>

        <div className={styles.breadcrumb}>
          Home <span>/</span> Accommodation
        </div>

        {/* ================= ACCOMMODATION ================= */}
        <h2 className={styles.sectionTitle}>
          Experience the Best Accommodation at Rishikesh Yogkulam
        </h2>

        <p className={styles.description}>
          At Rishikesh Yogkulam® you will surely feel the comfort of a Home Away
          From Home. Our accommodations are designed to provide peace, comfort
          and focus during your yoga teacher training journey.
        </p>

        <ul className={styles.features}>
          <li><strong>Comfort & Convenience:</strong> Modern, cozy rooms.</li>
          <li>
            <strong>Two Dedicated Buildings:</strong> For
            <span> 200 Hour</span> & <span>300 Hour YTTC</span>.
          </li>
          <li>
            <strong>Homely Atmosphere:</strong> Calm, peaceful environment.
          </li>
          <li>
            <strong>Modern Facilities:</strong> Clean rooms & bathrooms.
          </li>
          <li>
            <strong>AC Available:</strong> On additional cost (limited rooms).
          </li>
        </ul>

        {/* ================= BUILDING 1 ================= */}
        <h3 className={styles.subTitle}>
          Building 1 (200 Hour Yoga Teacher Training)
        </h3>

        <div className={styles.imageGrid}>
          {building1Images.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img src={img} alt="Accommodation" />
            </div>
          ))}
        </div>

        {/* ================= BUILDING 2 ================= */}
        <h3 className={styles.subTitle}>
          Building 2 (300 Hour Yoga Teacher Training)
        </h3>

        <div className={styles.imageGrid}>
          {building2Images.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img src={img} alt="Accommodation" />
            </div>
          ))}
        </div>

        <p className={styles.note}>
          <strong>Note:</strong> Buildings assigned to each course may be
          interchanged depending on availability.
        </p>

        {/* ================= FOOD ================= */}
        <h2 className={styles.sectionTitle}>
          Nourish Your Body, Mind & Soul With Our Vegetarian Food
        </h2>

        <p className={styles.description}>
          Our dedicated kitchen staff prepares fresh, healthy and delicious
          vegetarian meals that support your yogic lifestyle and training.
        </p>

        <ul className={styles.features}>
          <li><strong>Three Meals Daily:</strong> Breakfast, lunch & dinner.</li>
          <li><strong>Refreshing Teas:</strong> Herbal teas & juices.</li>
          <li>
            <strong>Special Diets:</strong> Vegan & gluten-free (on request).
          </li>
          <li>
            <strong>Sundays Free:</strong> Explore Rishikesh cafés.
          </li>
        </ul>

        <div className={styles.imageGrid}>
          {foodImages.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img src={img} alt="Food" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationFood;
