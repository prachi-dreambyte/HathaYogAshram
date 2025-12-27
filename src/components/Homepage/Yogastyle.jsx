import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/Yogastyle.module.css";

// images
import vinyasa from "../../assets/images/yoga1.webp";
import hatha from "../../assets/images/yoga2.webp";
import yin from "../../assets/images/yoga3.webp";
import restorative from "../../assets/images/yoga4.webp";
import kundalini from "../../assets/images/yoga5.webp";
import conditioning from "../../assets/images/yoga6.webp";
import power from "../../assets/images/yoga7.webp";
import prenatal from "../../assets/images/yoga8.webp";

const yogaStyles = [
  { title: "Vinyasa Flow", img: vinyasa },
  { title: "Hatha", img: hatha },
  { title: "Yin", img: yin },
  { title: "Restorative", img: restorative },
  { title: "Kundalini", img: kundalini },
  { title: "Yoga Conditioning", img: conditioning },
  { title: "Power Yoga", img: power },
  { title: "Prenatal", img: prenatal },
];

/* 🔮 Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textFloat = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const YogaStyle = () => {
  return (
    <section className={styles.homeSection}>
      <div className="container">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textFloat}
          className="mb-5"
        >
          <motion.h1
            className={styles.heading}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Create a practice that has purpose
          </motion.h1>
          <p className={styles.subText}>
            Whether you’re just beginning or experienced, our yoga styles help
            you build balance, strength, and calm.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="row g-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {yogaStyles.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <motion.div
                className={styles.card}
                variants={card}
                whileHover={{
                  y: -14,
                  rotateX: 6,
                  rotateY: -6,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                {/* Image Parallax */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
               <motion.div
  className={styles.cardOverlay}
  initial={{ opacity: 1, y: 0 }}
  whileHover={{ y: -6 }}
  transition={{ duration: 0.4 }}
>

                  <span>YOGA</span>
                  <h5>{item.title}</h5>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={styles.exploreBtn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore our 25+ styles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default YogaStyle;
