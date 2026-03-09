import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/AccommodationFood/AccommodationFood.module.css";

const API = "http://localhost:8000/api/accommodation";

const AccommodationFood = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const res = await axios.get(API);

      if (res.data.data.length > 0) {
        setData(res.data.data[0]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <section className={styles.wrapper}>
      
      {/* HERO HEADER */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>
            Say Hello To Your Home Away From Home!
          </span>

          <h1 className={styles.pageTitle}>
            Accommodation & Food At Rishikesh Yogkulam®
          </h1>

          <div className={styles.breadcrumb}>
            Home <span>/</span> Accommodation
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        
        {/* ACCOMMODATION */}
        <h2 className={styles.sectionTitle}>
          {data.sectionTitle}
        </h2>

        <p className={styles.description}>
          {data.description}
        </p>

        <ul className={styles.features}>
          <li>{data.feature1}</li>
          <li>{data.feature2}</li>
          <li>{data.feature3}</li>
          <li>{data.feature4}</li>
          <li>{data.feature5}</li>
        </ul>

        {/* BUILDING 1 */}
        <h3 className={styles.subTitle}>
          {data.building1Title}
        </h3>

        <div className={styles.imageGrid}>
          {data.building1Images?.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img
                src={`http://localhost:8000/uploads/${img}`}
                alt="Building1"
              />
            </div>
          ))}
        </div>

        {/* BUILDING 2 */}
        <h3 className={styles.subTitle}>
          {data.building2Title}
        </h3>

        <div className={styles.imageGrid}>
          {data.building2Images?.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img
                src={`http://localhost:8000/uploads/${img}`}
                alt="Building2"
              />
            </div>
          ))}
        </div>

        <p className={styles.note}>
          <strong>Note:</strong> {data.note}
        </p>

        <div className={styles.divider}></div>

        {/* FOOD */}
        <h2 className={styles.sectionTitle}>
          {data.foodTitle}
        </h2>

        <p className={styles.description}>
          {data.foodDescription}
        </p>

        <ul className={styles.features}>
          <li>{data.foodFeature1}</li>
          <li>{data.foodFeature2}</li>
          <li>{data.foodFeature3}</li>
          <li>{data.foodFeature4}</li>
        </ul>

        <div className={styles.imageGrid}>
          {data.foodImages?.map((img, i) => (
            <div className={styles.imageCard} key={i}>
              <img
                src={`http://localhost:8000/uploads/${img}`}
                alt="Food"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccommodationFood;