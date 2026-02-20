import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- import useLocation
import ApplyForm from "./ApplyForm";
import styles from "../../assets/styles/ApplyForm/FloatingApplyForm.module.css";

const FloatingApplyForm = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation(); // <-- get current location

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

  // Auto-open the form on initial mount AND on every route change
  useEffect(() => {
    setOpen(true);
  }, [location.pathname]); // <-- dependency on pathname

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

  // Click on overlay (backdrop) closes the form
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
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
          onClick={handleOverlayClick}
        >
          {/* Right form panel — stop click propagation */}
          <div
            className={`${styles.rightPanel} ${closing ? styles.rightPanelClosing : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
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