import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/YogaSchool.module.css";
import ornament from "../../assets/images/linedesign.png";
import yoga1 from "../../assets/images/about-vys1.jpg";
import yoga2 from "../../assets/images/about-vys2.jpg";
import yoga3 from "../../assets/images/about-vys2.jpg";
import yoga4 from "../../assets/images/about-vys1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const YogaSchool = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {/* Heading */}
        <motion.h2 className={styles.heading } variants={fadeUp}>
          Namaste & Welcome to Hatha Yoga Ashram
        </motion.h2>
        <motion.h2 className={styles.subTitle} variants={fadeUp}>
          The Best Yoga School In Rishikesh, India
        </motion.h2>

        <motion.div className={styles.ornamentWrapper} variants={fadeUp}>
          <img src={ornament} alt="Ornament" className={styles.ornamentImage} />
        </motion.div>

        <motion.p className={styles.rating} variants={fadeUp}>
          ⭐ 5 Rated Yoga School
        </motion.p>

        

        {/* Info Boxes */}
        <div className={styles.infoGrid}>
          {[
            "👑 India’s No.1 Yoga School in Rishikesh",
            "🎓 Certified by Yoga Alliance USA",
            "🧘 International Yoga Asana Champions",
            "🌍 Trusted by 13,000+ Students Worldwide",
          ].map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              {item}
            </motion.div>
          ))}
        </div>

        <div className={styles.mainGrid}>
          {/* LEFT CONTENT */}
          <motion.div className={styles.content} variants={slideLeft}>
            <h3 className={styles.innerHeading}>
              Learn with Yoga Alliance® Certified School of Hatha Yoga Teacher
              Training in Rishikesh
            </h3>

            <p className={styles.highlightText}>
              Best Yoga Teacher Training in India · Most Authentic Yoga Alliance
              Registered School
            </p>

            <p>
              Start your yoga career with one of the oldest and most respected
              Hatha Yoga Teacher Training schools in India. At Hatha Yoga
              Ashram, we preserve the purity of traditional yogic teachings
              while aligning our programs with international standards.
            </p>

            <p>
              Become a certified yoga instructor with Yoga Alliance USA
              Certification®. Hatha Yoga Ashram is a Yoga Alliance Registered
              Yoga School (RYS).
            </p>

            <p>
              Upon completion of our courses, graduates become eligible to apply
              for Registered Yoga Teacher (RYT) status with Yoga Alliance.
            </p>

            <div className={styles.buttons}>
              {["200 Hour Yoga TTC", "300 Hour Yoga TTC", "500 Hour Yoga TTC"].map(
                (btn, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {btn}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className={styles.images}>
            {[yoga1, yoga2, yoga3, yoga4].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="Yoga Practice"
                custom={index}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default YogaSchool;
