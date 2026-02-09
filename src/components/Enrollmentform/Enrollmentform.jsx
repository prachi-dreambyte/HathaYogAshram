import React, { useState, useEffect, useCallback, useMemo } from 'react';
import countries from 'world-countries';
import styles from '../../assets/styles/Enrollmentform/Enrollmentform.module.css';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    course: '',
  });

  const [showConfetti, setShowConfetti] = useState(false);

  // Course details with start dates and initial seats
  const courseDetails = useMemo(
  () => ({
    '100 Hour YTTC': {
      startDate: '2025-03-01',
      initialSeats: 50,
    },
    '200 Hour YTTC': {
      startDate: '2025-03-15',
      initialSeats: 50,
    },
    '300 Hour YTTC': {
      startDate: '2025-04-01',
      initialSeats: 50,
    },
    '500 Hour YTTC': {
      startDate: '2025-04-15',
      initialSeats: 50,
    },
    'Prenatal Yoga TTC': {
      startDate: '2025-03-10',
      initialSeats: 50,
    },
    'Yin Yoga TTC': {
      startDate: '2025-03-20',
      initialSeats: 50,
    },
  }),
  [],
);


  const courses = Object.keys(courseDetails);

  const countryList = countries
    .map((c) => c.name.common)
    .sort((a, b) => a.localeCompare(b));

  // Seat countdown logic based on selected course
 const calculateAvailableSeats = useCallback(
  (courseName) => {
    if (!courseName || !courseDetails[courseName]) {
      return 50;
    }

    const courseInfo = courseDetails[courseName];
    const INITIAL_SEATS = courseInfo.initialSeats;
    const MINIMUM_SEATS = 3;
    const startDate = new Date(courseInfo.startDate);
    const currentDate = new Date();

    if (currentDate < startDate) {
      return INITIAL_SEATS;
    }

    const weeksPassed = Math.floor(
      (currentDate - startDate) / (7 * 24 * 60 * 60 * 1000),
    );

    let availableSeats = INITIAL_SEATS;
    for (let i = 0; i < weeksPassed; i++) {
      availableSeats = Math.floor(availableSeats / 2);
      if (availableSeats <= MINIMUM_SEATS) {
        availableSeats = MINIMUM_SEATS;
        break;
      }
    }

    return availableSeats;
  },
  [courseDetails],
);


  const [availableSeats, setAvailableSeats] = useState(50);

 useEffect(() => {
  if (formData.course) {
    setAvailableSeats(calculateAvailableSeats(formData.course));
  }
}, [formData.course, calculateAvailableSeats]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'course') {
      setAvailableSeats(calculateAvailableSeats(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    console.log('Form submitted:', formData);
    alert(
      '🎉 Congratulations! Your seat is reserved! We will contact you soon.',
    );
    setFormData({
      name: '',
      email: '',
      mobile: '',
      country: '',
      course: '',
    });
  };

  const getSeatColor = () => {
    if (availableSeats <= 5) return styles.criticalSeats;
    if (availableSeats <= 15) return styles.lowSeats;
    return styles.normalSeats;
  };

  return (
    <div className={styles.enrollmentContainer}>
      {/* Animated Background with Clouds */}
      <div className={styles.cloudBackground}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
        <div className={styles.cloud3}></div>
        <div className={styles.cloud4}></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className={styles.confettiContainer}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className={styles.confetti}></div>
          ))}
        </div>
      )}

      {/* Decorative yoga elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.yogaPose1}>🧘‍♀️</div>
        <div className={styles.yogaPose2}>🧘‍♂️</div>
        <div className={styles.lotusLeft}></div>
        <div className={styles.lotusRight}></div>
        <div className={styles.omSymbol}>ॐ</div>
        <div className={styles.meditation}>🕉️</div>
        <div className={styles.sparkle1}>✨</div>
        <div className={styles.sparkle2}>✨</div>
        <div className={styles.sparkle3}>✨</div>
      </div>

      {/* Floating Yoga Icons */}
      <div className={styles.floatingIcons}>
        <div
          className={styles.floatIcon}
          style={{ left: '5%', animationDelay: '0s' }}
        >
          🧘
        </div>
        <div
          className={styles.floatIcon}
          style={{ left: '15%', animationDelay: '2s' }}
        >
          🪷
        </div>
        <div
          className={styles.floatIcon}
          style={{ left: '85%', animationDelay: '1s' }}
        >
          🕉️
        </div>
        <div
          className={styles.floatIcon}
          style={{ left: '95%', animationDelay: '3s' }}
        >
          ✨
        </div>
      </div>

      <div className={styles.formWrapper}>
        <div className={styles.twoColumnLayout}>
          {/* LEFT SIDE - Yoga Images Gallery */}
          <div className={styles.leftPanel}>
            {/* Yoga Images Section */}
            <div className={styles.yogaImagesSection}>
              {/* Header with Badge */}
              <div className={styles.imagesHeader}>
                <div className={styles.excitementBadge}>
                  🔥 SPECIAL OFFER 🔥
                </div>
                <h2 className={styles.mainHeading}>🌟 Book Your Seat Now 🌟</h2>
                <p className={styles.subHeading}>
                  ✨ Transform Your Life with Authentic Yoga Training ✨
                </p>
              </div>

              {/* Image Gallery Grid */}
              <div className={styles.yogaGallery}>
                <div className={styles.galleryItem}>
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80"
                    alt="Yoga Meditation"
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.overlayText}>Meditation</span>
                  </div>
                </div>

                <div className={styles.galleryItem}>
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
                    alt="Yoga Asanas"
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.overlayText}>Asanas</span>
                  </div>
                </div>
              </div>

              {/* Urgency Section */}
              <div className={styles.urgencySection}>
                <div className={styles.urgencyBadge}>
                  <span className={styles.pulse}>⚡</span>
                  <span>LIMITED TIME</span>
                  <span className={styles.pulse}>⚡</span>
                </div>

                {/* Seat Counter */}
                <div className={`${styles.seatCounter} ${getSeatColor()}`}>
                  <div className={styles.seatIcon}>🪷</div>
                  <div className={styles.seatInfo}>
                    <span className={styles.seatLabel}>Only</span>
                    <span className={styles.seatNumber}>{availableSeats}</span>
                    <span className={styles.seatLabel}>Seats Left!</span>
                  </div>
                  <div className={styles.seatWarning}>
                    {availableSeats <= 5
                      ? '🚨 Almost Full!'
                      : '⏰ Filling Fast!'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightPanel}>
            {/* Form Section */}
            <form onSubmit={handleSubmit} className={styles.enrollmentForm}>
              <div className={styles.formTitle}>
                <h3>🎯 Secure Your Spot Today!</h3>
                <p>Join the journey to inner peace and wellness</p>
              </div>

              <div className={styles.formGrid}>
                {/* Name Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    👤 Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    📧 Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Mobile Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="mobile" className={styles.formLabel}>
                    📱 Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Country Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="country" className={styles.formLabel}>
                    🌍 Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select your country</option>
                    {countryList.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Field */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="course" className={styles.formLabel}>
                    🎓 Select Your Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Choose your training course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course} - Starting{' '}
                        {new Date(
                          courseDetails[course].startDate,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Info Display */}
                {formData.course && (
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <div className={styles.courseInfoBox}>
                      <div className={styles.courseInfoItem}>
                        <span className={styles.courseInfoIcon}>📅</span>
                        <div>
                          <span className={styles.courseInfoLabel}>
                            Course Starts:
                          </span>
                          <span className={styles.courseInfoValue}>
                            {new Date(
                              courseDetails[formData.course].startDate,
                            ).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                      <div className={styles.courseInfoItem}>
                        <span className={styles.courseInfoIcon}>🪑</span>
                        <div>
                          <span className={styles.courseInfoLabel}>
                            Available Seats:
                          </span>
                          <span className={styles.courseInfoValue}>
                            {availableSeats} seats remaining
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                <span className={styles.btnText}>🎉 Reserve My Seat Now</span>
                <span className={styles.btnIcon}>🕉️</span>
              </button>

              {/* Trust Indicators */}
              <div className={styles.trustIndicators}>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>✓</span>
                  <span>Yoga Alliance Certified</span>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>✓</span>
                  <span>Experienced Teachers</span>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustIcon}>✓</span>
                  <span>Authentic Training</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
