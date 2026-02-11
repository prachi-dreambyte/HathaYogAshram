import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/YogaCourse/100Hours.module.css';
import Refund from 'components/Refund/refund';
import OurCourses from 'components/OurCourses/OurCourses';
import Hours24 from 'components/Hours24/Hours24';
import heroVideo from '../../assets/images/100hrs.webp';
import BooksSection from 'components/MyBooks/Bookssection';
import InternationalCertificate from 'components/InternationalCertificate/InternationalCertificate';

export default function YogaCourse100() {
  const navigate = useNavigate();

  const schools = [
    {
      name: 'Yogkulam',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      description:
        'Experience authentic yoga with traditional wisdom and modern teaching techniques.',
    },
    {
      name: 'Hatha Yogashram',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      description:
        'Your sanctuary for authentic yoga learning in the heart of Rishikesh.',
    },
    {
      name: 'Vinyasa Yogashala',
      image:
        'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop',
      description:
        'Perfect place to learn yoga with highly qualified international teachers.',
    },
    {
      name: 'World Peace Yoga School',
      image:
        'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop',
      description:
        'Most reputed and traditional yoga school with 15+ years in Rishikesh.',
    },
  ];

  const whyRishikesh = [
    {
      icon: '🏔️',
      title: 'Birthplace of Yoga',
      description:
        'Rishikesh is the yoga capital of the world, home to authentic yoga schools and ancient wisdom.',
    },
    {
      icon: '🕉️',
      title: 'Divine Energy',
      description:
        'Located in the Himalayas with the holy Ganges flowing through, creating awe-inspiring spiritual energy.',
    },
    {
      icon: '🧘‍♂️',
      title: 'Authentic Learning',
      description:
        'Learn from experienced masters who carry forward the traditional Himalayan yoga lineage.',
    },
    {
      icon: '🌿',
      title: 'Natural Setting',
      description:
        'Peaceful environment surrounded by mountains and nature, perfect for deep yoga practice.',
    },
  ];

  const features = [
    {
      icon: '🧘',
      title: 'Expert Teachers',
      desc: '15-30+ years of experience in traditional yoga',
    },
    {
      icon: '🏔️',
      title: 'Rishikesh Setting',
      desc: 'Yoga capital of the world',
    },
    {
      icon: '📜',
      title: 'Yoga Alliance',
      desc: 'Internationally certified courses',
    },
    {
      icon: '🌿',
      title: 'Organic Meals',
      desc: 'Nutritious sattvic vegetarian food',
    },
    {
      icon: '🏠',
      title: 'Accommodation',
      desc: 'Comfortable & clean rooms with modern facilities',
    },
    {
      icon: '🧘‍♀️',
      title: 'Small Groups',
      desc: 'Personal attention guaranteed',
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      desc: '100+ yoga postures and techniques',
    },
    {
      icon: '🎓',
      title: 'Certification',
      desc: 'Step towards 200hr RYT certification',
    },
  ];

  const curriculum = [
    {
      category: 'Hatha Yog',
      items: [
        '140+ traditional asanas',
        'Surya & Chandra Namaskar',
        'Standing, sitting, prone & supine postures',
        'Balancing & twisting postures',
      ],
    },
    {
      category: 'Ashtanga Vinyasa',
      items: [
        'Primary series practice',
        'Sun salutations A & B',
        'Standing & sitting sequences',
        'Finishing postures',
      ],
    },
    {
      category: 'Pranayama',
      items: [
        'Nadishodhana',
        'Kapalbhati',
        'Bhastrika',
        'Ujjayi, Bhramari, Sheetali',
      ],
    },
    {
      category: 'Meditation',
      items: [
        'Himalayan meditation',
        'Breath awareness',
        'Mantra meditation',
        'Yoga Nidra',
      ],
    },
    {
      category: 'Philosophy',
      items: [
        'Yoga Sutras of Patanjali',
        '8 limbs of Yoga',
        'Bhagavad Gita wisdom',
        'Chakras & Nadis',
      ],
    },
    {
      category: 'Anatomy',
      items: [
        'Skeletal & muscular system',
        'Respiratory & circulatory system',
        'Alignment principles',
        'Injury prevention',
      ],
    },
  ];

  const dailySchedule = [
    { time: '6:00 AM', activity: 'Morning Tea' },
    { time: '6:30 AM', activity: 'Pranayama & Meditation' },
    { time: '8:00 AM', activity: 'Hatha Yog Asana Practice' },
    { time: '10:00 AM', activity: 'Breakfast' },
    { time: '11:00 AM', activity: 'Yoga Philosophy & Ancient Texts' },
    { time: '12:30 PM', activity: 'Anatomy & Alignment' },
    { time: '1:30 PM', activity: 'Lunch' },
    { time: '3:00 PM', activity: 'Ashtanga Vinyasa Practice' },
    { time: '5:00 PM', activity: 'Teaching Methodology' },
    { time: '6:30 PM', activity: 'Dinner' },
    { time: '7:30 PM', activity: 'Satsang / Self Study / Kirtan' },
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
    'Free pickup from Dehradun Airport',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      text: 'This course transformed my life. The teachers are incredibly knowledgeable, and the setting in Rishikesh is magical. I left feeling confident and prepared to continue my yoga journey.',
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      text: 'The perfect introduction to yoga teacher training. Small class sizes meant I got personal attention, and the curriculum was comprehensive yet accessible for beginners.',
    },
    {
      name: 'Emma Williams',
      country: 'UK',
      text: 'The spiritual atmosphere of Rishikesh combined with expert teaching made this an unforgettable experience. The daily practice by the Ganges was life-changing.',
    },
  ];

  const faqs = [
    {
      q: 'Which airport should I fly to?',
      a: 'The closest airport is New Delhi (DEL). From there, you can take a domestic flight to Dehradun (DED) which is 30 minutes from Rishikesh, or travel by taxi/bus (6-7 hours).',
    },
    {
      q: 'Do I need prior yoga experience?',
      a: 'No prior experience is required. The course is designed for beginners and those looking to deepen their practice. At least 6 months of practice is recommended but not mandatory.',
    },
    {
      q: 'Will I get certification?',
      a: 'You will receive a 100-hour certificate. To become a certified yoga teacher (RYT-200), you need to complete the remaining 100 hours within one year at the same school.',
    },
    {
      q: 'What is included in the course fee?',
      a: 'Accommodation, 3 meals daily, course materials, excursions, WiFi, and airport pickup from Dehradun are all included. AC/heater may cost extra.',
    },
    {
      q: 'Is the food suitable for special diets?',
      a: 'Yes! We provide vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary requirements in advance.',
    },
  ];

  return (
    <>
      {/* Banner Image */}
      <div className={styles.bannerWrapper}>
        <img
          src={heroVideo}
          alt="100 Hour Yoga Teacher Training"
          className={styles.bannerImage}
        />
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            Transform Your Practice, Inspire Others, Become a Certified Yoga
            Teacher
          </p>
          <h1 className={styles.mainTitle}>
            100 Hour Yoga Teacher Training in Rishikesh, India
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>100 Hour YTTC</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Course Overview</p>
          <h2 className={styles.sectionTitle}>
            A Comprehensive, Residential Program Designed for Beginners and
            Practitioners
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            The <strong>100 Hour Yoga Teacher Training Course</strong> is your
            gateway to authentic yoga practice in the birthplace of yoga. This
            transformative journey in Rishikesh combines traditional teachings
            with modern methodology, covering essential aspects of yoga
            philosophy, anatomy, pranayama, meditation, and asanas.
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Duration</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>12-14 Days</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📅 12-14 Days intensive residential program</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📅</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Level</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Beginner to Intermediate</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📊 Suitable for all levels of practitioners</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📊</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Certification</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Step to RYT-200</span>
              </div>
              <div className={styles.infoDetails}>
                <p>🏆 Internationally recognized certificate</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>🏆</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Location</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Rishikesh, India</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📍 Yoga capital of the world</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📍</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rishikesh Section */}
      <section className={styles.whyRishikeshSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Why Rishikesh?</p>
          <h2 className={styles.sectionTitle}>
            Discover the Magic of Learning Yoga in Its Birthplace
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            Rishikesh is the yoga capital of the world, home to authentic yoga
            schools and ancient wisdom.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {whyRishikesh.map((item, index) => (
            <div key={index} className={styles.contentCard}>
              <div className={styles.contentInfo}>
                <h3 className={styles.contentCardTitle}>{item.title}</h3>
                <div className={styles.contentTags}>
                  <span className={styles.contentTag}>{item.icon}</span>
                </div>
                <div className={styles.contentDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.contentIconSection}>
                <div className={styles.largeIcon}>{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section - What You'll Learn */}
      <section className={styles.curriculumSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>What You'll Learn</p>
          <h2 className={styles.sectionTitle}>
            Comprehensive Curriculum Covering All Aspects of Yoga
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.curriculumGrid}>
          {curriculum.map((item, index) => (
            <div key={index} className={styles.curriculumCard}>
              <div className={styles.curriculumInfo}>
                <h3 className={styles.curriculumTitle}>{item.category}</h3>
                <div className={styles.curriculumContent}>
                  <ul className={styles.curriculumList}>
                    {item.items.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className={styles.scheduleSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Daily Schedule</p>
          <h2 className={styles.sectionTitle}>
            A Typical Day in Your Yoga Teacher Training Journey
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.scheduleGrid}>
          {dailySchedule.map((item, index) => (
            <div key={index} className={styles.scheduleCard}>
              <div className={styles.scheduleInfo}>
                <h3 className={styles.scheduleTime}>{item.time}</h3>
                <div className={styles.scheduleActivity}>
                  <p>{item.activity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Features Section */}
      <section className={styles.FeaturesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Course Features</p>
          <h2 className={styles.sectionTitle}>
            Everything You Need for a Transformative Yoga Journey
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureInfo}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <div className={styles.featureTags}>
                  <span className={styles.featureTag}>{feature.icon}</span>
                </div>
                <div className={styles.featureDescription}>
                  <p>{feature.desc}</p>
                </div>
              </div>
              <div className={styles.featureIconSection}>
                <div className={styles.featureIcon}>{feature.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className={styles.includedSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>What's Included</p>
          <h2 className={styles.sectionTitle}>
            Everything You Need for a Comfortable Stay and Learning Experience
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.includedGrid}>
          {included.map((item, index) => (
            <div key={index} className={styles.includedCard}>
              <div className={styles.includedInfo}>
                <div className={styles.includedIcon}>✓</div>
                <p className={styles.includedText}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schools Section */}
      {/* <section className={styles.schoolsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Our Partner Schools</p>
          <h2 className={styles.sectionTitle}>
            Choose from Rishikesh's Most Reputed Yoga Schools
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.schoolsGrid}>
          {schools.map((school, index) => (
            <div key={index} className={styles.schoolCard}>
              <div className={styles.schoolInfo}>
                <h3 className={styles.schoolName}>{school.name}</h3>
                <div className={styles.schoolDescription}>
                  <p>{school.description}</p>
                </div>
              </div>
              <div className={styles.schoolImageSection}>
                <img
                  src={school.image}
                  alt={school.name}
                  className={styles.schoolImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <InternationalCertificate/>

      <Hours24 />

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>What Our Students Say</p>
          <h2 className={styles.sectionTitle}>
            Hear from Those Who Experienced the Transformation
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialInfo}>
                <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                <div className={styles.testimonialTags}>
                  <span className={styles.testimonialTag}>
                    {testimonial.country}
                  </span>
                </div>
                <div className={styles.testimonialText}>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Refund />

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Frequently Asked Questions</p>
          <h2 className={styles.sectionTitle}>
            Get Answers to Common Questions
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqInfo}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OurCourses />
      <BooksSection />
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
          <p className={styles.ctaSubtitle}>
            Transform your life through yoga. Join us in Rishikesh for an
            unforgettable experience.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaButton}
              onClick={() => navigate('/BookingForm')}
            >
              Apply Now
            </button>

            <button
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
