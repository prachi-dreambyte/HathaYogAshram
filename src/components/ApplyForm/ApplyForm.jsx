import React, { useState} from "react";
import styles from "../../assets/styles/ApplyForm/ApplyForm.module.css";

// Bootstrap loaded via CDN (add to index.html if not already present)
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

/* ── reCAPTCHA Component ── */
const ReCaptcha = () => {
  const [state, setState] = useState("idle"); // idle | loading | verified

  const handleClick = () => {
    if (state !== "idle") return;
    setState("loading");
    setTimeout(() => setState("verified"), 1400);
  };

  return (
    <div className={styles.captchaBox}>
      {/* Left: checkbox + label */}
      <div className={styles.captchaLeft}>
        <div
          className={`${styles.captchaCheckbox} ${
            state === "verified" ? styles.captchaChecked : ""
          } ${state === "loading" ? styles.captchaLoading : ""}`}
          onClick={handleClick}
          role="checkbox"
          aria-checked={state === "verified"}
          tabIndex={0}
          onKeyDown={(e) =>
            (e.key === " " || e.key === "Enter") && handleClick()
          }
        >
          {state === "loading" && (
            <svg className={styles.captchaSpinner} viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
            </svg>
          )}
          {state === "verified" && (
            <svg className={styles.captchaMark} viewBox="0 0 52 52" fill="none">
              <polyline
                points="14,27 22,36 38,18"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <span className={styles.captchaLabel}>
          {state === "verified" ? "You are verified" : "I'm not a robot"}
        </span>
      </div>

      {/* Right: Google reCAPTCHA branding */}
      <div className={styles.captchaBrand}>
        <svg className={styles.captchaLogo} viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#4A90D9" />
          <path d="M20 32 C20 24,44 24,44 32 C44 40,20 40,20 32Z" fill="white" opacity="0.3" />
          <path d="M32 14 L38 26 H26 Z" fill="white" />
          <path d="M32 50 L26 38 H38 Z" fill="white" opacity="0.6" />
          <path d="M14 32 L26 26 V38 Z" fill="white" opacity="0.8" />
          <path d="M50 32 L38 38 V26 Z" fill="white" opacity="0.4" />
        </svg>
        <span className={styles.captchaText}>reCAPTCHA</span>
        <span className={styles.captchaLinks}>Privacy · Terms</span>
      </div>
    </div>
  );
};

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

        {/* reCAPTCHA */}
        <ReCaptcha />

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;