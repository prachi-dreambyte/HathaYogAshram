import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/HathaAshramSection.module.css";
import dividerImg from "../../assets/images/linedesign.png";

const API = "http://localhost:8000/api/homeyogaalliance";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HathaAshramSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {data.map((item, index) => (
          <div key={index}>

            {/* ===== HEADING ===== */}
            <motion.div
              className={styles.headingWrapper}
              variants={fadeUp}
            >
              <h2>{item.mainHeading}</h2>

              <span className={styles.divider}>
                <img src={dividerImg} alt="divider" />
              </span>
            </motion.div>

            {/* ===== CONTENT TOP ===== */}
            <motion.div
              className={styles.content}
              variants={staggerContainer}
            >
              <motion.p className={styles.highlight} variants={fadeUp}>
                {item.subHeading}
              </motion.p>

              <motion.p variants={fadeUp}>
                {item.Paragraph}
              </motion.p>

              <h2 className={styles.Yoga}>
                {item.title}
              </h2>
            </motion.div>

            {/* ===== CERTIFICATION LOGOS (MULTIPLE IMAGES) ===== */}
            <motion.div
              className={styles.certifications}
              variants={staggerContainer}
            >
              {item.image?.map((img, i) => (
                <motion.img
                  key={i}
                  src={`http://localhost:8000/${img}`}
                  alt="Yoga Alliance Certification"
                  variants={logoFade}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>

            {/* ===== CONTENT BOTTOM ===== */}
            <motion.div
              className={styles.content}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp}>
                {item.Paragraph1}
              </motion.p>
            </motion.div>

          </div>
        ))}

      </div>

      {/* ===== WAVE SVG ===== */}
      <svg viewBox="0 0 1400 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,100 Q350,50 700,100 T1400,100 L1400,200 L0,200 Z"
          fill="#FFE5E5"
          opacity="0.6"
        />
        <path
          d="M0,120 Q350,80 700,120 T1400,120 L1400,200 L0,200 Z"
          fill="#FFB8B8"
          opacity="0.5"
        />
      </svg>

    </motion.section>
  );
};

export default HathaAshramSection;