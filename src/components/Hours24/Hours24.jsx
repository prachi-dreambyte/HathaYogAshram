import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/Hours24/24hours.module.css';
import YogaTeacherTraining from 'components/Homepage/YogaTeacherTraining';

const API = "http://localhost:8000/api/hours24";

export default function Hours24() {

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

  const weekJourney = [
    {
      week: 1,
      title: data.week1Title,
      content: data.week1Description,
      icon: data.week1Icon
    },
    {
      week: 2,
      title: data.week2Title,
      content: data.week2Description,
      icon: data.week2Icon
    },
    {
      week: 3,
      title: data.week3Title,
      content: data.week3Description,
      icon: data.week3Icon
    },
    {
      week: 4,
      title: data.week4Title,
      content: data.week4Description,
      icon: data.week4Icon
    }
  ];

  const features = [
    [data.card1Icon, data.card1Title, data.card1Description],
    [data.card2Icon, data.card2Title, data.card2Description],
    [data.card3Icon, data.card3Title, data.card3Description],
    [data.card4Icon, data.card4Title, data.card4Description]
  ];

  return (

    <div className={styles.yogaLanding}>

      {/* Journey Timeline */}
      <section className={styles.journeySection}>

        <div className={styles.journeyBackground}>
          <div className={styles.floatingCircle} style={{ top: '10%', left: '5%' }} />
          <div className={styles.floatingCircle} style={{ top: '60%', right: '8%' }} />
          <div className={styles.floatingCircle} style={{ bottom: '15%', left: '15%' }} />
        </div>

        <div className={styles.container}>

          <div className={styles.header}>
            <h2 className={styles.title}>
              📅 {data.mainHeading}
            </h2>

            <p className={styles.subtitle}>
              {data.subHeading}
            </p>
          </div>

          <div className={styles.timelineWrapper}>

            {weekJourney.map((week, index) => (

              <div key={index} className={styles.weekTimeline}>

                <div className={styles.weekMarker}>

                  <div className={styles.markerCircle}>
                    <span className={styles.weekIcon}>{week.icon}</span>
                    <span className={styles.weekNumber}>
                      Week {week.week}
                    </span>
                  </div>

                  {index < weekJourney.length - 1 && (
                    <div className={styles.connector}></div>
                  )}

                </div>

                <div className={styles.weekContent}>
                  <div className={styles.weekGlow}></div>
                  <h3 className={styles.weekTitle}>{week.title}</h3>
                  <p className={styles.weekText}>{week.content}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <YogaTeacherTraining />


      {/* Why Choose Section */}
      <section className={styles.featuresSection}>

        <div className={styles.container}>

          <h2 className={styles.sectionTitle}>
            {data.whyHeading}
          </h2>

          <div className={styles.featuresGrid}>

            {features.map(([icon, title, desc], i) => (

              <div key={i} className={styles.featureCard}>

                <div className={styles.featureIcon}>
                  {icon}
                </div>

                <h3>{title}</h3>

                <p>{desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}