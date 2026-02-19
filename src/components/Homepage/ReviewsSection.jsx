import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/ReviewsSection.module.css";

import yogaAlliance from "../../assets/images/YogaAlliance.webp";
import tripadvisor from "../../assets/images/trip-advisor-logo.png";
import google from "../../assets/images/Google-places-logo.webp";
import facebook from "../../assets/images/facebook-rating.webp";
import instagram from "../../assets/images/unnamed.png";
import youtube from "../../assets/images/YouTube_full-color_icon_(2017).svg.webp";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const ReviewsSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {/* ===== HEADING ===== */}
        <motion.h2
          className={styles.heading}
          variants={headingVariant}
        >
          We Know This is a Big Step For You
        </motion.h2>

        {/* ===== REVIEWS ===== */}
        <motion.div
          className={styles.reviewsGrid}
          variants={gridVariant}
        >
          {[
            {
              img: yogaAlliance,
              rating: "5.0/5 Star",
              stars: "★★★★★",
              title: "Yoga Alliance Review",
            },
            {
              img: tripadvisor,
              rating: "4/5 Star",
              stars: "★★★★☆",
              title: "Trip Advisor",
            },
            {
              img: google,
              rating: "5/5 Star",
              stars: "★★★★★",
              title: "Google Review",
            },
            {
              img: facebook,
              rating: "5/5 Star",
              stars: "★★★★★",
              title: "Facebook Review",
            },
            {
              img: instagram,
              rating: "10K+ Followers",
              stars: "★★★★★",
              title: "Instagram",
            },
            {
              img: youtube,
              rating: "5K+ Subscribers",
              stars: "★★★★★",
              title: "YouTube Channel",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.reviewCard}
              variants={cardVariant}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item.img} alt={item.title} />
              <p className={styles.rating}>{item.rating}</p>
              <div className={styles.stars}>{item.stars}</div>
              <h4>{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ReviewsSection;