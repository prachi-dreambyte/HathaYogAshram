import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Footer.module.css';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const footerFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
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
    transition: { duration: 0.6, ease: 'easeOut' },
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

      <div className="container-fluid p-5 position-relative">
        {/* MAIN ROW */}
        <motion.div
          className="row gy-5 gx-5 align-items-start"
          variants={columnContainer}
        >
          {/* LOGO + DESCRIPTION */}
          <motion.div className="col-lg-4 col-md-12" variants={columnItem}>
            <div className={styles.brandWrap}>
              <img src={logo} alt="Hatha Yoga Ashram" className={styles.logo} />
              <p className={styles.desc}>
                Hatha Yoga Ashram, founded in 2017 in Rishikesh, India, is one
                of the most trusted yoga teacher training schools.
                <br />
                We offer traditional Hatha, Ashtanga, Kundalini, Meditation and
                Pranayama practices rooted in ancient yogic wisdom.
              </p>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div className="col-lg-1 col-md-4" variants={columnItem}>
            <h5 className={styles.title}>Quick Links</h5>
            <ul className={styles.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/teachers">Our Teachers</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* KUNDALINI LINKS */}
          <motion.div className="col-lg-2 col-md-4" variants={columnItem}>
            <h5 className={styles.title}>Kundalini Links</h5>
            <ul className={styles.list}>
              <li>
                <Link to="/kundalini-200">200 Hour Kundalini</Link>
              </li>
              <li>
                <Link to="/kundalini-300">300 Hour Kundalini</Link>
              </li>
            </ul>
          </motion.div>

          {/* YOGA COURSES */}
          <motion.div className="col-lg-2 col-md-4" variants={columnItem}>
            <h5 className={styles.title}>Yoga Courses</h5>
            <ul className={styles.list}>
              <li>
                {' '}
                <Link to="/vedic-mantra">Vedic mantra</Link>
              </li>
              <li>100 Hour Yoga TTC</li>
              <li>200 Hour Yoga TTC</li>
              <li>300 Hour Yoga TTC</li>
              <li>500 Hour Yoga TTC</li>
            </ul>
          </motion.div>

          {/* YOGA RETREATS */}
          <motion.div className="col-lg-1 col-md-4" variants={columnItem}>
            <h5 className={styles.title}>Yoga Retreats</h5>
            <ul className={styles.list}>
              <li>
                {' '}
                <Link to="/meditation-retreat">Yoga Retreat</Link>
              </li>
              <li>
                {' '}
                <Link to="/5-days-yoga-retreat">5 Days Retreat</Link>
              </li>
              <li>
                {' '}
                <Link to="/10-days-yoga-retreat">10 Days Retreat</Link>
              </li>
              <li>
                {' '}
                <Link to="/20-days-yoga-retreat">20 Days Retreat</Link>
              </li>
            </ul>
          </motion.div>

          {/* REGISTERED OFFICE */}
          <motion.div className="col-lg-2 col-md-12" variants={columnItem}>
            <h5 className={styles.title}>Registered Office</h5>
            <ul className={styles.contact}>
              <li>
                <FaMapMarkerAlt /> Upper Tapovan, Rishikesh
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
        <motion.div className={styles.keywords} variants={columnItem}>
          <span>Yoga School in Rishikesh</span>
          <span>Best Yoga Teacher Training India</span>
          <span>200 Hour Yoga TTC</span>
          <span>300 Hour Yoga TTC</span>
          <span>Yoga Retreats in India</span>
        </motion.div>

        {/* BOTTOM */}
        <motion.div className={styles.bottom} variants={columnItem}>
          © {new Date().getFullYear()} Hatha Yoga Ashram. All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
