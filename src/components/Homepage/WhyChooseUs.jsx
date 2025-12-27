import React from "react";
import styles from "../../assets/styles/Homepage/WhyChooseUs.module.css";
import { FaUserGraduate, FaClock, FaLeaf, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
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
          <h2 className={styles.heading}>Why Choose Hatha Yoga</h2>
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
          <motion.div className="col-lg-3 col-md-6" variants={itemVariant}>
            <div className={styles.card}>
              <FaUserGraduate className={styles.icon} />
              <h5>Expert Teachers</h5>
              <p>
                Learn from certified and experienced yoga instructors who guide
                you with clarity and care.
              </p>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={itemVariant}>
            <div className={styles.card}>
              <FaClock className={styles.icon} />
              <h5>Anytime Practice</h5>
              <p>
                Short or long sessions — practice whenever it fits your
                schedule.
              </p>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={itemVariant}>
            <div className={styles.card}>
              <FaLeaf className={styles.icon} />
              <h5>Mind–Body Balance</h5>
              <p>
                Improve flexibility, strength, focus, and inner calm with every
                session.
              </p>
            </div>
          </motion.div>

          <motion.div className="col-lg-3 col-md-6" variants={itemVariant}>
            <div className={styles.card}>
              <FaVideo className={styles.icon} />
              <h5>On-Demand Classes</h5>
              <p>
                Access a growing library of yoga, meditation, and breathwork
                classes.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
