import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../../assets/styles/YogaCourse/100Hours.module.css';
import Refund from 'components/Refund/refund';
import OurCourses from 'components/OurCourses/OurCourses';
import Hours24 from 'components/Hours24/Hours24';
import heroVideo from '../../assets/images/100hrs.webp';
import BooksSection from 'components/MyBooks/Bookssection';
import InternationalCertificate from 'components/InternationalCertificate/InternationalCertificate';
import Form100 from './Form100';
import HowToReach from 'components/Homepage/HowToReach';

const API_BASE = "http://localhost:8000/api";
const ASSET_BASE = "http://localhost:8000";

const toAssetUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return value;
  if (value.startsWith('http') || value.startsWith('data:')) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, '')}`;
};

const DEFAULT_HERO = {
  quoteText: 'Transform Your Practice, Inspire Others, Become a Certified Yoga Teacher',
  title: 'Yoga Teacher Training in Rishikesh, India',
  breadcrumbLabel: 'Yoga Training',
  bannerImage: '',
};

const DEFAULT_OVERVIEW = {
  tag: 'Course Overview',
  title: 'A Comprehensive, Residential Program Designed for Beginners and Practitioners',
  description:
    'This yoga teacher training program is your gateway to authentic yoga practice in the birthplace of yoga. This transformative journey in Rishikesh combines traditional teachings with modern methodology, covering essential aspects of yoga philosophy, anatomy, pranayama, meditation, and asanas.',
};

const DEFAULT_INFO_CARDS = [
  {
    title: 'Duration',
    tag: 'Course Duration',
    detail: '📅 Intensive residential program',
    icon: '📅',
  },
  {
    title: 'Level',
    tag: 'All Levels',
    detail: '📊 Suitable for all levels of practitioners',
    icon: '📊',
  },
  {
    title: 'Certification',
    tag: 'Certification',
    detail: '🏆 Internationally recognized certificate',
    icon: '🏆',
  },
  {
    title: 'Location',
    tag: 'Rishikesh, India',
    detail: '📍 Yoga capital of the world',
    icon: '📍',
  },
];

const DEFAULT_WHY = {
  tag: 'Why Rishikesh?',
  title: 'Discover the Magic of Learning Yoga in Its Birthplace',
  description:
    'Rishikesh is the yoga capital of the world, home to authentic yoga schools and ancient wisdom.',
  items: [
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
  ],
};

const DEFAULT_CURRICULUM = {
  tag: "What You'll Learn",
  title: 'Comprehensive Curriculum Covering All Aspects of Yoga',
  items: [
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
  ],
};

const DEFAULT_SCHEDULE = {
  tag: 'Daily Schedule',
  title: 'A Typical Day in Your Yoga Teacher Training Journey',
  items: [
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
  ],
};

const DEFAULT_FEATURES = {
  tag: 'Course Features',
  title: 'Everything You Need for a Transformative Yoga Journey',
  items: [
    { icon: '🧘', title: 'Expert Teachers', desc: '15-30+ years of experience in traditional yoga' },
    { icon: '🏔️', title: 'Rishikesh Setting', desc: 'Yoga capital of the world' },
    { icon: '📜', title: 'Yoga Alliance', desc: 'Internationally certified courses' },
    { icon: '🌿', title: 'Organic Meals', desc: 'Nutritious sattvic vegetarian food' },
    { icon: '🏠', title: 'Accommodation', desc: 'Comfortable & clean rooms with modern facilities' },
    { icon: '🧘‍♀️', title: 'Small Groups', desc: 'Personal attention guaranteed' },
    { icon: '📚', title: 'Comprehensive Curriculum', desc: 'Comprehensive yoga postures and techniques' },
    { icon: '🎓', title: 'Certification', desc: 'Internationally recognized certification' },
  ],
};

const DEFAULT_INCLUDED_SECTION = {
  tag: "What's Included",
  title: 'Everything You Need for a Comfortable Stay and Learning Experience',
  includedTitle: 'What does the course fees include?',
  notIncludedTitle: 'What is not included in the course fees?',
  toBringTitle: 'What to bring with you?',
  items: [
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
  ],
  notIncluded: [],
  toBringImage: '',
};

const DEFAULT_TESTIMONIALS = {
  tag: 'What Our Students Say',
  title: 'Hear from Those Who Experienced the Transformation',
  items: [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      text:
        'This course transformed my life. The teachers are incredibly knowledgeable, and the setting in Rishikesh is magical. I left feeling confident and prepared to continue my yoga journey.',
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      text:
        'The perfect introduction to yoga teacher training. Small class sizes meant I got personal attention, and the curriculum was comprehensive yet accessible for beginners.',
    },
    {
      name: 'Emma Williams',
      country: 'UK',
      text:
        'The spiritual atmosphere of Rishikesh combined with expert teaching made this an unforgettable experience. The daily practice by the Ganges was life-changing.',
    },
  ],
};

const DEFAULT_FAQS = {
  tag: 'Frequently Asked Questions',
  title: 'Get Answers to Common Questions',
  items: [
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
      a: 'You will receive a certification for the training hours you complete. Please ask us how to combine multiple trainings for a longer credential.',
    },
    {
      q: 'What is included in the course fee?',
      a: 'Accommodation, 3 meals daily, course materials, excursions, WiFi, and airport pickup from Dehradun are all included. AC/heater may cost extra.',
    },
    {
      q: 'Is the food suitable for special diets?',
      a: 'Yes! We provide vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary requirements in advance.',
    },
  ],
};

const DEFAULT_CTA = {
  title: 'Ready to Begin Your Journey?',
  subtitle: 'Transform your life through yoga. Join us in Rishikesh for an unforgettable experience.',
  primaryLabel: 'Apply Now',
  primaryLink: '/BookingForm',
  secondaryLabel: 'Contact Us',
  secondaryLink: '/contact-us',
};

export default function YogaCourse100() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  const courseSlug = slug || '100-hour-yttc';

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses/slug/${courseSlug}`);
        setCourse(res.data?.data || null);
      } catch (error) {
        console.error('Failed to load course data', error);
      }
    };

    fetchCourse();
  }, [courseSlug]);

  const content = course?.content || {};

  const hero = { ...DEFAULT_HERO, ...(content.hero || {}) };
  if (!content.hero?.title && course?.title) hero.title = course.title;
  if (!content.hero?.breadcrumbLabel && (course?.shortTitle || course?.title)) {
    hero.breadcrumbLabel = course?.shortTitle || course?.title;
  }

  const overview = { ...DEFAULT_OVERVIEW, ...(content.overview || {}) };
  if (!content.overview?.description && course?.description) {
    overview.description = course.description;
  }

  const fallbackInfoCards = useMemo(() => {
    const duration = course?.duration || course?.teacherTraining?.duration;
    const level = course?.level;
    const certification = course?.teacherTraining?.certification || course?.home?.certification;
    const location = course?.location;

    return [
      {
        ...DEFAULT_INFO_CARDS[0],
        tag: duration || DEFAULT_INFO_CARDS[0].tag,
        detail: duration ? `📅 ${duration}` : DEFAULT_INFO_CARDS[0].detail,
      },
      {
        ...DEFAULT_INFO_CARDS[1],
        tag: level || DEFAULT_INFO_CARDS[1].tag,
        detail: level ? `📊 ${level}` : DEFAULT_INFO_CARDS[1].detail,
      },
      {
        ...DEFAULT_INFO_CARDS[2],
        tag: certification || DEFAULT_INFO_CARDS[2].tag,
        detail: certification ? `🏆 ${certification}` : DEFAULT_INFO_CARDS[2].detail,
      },
      {
        ...DEFAULT_INFO_CARDS[3],
        tag: location || DEFAULT_INFO_CARDS[3].tag,
        detail: location ? `📍 ${location}` : DEFAULT_INFO_CARDS[3].detail,
      },
    ];
  }, [course]);

  const infoCards = content.infoCards?.length ? content.infoCards : fallbackInfoCards;
  const whySection = { ...DEFAULT_WHY, ...(content.whyRishikesh || {}) };
  const curriculumSection = { ...DEFAULT_CURRICULUM, ...(content.curriculum || {}) };
  const scheduleSection = { ...DEFAULT_SCHEDULE, ...(content.dailySchedule || {}) };
  const featuresSection = { ...DEFAULT_FEATURES, ...(content.features || {}) };
  const includedSection = { ...DEFAULT_INCLUDED_SECTION, ...(content.included || {}) };
  const testimonialsSection = { ...DEFAULT_TESTIMONIALS, ...(content.testimonials || {}) };
  const faqSection = { ...DEFAULT_FAQS, ...(content.faqs || {}) };
  const ctaSection = { ...DEFAULT_CTA, ...(content.cta || {}) };

  const heroImage =
    toAssetUrl(hero.bannerImage || course?.banner || course?.card?.image) || heroVideo;
  const includedItems = includedSection.items?.length ? includedSection.items : DEFAULT_INCLUDED_SECTION.items;
  const notIncludedItems = includedSection.notIncluded || [];

  const courseTitle = hero.title || course?.title || DEFAULT_HERO.title;

  return (
    <>
      {/* Banner Image */}
      <div className={styles.bannerWrapper}>
        <img
          src={heroImage}
          alt={courseTitle}
          className={styles.bannerImage}
        />
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            {hero.quoteText}
          </p>
          <h1 className={styles.mainTitle}>
            {hero.title}
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>{hero.breadcrumbLabel}</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>{overview.tag}</p>
          <h2 className={styles.sectionTitle}>
            {overview.title}
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            {overview.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          {infoCards.map((card, index) => (
            <div className={styles.infoCard} key={index}>
              <div className={styles.infoContent}>
                <h3 className={styles.infoCardTitle}>{card.title}</h3>
                <div className={styles.infoTags}>
                  <span className={styles.infoTag}>{card.tag}</span>
                </div>
                <div className={styles.infoDetails}>
                  <p>{card.detail}</p>
                </div>
              </div>
              <div className={styles.infoImageSection}>
                <div className={styles.infoIcon}>{card.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Form100
        courseId={course?._id}
        courseTitle={courseTitle}
        batches={course?.batches || []}
        included={includedItems}
        notIncluded={notIncludedItems}
        toBringImage={includedSection.toBringImage}
        includedTitle={includedSection.includedTitle}
        notIncludedTitle={includedSection.notIncludedTitle}
        toBringTitle={includedSection.toBringTitle}
      />

      {/* Why Rishikesh Section */}
      <section className={styles.whyRishikeshSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>{whySection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {whySection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            {whySection.description}
          </p>
        </div>

        <div className={styles.contentGrid}>
          {(whySection.items || DEFAULT_WHY.items).map((item, index) => (
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
          <p className={styles.sectionTag}>{curriculumSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {curriculumSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.curriculumGrid}>
          {(curriculumSection.items || DEFAULT_CURRICULUM.items).map((item, index) => (
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
          <p className={styles.sectionTag}>{scheduleSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {scheduleSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.scheduleGrid}>
          {(scheduleSection.items || DEFAULT_SCHEDULE.items).map((item, index) => (
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
          <p className={styles.sectionTag}>{featuresSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {featuresSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.featuresGrid}>
          {(featuresSection.items || DEFAULT_FEATURES.items).map((feature, index) => (
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
      <InternationalCertificate data={content.certificate} />

      {/* What's Included Section */}
      <section className={styles.includedSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>{includedSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {includedSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.includedGrid}>
          {includedItems.map((item, index) => (
            <div key={index} className={styles.includedCard}>
              <div className={styles.includedInfo}>
                <div className={styles.includedIcon}>✓</div>
                <p className={styles.includedText}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Hours24 />

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>{testimonialsSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {testimonialsSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          {(testimonialsSection.items || DEFAULT_TESTIMONIALS.items).map((testimonial, index) => (
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
          <p className={styles.sectionTag}>{faqSection.tag}</p>
          <h2 className={styles.sectionTitle}>
            {faqSection.title}
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.faqGrid}>
          {(faqSection.items || DEFAULT_FAQS.items).map((faq, index) => (
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
      <HowToReach />
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{ctaSection.title}</h2>
          <p className={styles.ctaSubtitle}>
            {ctaSection.subtitle}
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaButton}
              onClick={() => navigate(ctaSection.primaryLink || '/BookingForm')}
            >
              {ctaSection.primaryLabel}
            </button>

            <button
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              onClick={() => navigate(ctaSection.secondaryLink || '/contact-us')}
            >
              {ctaSection.secondaryLabel}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
