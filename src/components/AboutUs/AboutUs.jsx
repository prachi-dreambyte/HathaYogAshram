// src/App.js
import React from 'react';
import styles from '../../assets/styles/AboutUs/AboutUs.module.css';
import AboutImg from '../../assets/images/AboutUs.webp';
import Brands from 'components/Brands/Brands';

function AboutUs() {
  return (
    <div className={styles.app}>
        <div>
            <img src={AboutImg} alt="image"/>
        </div>

      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.section}`}>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <h1 className={styles.title}>
                  Transform Your Life with
                  <span className={styles.highlight}> Hatha Yoga</span>
                </h1>
                <p className={styles.subtitle}>
                  Join one of India's most reputed yoga institutes since 2017.
                  Experience the best online yoga classes and teacher training in Rishikesh.
                </p>
                <div className={styles.ctaButtons}>
                  <button className={`btn ${styles.primaryButton}`}>Start Your Journey</button>
                  <button className={`btn ${styles.secondaryButton}`}>Book Online Class</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroImage}>
                <div className={styles.yogaPattern}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.about} ${styles.section}`}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className={styles.aboutImageWrapper}>
                <img 
                  src={AboutImg} 
                  alt="Yoga Practice at Hatha Yogashram" 
                  className={styles.aboutMainImage}
                />
                <div className={styles.imageDecoration}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>About Hatha Yogashram</h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <div className={styles.aboutContent}>
                <p className={styles.leadText}>
                  Hatha Yogashram was founded in 2017 as the best yoga teacher training and one of the most reputed yoga institutes across India.
                </p>
                <p>
                  We take pride in constantly reviewing and transforming our approach and clarity.
                  We provide you with certified and class trainers with abundant knowledge, exposure and teaching experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className={styles.aboutContentExtended}>
                <p>
                  We believe that practice of yoga can revolutionize a person's outlook towards life and we invite people to immerse this transition in their lives in natural surrounding of Rishikesh.
                </p>
                <p>
                  Many of our yoga students become successful in their yoga style and are teaching others with great confidence and passion.
                </p>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6 mb-4">
                  <div className={styles.featureBox}>
                    <div className={styles.featureIcon}>🏆</div>
                    <h4>Why Choose Us?</h4>
                    <ul className={styles.featureList}>
                      <li>Founded in 2017 with proven excellence</li>
                      <li>Certified and experienced trainers</li>
                      <li>Located in the spiritual hub of Rishikesh</li>
                      <li>Best online yoga classes in India</li>
                      <li>International affiliate partner institute</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className={styles.experienceBox}>
                    <div className={styles.statsGrid}>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>7+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Students Trained</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>Certified Trainers</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>4.9★</div>
                        <div className={styles.statLabel}>Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className={`${styles.mission} ${styles.section}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.missionCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p>
                  Hatha Yogashram is an international affiliate partner institute, and provides under lying Yoga Alliance earning its licence on 1st year teacher training in India and its 1st stage Teacher Training in Rishikesh, India and to bring yoga & Hatha philosophy into the world of people through the teachers we train with our contemporary courses specially designed for domestic and international demand/regulations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.visionCard}>
                <div className={styles.cardIcon}>👁️</div>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p>
                  The commitment of global well-being drives us to constantly innovate plans and strategies that will help people to achieve their health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands/>
      {/* Vision Goals Section */}
      <section id="vision" className={`${styles.visionGoals} ${styles.section}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Vision Goals</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>1</div>
                <h5>Creating Awareness</h5>
                <p>Provide curated space through blogs, diet suggestions, and recipes</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>2</div>
                <h5>Training Practitioners</h5>
                <p>Offer array of training courses to boost confidence</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>3</div>
                <h5>Mentoring Community</h5>
                <p>Handpicked retreats and workshops for rejuvenation</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>4</div>
                <h5>Platform for Teachers</h5>
                <p>Share knowledge and expertise with public</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>5</div>
                <h5>Variety of Styles</h5>
                <p>Cater to different needs and preferences</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={styles.goalCard}>
                <div className={styles.goalNumber}>6</div>
                <h5>Lifestyle Choice</h5>
                <p>Promote yoga as complete lifestyle</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className={`row ${styles.ctaSection}`}>
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.ctaBox}>
                <h3>Ready to Start Your Yoga Journey?</h3>
                <p className="mb-4">Join the best online yoga classes in India today!</p>
                <button className={`btn ${styles.primaryButton} ${styles.largeButton}`}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;