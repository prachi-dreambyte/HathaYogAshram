import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const TeachingMethodology = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🎓',
      title: 'Sequencing',
      description: 'Master the art of creating balanced, effective class flows'
    },
    {
      icon: '🗣️',
      title: 'Communication',
      description: 'Develop clear, inspiring verbal and non-verbal cueing'
    },
    {
      icon: '🤝',
      title: 'Adjustments',
      description: 'Learn safe, effective hands-on and verbal modifications'
    },
    {
      icon: '⚖️',
      title: 'Ethics',
      description: 'Uphold professional standards and student-centered values'
    }
  ];

  const poses = [
    { name: 'Class Planning', sanskrit: 'Vinyasa Krama' },
    { name: 'Verbal Cueing', sanskrit: 'Shabda Anushasana' },
    { name: 'Demonstration Skills', sanskrit: 'Darshana Vidya' },
    { name: 'Observation Techniques', sanskrit: 'Prekshana Kala' },
    { name: 'Adjustment Methods', sanskrit: 'Samyojana Vidhi' },
    { name: 'Teaching Practice', sanskrit: 'Adhyapana Abhyasa' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Teacher Training</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Teaching Methodology
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Teaching methodology develops confident yoga teachers through sequencing, cueing, 
                class planning, adjustments, ethics, communication skills, and teaching practice.
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

      {/* Poses Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Essential Teaching Skills</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Core competencies for effective yoga instruction</p>
          </div>
          <div className="row g-4">
            {poses.map((pose, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{pose.name}</h4>
                    <p className={styles.poseSanskrit}>{pose.sanskrit}</p>
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
                <img src={Practice} alt="Teaching Methodology Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📝</div>
                  <div>
                    <h5>Class Planning & Sequencing</h5>
                    <p>Design safe, effective, and inspiring yoga classes</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>👥</div>
                  <div>
                    <h5>Student-Centered Teaching</h5>
                    <p>Adapt instruction to diverse needs and skill levels</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🎯</div>
                  <div>
                    <h5>Hands-On Experience</h5>
                    <p>Build confidence through guided teaching practice</p>
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
                <h2 className="text-white mb-3">Begin Your Teaching Methodology Journey</h2>
                <p className="text-white-50 mb-0">
                  Transform into a confident, skilled yoga teacher with comprehensive training
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

export default TeachingMethodology;