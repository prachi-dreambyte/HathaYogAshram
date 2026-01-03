import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/StudentReviews.module.css";
import reviews from "./reviewsData";
import dividerImg from "../../assets/images/linedesign.png";
/* ===================== */
/* Animation Variants */
/* ===================== */

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StudentReviews = () => {
  return (
    <motion.section
      className={styles.reviewSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          variants={headingVariant}
        >
          <h2 className={styles.heading}>
            Student’s Short Review - Student’s Experience With Us
          </h2>
          <span className={styles.divider}>
            <img src={dividerImg} alt="divider" />
          </span>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="row g-4"
          variants={containerVariant}
        >
          {reviews.map((item, index) => (
            <motion.div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
              key={index}
              variants={cardVariant}
            >
              <motion.div
                className={styles.card}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={item.thumbnail}
                  alt="student review"
                  className={styles.thumbnail}
                />

                <motion.div
                  className={styles.playIcon}
                  whileHover={{ scale: 1.2 }}
                >
                  <span></span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StudentReviews;
