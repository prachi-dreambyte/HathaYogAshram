import React from "react";
import styles from "../../assets/styles/Homepage/HowToReach.module.css";
import { FaPlane, FaCar, FaTrain } from "react-icons/fa";

const HowToReach = () => {
  return (
    <section className={styles.reachSection}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-12 col-md-6">
            <div className={styles.content}>
              <h2 className={styles.title}>
                How to Reach Us
                <span>Simple & Comfortable Travel Options</span>
              </h2>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <FaPlane />
                </div>
                <div>
                  <h4>By Airways</h4>
                  <p>
                    Fly to Delhi International Airport, then take a domestic
                    flight to Jolly Grant Airport (Dehradun). Taxis are available
                    or we can arrange one for you.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <FaCar />
                </div>
                <div>
                  <h4>By Roadways</h4>
                  <p>
                    Enjoy a scenic 5–6 hour drive from Delhi to Rishikesh through
                    smooth highways and beautiful landscapes.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <FaTrain />
                </div>
                <div>
                  <h4>By Railways</h4>
                  <p>
                    Reach Haridwar Railway Station and travel onward to Yog
                    Nagari Rishikesh by taxi or tuk-tuk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className={styles.mapCard}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.1889346965218!2d78.31528188676455!3d30.13198084966086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a92133223b%3A0x5769fde72c39e6f5!2sHatha%20Yogashram!5e1!3m2!1sen!2sus!4v1767074170455!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToReach;
