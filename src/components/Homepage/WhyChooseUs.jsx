import React from "react";
import styles from "../../assets/styles/Homepage/WhyChooseUs.module.css";
import {FaUserGraduate, 
  FaClock, 
  FaLeaf, 
  FaVideo,
  FaHandsHelping,
  FaMountain,
  FaScroll,
  FaUtensils,
  FaSeedling,
  FaPray,
  FaOm,
  FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const iconHover = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>Why Choose Hatha Yog</h2>
          <p className={styles.subText}>
            Everything you need to build a consistent, mindful yoga practice —
            guided by experts and designed for real life.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="row g-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
      icon: FaUserGraduate,
      title: "Expert Teachers",
      text: "Learn from certified and experienced yoga instructors who guide you with clarity and care.",
    },
    {
      icon: FaClock,
      title: "Anytime Practice",
      text: "Short or long sessions — practice whenever it fits your schedule.",
    },
    {
      icon: FaLeaf,
      title: "Mind–Body Balance",
      text: "Improve flexibility, strength, focus, and inner calm with every session.",
    },
    {
      icon: FaVideo,
      title: "On-Demand Classes",
      text: "Access a growing library of yoga, meditation, and breathwork classes.",
    },
    {
      icon: FaHandsHelping,
      title: "Teaching Approach",
      text: "Hatha Yog is taught with patience, discipline, and personal guidance. The focus is not just on postures, but on correct alignment, breath awareness, and inner experience.",
    },
    {
      icon: FaMountain,
      title: "Strong Foundation",
      text: "Build a solid foundation for all yoga practices. Master basic asanas, pranayama, and meditation to develop strength, stability, flexibility, and mindfulness.",
    },
    {
      icon: FaScroll,
      title: "Ancient Legacy",
      text: "Hatha Yog carries the legacy of ancient yogis and sages. This knowledge has been passed down through generations, preserved in its pure form.",
    },
    {
      icon: FaUtensils,
      title: "Yogic Food Culture",
      text: "Food is an essential part of yogic life. We follow a traditional yogic lifestyle that supports both body and mind.",
    },
    {
      icon: FaSeedling,
      title: "Satvik Food",
      text: "Pure Satvik food, prepared with awareness and simplicity. Satvik meals help cleanse the body, calm the mind, and enhance spiritual growth.",
    },
    {
      icon: FaPray,
      title: "Ancient Parampara",
      text: "Our teachings follow the ancient Guru–Shishya Parampara, where knowledge is transmitted with respect, discipline, and direct experience.",
    },
    {
      icon: FaOm,
      title: "Ancient Rules & Discipline",
      text: "Practiced according to ancient yogic rules—including daily routine, self-discipline, simplicity, and mindful living—to support inner transformation.",
    },
    {
      icon: FaHome,
      title: "We are not Company we are Ashram",
      text: "We are an ashram, where yoga is a way of life, not a product. Our aim is spiritual growth, self-awareness, and living in harmony with nature.",
    },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              variants={itemVariant}
            >
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  variants={iconHover}
                  whileHover="hover"
                  className={styles.icon}
                >
                  <item.icon />
                </motion.div>

                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
