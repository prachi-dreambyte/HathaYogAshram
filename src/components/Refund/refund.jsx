import React from 'react';
import styles from '../../assets/styles/Refund/Refund.module.css';

const Refund = () => {
  return (
    <section className={styles.rulesPolicySection}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>RULES & REFUND POLICY</h1>
        
        <div className={styles.divider}>
          <span className={styles.icon}>🧘</span>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.checkIcon}>✓</span>
              PREREQUISITES
            </h2>
            <p className={styles.text}>
              A high degree of self-motivation is required for all aspects of the course. The practice and especially the teaching of yoga demand a high degree of self-discipline and purity. To ensure the success of the program, participants are required to attend all spiritual activities, meditation sessions, lectures and asana classes.
            </p>
            <p className={styles.text}>
              Meat, fish, eggs, black tea, coffee, alcohol, tobacco, drugs and nudity are prohibited during the course as they are counterproductive to the yoga practice. Participants who do not comply with the school rules may be dismissed from the course.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.checkIcon}>✓</span>
              RULES FOR STUDENTS
            </h2>
            <p className={styles.text}>
              Smoking and alcohol are strictly prohibited in the school. If you are having a fast any day, you have to inform the kitchen manager for avoiding food waste. Always make discipline, respect teachers and follow all rules. Always be on the time, you are late means will not be permitted to join the class.
            </p>
            <p className={styles.text}>
              Clear your books of account before departure from Hatha Yogashram. Before departure return your books, maps or any goods which you borrowed. Hatha Yogashram provides accommodation for a student who joins the yoga course. So any friends or relatives will not be included in accommodation however they can stay in school by renting another room. The student has to be present in all scheduled programs of Hatha Yogashram.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.checkIcon}>✓</span>
              REFUND POLICY
            </h2>
            <p className={styles.text}>
              An advance of course fees will not be refundable, only in the case of emergency students can join us on other schedules.
            </p>
            <p className={styles.text}>
              If a student cancels the course after joining it, we accept cancellation but course fees will not be refunded in cancellation. There is no charge of course cancellation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund;
