import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/HowToReach.module.css";
import { FaPlane, FaCar, FaTrain } from "react-icons/fa";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const sectionFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingFade = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mapFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HowToReach = () => {
  return (
    <motion.section
      className={styles.reachSection}
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <motion.div
            className="col-12 col-md-6"
            variants={listContainer}
          >
            <div className={styles.content}>
              <motion.h2
                className={styles.title}
                variants={headingFade}
              >
                How to Reach Us ?
                <span>Simple & Comfortable Travel Options</span>
              </motion.h2>

              <motion.div
                className={styles.card}
                variants={listItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className={styles.iconBox}>
                  <FaPlane />
                </div>
                <div>
                  <h4>By Airways</h4>
                  <p>
                    Fly to Delhi International Airport, then take a domestic
                    flight to Jolly Grant Airport (Dehradun). Taxis are available
                    or we can arrange one for you.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.card}
                variants={listItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className={styles.iconBox}>
                  <FaCar />
                </div>
                <div>
                  <h4>By Roadways</h4>
                  <p>
                    Enjoy a scenic 5–6 hour drive from Delhi to Rishikesh through
                    smooth highways and beautiful landscapes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.card}
                variants={listItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className={styles.iconBox}>
                  <FaTrain />
                </div>
                <div>
                  <h4>By Railways</h4>
                  <p>
                    Reach Haridwar Railway Station and travel onward to Yog
                    Nagari Rishikesh by taxi or tuk-tuk.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Map */}
          <motion.div
            className="col-12 col-md-6 mt-4 mt-md-0"
            variants={mapFade}
          >
            <div className={styles.mapCard}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.1889346965218!2d78.31528188676455!3d30.13198084966086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a92133223b%3A0x5769fde72c39e6f5!2sHatha%20Yogashram!5e1!3m2!1sen!2sus!4v1767074170455!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default HowToReach;
