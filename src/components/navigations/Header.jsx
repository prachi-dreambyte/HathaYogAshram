import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../assets/styles/Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <div className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>
              <span className={styles.icon}>📍</span>
              Manzil Balaknath Road Upper Tapovan Rishikesh
            </span>
            <span>
              <span className={styles.icon}>📞</span>
              +91 9335606336
            </span>
          </div>

          <div className={styles.topRight}>
  <span className={styles.yogaId}>Yoga Alliance ID: 401771</span>

  <div className={styles.social}>
    <a
      href="https://www.facebook.com/profile.php?id=100095297992781"
      className={styles.socialIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/hathayogashram/"
      className={styles.socialIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
  </div>
</div>

        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.container}>
          {/* LEFT MENU */}
          <nav className={styles.desktopNav}>
            <Link to="/" onClick={closeAll}>
              Home
            </Link>

            {/* ABOUT */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown('about')}>About ▾</button>
              <AnimatePresence>
                {openDropdown === 'about' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/Our-Founder" onClick={closeAll}>
                      Founder
                    </Link>
                    <Link to="/teachers" onClick={closeAll}>
                      Our Teachers
                    </Link>
                    <Link to="/Our-School" onClick={closeAll}>
                      Our School
                    </Link>
                    <Link to="/" onClick={closeAll}>
                      Accommodation
                    </Link>
                    <Link to="/gallery" onClick={closeAll}>
                      Gallery
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RISHIKESH TTC */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown('rishikesh')}>
                Rishikesh TTC ▾
              </button>
              <AnimatePresence>
                {openDropdown === 'rishikesh' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/" onClick={closeAll}>
                      200 Hour TTC
                    </Link>
                    <Link to="/" onClick={closeAll}>
                      300 Hour TTC
                    </Link>
                    <Link to="/" onClick={closeAll}>
                      500 Hour TTC
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SHORT COURSE */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown('short')}>
                Short Course ▾
              </button>
              <AnimatePresence>
                {openDropdown === 'short' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/" onClick={closeAll}>
                      Meditation
                    </Link>
                    <Link to="/" onClick={closeAll}>
                      Pranayama
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* LOGO */}
          <div className={styles.logo}>
            <img src={logo} alt="Yoga Logo" />
          </div>

          {/* RIGHT MENU */}
          <nav className={styles.desktopNav}>
            <Link to="/" onClick={closeAll}>
              Online Courses
            </Link>
            <Link to="/" onClick={closeAll}>
              Payment
            </Link>
            <Link to="/contact-us" onClick={closeAll}>
              Contact
            </Link>
            <Link to="/apply" className={styles.applyBtn} onClick={closeAll}>
              Apply Today
            </Link>
          </nav>

          {/* HAMBURGER */}
          <div
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link to="/" onClick={closeAll}>
                Home
              </Link>
              <Link to="/" onClick={closeAll}>
                About
              </Link>
              <Link to="/" onClick={closeAll}>
                Rishikesh TTC
              </Link>
              <Link to="/" onClick={closeAll}>
                Short Course
              </Link>
              <Link to="/" onClick={closeAll}>
                Online Courses
              </Link>
              <Link to="/" onClick={closeAll}>
                Payment
              </Link>
              <Link to="/" onClick={closeAll}>
                Contact
              </Link>
              <Link to="/apply" className={styles.applyBtn} onClick={closeAll}>
                Apply Today
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
