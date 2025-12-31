import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/YogaRetreat.module.css";
import dividerImg from "../../assets/images/linedesign.png";
import img1 from "../../assets/images/courses/1.png";
import img2 from "../../assets/images/courses/2.png";
import img3 from "../../assets/images/courses/3.png";

const retreats = [
  {
    days: "5 Days Yoga Retreat",
    img: img1,
    private: "₹22,500 ($261)",
    shared: "₹15,500 ($180)",
  },
  {
    days: "10 Days Yoga Retreat",
    img: img2,
    private: "₹40,000 ($464)",
    shared: "₹31,000 ($359)",
  },
  {
    days: "20 Days Yoga Retreat",
    img: img3,
    private: "₹85,000 ($985)",
    shared: "₹64,000 ($742)",
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

const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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

const YogaRetreat = () => {
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
          <h2 className={styles.heading}>
            Yoga Meditation Retreat <span>in Rishikesh</span>
          </h2>

          <p className={styles.subText}>
            Elevate your life with an unforgettable{" "}
            <span>yoga retreat</span> experience. Discover and book rejuvenating
            yoga retreats, vacations, and yoga teacher training courses at
            Hatha Yogashram
          </p>

          <div className={styles.divider}>
            <img src={dividerImg} alt="yoga divider" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.cardGrid}
          variants={gridVariant}
        >
          {retreats.map((item, index) => (
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
              <motion.div
                className={styles.imageBox}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img src={item.img} alt={item.days} />
              </motion.div>

              <h4 className={styles.cardTitle}>{item.days}</h4>

              <p className={styles.price}>
                <strong>Private Stay</strong> {item.private}
              </p>
              <p className={styles.price}>
                <strong>Shared Stay</strong> {item.shared}
              </p>

              <div className={styles.btnGroup}>
                <motion.button
                  className={styles.outlineBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Course
                  <br />
                  Details
                </motion.button>

                <motion.button
                  className={styles.outlineBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book
                  <br />
                  Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default YogaRetreat;
