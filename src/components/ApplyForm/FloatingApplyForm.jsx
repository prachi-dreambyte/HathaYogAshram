import React, { useState, useEffect } from "react";
import ApplyForm from "./ApplyForm";
import styles from "../../assets/styles/ApplyForm/FloatingApplyForm.module.css";

const FloatingApplyForm = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Detect sticky/fixed header height
  useEffect(() => {
    const detectHeader = () => {
      const selectors = ["header", "nav", ".header", ".navbar", "#header", "[role='banner']"];
      let maxBottom = 0;
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) {
          const rect = el.getBoundingClientRect();
          const pos = window.getComputedStyle(el).position;
          if ((pos === "fixed" || pos === "sticky") && rect.bottom > maxBottom) {
            maxBottom = rect.bottom;
          }
        }
      }
      setHeaderHeight(maxBottom);
    };

    detectHeader();
    window.addEventListener("resize", detectHeader);
    return () => window.removeEventListener("resize", detectHeader);
  }, []);

  // Auto-open the form when user visits or refreshes the page
  useEffect(() => {
    setOpen(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Trigger close animation then unmount
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setOpen(false);
    }, 480);
  };

  return (
    <>
      {/* Floating Apply Button */}
      {!open && !closing && (
        <button
          className={styles.floatingBtn}
          onClick={() => setOpen(true)}
        >
          Apply Now
        </button>
      )}

      {/* Full-Screen Overlay — starts BELOW header */}
      {(open || closing) && (
        <div
          className={`${styles.fullscreenOverlay} ${closing ? styles.overlayClosing : styles.overlayOpening}`}
          style={{ top: headerHeight > 0 ? `${headerHeight}px` : 0 }}
        >
          {/* Left decorative panel */}
          <div className={`${styles.leftPanel} ${closing ? styles.leftPanelClosing : ""}`}>
            <div className={styles.leftPanelInner}>
              <div className={styles.decorCircle1} />
              <div className={styles.decorCircle2} />
              <div className={styles.decorCircle3} />
              <div className={`${styles.leftContent} ${closing ? styles.leftContentClosing : ""}`}>
                <div className={styles.logoMark}>
                  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <path d="M30 10 C30 10, 20 22, 20 30 C20 38, 30 50, 30 50 C30 50, 40 38, 40 30 C40 22, 30 10, 30 10Z" fill="rgba(255,255,255,0.9)"/>
                    <circle cx="30" cy="30" r="5" fill="#b30b0b"/>
                  </svg>
                </div>
                <h1 className={styles.leftHeading}>
                  Become an<br />
                  <em>Internationally</em><br />
                  Certified<br />
                  Yoga Teacher
                </h1>
                <p className={styles.leftSub}>
                  Transform your passion into purpose.<br />
                  Start your journey today.
                </p>
                <div className={styles.statsRow}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>2000+</span>
                    <span className={styles.statLabel}>Graduates</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statNum}>50+</span>
                    <span className={styles.statLabel}>Countries</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <span className={styles.statNum}>15+</span>
                    <span className={styles.statLabel}>Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className={`${styles.rightPanel} ${closing ? styles.rightPanelClosing : ""}`}>
            <button
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className={styles.rightScroll}>
              <ApplyForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingApplyForm;