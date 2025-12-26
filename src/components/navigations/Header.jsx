import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../assets/styles/Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

/* ================= VARIANTS ================= */

const headerAnim = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const logoAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const mobileMenuAnim = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={styles.header}
      variants={headerAnim}
      initial="hidden"
      animate="show"
    >
      <div className={styles.container}>
        {/* LEFT MENU */}
        <motion.nav
          className={styles.desktopNav}
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          {["About", "Offerings", "Schedule"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={navItem}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* LOGO */}
        <motion.div className={styles.logo} variants={logoAnim}>
          <img src={logo} alt="Mah Yoga" />
          <span>MAH YOGA</span>
        </motion.div>

        {/* RIGHT MENU */}
        <motion.nav
          className={styles.desktopNav}
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          {["Blog", "Inspiration", "Contact"].map((item) => (
            <motion.div key={item} variants={navItem}>
              <Link to={`#${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}

          <motion.div variants={navItem}>
            <Link to="/login" className={styles.authBtn}>
              Login / Signup
            </Link>
          </motion.div>
        </motion.nav>

        {/* HAMBURGER */}
        <motion.div
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ☰
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className={styles.mobileNav}
              variants={mobileMenuAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {[
                "About",
                "Offerings",
                "Schedule",
                "Blog",
                "Inspiration",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}

              <Link
                to="/login"
                className={styles.authBtn}
                onClick={closeMenu}
              >
                Login / Signup
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
