import React from "react";
import styles from "../../assets/styles/Homepage/StudentReviews.module.css";
import reviews from "./reviewsData";

const StudentReviews = () => {
  return (
    <section className={styles.reviewSection}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className={styles.heading}>
            Student’s Short Review - Student’s Experience With Us
          </h2>
          <div className={styles.divider}></div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {reviews.map((item, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className={styles.card}>
                <img
                  src={item.thumbnail}
                  alt="student review"
                  className={styles.thumbnail}
                />

                <div className={styles.playIcon}>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
