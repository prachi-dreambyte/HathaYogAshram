import React from "react";
import styles from "../../assets/styles/Homepage/YogaAbout.module.css";
import yogaimage from "../../assets/images/f62d668b45b828a6d35d5f069136d18f.jpg";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const YogaAbout = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center gy-4">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="col-lg-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>
              Yoga Is More Than Movement
            </h2>

            <p className={styles.para}>
              Yoga is not just about flexibility or strength — it is a mindful
              practice that connects breath, body, and awareness. Rooted in
              ancient tradition, yoga helps you slow down, tune inward, and
              move with intention.
            </p>

            <p className={styles.para}>
              Through consistent practice, yoga supports physical health,
              emotional balance, and mental clarity. Whether you seek calm,
              energy, healing, or strength, yoga meets you exactly where you
              are — without judgment or pressure.
            </p>

            <p className={styles.para}>
              At Hatha Yoga, we believe yoga is a lifelong journey. Our approach
              focuses on gentle guidance, mindful movement, and creating space
              for you to reconnect with yourself — on and off the mat.
            </p>

            <motion.div
              className={styles.points}
              variants={listVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Improve flexibility & strength",
                "Reduce stress & anxiety",
                "Build awareness & balance",
                "Support a calm, focused mind",
              ].map((text, index) => (
                <motion.span key={index} variants={itemVariant}>
                  ✓ {text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="col-lg-6"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageBox}>
              <img src={yogaimage} alt="Yoga mindfulness" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default YogaAbout;
