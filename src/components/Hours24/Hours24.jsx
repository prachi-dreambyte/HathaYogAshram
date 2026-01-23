import React from 'react';
import styles from '../../assets/styles/Hours24/24hours.module.css';

export default function Hours24() {
  const weekJourney = [
    {
      week: 1,
      title: 'Foundation Week',
      content:
        'Traditional opening ceremony, introduction to yoga philosophy, basic asanas, beginning pranayama and meditation practices, orientation to yogic lifestyle.',
      icon: '🌱',
    },
    {
      week: 2,
      title: 'Deepening Practice',
      content:
        'Advanced asana techniques, detailed anatomy studies, teaching methodology basics, weekend excursion to local sacred sites.',
      icon: '🌿',
    },
    {
      week: 3,
      title: 'Integration',
      content:
        'Practice teaching sessions, advanced philosophy and meditation, special workshops (sound healing, trauma-informed yoga), personal practice refinement.',
      icon: '🌸',
    },
    {
      week: 4,
      title: 'Mastery & Graduation',
      content:
        'Final teaching practicums, comprehensive reviews and assessments, closing ceremony and certificate distribution, guidance for next steps.',
      icon: '🏆',
    },
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
            <h2 className={styles.title}>📅 Your 24-Day Journey</h2>
            <p className={styles.subtitle}>
              A structured path from beginner to certified teacher
            </p>
          </div>

          <div className={styles.timelineWrapper}>
            {weekJourney.map((week, index) => (
              <div key={index} className={styles.weekTimeline}>
                <div className={styles.weekMarker}>
                  <div className={styles.markerCircle}>
                    <span className={styles.weekIcon}>{week.icon}</span>
                    <span className={styles.weekNumber}>Week {week.week}</span>
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

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Our Training?</h2>
          <div className={styles.featuresGrid}>
            {[
              ['🧘', 'Authentic Teaching', 'Learn from experienced Indian yoga masters'],
              ['🏔️', 'Himalayan Setting', 'Practice in the yoga capital of Rishikesh'],
              ['📜', 'Yoga Alliance Certified', 'Globally recognized certification'],
              ['🌟', 'Holistic Approach', 'Asana, pranayama, meditation & philosophy'],
            ].map(([icon, title, desc], i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
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
