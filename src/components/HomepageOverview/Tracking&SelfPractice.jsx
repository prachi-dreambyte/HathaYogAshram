import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const TrackingSelfPractice = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '📊',
      title: 'Progress Monitoring',
      description: 'Track your journey and celebrate milestones along the way'
    },
    {
      icon: '🔍',
      title: 'Self-Awareness',
      description: 'Understand your limitations and recognize growth patterns'
    },
    {
      icon: '💪',
      title: 'Discipline',
      description: 'Build sustainable habits through consistent observation'
    },
    {
      icon: '🎯',
      title: 'Mindful Consistency',
      description: 'Develop a conscious and committed practice routine'
    }
  ];

  const practices = [
    { name: 'Practice Journal', sanskrit: 'Daily Documentation' },
    { name: 'Goal Setting', sanskrit: 'Intention Mapping' },
    { name: 'Self-Assessment', sanskrit: 'Progress Evaluation' },
    { name: 'Pattern Recognition', sanskrit: 'Habit Analysis' },
    { name: 'Milestone Tracking', sanskrit: 'Achievement Recording' },
    { name: 'Reflection Practice', sanskrit: 'Contemplative Review' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Mindful Development</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Tracking & Self Practice
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Tracking and self-practice observation help students monitor progress, 
                understand limitations, build discipline, and develop mindful consistency 
                in practice through systematic self-reflection and documentation.
              </p>
              <div className={`mt-5 ${styles.heroButtons}`}>
                <button className={`btn btn-primary btn-lg me-3 ${styles.pulseBtn}`}>
                  Start Your Journey
                </button>
                <button className={`btn btn-outline-light btn-lg ${styles.btnOutlineCustom}`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-5 ${styles.benefitsSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Core Benefits</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div 
                  className={`${styles.benefitCard} ${hoveredCard === index ? styles.active : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                  <div className={styles.benefitGlow}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Tracking Methods</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Essential tools for self-observation and growth</p>
          </div>
          <div className="row g-4">
            {practices.map((practice, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{practice.name}</h4>
                    <p className={styles.poseSanskrit}>{practice.sanskrit}</p>
                    <div className={styles.poseBorder}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className={`py-5 ${styles.practiceSection}`}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className={styles.practiceImageWrapper}>
                <img src={Practice} alt="Tracking practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📝</div>
                  <div>
                    <h5>Daily Documentation</h5>
                    <p>Record practice sessions, feelings, and insights regularly</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔄</div>
                  <div>
                    <h5>Regular Review</h5>
                    <p>Reflect on patterns and progress over weekly or monthly cycles</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌱</div>
                  <div>
                    <h5>Adaptive Growth</h5>
                    <p>Adjust goals and methods based on observed developments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-5 ${styles.ctaSection}`}>
        <div className="container py-5">
          <div className={styles.ctaCard}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-3">Begin Tracking Your Progress Today</h2>
                <p className="text-white mb-0">
                  Develop self-awareness and discipline through mindful practice observation
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <button className={`btn btn-light btn-lg ${styles.ctaButton}`}>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingSelfPractice;