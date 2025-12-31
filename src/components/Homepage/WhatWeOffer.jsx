import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/WhatWeOffer.module.css";
import { FaBook, FaAward, FaUserGraduate } from "react-icons/fa";
import dividerIcon from "../../assets/images/linedesign.png";

const data = [
  {
    icon: <FaBook />,
    title: "Intensive\nFormat",
    text:
      "Immerse yourself in our intensive format to achieve rapid progress and deepen your practice over an accelerated timeframe.",
  },
  {
    icon: <FaAward />,
    title: "Yoga Teacher\nCertification",
    text:
      "Become a certified yoga instructor in just 4 weeks with our comprehensive training program.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Experienced\nInstructor",
    text:
      "Benefit from the expertise of a seasoned yoga instructor with years of practice and teaching, ensuring high-quality guidance and support.",
  },
];

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const headingVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconHover = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

const WhatWeOffer = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className={styles.headingWrapper}
          variants={headingVariant}
        >
          <h2 className={styles.heading}>What We Offer</h2>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.line} />
            <img
              src={dividerIcon}
              alt="Yoga Divider"
              className={styles.dividerImage}
            />
            <span className={styles.line} />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.cards}
          variants={containerVariant}
        >
          {data.map((item, index) => (
            <motion.div
              className={styles.card}
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={styles.iconWrapper}>
                <motion.div
                  className={styles.icon}
                  variants={iconHover}
                  whileHover="hover"
                >
                  {item.icon}
                </motion.div>
              </div>

              <h3 className={styles.cardTitle}>
                {item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>

              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatWeOffer;
