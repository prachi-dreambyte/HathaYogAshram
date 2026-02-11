import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import styles from '../../assets/styles/Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navRef = useRef(null);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  // Mobile toggle — only one open at a time
  const toggleMobile = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // ===== Reusable Desktop Dropdown =====
  const DesktopDropdown = ({ name, label, children }) => (
    <div
      className={styles.dropdownWrap}
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button className={styles.dropdownBtn}>{label} ▾</button>

      {/* Bridge — invisible box that covers the gap between button and dropdown */}
      {openDropdown === name && <div className={styles.bridge} />}

      <AnimatePresence>
        {openDropdown === name && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // ===== Reusable Mobile Accordion =====
  const MobileAccordion = ({ name, label, children }) => (
    <>
      <div
        className={styles.mobileTitle}
        onClick={() => toggleMobile(name)}
      >
        <span>{label}</span>
        <span className={styles.arrow}>{mobileDropdown === name ? "▴" : "▾"}</span>
      </div>

      {/* Simple conditional render — no height animation, no overflow issues */}
      {mobileDropdown === name && (
        <div className={styles.subMenu}>
          {children}
        </div>
      )}
    </>
  );

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>📍 Hatha Yogashram, Balaknath Rd, Upper Tapovan, Rishikesh, Uttarakhand India 249192</span>
            <span>📞 +91 9335606336</span>
          </div>
          <div className={styles.topRight}>
            <span className={styles.yogaId}>Yoga Alliance ID: 401771</span>
            <div className={styles.social}>
              <a href="https://www.facebook.com/profile.php?id=100095297992781" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/hathayogashram/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.container} ref={navRef}>

          {/* LEFT NAV — DESKTOP */}
          <nav className={styles.desktopNav}>
            <Link to="/" onClick={closeAll}>Home</Link>

            <DesktopDropdown name="about" label="About">
              <Link to="/Our-Founder" onClick={closeAll}>Founder</Link>
              <Link to="/teachers" onClick={closeAll}>Our Teachers</Link>
              <Link to="/Our-School" onClick={closeAll}>Our School</Link>
              <Link to="/Accommodation-Food" onClick={closeAll}>Accommodation</Link>
              <Link to="/blog" onClick={closeAll}>Blog</Link>
              <Link to="/Yoga-Books" onClick={closeAll}>Yoga Books</Link>
              <Link to="/gallery" onClick={closeAll}>Gallery</Link>
            </DesktopDropdown>

            <DesktopDropdown name="rishikesh" label="Rishikesh TTC">
              <Link to="/YogaCourse100" onClick={closeAll}>100 Hour TTC</Link>
              <Link to="/YogaCourse200" onClick={closeAll}>200 Hour TTC</Link>
              <Link to="/YogaCourse300" onClick={closeAll}>300 Hour TTC</Link>
              <Link to="/YogaCourse500" onClick={closeAll}>500 Hour TTC</Link>
            </DesktopDropdown>

            <DesktopDropdown name="short" label="Short Course">
              <Link to="/" onClick={closeAll}>Meditation</Link>
              <Link to="/" onClick={closeAll}>Pranayama</Link>
            </DesktopDropdown>
          </nav>

          {/* LOGO */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Yoga Logo" />
            </Link>
          </div>

          {/* RIGHT NAV — DESKTOP */}
          <nav className={styles.desktopNav}>
            <DesktopDropdown name="online" label="Online Courses">
              <Link to="/Online-YTTC" onClick={closeAll}>Online YTTC</Link>
              <Link to="/Yoga-Online" onClick={closeAll}>Yoga Online</Link>
            </DesktopDropdown>

            <Link to="/payment" onClick={closeAll}>Payment</Link>
            <Link to="/contact-us" onClick={closeAll}>Contact</Link>
            <Link to="/BookingForm" className={styles.applyBtn} onClick={closeAll}>Apply Today</Link>
          </nav>

          {/* HAMBURGER */}
          <div className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Link to="/" onClick={closeAll} className={styles.mobileLink}>Home</Link>

              <MobileAccordion name="about" label="About">
                <Link to="/Our-Founder" onClick={closeAll}>Founder</Link>
                <Link to="/teachers" onClick={closeAll}>Our Teachers</Link>
                <Link to="/Our-School" onClick={closeAll}>Our School</Link>
                <Link to="/Accommodation-Food" onClick={closeAll}>Accommodation</Link>
                <Link to="/Yoga-Books" onClick={closeAll}>Yoga Books</Link>
                <Link to="/blog" onClick={closeAll}>Blog</Link>
                <Link to="/gallery" onClick={closeAll}>Gallery</Link>
              </MobileAccordion>

              <MobileAccordion name="rishikesh" label="Rishikesh TTC">
                <Link to="/YogaCourse100" onClick={closeAll}>100 Hour TTC</Link>
                <Link to="/YogaCourse200" onClick={closeAll}>200 Hour TTC</Link>
                <Link to="/YogaCourse300" onClick={closeAll}>300 Hour TTC</Link>
                <Link to="/YogaCourse500" onClick={closeAll}>500 Hour TTC</Link>
              </MobileAccordion>

              <MobileAccordion name="short" label="Short Course">
                <Link to="/" onClick={closeAll}>Meditation</Link>
                <Link to="/" onClick={closeAll}>Pranayama</Link>
              </MobileAccordion>

              <MobileAccordion name="online" label="Online Courses">
                <Link to="/Online-YTTC" onClick={closeAll}>Online YTTC</Link>
                <Link to="/Yoga-Online" onClick={closeAll}>Yoga Online</Link>
              </MobileAccordion>

              <Link to="/payment" onClick={closeAll} className={styles.mobileLink}>Payment</Link>
              <Link to="/contact-us" onClick={closeAll} className={styles.mobileLink}>Contact</Link>
              <Link to="/BookingForm" className={styles.applyBtn} onClick={closeAll}>Apply Today</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;