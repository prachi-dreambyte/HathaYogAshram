import React, { useState } from 'react';
import styles from '../../assets/styles/Bookingform/Bookingformred.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    course: '',
    duration: '',
    source: '',
    captcha: false
  });

  const [errors, setErrors] = useState({});

  const countries = [
    "Select country",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Belgium",
    "Austria",
    "Ireland",
    "New Zealand",
    "Singapore",
    "Japan",
    "South Korea",
    "India",
    "United Arab Emirates",
    "Brazil",
    "Mexico",
    "Argentina",
    "Chile",
    "Colombia",
    "South Africa",
    "Israel",
    "Russia",
    "Poland",
    "Czech Republic",
    "Portugal",
    "Greece",
    "Turkey",
    "Thailand",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Vietnam",
    "China",
    "Hong Kong",
    "Taiwan"
  ];

  const courses = [
    "Select Course",
    "100 Hour Yoga Teacher Training (10 Days)",
    "200 Hour Yoga Teacher Training (24 Days)",
    "300 Hour Yoga Teacher Training (30 Days)",
    "500 Hour Yoga Teacher Training (60 Days)",
    "Prenatal Yoga Teacher Training (100 Hours - 12 Days)",
    "Meditation Teacher Training (50 Hours - 7 Days)",
    "Ayurveda Massage Course (100 Hours - 14 Days)",
    "Yoga Retreat (7 Days)",
    "Advanced Ashtanga Yoga (200 Hours - 21 Days)"
  ];

  const durations = [
    "Select Duration",
    "1st October 2025",
    "1st November 2025",
    "1st December 2025",
    "1st January 2026",
    "1st February 2026",
    "1st March 2026",
    "1st April 2026",
    "1st May 2026",
    "1st June 2026",
    "1st July 2026",
    "1st August 2026",
    "1st September 2026"
  ];

  const sources = [
    "Where did you find us?",
    "Google",
    "Facebook",
    "Instagram",
    "YouTube",
    "Friend Referral",
    "TripAdvisor",
    "Yoga Alliance",
    "Blog/Article",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.country || formData.country === 'Select country') {
      newErrors.country = 'Please select a country';
    }

    if (!formData.course || formData.course === 'Select Course') {
      newErrors.course = 'Please select a course';
    }

    if (!formData.duration || formData.duration === 'Select Duration') {
      newErrors.duration = 'Please select a duration';
    }

    if (!formData.source || formData.source === 'Where did you find us?') {
      newErrors.source = 'Please tell us how you found us';
    }

    if (!formData.captcha) {
      newErrors.captcha = 'Please verify you are not a robot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('🙏 Namaste! Thank you for your application! We will contact you soon.');
    }
  };

  return (
    <div className={styles.bookingContainer}>
      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.omSymbol}>ॐ</div>
        <div className={styles.omSymbolRight}>ॐ</div>
        <div className={styles.lotusLeft}>🪷</div>
        <div className={styles.lotusRight}>🪷</div>
        <div className={styles.swastikTop}>卐</div>
        <div className={styles.swastikBottom}>卐</div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Left Side - Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageOverlay}>
            <div className={styles.imageContent}>
              <div className={styles.omSymbolLarge}>ॐ</div>
              <h3>Transform Your Life</h3>
              <p>Join thousands of certified yoga teachers worldwide</p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Internationally Recognized</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Expert Instructors</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Lifetime Support</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Flexible Schedule</span>
                </div>
              </div>
              <div className={styles.mandalaDecor}></div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            {/* Decorative Border Elements */}
            <div className={styles.cornerDecorTL}></div>
            <div className={styles.cornerDecorTR}></div>
            <div className={styles.cornerDecorBL}></div>
            <div className={styles.cornerDecorBR}></div>

            <div className={styles.formHeader}>
              <div className={styles.lotusIcon}>🪷</div>
              <h1>Become Internationally Certified</h1>
              <h2>Yoga Teacher</h2>
              <div className={styles.divider}>
                <span className={styles.dividerDot}>•</span>
                <span className={styles.dividerLine}></span>
                <span className={styles.dividerOm}>ॐ</span>
                <span className={styles.dividerLine}></span>
                <span className={styles.dividerDot}>•</span>
              </div>
              <h3>Apply Today!</h3>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="E.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.errorInput : ''}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E.g. john@doe.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  Phone <span className={styles.required}>*</span>
                </label>
                <div className={styles.phoneInputWrapper}>
                  <span className={styles.countryCode}>🇺🇸 +1</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="E.g. +1 300 400 5000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? styles.errorInput : ''}
                  />
                </div>
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="E.g. 42 Wallaby Way"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? styles.errorInput : ''}
                />
                {errors.address && <span className={styles.errorText}>{errors.address}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={errors.country ? styles.errorInput : ''}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <span className={styles.errorText}>{errors.country}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="course">Select Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={errors.course ? styles.errorInput : ''}
                >
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                {errors.course && <span className={styles.errorText}>{errors.course}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className={errors.duration ? styles.errorInput : ''}
                >
                  {durations.map((duration, index) => (
                    <option key={index} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
                {errors.duration && <span className={styles.errorText}>{errors.duration}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="source">Where did you find us?</label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={errors.source ? styles.errorInput : ''}
                >
                  {sources.map((source, index) => (
                    <option key={index} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                {errors.source && <span className={styles.errorText}>{errors.source}</span>}
              </div>

              <div className={styles.formGroup}>
                <div className={styles.captchaWrapper}>
                  <label className={styles.captchaLabel}>
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleChange}
                      className={styles.captchaCheckbox}
                    />
                    <span>I'm not a robot</span>
                  </label>
                  <div className={styles.captchaLogo}>
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      alt="reCAPTCHA"
                    />
                    <div className={styles.captchaText}>
                      <span>reCAPTCHA</span>
                      <small>Privacy - Terms</small>
                    </div>
                  </div>
                </div>
                {errors.captcha && <span className={styles.errorText}>{errors.captcha}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <span className={styles.btnIcon}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;