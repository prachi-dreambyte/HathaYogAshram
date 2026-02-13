import React from "react";
import styles from "../../assets/styles/ApplyForm/ApplyForm.module.css";

const ApplyForm = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.topHeading}>
        Become Internationally Certified <br />
        <span>Yoga Teacher</span>
      </h2>

      <h3 className={styles.subHeading}>Apply Today!</h3>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" placeholder="E.g. John Doe" />
        </div>

        <div className={styles.inputGroup}>
          <label>Email Address *</label>
          <input type="email" placeholder="E.g. john@doe.com" />
        </div>

        <div className={styles.inputGroup}>
          <label>Phone *</label>
          <div className={styles.phoneInput}>
            <span className={styles.flag}>🇺🇸 +1</span>
            <input type="tel" placeholder="E.g. +1 300 400 5000" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Street Address</label>
          <input type="text" placeholder="E.g. 42 Wallaby Way" />
        </div>

        <div className={styles.inputGroup}>
          <label>Country</label>
          <select>
            <option>Select country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Select Course</label>
          <select>
            <option>100 Hour Yoga Teacher Training</option>
            <option>200 Hour Yoga Teacher Training</option>
            <option>300 Hour Yoga Teacher Training</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Duration</label>
          <select>
            <option>1st October 2025</option>
            <option>1st November 2025</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Where did you find us?</label>
          <select>
            <option>Google</option>
            <option>Instagram</option>
            <option>Facebook</option>
          </select>
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className={styles.captchaBox}>
          I'm not a robot (reCAPTCHA here)
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
