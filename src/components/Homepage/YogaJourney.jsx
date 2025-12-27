import React from "react";
import styles from "../../assets/styles/Homepage/YogaJourney.module.css";
import { motion } from "framer-motion";

import pose1 from "../../assets/images/zigzag1.jpg";
import pose2 from "../../assets/images/zigzag2.jpg";
import pose3 from "../../assets/images/zigzag3.jpg";

const journey = [
  {
    title: "Build Strength & Stability",
    text:
      "Yoga strengthens the body from the inside out by cultivating awareness, control, and balance.Through mindful poses and conscious breathing, you build stability in both body and mind, improve posture, and awaken muscles often ignored in daily life.Over time, this steady practice develops lasting physical resilience, supports joint health, and creates a strong yet flexible foundation that carries into everything you do — on and off the mat.",
    image: pose1,
  },
  {
    title: "Find Balance & Flexibility",
    text:
      "With regular practice, yoga gradually increases flexibility and balance while teaching the body to move with intelligence rather than force.Each movement encourages ease in the muscles, stability in the joints, and softness in the breath, allowing tension to release and natural mobility to return.",
    image: pose2,
  },
  {
    title: "Calm the Mind & Restore Energy",
    text:
      "Yoga is a moving meditation — a gentle rhythm of breath and movement that quiets mental noise and softens inner tension.As awareness deepens, stress begins to dissolve and clarity naturally returns, helping you feel grounded, present, and connected in each moment.",
    image: pose3,
  },
];

const imageAnim = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -120 : 120,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});

const textAnim = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const YogaJourney = () => {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* HEADER */}
        <div className={styles.header}>
          <h2>Your Yoga Journey</h2>
          <p>
            Yoga is not a destination — it is a journey of strength, balance,
            and inner awareness.
          </p>
        </div>

        {/* ZIG ZAG CONTENT */}
        {journey.map((item, index) => (
          <div
            key={index}
            className={`${styles.row} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              className={styles.imageBox}
              variants={imageAnim(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} />
            </motion.div>

            {/* TEXT */}
            <motion.div
              className={styles.content}
              variants={textAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default YogaJourney;
