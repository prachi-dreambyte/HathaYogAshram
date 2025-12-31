import React from "react";
import styles from "../../assets/styles/Homepage/Facilities.module.css";

const Facilities = () => {
  return (
    <section className={styles.facilitiesSection}>
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className={styles.heading}>
            Facilities You Enjoy At The Yoga School In Rishikesh, India
          </h2>
          <span className={styles.headingIcon}>❦</span>
        </div>

        {/* ROW 1 */}
        <div className="row g-4 align-items-center mb-4">
          <div className="col-lg-4 col-md-6">
            <div className={styles.textCard}>
              <h5>About Transportation</h5>
              <p>
                We arrange transportation for students without a direct flight
                to Dehradun. Pickup from Delhi can also be arranged.
              </p>
              <span>(Show Less)</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5"
              className={styles.image}
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={styles.textCard}>
              <h5>About Library</h5>
              <p>
                Our yoga library is well stocked with books to deepen your
                learning and practice.
              </p>
              <span>(Show More)</span>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row g-4 align-items-center mb-4">
          <div className="col-lg-4 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
              className={styles.image}
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={styles.textCard}>
              <h5>Excursions</h5>
              <p>
                Weekly excursions include rafting, temples, caves and
                sightseeing in Rishikesh.
              </p>
              <span>(Show More)</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className={styles.image}
              alt=""
            />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className={styles.textCard}>
              <h5>About Food</h5>
              <p>
                We serve Satvik and nutritious meals that balance body and mind.
              </p>
              <span>(Show More)</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              className={styles.image}
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={styles.textCard}>
              <h5>About Reception</h5>
              <p>
                Our reception is hosted 24/7 ensuring safety and comfort
                throughout your stay.
              </p>
              <span>(Show More)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
