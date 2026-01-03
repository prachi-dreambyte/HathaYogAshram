import React, { useEffect } from "react";
import styles from "../../assets/styles/Homepage/GoogleReviews.module.css";

const GoogleReviews = () => {
  useEffect(() => {
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.id = "elfsight-script";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.reviewsSection}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>What Students Are Saying</h2>

        <div
          className="elfsight-app-e301d003-de7f-4605-bd00-ea003df42f14"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default GoogleReviews;
