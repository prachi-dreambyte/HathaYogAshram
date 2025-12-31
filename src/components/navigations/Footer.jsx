import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const footerFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const columnContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const columnItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      variants={footerFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.overlay}></div>

      <div className="container position-relative">

        {/* TOP COLUMNS */}
        <motion.div
          className="row gy-5"
          variants={columnContainer}
        >
          {/* BRAND */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={columnItem}
          >
            <img src={logo} alt="Hatha Yoga Ashram" className={styles.logo} />
            <p className={styles.desc}>
              Hatha Yoga Ashram, founded in 2017 in Rishikesh, India, is one of the
              most trusted yoga teacher training schools. We offer traditional
              Hatha, Ashtanga, Kundalini, Meditation and Pranayama practices
              rooted in ancient yogic wisdom.
            </p>
            <p className={styles.desc}>
              Our mission is to spread authentic yoga teachings across the
              world and help students experience holistic transformation of
              body, mind and soul.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            className="col-lg-2 col-md-6"
            variants={columnItem}
          >
            <h5 className={styles.title}>Quick Links</h5>
            <ul className={styles.list}>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Teachers</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </motion.div>

          {/* YOGA COURSES */}
          <motion.div
            className="col-lg-2 col-md-6"
            variants={columnItem}
          >
            <h5 className={styles.title}>Yoga Courses</h5>
            <ul className={styles.list}>
              <li>100 Hour Yoga TTC</li>
              <li>200 Hour Yoga TTC</li>
              <li>300 Hour Yoga TTC</li>
              <li>500 Hour Yoga TTC</li>
              <li>Kundalini Yoga TTC</li>
              <li>Online Yoga TTC</li>
            </ul>
          </motion.div>

          {/* RETREATS */}
          <motion.div
            className="col-lg-2 col-md-6"
            variants={columnItem}
          >
            <h5 className={styles.title}>Yoga Retreats</h5>
            <ul className={styles.list}>
              <li>Yoga Retreat in Rishikesh</li>
              <li>5 Days Yoga Retreat</li>
              <li>10 Days Yoga Retreat</li>
              <li>20 Days Yoga Retreat</li>
              <li>Meditation Retreat</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="col-lg-2 col-md-6"
            variants={columnItem}
          >
            <h5 className={styles.title}>Registered Office</h5>
            <ul className={styles.contact}>
              <li>
                <FaMapMarkerAlt /> Upper Tapovan, Rishikesh, Uttarakhand – 249192
              </li>
              <li>
                <FaPhoneAlt /> +91 9335606336
              </li>
              <li>
                <FaEnvelope /> info@hathayogashram.com
              </li>
              <li>
                <FaClock /> 7:00 AM – 7:00 PM
              </li>
            </ul>

            <div className={styles.socials}>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* KEYWORDS */}
        <motion.div
          className={styles.keywords}
          variants={columnItem}
        >
          <span>Yoga School in Rishikesh</span>
          <span>Best Yoga Teacher Training India</span>
          <span>200 Hour Yoga TTC</span>
          <span>300 Hour Yoga TTC</span>
          <span>Yoga Retreats in India</span>
          <span>Online Yoga Teacher Training</span>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className={styles.bottom}
          variants={columnItem}
        >
          © {new Date().getFullYear()} Hatha Yoga Ashram. All Rights Reserved.
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
