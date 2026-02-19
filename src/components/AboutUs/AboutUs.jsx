import React, { useState } from 'react';
import styles from '../../assets/styles/AboutUs/AboutUs.module.css';
import AboutImg from '../../assets/images/AboutUs.webp';
import AboutImg1 from '../../assets/images/aboutyoga.jpg';

// ── Free yoga images from Unsplash (no API key needed, direct CDN links) ──
const IMAGES = {
  // Teachers
  rajeshKumar:   'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop&q=80',   // male yoga instructor meditating
  priyaSharma:   'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop&q=80', // female meditation
  swamiAnand:    'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=400&fit=crop&q=80', // man meditating outdoors
  kavitaDevi:    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=400&fit=crop&q=80', // yin yoga pose woman

  // Mantra / overview image alternative
  mantra:        'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&h=400&fit=crop&q=80', // om Sanskrit spiritual
};

export default function AboutUs() {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    { year: 2017, title: 'Foundation', description: 'Hatha Yogashram was established in the spiritual capital of Rishikesh' },
    { year: 2018, title: 'Yoga Alliance', description: 'Received Yoga Alliance certification and trained 100+ students' },
    { year: 2019, title: 'Expansion', description: 'Launched online yoga classes and international programs' },
    { year: 2020, title: 'Global Reach', description: 'Adapted during pandemic, reached students in 25+ countries' },
    { year: 2021, title: 'Recognition', description: 'Awarded Best Yoga School in North India' },
    { year: 2022, title: 'Innovation', description: 'Introduced specialized programs: Yin, Kundalini, Prenatal Yoga' },
    { year: 2023, title: 'Excellence', description: 'Trained 500+ certified yoga teachers worldwide' },
    { year: 2024, title: 'Leadership', description: "Established as one of India's most reputed yoga institutes" },
  ];

  const teachers = [
    {
      name: 'Yogi Rajesh Kumar',
      role: 'Founder & Senior Teacher',
      experience: '25+ Years',
      specialty: 'Hatha & Ashtanga Yoga',
      description: 'Master teacher with deep knowledge of traditional Hatha Yog and Patanjali Yoga Sutras',
      image: IMAGES.rajeshKumar,
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Yoga Philosophy Teacher',
      experience: '15+ Years',
      specialty: 'Yoga Philosophy & Meditation',
      description: 'PhD in Yoga Philosophy, specializing in Vedanta and ancient yogic texts',
      image: IMAGES.priyaSharma,
    },
    {
      name: 'Swami Anand Prakash',
      role: 'Meditation & Pranayama Master',
      experience: '20+ Years',
      specialty: 'Kundalini & Meditation',
      description: 'Himalayan tradition meditation master and expert in advanced pranayama techniques',
      image: IMAGES.swamiAnand,
    },
    {
      name: 'Kavita Devi',
      role: 'Yin Yoga Specialist',
      experience: '12+ Years',
      specialty: 'Yin Yoga & Anatomy',
      description: 'Certified in Traditional Chinese Medicine and fascia-focused Yin Yoga practice',
      image: IMAGES.kavitaDevi,
    },
  ];

  const values = [
    { icon: '🙏', title: 'Authenticity', description: 'We preserve and teach traditional yoga in its purest form, honoring ancient wisdom while making it accessible to modern practitioners.' },
    { icon: '❤️', title: 'Compassion', description: 'Every student is treated with kindness, patience and understanding. We create a safe, supportive environment for transformation.' },
    { icon: '🌟', title: 'Excellence', description: 'We maintain the highest standards in teaching, curriculum design, and student support, ensuring transformative learning experiences.' },
    { icon: '🌍', title: 'Community', description: "Building a global family of yogis who support each other's journey toward health, happiness and spiritual awakening." },
    { icon: '📚', title: 'Knowledge', description: 'Continuous learning and sharing of yogic wisdom through comprehensive courses, workshops and retreats.' },
    { icon: '🧘', title: 'Practice', description: 'We emphasize daily practice, discipline and dedication - the foundation of true yogic transformation.' },
  ];

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={AboutImg} alt="Hatha Yogashram" />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>Since 2017 • Transforming Lives Through Yoga</p>
          <h1 className={styles.mainTitle}>Welcome to Hatha Yogashram</h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className={styles.heroStats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}><div className={styles.statIcon}>📅</div><div className={styles.statValue}>7+</div><div className={styles.statLabel}>Years Excellence</div></div>
          <div className={styles.stat}><div className={styles.statIcon}>👥</div><div className={styles.statValue}>1000+</div><div className={styles.statLabel}>Students Trained</div></div>
          <div className={styles.stat}><div className={styles.statIcon}>🌏</div><div className={styles.statValue}>35+</div><div className={styles.statLabel}>Countries Reached</div></div>
          <div className={styles.stat}><div className={styles.statIcon}>⭐</div><div className={styles.statValue}>4.9/5</div><div className={styles.statLabel}>Student Rating</div></div>
        </div>
      </section>

      {/* FLOATING INFO CARDS */}
      <section className={styles.floatingSection}>
        <div className={styles.container}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}><div className={styles.cardIcon}>🏔️</div><h3>Sacred Location</h3><p>Based in Rishikesh, the world capital of yoga, on the banks of holy Ganges</p></div>
            <div className={styles.floatCard}><div className={styles.cardIcon}>🎓</div><h3>Yoga Alliance Certified</h3><p>Internationally recognized certification programs registered with Yoga Alliance</p></div>
            <div className={styles.floatCard}><div className={styles.cardIcon}>👨‍🏫</div><h3>Expert Teachers</h3><p>Learn from experienced masters with 15-25 years of teaching expertise</p></div>
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW SECTION */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Story</span>
            <h2 className={styles.sectionTitle}>About Hatha Yogashram</h2>
            <div className={styles.decorativeLine}></div>
          </div>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <p className={styles.leadText}>
                Hatha Yogashram was founded in 2017 with a vision to bring authentic yoga education to seekers from around the world. Nestled in the spiritual heart of Rishikesh, India, we have grown to become one of the most reputed yoga institutes across the nation.
              </p>
              <p className={styles.bodyText}>
                Our journey began with a simple mission: to preserve and share the ancient wisdom of yoga while making it accessible and relevant to modern practitioners. Over the years, we have trained more than 1,000 students from 35+ countries.
              </p>
              <p className={styles.bodyText}>
                We take pride in constantly reviewing and transforming our approach, ensuring that our curriculum remains authentic yet contemporary.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}><div className={styles.highlightIcon}>✨</div><div><h4>Traditional Wisdom</h4><p>Rooted in ancient Hatha Yog traditions and Patanjali's Yoga Sutras</p></div></div>
                <div className={styles.highlight}><div className={styles.highlightIcon}>🌐</div><div><h4>Global Community</h4><p>Students from Europe, America, Asia, and beyond join our family</p></div></div>
                <div className={styles.highlight}><div className={styles.highlightIcon}>🏆</div><div><h4>Award-Winning</h4><p>Recognized as Best Yoga School in North India (2021)</p></div></div>
              </div>
            </div>

            <div className={styles.overviewImage}>
              <img src={AboutImg1} alt="Yoga Practice at Hatha Yogashram" />
              {/* ── Mantra box with spiritual image background ── */}
              <div className={styles.imageOverlay}>
                <div className={styles.mantraBox}>
                  <div className={styles.mantraSymbol}>ॐ</div>
                  <p>योगः चित्त-वृत्ति निरोधः</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}><div className={styles.iconCircle}>🎯</div></div>
              <h3>Our Mission</h3>
              <p>Hatha Yogashram is an international affiliate partner institute providing underlying Yoga Alliance certified teacher training programs.</p>
              <p>We strive to create transformative experiences that empower individuals to:</p>
              <ul>
                <li>Develop a deep personal practice</li>
                <li>Master the art of teaching yoga authentically</li>
                <li>Integrate yogic philosophy into daily life</li>
                <li>Spread health, peace and spiritual awareness globally</li>
              </ul>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}><div className={styles.iconCircle}>👁️</div></div>
              <h3>Our Vision</h3>
              <p>The commitment of global well-being drives us to constantly innovate plans and strategies that help people achieve their health goals.</p>
              <p>We envision a world where:</p>
              <ul>
                <li>Yoga is recognized as a complete lifestyle, not just exercise</li>
                <li>Ancient wisdom is preserved and made accessible to all</li>
                <li>Communities support each other's wellness journeys</li>
                <li>Peace and mindfulness become universal practices</li>
                <li>Every individual discovers their inner potential through yoga</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Stand For</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>The principles that guide every aspect of our teaching and community</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Journey</span>
            <h2 className={styles.sectionTitle}>Timeline of Excellence</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>From humble beginnings to international recognition</p>
          </div>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${activeYear === milestone.year ? styles.timelineItemActive : ''}`}
                onClick={() => setActiveYear(milestone.year)}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}><h4>{milestone.title}</h4><p>{milestone.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TEACHERS SECTION — with real images
          ════════════════════════════════════════ */}
      <section className={styles.teachersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Meet Our Masters</span>
            <h2 className={styles.sectionTitle}>Our Expert Teachers</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>Learn from experienced yoga masters dedicated to your transformation</p>
          </div>
          <div className={styles.teachersGrid}>
            {teachers.map((teacher, index) => (
              <div key={index} className={styles.teacherCard}>
                <div className={styles.teacherImage}>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'inherit',
                      display: 'block',
                    }}
                    onError={(e) => {
                      // Fallback to emoji placeholder if image fails
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:#f5ede8;">🧘</div>';
                    }}
                  />
                </div>
                <div className={styles.teacherInfo}>
                  <h3>{teacher.name}</h3>
                  <p className={styles.teacherRole}>{teacher.role}</p>
                  <div className={styles.teacherMeta}>
                    <span className={styles.experience}>📚 {teacher.experience}</span>
                    <span className={styles.specialty}>⭐ {teacher.specialty}</span>
                  </div>
                  <p className={styles.teacherDesc}>{teacher.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Your Best Choice</span>
            <h2 className={styles.sectionTitle}>Why Choose Hatha Yogashram?</h2>
            <div className={styles.decorativeLine}></div>
          </div>
          <div className={styles.reasonsGrid}>
            {[
              ['01','Authentic Tradition','Learn genuine Hatha Yog from teachers trained in traditional Himalayan lineages, preserving ancient wisdom.'],
              ['02','Sacred Location','Study in Rishikesh, where the Ganges flows from the Himalayas - a place of immense spiritual energy and natural beauty.'],
              ['03','Experienced Faculty','Our teachers have 15-25 years of experience and deep knowledge of yoga philosophy, anatomy, and practice.'],
              ['04','Small Batch Size','We maintain small class sizes (maximum 15-20 students) ensuring personalized attention and proper guidance.'],
              ['05','Comprehensive Curriculum','Our courses cover asanas, pranayama, meditation, philosophy, anatomy, teaching methodology, and more.'],
              ['06','International Recognition','Yoga Alliance certified programs recognized worldwide, enabling you to teach globally after graduation.'],
              ['07','Affordable Pricing','High-quality training at reasonable prices, including accommodation, meals, and all materials.'],
              ['08','Holistic Approach','Beyond physical practice - we emphasize spiritual growth, mindfulness, and lifestyle transformation.'],
              ['09','Online & Offline','Flexible learning options with both residential courses in Rishikesh and online classes for global students.'],
              ['10','Lifetime Support','Join our global alumni community with continued guidance, resources, and networking opportunities.'],
              ['11','Proven Success','Our graduates teach successfully worldwide, many running their own yoga studios and online classes.'],
              ['12','Cultural Immersion','Experience authentic Indian yoga culture with temple visits, Ganga Aarti, and spiritual excursions.'],
            ].map(([num, title, desc]) => (
              <div key={num} className={styles.reasonCard}>
                <div className={styles.reasonNumber}>{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION GOALS SECTION */}
      <section className={styles.goalsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Roadmap</span>
            <h2 className={styles.sectionTitle}>Vision Goals</h2>
            <div className={styles.decorativeLine}></div>
          </div>
          <div className={styles.goalsGrid}>
            {[
              ['📢','Creating Awareness','Provide curated space through blogs, diet suggestions, recipes, and educational content to spread yoga knowledge and healthy lifestyle practices.'],
              ['🎓','Training Practitioners','Offer array of training courses - from beginner to advanced - to boost confidence, skills and deep understanding of yoga.'],
              ['🤝','Mentoring Community','Handpicked retreats, workshops and satsangs for rejuvenation, growth and building supportive yoga community worldwide.'],
              ['👨‍🏫','Platform for Teachers','Create opportunities for experienced teachers to share their knowledge, expertise and unique perspectives with public.'],
              ['🌈','Variety of Styles','Cater to different needs and preferences with Hatha, Ashtanga, Vinyasa, Yin, Kundalini and specialized yoga programs.'],
              ['🧘','Lifestyle Choice','Promote yoga as a complete lifestyle encompassing physical health, mental peace, spiritual growth and conscious living.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className={styles.goalCard}>
                <div className={styles.goalIcon}>{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className={styles.facilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Ashram</span>
            <h2 className={styles.sectionTitle}>World-Class Facilities</h2>
            <div className={styles.decorativeLine}></div>
          </div>
          <div className={styles.facilitiesGrid}>
            {[
              ['🏠','Comfortable Accommodation','Clean, peaceful rooms with attached bathrooms, AC options, and mountain or river views'],
              ['🍽️','Nutritious Sattvic Meals','Three vegetarian meals daily with fresh, organic ingredients prepared with love'],
              ['🧘‍♀️','Spacious Yoga Halls','Large, well-ventilated practice spaces with natural light and peaceful ambiance'],
              ['📚','Yoga Library','Extensive collection of yoga texts, scriptures, and reference materials'],
              ['🌿','Beautiful Gardens','Serene outdoor spaces perfect for meditation and relaxation'],
              ['🌐','Free WiFi','High-speed internet throughout the ashram for staying connected'],
            ].map(([icon, title, desc]) => (
              <div key={title} className={styles.facilityCard}>
                <div className={styles.facilityIcon}>{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Student Stories</span>
            <h2 className={styles.sectionTitle}>What Our Students Say</h2>
            <div className={styles.decorativeLine}></div>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>"Hatha Yogashram transformed my life! The teachers are incredibly knowledgeable and caring. I came as a beginner and left as a confident teacher. The experience in Rishikesh was magical."</p>
              <div className={styles.testimonialAuthor}><strong>Sarah Johnson</strong><span>USA • 200 Hour YTT Graduate 2023</span></div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>"Best decision of my life! The curriculum is comprehensive, covering everything from philosophy to anatomy. Small batch sizes meant I got personalized attention. Now I run my own studio!"</p>
              <div className={styles.testimonialAuthor}><strong>Marco Rossi</strong><span>Italy • 300 Hour YTT Graduate 2023</span></div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testimonialText}>"The online classes are fantastic! Even from home, I felt connected to the teachers and community. The quality of instruction is outstanding. Highly recommend Hatha Yogashram."</p>
              <div className={styles.testimonialAuthor}><strong>Yuki Tanaka</strong><span>Japan • Online Student 2024</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Begin Your Transformation Today</h2>
          <p>Join thousands of students who have transformed their lives through authentic yoga education at Hatha Yogashram</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Explore Our Courses</button>
            <button className={styles.ctaSecondary}>Book a Free Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}