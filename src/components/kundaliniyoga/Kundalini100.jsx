import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/kundalini_yoga/Kundalini100.module.css';
import banner from '../../assets/images/200_Banner_V02.webp';
import BooksSection from 'components/MyBooks/Bookssection';
import HowToReach from 'components/Homepage/HowToReach';

export default function Kundalini100() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={banner} alt="Kundalini Yoga Introduction" />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.quoteText}>Begin Your Spiritual Journey</p>
          <h1 className={styles.mainTitle}>
            100 Hour Kundalini Yoga Foundation Course
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Kundalini 100 YTT</span>
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className={styles.heroStats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🧘</div>
            <div className={styles.statValue}>100+</div>
            <div className={styles.statLabel}>Hours Training</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🌟</div>
            <div className={styles.statValue}>14</div>
            <div className={styles.statLabel}>Days Immersion</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🏔️</div>
            <div className={styles.statValue}>Foundation</div>
            <div className={styles.statLabel}>Level Course</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>✨</div>
            <div className={styles.statValue}>Certified</div>
            <div className={styles.statLabel}>Completion</div>
          </div>
        </div>
      </section>

      {/* FLOATING INFO CARDS */}
      <section className={styles.floatingSection}>
        <div className={styles.container}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>🕉️</div>
              <h3>Sacred Beginning</h3>
              <p>
                Start your Kundalini journey in Rishikesh, the yoga capital of
                the world
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3>Experienced Teachers</h3>
              <p>
                Learn from certified instructors with deep knowledge of
                Kundalini yoga
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>📜</div>
              <h3>Foundation Certificate</h3>
              <p>
                Recognized completion certificate for your spiritual journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              Introduction to Inner Power
            </span>
            <h2 className={styles.sectionTitle}>
              What is 100 Hour Kundalini Yoga?
            </h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <p className={styles.leadText}>
                The 100-hour Kundalini yoga foundation course is designed for
                beginners who want to explore the transformative power of
                Kundalini energy. This introductory program gently awakens your
                awareness of the dormant energy within, teaching you fundamental
                practices to cleanse your body and mind, preparing you for
                deeper spiritual exploration.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>⚡</div>
                  <div>
                    <h4>Gentle Awakening</h4>
                    <p>
                      Safe introduction to Kundalini energy practices suitable
                      for beginners
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🌈</div>
                  <div>
                    <h4>Holistic Foundation</h4>
                    <p>
                      Basic asanas, breathing techniques, meditation and yogic
                      philosophy
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💫</div>
                  <div>
                    <h4>Inner Peace</h4>
                    <p>
                      Experience stress relief, mental clarity and beginning of
                      self-awareness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.overviewImage}>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Beginner Meditation Practice"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.mantraBox}>
                  <div className={styles.mantraSymbol}>ॐ</div>
                  <p>Om Namah Shivaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAKRAS SECTION */}
      <section className={styles.chakrasSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Energy Introduction</span>
            <h2 className={styles.sectionTitle}>
              Understanding the Seven Chakras
            </h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>
              Learn about the seven major energy centers and basic awareness
              practices
            </p>
          </div>

          <div className={styles.chakrasList}>
            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #C41E3A 0%, #8B1F3F 100%)',
                }}
              >
                <span className={styles.chakraNumber}>1</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Muladhara</h3>
                <p className={styles.chakraLabel}>Root Chakra</p>
                <p>
                  Foundation chakra at the base of spine - learn grounding
                  techniques and basic awareness of your physical foundation
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #FF6B35 0%, #D84315 100%)',
                }}
              >
                <span className={styles.chakraNumber}>2</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Swadhishthana</h3>
                <p className={styles.chakraLabel}>Sacral Chakra</p>
                <p>
                  Creative energy center - introduction to emotional balance and
                  creative expression
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #FDB813 0%, #F57F17 100%)',
                }}
              >
                <span className={styles.chakraNumber}>3</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Manipura</h3>
                <p className={styles.chakraLabel}>Solar Plexus Chakra</p>
                <p>
                  Personal power center - basic practices for confidence and
                  digestive wellness
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                }}
              >
                <span className={styles.chakraNumber}>4</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Anahata</h3>
                <p className={styles.chakraLabel}>Heart Chakra</p>
                <p>
                  Center of love and compassion - learn basic heart-opening
                  exercises and loving-kindness
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #2196F3 0%, #1565C0 100%)',
                }}
              >
                <span className={styles.chakraNumber}>5</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Vishuddhi</h3>
                <p className={styles.chakraLabel}>Throat Chakra</p>
                <p>
                  Communication center - introduction to authentic expression
                  and basic chanting
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #673AB7 0%, #4527A0 100%)',
                }}
              >
                <span className={styles.chakraNumber}>6</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Ajna</h3>
                <p className={styles.chakraLabel}>Third Eye Chakra</p>
                <p>
                  Intuition center - basic awareness practices and introduction
                  to inner vision
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)',
                }}
              >
                <span className={styles.chakraNumber}>7</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Sahasrara</h3>
                <p className={styles.chakraLabel}>Crown Chakra</p>
                <p>
                  Spiritual connection - understanding divine consciousness and
                  basic meditation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className={styles.curriculumSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Foundation Training</span>
            <h2 className={styles.sectionTitle}>Course Curriculum</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabButtons}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.active : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'asanas' ? styles.active : ''}`}
                onClick={() => setActiveTab('asanas')}
              >
                Asanas
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'pranayama' ? styles.active : ''}`}
                onClick={() => setActiveTab('pranayama')}
              >
                Pranayama
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'meditation' ? styles.active : ''}`}
                onClick={() => setActiveTab('meditation')}
              >
                Meditation
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'philosophy' ? styles.active : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                Philosophy
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'overview' && (
                <div className={styles.tabPane}>
                  <h3>What You Will Learn</h3>
                  <div className={styles.curriculumGrid}>
                    <div className={styles.curriculumCard}>
                      <h4>🧘 Introduction to Kundalini</h4>
                      <p>
                        Understanding Kundalini energy, chakras and basic energy
                        awareness
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌬️ Basic Pranayama</h4>
                      <p>
                        Fundamental breathing techniques for energy balance and
                        relaxation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🎵 Mantra Chanting</h4>
                      <p>
                        Introduction to sacred sounds and simple mantra
                        practices
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧠 Beginner Meditation</h4>
                      <p>
                        Simple meditation techniques for mental peace and focus
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>📚 Yoga Philosophy</h4>
                      <p>
                        Introduction to yogic lifestyle and basic spiritual
                        concepts
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧘‍♀️ Foundation Asanas</h4>
                      <p>
                        Basic yoga postures for flexibility and body awareness
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'asanas' && (
                <div className={styles.tabPane}>
                  <h3>Foundation Asana Practice</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Basic standing postures - Mountain Pose, Standing Forward
                      Bend
                    </li>
                    <li>
                      Simple Warrior Poses (Virabhadrasana I, II) - Building
                      strength
                    </li>
                    <li>
                      Cobra Pose (Bhujangasana) - Gentle backbend introduction
                    </li>
                    <li>Child's Pose (Balasana) - Resting and grounding</li>
                    <li>Cat-Cow Pose - Spinal flexibility and warm-up</li>
                    <li>Bridge Pose (Setu Bandhasana) - Basic backbend</li>
                    <li>Simple seated postures for meditation</li>
                    <li>
                      Basic forward bends - Seated and standing variations
                    </li>
                    <li>Gentle twists for spinal health</li>
                    <li>Relaxation poses - Savasana and variations</li>
                    <li>30+ foundational yoga postures</li>
                  </ul>
                </div>
              )}

              {activeTab === 'pranayama' && (
                <div className={styles.tabPane}>
                  <h3>Basic Breathing Practices</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Deep Abdominal Breathing - Foundation of all pranayama
                    </li>
                    <li>
                      Nadi Shodhana - Alternate nostril breathing for balance
                    </li>
                    <li>Ujjayi Breath - Ocean breath for calming mind</li>
                    <li>Bhramari - Humming bee breath for relaxation</li>
                    <li>Kapalbhati - Gentle skull cleansing breath</li>
                    <li>Simple breath awareness meditation</li>
                    <li>Introduction to breath retention (Kumbhaka)</li>
                    <li>Cooling breath techniques (Shitali)</li>
                  </ul>
                </div>
              )}

              {activeTab === 'meditation' && (
                <div className={styles.tabPane}>
                  <h3>Beginner Meditation & Mindfulness</h3>
                  <ul className={styles.curriculumList}>
                    <li>Breath Awareness Meditation - Foundation practice</li>
                    <li>Body Scan Relaxation - Deep physical awareness</li>
                    <li>
                      Simple Chakra Visualization - Introduction to energy
                      centers
                    </li>
                    <li>Trataka - Candle gazing for concentration</li>
                    <li>Basic Mantra Meditation - Om chanting</li>
                    <li>Guided Yoga Nidra - Deep relaxation technique</li>
                    <li>Walking Meditation - Mindful movement</li>
                    <li>Loving-Kindness Meditation - Opening the heart</li>
                    <li>Silent sitting practice - Building meditation habit</li>
                    <li>Evening Kirtan sessions - Group chanting experience</li>
                  </ul>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className={styles.tabPane}>
                  <h3>Introduction to Yoga Philosophy</h3>
                  <ul className={styles.curriculumList}>
                    <li>What is Kundalini? - Understanding dormant energy</li>
                    <li>Seven Chakras - Basic introduction and location</li>
                    <li>Understanding Prana - Life force energy</li>
                    <li>Introduction to Yoga Sutras - Eight limbs overview</li>
                    <li>Yamas and Niyamas - Ethical foundations of yoga</li>
                    <li>
                      Sattvic Living - Introduction to yogic diet and lifestyle
                    </li>
                    <li>Mind-Body Connection - Understanding how yoga works</li>
                    <li>Karma and Dharma - Basic spiritual concepts</li>
                    <li>
                      Benefits of Regular Practice - Physical and mental
                      wellness
                    </li>
                    <li>Creating a Home Practice - Building daily routine</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Your Daily Journey</span>
            <h2 className={styles.sectionTitle}>Daily Schedule</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>
              A gentle introduction to yogic lifestyle and daily spiritual
              practice
            </p>
          </div>

          <div className={styles.scheduleTimeline}>
            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>06:30</div>
              <div className={styles.scheduleContent}>
                <h4>Morning Wake Up & Herbal Tea</h4>
                <p>Gentle awakening with herbal tea and light stretching</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>07:00</div>
              <div className={styles.scheduleContent}>
                <h4>Meditation & Pranayama</h4>
                <p>Simple breathing exercises and guided meditation</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>08:30</div>
              <div className={styles.scheduleContent}>
                <h4>Breakfast</h4>
                <p>Healthy vegetarian breakfast with fresh fruits</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>10:00</div>
              <div className={styles.scheduleContent}>
                <h4>Foundation Yoga Asana Practice</h4>
                <p>Basic postures and gentle stretching exercises</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>12:00</div>
              <div className={styles.scheduleContent}>
                <h4>Lunch Break</h4>
                <p>Nutritious vegetarian meal with rest time</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>14:00</div>
              <div className={styles.scheduleContent}>
                <h4>Philosophy & Theory Class</h4>
                <p>Introduction to Kundalini yoga concepts and chakras</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>16:00</div>
              <div className={styles.scheduleContent}>
                <h4>Free Time / Self Practice</h4>
                <p>Personal time for rest, study or exploration</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>17:30</div>
              <div className={styles.scheduleContent}>
                <h4>Evening Tea & Snacks</h4>
                <p>Light refreshments and group discussions</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>18:00</div>
              <div className={styles.scheduleContent}>
                <h4>Mantra Chanting & Kirtan</h4>
                <p>Simple chanting and devotional singing</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>19:00</div>
              <div className={styles.scheduleContent}>
                <h4>Dinner</h4>
                <p>Light evening meal</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>20:30</div>
              <div className={styles.scheduleContent}>
                <h4>Yoga Nidra & Rest</h4>
                <p>Guided relaxation and early sleep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Begin Your Journey</span>
            <h2 className={styles.sectionTitle}>Course Pricing</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Shared Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>599</span>
                </div>
                <p className={styles.priceDesc}>Per Person</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>14 Days / 13 Nights Accommodation</li>
                <li>Shared Room with Private Bathroom</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Sightseeing</li>
                <li>Completion Certificate</li>
                <li>Airport Pickup (Dehradun)</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3>Private Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>749</span>
                </div>
                <p className={styles.priceDesc}>Single Occupancy</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>14 Days / 13 Nights Accommodation</li>
                <li>Private Room with Ensuite Bathroom</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Sightseeing</li>
                <li>Completion Certificate</li>
                <li>Airport Pickup (Dehradun)</li>
                <li>1 Ayurvedic Massage Session</li>
                <li>Priority Support</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Private Deluxe</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>899</span>
                </div>
                <p className={styles.priceDesc}>Premium Experience</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>14 Days / 13 Nights Accommodation</li>
                <li>Deluxe Private Room with AC</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Sightseeing</li>
                <li>Completion Certificate</li>
                <li>Airport Pickup (Delhi or Dehradun)</li>
                <li>2 Ayurvedic Massage Sessions</li>
                <li>Ayurvedic Consultation</li>
                <li>Yoga Props Kit</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>
          </div>
        </div>
      </section>
      <BooksSection />

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: 'Is this course suitable for complete beginners?',
                a: 'Absolutely! The 100-hour foundation course is specifically designed for beginners with no prior yoga experience. Our experienced teachers will guide you gently through each practice, ensuring you build a strong foundation safely.',
              },
              {
                q: 'Do I need to be flexible to join?',
                a: "No, flexibility is not required! Yoga helps you become more flexible over time. We teach modifications for all postures so everyone can practice comfortably at their own level. It's about the journey, not perfection.",
              },
              {
                q: 'What is the difference between 100 and 200 hour courses?',
                a: 'The 100-hour is a gentle introduction focused on understanding basics - simple asanas, basic pranayama, and introductory meditation. The 200-hour goes deeper into Kundalini awakening practices, advanced techniques, and qualifies you for teaching certification.',
              },
              {
                q: 'Will I receive a certificate?',
                a: "Yes! You'll receive a completion certificate from our school. While this is not a Yoga Alliance RYT certification (which requires 200 hours), it's recognized as foundational training and can be credited toward future 200-hour certification.",
              },
              {
                q: 'What is included in the course fee?',
                a: 'All accommodation, 3 daily vegetarian meals, course materials, excursions, completion certificate, and airport pickup from Dehradun are included. Only visa, flights, and personal expenses are not covered.',
              },
              {
                q: 'What should I bring to the course?',
                a: 'Comfortable yoga clothes (modest and breathable), personal toiletries, notebook for notes, water bottle, and an open mind. We provide yoga mats, props, and all study materials.',
              },
            ].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${openFaq === index ? styles.active : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={styles.faqIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${styles.faqAnswer} ${openFaq === index ? styles.show : ''}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HowToReach />

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Begin Your Yoga Journey?</h2>
          <p>
            Join us in Rishikesh for a transformative introduction to Kundalini
            yoga and spiritual wellness
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaPrimary}
              onClick={() => navigate('/BookingForm')}
            >
              Apply Now
            </button>
            <button className={styles.ctaSecondary}>Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
}
