import React from "react";
import styles from "../../assets/styles/Homepage/GivingBack.module.css";
import img3 from "../../assets/images/vys-fundraiser.png";

const GivingBack = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bgShape}></div>

      <div className={styles.container}>
        {/* Left Story */}
        <div className={styles.story}>
          <span className={styles.tag}>Seva & Conscious Living</span>

          <h2>
            Hatha Yogashram <br />
            <span>Giving Back to Society</span>
          </h2>

          <p>
            At Hatha Yogashram, yoga is not just a practice on the mat —  
            it is a way of living with awareness, compassion, and responsibility.
          </p>

          <p>
            Through our commitment to social upliftment, we support initiatives
            that empower underprivileged children with access to education,
            nurturing a future rooted in knowledge, dignity, and self-reliance.
          </p>

          <p>
            Every step you take on your yogic journey with us contributes
            towards creating positive change beyond the ashram walls.
          </p>

          <div className={styles.stamp}>seva</div>
        </div>

        {/* Right Image */}
        <div className={styles.imageCard}>
          <img src={img3} alt="Hatha Yogashram social initiative" />
        </div>
      </div>
    </section>
  );
};

export default GivingBack;
