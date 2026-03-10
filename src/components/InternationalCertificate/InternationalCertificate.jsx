import React, { useState } from 'react';

const DEFAULT_CERTIFICATE = {
  hero: {
    badgeText: '✨ Transform Your Life ✨',
    title: 'Hatha Yoga Teacher Training',
    subtitle: 'in Rishikesh, India',
    description: 'Become a Yoga Trainer & Design Your Own Course',
  },
  program: {
    title: '200 Hour Yoga TTC',
    duration: 'Duration: 24 Days',
  },
  pricing: {
    offerBadge: 'Special Offer for International Students',
    regularLabel: 'Regular Fees',
    currentPrice: '$1300',
    payNotice: 'Pay Only',
    ctaLabel: 'Book Your Seat Now',
  },
  certification: {
    title: 'Internationally Recognized',
    text:
      'Upon completion, receive your RYS200 certification from Yoga Alliance USA, enabling you to teach yoga professionally anywhere in the world.',
    name: 'Yoga Alliance USA',
  },
  eligibility: {
    title: 'Who Can Join?',
    items: [
      'Age 18+',
      'Basic knowledge of Yoga',
      'All body types accepting',
      'Anyone can join this course who Breathe',
    ],
  },
  inclusions: {
    title: 'Everything Included in Your Training',
    items: [
      { icon: '📚', text: 'Teaching Material' },
      { icon: '👕', text: 'School Logo T-Shirt' },
      { icon: '🫖', text: 'Shatkarma Pot & Sutra Neti' },
      { icon: '📓', text: 'Notebook' },
      { icon: '🌊', text: 'Practice at The Ganga River' },
      { icon: '🏡', text: 'Cleaned Hygienic Accommodation' },
      { icon: '🍽️', text: 'Three Satvic Indian Meals Daily' },
      { icon: '🎓', text: 'Yoga Alliance USA Certification RYS200' },
    ],
  },
  location: {
    title: 'Find Us in Rishikesh',
    school: 'Hatha Yogashram School',
    address:
      'Hatha Yogashram, Balaknath Rd, Upper Tapovan, Rishikesh, Uttarakhand, India - 249192',
    description:
      'Nestled in the spiritual heart of Rishikesh, our ashram offers the perfect sanctuary for your yoga journey alongside the sacred Ganga River.',
    mapSrc:
      'https://www.google.com/maps?q=Hatha%20Yogashram,%20Balaknath%20Rd,%20Upper%20Tapovan,%20Rishikesh,%20Uttarakhand%20249192&output=embed',
  },
};

const InternationalCertificate = ({  }) => {
  let data = null
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const certificate = {
    hero: { ...DEFAULT_CERTIFICATE.hero, ...(data?.hero || {}) },
    program: { ...DEFAULT_CERTIFICATE.program, ...(data?.program || {}) },
    pricing: { ...DEFAULT_CERTIFICATE.pricing, ...(data?.pricing || {}) },
    certification: { ...DEFAULT_CERTIFICATE.certification, ...(data?.certification || {}) },
    eligibility: { ...DEFAULT_CERTIFICATE.eligibility, ...(data?.eligibility || {}) },
    inclusions: { ...DEFAULT_CERTIFICATE.inclusions, ...(data?.inclusions || {}) },
    location: { ...DEFAULT_CERTIFICATE.location, ...(data?.location || {}) },
  };

  const eligibilityItems =
    certificate.eligibility.items && certificate.eligibility.items.length
      ? certificate.eligibility.items
      : DEFAULT_CERTIFICATE.eligibility.items;

  const inclusionsItems =
    certificate.inclusions.items && certificate.inclusions.items.length
      ? certificate.inclusions.items
      : DEFAULT_CERTIFICATE.inclusions.items;

  return (
    <>
      <style>{`
        .yoga-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
         background-image: linear-gradient(to right, #fff, #f8e4e4);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
 background-image: url("../../images/grid4.png");
          pointer-events: none;
        }

        .hero-content {
         background: #fff;
          position: relative;
          z-index: 2;
          padding: 2rem 0;
          // max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #fff;
          backdrop-filter: blur(10px);
          border-radius: 50px;
          border: 1px solid #000;
          color: #000;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero-title {
          font-family: 'Philosopher', sans-serif;
    font-size: 40x;
    font-weight: 600;
    color: #bd0005;
    line-height: 1.25;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-family: 'Quicksand', sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #000;
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .hero-description {
          font-size:18px;
          color: #000;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .training-info {
          margin: 3rem 0;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .program-title {
          font-family: 'Philosopher', sans-serif;
    font-size: 40x;
    font-weight: 700;
    color: #bd0005;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        .duration {
          font-size: 1.2rem;
          color: #000;
          font-weight: 400;
        }

        .price-section {
          margin-top: 3rem;
        }

        .offer-badge {
          display: inline-block;
          background: #FF6B35;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .price-box {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 400px;
          margin: 0 auto 2rem;
          box-shadow: 0 20px 60px rgba(139, 69, 19, 0.25);
          position: relative;
          overflow: hidden;
        }

        .price-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
        }

        .original-price {
          font-size: 1rem;
          color: #6D4C41;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .current-price {
          font-family: 'Philosopher', sans-serif;
          font-size: 55px;
          font-weight: 800;
          color: #8B4513;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .pay-notice {
          font-size: 1.1rem;
          color: #6D4C41;
          font-weight: 600;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: white;
          color: #8B4513;
          padding: 1.2rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 12px 48px rgba(139, 69, 19, 0.18);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 0;
        }

        .cta-button:hover {
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(139, 69, 19, 0.3);
        }

        .cta-button .arrow {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow {
          transform: translateX(5px);
        }

        .cta-button.secondary {
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .text-center {
          text-align: center;
        }

        .section-title {
          font-family: 'Philosopher', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #3E2723;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60%;
          height: 3px;
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
          border-radius: 2px;
        }

        .section-text {
          font-size: 1.2rem;
          color: #6D4C41;
          line-height: 1.8;
        }

        /* Sections */
        .certification-section,
        .eligibility-section,
        .inclusions-section,
        .location-section,
        .contact-section {
          padding: 5rem 0;
        }

        .certification-section {
         background-image: url("../../images/grid4.png");
        }

        .eligibility-section {
          background: #fff;
        }

        .inclusions-section {
         background-image: linear-gradient(to right, #fff, #f8e4e4);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
        }

        .location-section {
        background: #fff;
        }

        .contact-section {
          background: white;
        }

        .cert-badge {
          background: linear-gradient(180deg, #F5F0E8 0%, #E8DCC8 100%);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
        }

        .cert-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .cert-name {
          font-family: 'Philosopher', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #8B4513;
        }

        .grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          margin-top: 3rem;
        }

        .eligibility-card,
        .inclusion-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .eligibility-card:hover,
        .inclusion-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 48px rgba(139, 69, 19, 0.18);
          border-color: #E8B87E;
        }

        .check-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto 1.5rem;
        }

        .eligibility-card p {
          font-size: 1.1rem;
          color: #2C1810;
          font-weight: 600;
          margin: 0;
        }

        .inclusion-card {
          background: #fff;
        }

        .inclusion-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .inclusion-text {
          font-size: 1.1rem;
          color: #2C1810;
          font-weight: 600;
          margin: 0;
          line-height: 1.5;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .location-info {
          background-image: linear-gradient(to right, #fff, #f8e4e4);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
        }

        .location-info h3 {
          font-family: 'Philosopher', sans-serif;
          font-size: 2rem;
          color: #8B4513;
          margin-bottom: 1rem;
        }

        .address {
          font-size: 1.2rem;
          color: #2C1810;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .location-icon {
          font-size: 1.5rem;
        }

        .location-description {
          font-size: 1.1rem;
          color: #6D4C41;
          line-height: 1.8;
          font-style: italic;
        }

                }

        .map-icon {
          font-size: 5rem;
          margin-bottom: 1rem;
        }

        .map-placeholder p {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .contact-card {
          background-image: linear-gradient(to right, #fff, #f8e4e4);
          padding: 4rem 2rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(139, 69, 19, 0.25);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .contact-item {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 48px rgba(139, 69, 19, 0.18);
        }

        .contact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-item h4 {
          font-family: 'Philosopher', sans-serif;
          font-size: 1.3rem;
          color: #8B4513;
          margin-bottom: 0.75rem;
        }

        .contact-item a {
          color: #2C1810;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #FF6B35;
        }

        .footer-section {
          background: #3E2723;
          color: rgba(255, 255, 255, 0.8);
          padding: 2rem 0;
          text-align: center;
        }

        .footer-text {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .footer-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-style: italic;
          color: #E8B87E;
          margin-top: 1rem;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .modal-content {
          background: white;
          padding: 3rem;
          border-radius: 25px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2.5rem;
          color: #6D4C41;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: #F5F0E8;
          color: #8B4513;
          transform: rotate(90deg);
        }

        .modal-content h3 {
          font-family: 'Philosopher', sans-serif;
          font-size: 2.2rem;
          color: #8B4513;
          margin-bottom: 1rem;
        }

        .modal-contacts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-contact-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.2rem;
          background: linear-gradient(135deg, #FF6B35 0%, #D4A373 50%, #8B4513 100%);
          color: white;
          text-decoration: none;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
        }

        .modal-contact-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 12px 48px rgba(139, 69, 19, 0.18);
          color: white;
        }

        @media (max-width: 768px) {
          .two-col {
            grid-template-columns: 1fr;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .current-price {
            font-size: 3rem;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="yoga-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="text-center">
              <div className="hero-badge">
                <span>{certificate.hero.badgeText}</span>
              </div>
              <h1 className="hero-title">
                {certificate.hero.title}
              </h1>
              <p className="hero-subtitle">
                {certificate.hero.subtitle}
              </p>
              <p className="hero-description">
                {certificate.hero.description}
              </p>
              
              <div className="training-info">
                <div className="info-card">
                  <h2 className="program-title">{certificate.program.title}</h2>
                  <p className="duration">{certificate.program.duration}</p>
                </div>
              </div>

              <div className="price-section">
                <div className="offer-badge">{certificate.pricing.offerBadge}</div>
                <div className="price-box">
                  <div className="original-price">{certificate.pricing.regularLabel}</div>
                  <div className="current-price">{certificate.pricing.currentPrice}</div>
                  <p className="pay-notice">{certificate.pricing.payNotice}</p>
                </div>
                <button className="cta-button" onClick={handleBookNow}>
                  <span>{certificate.pricing.ctaLabel}</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="certification-section">
          <div className="container">
            <div className="two-col">
              <div className="text-center">
                <div className="cert-badge">
                  <div className="cert-icon">🎓</div>
                  <h3>Certified By</h3>
                  <p className="cert-name">{certificate.certification.name}</p>
                </div>
              </div>
              <div>
                <h2 className="section-title">{certificate.certification.title}</h2>
                <p className="section-text">
                  {certificate.certification.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="eligibility-section">
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>
              {certificate.eligibility.title}
            </h2>
            <div className="grid">
              {eligibilityItems.map((item, index) => (
                <div className="eligibility-card" key={index}>
                  <div className="check-icon">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions Section */}
        <section className="inclusions-section">
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>
              {certificate.inclusions.title}
            </h2>
            <div className="grid">
              {inclusionsItems.map((item, index) => (
                <div className="inclusion-card" key={index}>
                  <div className="inclusion-icon">{item.icon}</div>
                  <p className="inclusion-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <div className="container">
            <div className="two-col">
              <div>
                <h2 className="section-title">{certificate.location.title}</h2>
                <div className="location-info">
                  <h3>{certificate.location.school}</h3>
                  <p className="address">
                    <span className="location-icon">📍</span>
                    {certificate.location.address}
                  </p>
                  <p className="location-description">
                    {certificate.location.description}
                  </p>
                </div>
              </div>
              <div style={{
  width: '150%',
  height: '450px',      // 👈 Increased height
  borderRadius: '25px',
  overflow: 'hidden',
  boxShadow: '0 15px 60px rgba(139, 69, 19, 0.25)'
}}>
  <iframe
    title="Hatha Yogashram Location"
    src={certificate.location.mapSrc}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-card">
              <h2 className="section-title text-center" style={{ marginBottom: '1rem' }}>Ready to Begin Your Journey?</h2>
              <p className="text-center" style={{ marginBottom: '2rem' }}>Registrations are Open - Enroll Yourself Today!</p>
              
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <h4>Call / WhatsApp</h4>
                  <a href="tel:+919335606336">+91-9335606336</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <h4>Website</h4>
                  <a href="https://www.hathayogashram.com" target="_blank" rel="noopener noreferrer">
                    www.hathayogashram.com
                  </a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <h4>Email</h4>
                  <a href="mailto:info@hathyogashram.com">info@hathyogashram.com</a>
                </div>
              </div>

              <div className="text-center" style={{ marginTop: '2rem' }}>
                <button className="cta-button secondary" onClick={handleBookNow}>
                  <span>Book Now & Hold Your Seat</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Booking Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <h3>Book Your Training</h3>
              <p style={{ marginBottom: '2rem' }}>Contact us to secure your seat for the upcoming session!</p>
              
              <div className="modal-contacts">
                <a href="tel:+919335606336" className="modal-contact-btn">
                  📱 Call Now
                </a>
                <a href="https://wa.me/919335606336" className="modal-contact-btn" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
                <a href="mailto:info@hathyogashram.com" className="modal-contact-btn">
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InternationalCertificate;
