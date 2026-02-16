import React, { useState } from "react";
import ApplyForm from "./ApplyForm";
import styles from "../../assets/styles/ApplyForm/FloatingApplyForm.module.css";

const FloatingApplyForm = () => {
  const [open, setOpen] = useState(true); // 👈 Default open

  return (
    <>
      {/* If form closed → Show Button */}
      {!open && (
        <button
          className={styles.floatingBtn}
          onClick={() => setOpen(true)}
        >
          Apply Now
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide Panel */}
      <div className={`${styles.panel} ${open ? styles.active : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <ApplyForm />
      </div>
    </>
  );
};

export default FloatingApplyForm;
