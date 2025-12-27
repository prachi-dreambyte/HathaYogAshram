import React from 'react';
import styles from '../../assets/styles/Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ANIMATION VARIANTS */
const footerReveal = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const columnAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div className="row gy-4" variants={stagger}>
          {/* BRAND */}
          <motion.div className="col-lg-4 col-md-6" variants={columnAnim}>
            <motion.img
              src={logo}
              alt="Hatha Yoga Logo"
              className={styles.logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <p className={styles.desc}>
              A mindful yoga experience designed to help you move, breathe, and
              live with balance and intention.
            </p>

            <motion.div
              className={styles.socials}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
                (Icon, i) => (
                  <motion.a
                    href="#"
                    key={i}
                    whileHover={{ y: -6, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon />
                  </motion.a>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* LINKS */}
          <motion.div className="col-lg-2 col-md-6" variants={columnAnim}>
            <h5 className={styles.title}>Explore</h5>
            <ul className={styles.links}>
              {['Home', 'Classes', 'Teachers', 'Pricing'].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SUPPORT */}
          <motion.div className="col-lg-2 col-md-6" variants={columnAnim}>
            <h5 className={styles.title}>Support</h5>
            <ul className={styles.links}>
              {['Help Center', 'Privacy Policy', 'Terms', 'Contact'].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to="#">{item}</Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div className="col-lg-4 col-md-6" variants={columnAnim}>
            <h5 className={styles.title}>Stay Connected</h5>
            <p className={styles.newsText}>
              Get weekly yoga inspiration and updates.
            </p>

            <motion.form
              className={styles.newsletter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Hatha Yoga Ashram. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
