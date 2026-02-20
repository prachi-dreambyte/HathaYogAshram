import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import styles from "../../assets/styles/Homepage/Ayurveda.module.css";
// Adjust the image import path as needed
import AyurvedaTeaserImg from "../../assets/images/SHIRODHARA.jpg";

const AyurvedaTeaser = () => {
  return (
    <section className={styles.teaserSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.row}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <img
              src={AyurvedaTeaserImg}
              alt="Ayurveda – the science of life"
              className="img-fluid rounded-3 shadow"
            />
          </div>

          {/* Text Column */}
          <div className={styles.textColumn}>
            <h2 className={styles.title}>
              <FaLeaf className={styles.titleIcon} />
               Discover Ayurveda
            </h2>
            <p className={styles.lead}>
              Ayurveda, the ancient “science of life,” offers a holistic path to
              balance your body, mind, and spirit. At Hatha Yogashram, we
              integrate Ayurveda deeply into our yoga teacher trainings and
              therapies.
            </p>
            <p className={styles.description}>
              Learn about the three doshas, daily routines (Dinacharya), seasonal
              practices (Ritucharya), and how Ayurveda complements your yoga
              journey.
            </p>

            {/* Button that redirects to the full Ayurveda page */}
            <Link to="/Ayurveda-Page">
              <button className={styles.exploreButton}>
                Explore Ayurveda →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaTeaser;