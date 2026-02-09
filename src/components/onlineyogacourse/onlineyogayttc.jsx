import React from 'react';
import styles from '../../assets/styles/onlineyogacourse/onlineyogayttc.module.css';
import logo1 from '../../assets/images/yoga-alliance-logo-1-e1725693185665.jpg';
import logo2 from '../../assets/images/yoga-alliance-logo-2.png';
import logo3 from '../../assets/images/RYS300.png';
import logo4 from '../../assets/images/images500.png';
import logo5 from '../../assets/images/3.png';
import { useNavigate } from 'react-router-dom';
import BooksSection from 'components/MyBooks/Bookssection';

const OnlineYTTC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: '200 Hour TTC',
      duration: '24 Days',
      certification: 'Yoga Alliance USA',
      style: 'Multi-Style',
      date: '2nd of every month',
      image:
        'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600',
      oldPrice: '$399.00',
      newPrice: '$199.00',
    },
    {
      id: 2,
      title: '300 Hour TTC',
      duration: '28 Days',
      certification: 'Yoga Alliance USA',
      style: 'Multi-Style',
      date: '2nd of every month',
      image:
        'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600',
      oldPrice: '$599.00',
      newPrice: '$399.00',
    },
    {
      id: 3,
      title: '500 Hour TTC',
      duration: '56 Days',
      certification: 'Yoga Alliance USA',
      style: 'Multi-Style',
      date: '2nd of every month',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      oldPrice: '$998.00',
      newPrice: '$498.00',
    },
  ];

  const testimonials = [
    {
      name: 'Olya Beitelman',
      time: 'a year ago',
      text: 'A recommended place for yoga, a good atmosphere and a teacher who pays attention, explains and corrects',
      initial: 'O',
    },
    {
      name: 'Lucy Ashley',
      time: 'a year ago',
      text: "I went for a drop Hatha class and really enjoyed it. I've practised yoga for a while but I'm kind of new to Hatha so we",
      initial: 'L',
    },
    {
      name: 'Harish Rabecka',
      time: 'a year ago',
      text: 'I have completed yoga and now I have shared my inspiration with you because my teacher taught me that you will not be',
      initial: 'H',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Om Symbol SVG - Decorative Background */}
      <svg
        className={styles.omDecor1}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 Q130 40 140 70 Q150 100 140 130 Q130 160 100 180 Q70 160 60 130 Q50 100 60 70 Q70 40 100 20 M80 60 Q90 70 100 70 Q110 70 120 60 M85 90 Q92 100 100 105 Q108 100 115 90 M75 120 Q85 135 100 140 Q115 135 125 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400"
            alt="Yoga Practice"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.omSymbol}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 10 Q65 20 70 35 Q75 50 70 65 Q65 80 50 90 Q35 80 30 65 Q25 50 30 35 Q35 20 50 10 M40 30 Q45 35 50 35 Q55 35 60 30 M42.5 45 Q46 50 50 52.5 Q54 50 57.5 45 M37.5 60 Q42.5 67.5 50 70 Q57.5 67.5 62.5 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <p className={styles.welcomeText}>Welcome to Hatha Yogashram</p>
          <h1 className={styles.heroTitle}>
            Your Gateway to
            <br />
            <span className={styles.highlight}>Ancient Wisdom</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Our Online Yoga Teacher Training Course (TTC) brings the
            transformative essence of traditional Hatha Yog directly to you, no
            matter where you are in the world.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate('/BookingForm')}
          >
            <span>Begin Your Journey</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Swastik Decoration */}
        <svg
          className={styles.swastikDecor}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeWidth="4" fill="none">
            <line x1="50" y1="20" x2="50" y2="50" />
            <line x1="50" y1="50" x2="80" y2="50" />
            <line x1="80" y1="50" x2="80" y2="80" />
            <line x1="50" y1="50" x2="50" y2="80" />
            <line x1="50" y1="80" x2="20" y2="80" />
            <line x1="20" y1="80" x2="20" y2="50" />
            <line x1="20" y1="50" x2="50" y2="50" />
            <line x1="50" y1="50" x2="50" y2="20" />
          </g>
        </svg>
      </section>

      {/* About Courses Section */}
      <section className={styles.coursesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Offerings</span>
          <h2 className={styles.sectionTitle}>About Our Courses</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseImageWrapper}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={styles.courseImage}
                />
                <div className={styles.courseOverlay}>
                  <svg
                    className={styles.courseOm}
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 6 Q39 12 42 21 Q45 30 42 39 Q39 48 30 54 Q21 48 18 39 Q15 30 18 21 Q21 12 30 6 M24 18 Q27 21 30 21 Q33 21 36 18 M25.5 27 Q27.6 30 30 31.5 Q32.4 30 34.5 27 M22.5 36 Q25.5 40.5 30 42 Q34.5 40.5 37.5 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>

                <div className={styles.courseDetails}>
                  <div className={styles.detailItem}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>Duration: {course.duration}</span>
                  </div>

                  <div className={styles.detailItem}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <span>Certification: {course.certification}</span>
                  </div>

                  <div className={styles.detailItem}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Style: {course.style}</span>
                  </div>

                  <div className={styles.detailItem}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>Date: {course.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className={styles.bookingSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Reserve Your Spot</span>
          <h2 className={styles.sectionTitle}>Booking Courses Now</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            At Hatha Yogashram, we believe yoga is more than just a
            practice—it's a way of life. Nestled in the serene foothills of the
            Himalayas, our ashram has been a sanctuary for seekers for years.
          </p>
        </div>

        <div className={styles.bookingGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.bookingCard}>
              <span className={styles.newBadge}>NEW</span>
              <div className={styles.bookingImageWrapper}>
                <img src={course.image} alt={course.title} />
              </div>
              <div className={styles.bookingContent}>
                <span className={styles.courseLabel}>Course</span>
                <h3 className={styles.bookingTitle}>{course.title}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>{course.oldPrice}</span>
                  <span className={styles.newPrice}>{course.newPrice}</span>
                </div>
                <button className={styles.addToCartBtn}>
                  <span>ADD TO CART</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Student Experiences</span>
          <h2 className={styles.sectionTitle}>What Students are Saying</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.testimonialHeader}>
                <div className={styles.avatar}>{testimonial.initial}</div>
                <div>
                  <h4 className={styles.reviewerName}>{testimonial.name}</h4>
                  <p className={styles.reviewTime}>{testimonial.time}</p>
                </div>
              </div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className={styles.whyUsContent}>
          <span className={styles.sectionLabel}>Our Promise</span>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.titleUnderline}></div>

          <p className={styles.whyUsIntro}>
            At Hatha Yogashram, we believe yoga is more than just a
            practice—it's a way of life. Nestled in the serene foothills of the
            Himalayas, our ashram has been a sanctuary for seekers for years.
          </p>

          <div className={styles.benefitsList}>
            {[
              {
                title: 'Authentic Teachings',
                description:
                  'Learn traditional Hatha Yog from experienced instructors rooted in the lineage of Rishikesh, the Yoga Capital of the World.',
              },
              {
                title: 'Flexible Learning',
                description:
                  'Study at your own pace with pre-recorded sessions, live classes, and interactive Q&A opportunities.',
              },
              {
                title: 'Global Recognition',
                description:
                  'Earn a Yoga Alliance-approved certificate upon completion, empowering you to teach yoga worldwide.',
              },
              {
                title: 'Comprehensive Curriculum',
                description:
                  'Master asanas, pranayama, meditation, anatomy, philosophy, and teaching methodology.',
              },
            ].map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <svg
                  className={styles.benefitIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.whyUsImage}>
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800"
            alt="Yoga Practice"
          />
          <div className={styles.imageDecor}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.3"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className={styles.certificationSection}>
        <div className={styles.certLogos}>
          <img src={logo1} alt="Yoga Alliance" className={styles.certLogo} />
          <img src={logo2} alt="RYS 200" className={styles.certLogo} />
          <img src={logo3} alt="RYS 300" className={styles.certLogo} />
          <img src={logo4} alt="RYS 500" className={styles.certLogo} />
          <img src={logo5} alt="RYS 500" className={styles.certLogo} />
        </div>

        <div className={styles.certContent}>
          <p className={styles.certText}>
            At Hatha Yogashram, our core focus lies in the practice of
            traditional Hatha Yog. We are the best yoga school in India
            regarding Hatha Yog, as it forms a crucial foundation for balancing
            the Nadis (energy channels). To meet certification standards, our
            Hatha Yog training is enriched with studies in Yoga Anatomy &
            Physiology, Adjustment & Alignment of Asanas, Pranayama (the yogic
            art of breathing), traditional Yoga Philosophy, Meditation
            techniques, Ayurveda, and Mantra chanting.
          </p>

          <p className={styles.certText}>
            Our main instructors, who are 'International Yoga Certified,' are
            among the <strong>best yoga teacher training in India</strong> and
            globally. They inspire students to reach their fullest potential,
            elevating their practice to new heights. At Hatha Yogashram, we
            support students at every step, offering personalized attention in
            small group settings. This ensures that students gain the knowledge,
            skills, and experience needed to achieve their personal yoga goals.
          </p>
        </div>

        {/* Decorative Lotus Elements */}
        <svg
          className={styles.lotusLeft}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.15" stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M50 80 Q40 60 40 40 Q40 30 50 20" />
            <path d="M50 80 Q60 60 60 40 Q60 30 50 20" />
            <path d="M30 70 Q35 60 40 50" />
            <path d="M70 70 Q65 60 60 50" />
            <circle cx="50" cy="35" r="8" />
            <path d="M20 75 Q30 65 40 60" />
            <path d="M80 75 Q70 65 60 60" />
          </g>
        </svg>

        <svg
          className={styles.lotusRight}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.15" stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M50 80 Q40 60 40 40 Q40 30 50 20" />
            <path d="M50 80 Q60 60 60 40 Q60 30 50 20" />
            <path d="M30 70 Q35 60 40 50" />
            <path d="M70 70 Q65 60 60 50" />
            <circle cx="50" cy="35" r="8" />
            <path d="M20 75 Q30 65 40 60" />
            <path d="M80 75 Q70 65 60 60" />
          </g>
        </svg>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Simple Process</span>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.stepsContainer}>
          {[
            {
              step: '01',
              title: 'Enroll Online',
              description:
                'Choose your preferred course and complete the simple registration process.',
            },
            {
              step: '02',
              title: 'Access Materials',
              description:
                'Gain instant access to our user-friendly online platform with videos, manuals, and resources.',
            },
            {
              step: '03',
              title: 'Learn & Practice',
              description:
                'Follow the structured curriculum at your pace, with the option to join live sessions.',
            },
            {
              step: '04',
              title: 'Get Certified',
              description:
                'Complete assignments, quizzes, and a final teaching demonstration to earn your certification.',
            },
          ].map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
              {index < 3 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>
      <BooksSection />
      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <svg
            className={styles.ctaOm}
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 12 Q78 24 84 42 Q90 60 84 78 Q78 96 60 108 Q42 96 36 78 Q30 60 36 42 Q42 24 60 12 M48 36 Q54 42 60 42 Q66 42 72 36 M51 54 Q55.2 60 60 63 Q64.8 60 69 54 M45 72 Q51 81 60 84 Q69 81 75 72"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>

          <h2 className={styles.ctaTitle}>Ready to Begin?</h2>
          <p className={styles.ctaText}>
            Enroll now and take the first step toward becoming a certified yoga
            teacher with Hatha Yogashram!
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate('/contact-us')}
          >
            <span>Contact Us Today</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Om Symbol SVG - Bottom Decoration */}
      <svg
        className={styles.omDecor2}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 Q130 40 140 70 Q150 100 140 130 Q130 160 100 180 Q70 160 60 130 Q50 100 60 70 Q70 40 100 20 M80 60 Q90 70 100 70 Q110 70 120 60 M85 90 Q92 100 100 105 Q108 100 115 90 M75 120 Q85 135 100 140 Q115 135 125 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default OnlineYTTC;
