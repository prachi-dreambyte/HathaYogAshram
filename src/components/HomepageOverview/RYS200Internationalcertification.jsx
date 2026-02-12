import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const RYS200Certification = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🌍',
      title: 'Global Recognition',
      description: 'Teach yoga anywhere in the world with internationally recognized certification'
    },
    {
      icon: '📚',
      title: 'Traditional Foundation',
      description: 'Deep understanding of authentic yoga philosophy and practice'
    },
    {
      icon: '🎓',
      title: 'Teaching Excellence',
      description: 'Master the art and ethics of guiding students safely'
    },
    {
      icon: '✨',
      title: 'Professional Growth',
      description: 'Build a sustainable career as a certified yoga instructor'
    }
  ];

  const curriculum = [
    { name: 'Yoga Philosophy', sanskrit: 'Yoga Darshana' },
    { name: 'Teaching Methodology', sanskrit: 'Adhyapanam' },
    { name: 'Anatomy & Physiology', sanskrit: 'Sharira Vigyan' },
    { name: 'Asana Practice', sanskrit: 'Asana Abhyasa' },
    { name: 'Pranayama Techniques', sanskrit: 'Pranayama Vidya' },
    { name: 'Ethics & Lifestyle', sanskrit: 'Yama Niyama' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>International Certification</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                RYS200 International Certification
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                YS 200 international certification qualifies students to teach yoga worldwide 
                with a strong foundation in traditional practice, philosophy, and teaching ethics. 
                Become a certified instructor recognized globally.
              </p>
              <div className={`mt-5 ${styles.heroButtons}`}>
                <button className={`btn btn-primary btn-lg me-3 ${styles.pulseBtn}`}>
                  Enroll Now
                </button>
                <button className={`btn btn-outline-light btn-lg ${styles.btnOutlineCustom}`}>
                  Download Syllabus
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
            <h2 className={styles.sectionTitle}>Certification Benefits</h2>
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

      {/* Curriculum Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Curriculum Modules</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Comprehensive 200-hour training program</p>
          </div>
          <div className="row g-4">
            {curriculum.map((module, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{module.name}</h4>
                    <p className={styles.poseSanskrit}>{module.sanskrit}</p>
                    <div className={styles.poseBorder}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className={`py-5 ${styles.practiceSection}`}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className={styles.practiceImageWrapper}>
                <img src={Practice} alt="RYS200 Certification Training"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>Program Highlights</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📖</div>
                  <div>
                    <h5>Traditional Philosophy</h5>
                    <p>Study ancient yoga texts, philosophy, and spiritual teachings</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>👥</div>
                  <div>
                    <h5>Teaching Methodology</h5>
                    <p>Learn effective teaching techniques and class management skills</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>⚕️</div>
                  <div>
                    <h5>Safety & Ethics</h5>
                    <p>Master proper alignment, modifications, and professional ethics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className={`py-5 ${styles.benefitsSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Certification Requirements</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>⏱️</div>
                  <div>
                    <h5>200 Contact Hours</h5>
                    <p>Complete minimum 200 hours of comprehensive yoga teacher training</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📝</div>
                  <div>
                    <h5>Written Assessments</h5>
                    <p>Pass theoretical examinations on yoga philosophy, anatomy, and teaching methodology</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧘‍♀️</div>
                  <div>
                    <h5>Practical Teaching</h5>
                    <p>Demonstrate teaching competency through observed practice sessions</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🎯</div>
                  <div>
                    <h5>Attendance & Commitment</h5>
                    <p>Maintain 90% attendance and complete all assignments and projects</p>
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
                <h2 className="text-white mb-3">Start Your Teaching Journey Today</h2>
                <p className="text-white-50 mb-0">
                  Join our internationally recognized RYS200 certification program and become a qualified yoga instructor
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <button className={`btn btn-light btn-lg ${styles.ctaButton}`}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RYS200Certification;