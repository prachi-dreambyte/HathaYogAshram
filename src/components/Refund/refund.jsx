import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/Refund/Refund.module.css';

const API = "http://localhost:8000/api/rules-refund";

const Refund = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const res = await axios.get(API);

      // assuming only one document
      setData(res.data.data[0]);

    } catch (error) {
      console.log(error);
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <section className={styles.rulesPolicySection}>
      <div className={styles.container}>

        <h1 className={styles.mainTitle}>
          {data.mainHeading}
        </h1>

        <div className={styles.divider}>
          <span className={styles.icon}>🧘</span>
        </div>

        <div className={styles.content}>

          {/* PREREQUISITES */}
          <div className={styles.section}>

            <h2 className={styles.sectionTitle}>
              
              {data.preTitle}
            </h2>

            <p className={styles.text}>
              {data.preDesc1}
            </p>

            <p className={styles.text}>
              {data.preDesc2}
            </p>

          </div>


          {/* RULES FOR STUDENTS */}
          <div className={styles.section}>

            <h2 className={styles.sectionTitle}>
              
              {data.rulesTitle}
            </h2>

            <p className={styles.text}>
              {data.rulesDesc1}
            </p>

            <p className={styles.text}>
              {data.rulesDesc2}
            </p>

          </div>


          {/* REFUND POLICY */}
          <div className={styles.section}>

            <h2 className={styles.sectionTitle}>
              
              {data.refundTitle}
            </h2>

            <p className={styles.text}>
              {data.refundDesc1}
            </p>

            <p className={styles.text}>
              {data.refundDesc2}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Refund;