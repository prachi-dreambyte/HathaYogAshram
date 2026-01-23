import React, { useState } from 'react';
import styles from '../../assets/styles/YogaCourse/100Hours.module.css';
import Refund from 'components/Refund/refund';
import OurCourses from 'components/OurCourses/OurCourses';
import heroVideo from '../../assets/images/100hrs.webp';

export default function YogaCourse100() {
  const [activeSection, setActiveSection] = useState('overview');

  const schools = [
    {
      name: 'Yogkulam',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      description: 'Experience authentic yoga with traditional wisdom and modern teaching techniques.'
    },
    {
      name: 'Hatha Yogashram',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      description: 'Your sanctuary for authentic yoga learning in the heart of Rishikesh.'
    },
    {
      name: 'Vinyasa Yogashala',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop',
      description: 'Perfect place to learn yoga with highly qualified international teachers.'
    },
    {
      name: 'World Peace Yoga School',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop',
      description: 'Most reputed and traditional yoga school with 15+ years in Rishikesh.'
    }
  ];

  const whyRishikesh = [
    {
      icon: '🏔️',
      title: 'Birthplace of Yoga',
      description: 'Rishikesh is the yoga capital of the world, home to authentic yoga schools and ancient wisdom.'
    },
    {
      icon: '🕉️',
      title: 'Divine Energy',
      description: 'Located in the Himalayas with the holy Ganges flowing through, creating awe-inspiring spiritual energy.'
    },
    {
      icon: '🧘‍♂️',
      title: 'Authentic Learning',
      description: 'Learn from experienced masters who carry forward the traditional Himalayan yoga lineage.'
    },
    {
      icon: '🌿',
      title: 'Natural Setting',
      description: 'Peaceful environment surrounded by mountains and nature, perfect for deep yoga practice.'
    }
  ];

  const features = [
    { icon: '🧘', title: 'Expert Teachers', desc: '15-30+ years of experience in traditional yoga' },
    { icon: '🏔️', title: 'Rishikesh Setting', desc: 'Yoga capital of the world' },
    { icon: '📜', title: 'Yoga Alliance', desc: 'Internationally certified courses' },
    { icon: '🌿', title: 'Organic Meals', desc: 'Nutritious sattvic vegetarian food' },
    { icon: '🏠', title: 'Accommodation', desc: 'Comfortable & clean rooms with modern facilities' },
    { icon: '🧘‍♀️', title: 'Small Groups', desc: 'Personal attention guaranteed' },
    { icon: '📚', title: 'Comprehensive Curriculum', desc: '100+ yoga postures and techniques' },
    { icon: '🎓', title: 'Certification', desc: 'Step towards 200hr RYT certification' }
  ];

  const curriculum = [
    {
      category: 'Hatha Yoga',
      items: ['140+ traditional asanas', 'Surya & Chandra Namaskar', 'Standing, sitting, prone & supine postures', 'Balancing & twisting postures']
    },
    {
      category: 'Ashtanga Vinyasa',
      items: ['Primary series practice', 'Sun salutations A & B', 'Standing & sitting sequences', 'Finishing postures']
    },
    {
      category: 'Pranayama',
      items: ['Nadishodhana', 'Kapalbhati', 'Bhastrika', 'Ujjayi, Bhramari, Sheetali']
    },
    {
      category: 'Meditation',
      items: ['Himalayan meditation', 'Breath awareness', 'Mantra meditation', 'Yoga Nidra']
    },
    {
      category: 'Philosophy',
      items: ['Yoga Sutras of Patanjali', '8 limbs of Yoga', 'Bhagavad Gita wisdom', 'Chakras & Nadis']
    },
    {
      category: 'Anatomy',
      items: ['Skeletal & muscular system', 'Respiratory & circulatory system', 'Alignment principles', 'Injury prevention']
    }
  ];

  const dailySchedule = [
    { time: '6:00 AM', activity: 'Morning Tea' },
    { time: '6:30 AM', activity: 'Pranayama & Meditation' },
    { time: '8:00 AM', activity: 'Hatha Yoga Asana Practice' },
    { time: '10:00 AM', activity: 'Breakfast' },
    { time: '11:00 AM', activity: 'Yoga Philosophy & Ancient Texts' },
    { time: '12:30 PM', activity: 'Anatomy & Alignment' },
    { time: '1:30 PM', activity: 'Lunch' },
    { time: '3:00 PM', activity: 'Ashtanga Vinyasa Practice' },
    { time: '5:00 PM', activity: 'Teaching Methodology' },
    { time: '6:30 PM', activity: 'Dinner' },
    { time: '7:30 PM', activity: 'Satsang / Self Study / Kirtan' }
  ];

  const included = [
    '11-12 nights accommodation (shared/private)',
    '3 nutritious vegetarian meals daily',
    'Yoga materials, books & manuals',
    'Weekend excursions & sightseeing',
    'Kirtan nights & cultural programs',
    'Cleansing kit (Jala neti, rubber neti)',
    'Fire ceremony & Ganga Aarti',
    '24/7 WiFi access',
    'Laundry service',
    'Free pickup from Dehradun Airport'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      text: 'This course transformed my life. The teachers are incredibly knowledgeable, and the setting in Rishikesh is magical. I left feeling confident and prepared to continue my yoga journey.'
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      text: 'The perfect introduction to yoga teacher training. Small class sizes meant I got personal attention, and the curriculum was comprehensive yet accessible for beginners.'
    },
    {
      name: 'Emma Williams',
      country: 'UK',
      text: 'The spiritual atmosphere of Rishikesh combined with expert teaching made this an unforgettable experience. The daily practice by the Ganges was life-changing.'
    }
  ];

  const faqs = [
    {
      q: 'Which airport should I fly to?',
      a: 'The closest airport is New Delhi (DEL). From there, you can take a domestic flight to Dehradun (DED) which is 30 minutes from Rishikesh, or travel by taxi/bus (6-7 hours).'
    },
    {
      q: 'Do I need prior yoga experience?',
      a: 'No prior experience is required. The course is designed for beginners and those looking to deepen their practice. At least 6 months of practice is recommended but not mandatory.'
    },
    {
      q: 'Will I get certification?',
      a: 'You will receive a 100-hour certificate. To become a certified yoga teacher (RYT-200), you need to complete the remaining 100 hours within one year at the same school.'
    },
    {
      q: 'What is included in the course fee?',
      a: 'Accommodation, 3 meals daily, course materials, excursions, WiFi, and airport pickup from Dehradun are all included. AC/heater may cost extra.'
    },
    {
      q: 'Is the food suitable for special diets?',
      a: 'Yes! We provide vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary requirements in advance.'
    }
  ];

  return (
    <div className={styles.yogaPage}>
       {/* Banners */}
              <div>
                 <img src={heroVideo} alt="img"/>
              </div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className={styles.heroTitle}>
                100 Hour Yoga Teacher Training in Rishikesh, India
              </h1>
              <p className={styles.heroSubtitle}>
                Transform Your Practice, Inspire Others, Become a Certified Yoga Teacher
              </p>
              <div className={styles.heroBadges}>
                <span className={styles.badgeItem}>📍 Rishikesh, India</span>
                <span className={styles.badgeItem}>⏱️ 12-14 Days</span>
                <span className={styles.badgeItem}>📜 Yoga Alliance USA</span>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className={`${styles.ctaButton} ${styles.primary}`}>Apply Now</button>
                <button className={`${styles.ctaButton} ${styles.secondary}`}>Download Brochure</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className={styles.heroImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop" 
                  alt="Yoga in Rishikesh" 
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Course Overview</h2>
            <p className={styles.sectionSubtitle}>A comprehensive, residential program designed for beginners and practitioners</p>
          </div>
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <p className={styles.leadText}>
                The <strong>100 Hour Yoga Teacher Training Course</strong> is your gateway to authentic yoga practice in the birthplace of yoga. 
                This transformative journey in Rishikesh combines traditional teachings with modern methodology, covering essential aspects 
                of yoga philosophy, anatomy, pranayama, meditation, and asanas.
              </p>
            </div>
          </div>
          
          <div className="row g-4 mb-5">
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📅</div>
                <h4>Duration</h4>
                <p>12-14 Days</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📊</div>
                <h4>Level</h4>
                <p>Beginner to Intermediate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>🏆</div>
                <h4>Certification</h4>
                <p>Step to RYT-200</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📍</div>
                <h4>Location</h4>
                <p>Rishikesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Refund/>

      {/* Why Rishikesh Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Why Rishikesh for Yoga?</h2>
            <p className={styles.sectionSubtitle}>Discover the magic of learning yoga in its birthplace</p>
          </div>
          <div className="row g-4">
            {whyRishikesh.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.featureCard}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Our Partner Schools</h2>
            <p className={styles.sectionSubtitle}>Choose from Rishikesh's most reputed yoga schools</p>
          </div>
          <div className="row g-4">
            {schools.map((school, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.schoolCard}>
                  <img src={school.image} alt={school.name} className={styles.schoolImage} />
                  <div className={styles.schoolBody}>
                    <h4 className={styles.schoolTitle}>{school.name}</h4>
                    <p className={styles.schoolDesc}>{school.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Course Features</h2>
            <p className={styles.sectionSubtitle}>Everything you need for a transformative yoga journey</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.featureCard}>
                  <div className={styles.iconBox}>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>What You'll Learn</h2>
            <p className={styles.sectionSubtitle}>Comprehensive curriculum covering all aspects of yoga</p>
          </div>
          <div className="row g-4">
            {curriculum.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.curriculumCard}>
                  <h3 className={styles.curriculumTitle}>{item.category}</h3>
                  <ul className={styles.curriculumList}>
                    {item.items.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Daily Schedule</h2>
            <p className={styles.sectionSubtitle}>A typical day in your yoga teacher training journey</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {dailySchedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <div className={styles.scheduleTime}>{item.time}</div>
                  <div className={styles.scheduleActivity}>{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>What's Included</h2>
            <p className={styles.sectionSubtitle}>Everything you need for a comfortable stay and learning experience</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-3">
                {included.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <div className={styles.includedItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>What Our Students Say</h2>
            <p className={styles.sectionSubtitle}>Hear from those who experienced the transformation</p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}></div>
                    <div>
                      <h5 className={styles.authorName}>{testimonial.name}</h5>
                      <small className={styles.authorCountry}>{testimonial.country}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Get answers to common questions</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.q}</h4>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OurCourses/>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
          <p className={styles.ctaSubtitle}>
            Transform your life through yoga. Join us in Rishikesh for an unforgettable experience.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className={`${styles.ctaButton} ${styles.primary} ${styles.large}`}>Apply Now</button>
            <button className={`${styles.ctaButton} ${styles.secondary} ${styles.large}`}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};