import React from "react";
import styles from "../../assets/styles/ApplyForm/ApplyForm.module.css";

// Bootstrap loaded via CDN (add to index.html if not already present)
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" /> */

/* ── Main Form ── */
const ApplyForm = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topHeading}>
        Become Internationally Certified <br />
        <span>Yoga Teacher</span>
      </h2>

      <h3 className={styles.subHeading}>Apply Today!</h3>

      <form className={styles.form}>
        {/* ── Name + Email on same row using Bootstrap grid ── */}
        <div className="row g-3 mb-0">
          <div className="col-6 col-sm-4 col-md-4">
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-4">
            <div className={styles.inputGroup}>
              <label>Email Address *</label>
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-4">
        <div className={styles.inputGroup}>
          <label>Phone *</label>
          <div className={styles.phoneInput}>
            <span className={styles.flag}>🇺🇸 +1</span>
            <input type="tel" placeholder="Enter Mobile Number" />
          </div>
        </div>
        </div>
        <div className="col-6 col-sm-4 col-md-4">
        <div className={styles.inputGroup}>
          <label>Street Address</label>
          <input type="text" placeholder="Enter Full Address" />
        </div>
        </div>
         <div className="col-6 col-sm-4 col-md-4">
       <div className={styles.inputGroup}>
          <label>Country</label>
          <select>
            <option>Select country*</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>
        </div>
        <div className="col-6 col-sm-4 col-md-4">
        <div className={styles.inputGroup}>
          <label>Select Course</label>
          <select>
            <option>Others*</option>
            <option>100 Hour Yoga Teacher Training</option>
            <option>200 Hour Yoga Teacher Training</option>
            <option>300 Hour Yoga Teacher Training</option>
          </select>
        </div>
        </div>
          <div className="col-6 col-sm-6">
        <div className={styles.inputGroup}>
          <label>Duration</label>
          <select>
            <option>1st October 2025</option>
            <option>1st November 2025</option>
          </select>
        </div>
        </div>
        <div className="col-6 col-sm-6">
        <div className={styles.inputGroup}>
          <label>Where did you find us?</label>
          <select>
            <option>Others*</option>
            <option>Google</option>
            <option>Instagram</option>
            <option>Facebook</option>
          </select>
        </div>
        </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;