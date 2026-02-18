import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/kundalini_yoga/Kundalini300.module.css';
import banner from '../../assets/images/300_Banner_V01.webp';
import BooksSection from 'components/MyBooks/Bookssection';
import HowToReach from 'components/Homepage/HowToReach';

export default function Kundalini300() {
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
          <img src={banner} alt="Kundalini Meditation" />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.quoteText}>Deepen Your Spiritual Journey</p>
          <h1 className={styles.mainTitle}>
            300 Hour Kundalini Yoga Teacher Training
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Kundalini 300 YTT</span>
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className={styles.heroStats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🧘</div>
            <div className={styles.statValue}>300+</div>
            <div className={styles.statLabel}>Hours Training</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🌟</div>
            <div className={styles.statValue}>28</div>
            <div className={styles.statLabel}>Days Intensive</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🏔️</div>
            <div className={styles.statValue}>Advanced</div>
            <div className={styles.statLabel}>Level Training</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>✨</div>
            <div className={styles.statValue}>RYT-300</div>
            <div className={styles.statLabel}>Certified</div>
          </div>
        </div>
      </section>

      {/* FLOATING INFO CARDS */}
      <section className={styles.floatingSection}>
        <div className={styles.container}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>🕉️</div>
              <h3>Sacred Tradition</h3>
              <p>
                Advanced Kundalini practices from authentic Himalayan lineage
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3>Expert Guidance</h3>
              <p>
                Learn from masters with 30+ years in Kundalini and Tantra yoga
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>📜</div>
              <h3>Advanced Certification</h3>
              <p>
                Internationally recognized RYT-300 certification upon completion
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
              Advanced Spiritual Practice
            </span>
            <h2 className={styles.sectionTitle}>
              What is 300 Hour Kundalini Yoga?
            </h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <p className={styles.leadText}>
                The 300-hour Kundalini yoga teacher training is an advanced
                program designed for those who have completed their 200-hour
                training and seek deeper spiritual awakening. This intensive
                course focuses on the ascension of inner latent energy - the
                rise of Shakti to unite with Shiva consciousness, opening our
                hearts to live authentically.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>⚡</div>
                  <div>
                    <h4>Advanced Kriyas</h4>
                    <p>
                      Master complex Kundalini kriyas for complete chakra
                      awakening and energy transformation
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🌈</div>
                  <div>
                    <h4>Complete Mastery</h4>
                    <p>
                      Deep dive into pranayama, meditation, bandhas, mudras and
                      Tantra philosophy
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💫</div>
                  <div>
                    <h4>Spiritual Awakening</h4>
                    <p>
                      Experience profound inner transformation and connection
                      with your true self
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.overviewImage}>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Advanced Meditation Practice"
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
            <span className={styles.sectionLabel}>Energy Mastery</span>
            <h2 className={styles.sectionTitle}>Advanced Chakra Awakening</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>
              Deep dive into the seven major chakras and learn advanced
              techniques to awaken and balance each energy center
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
                  Foundation of physical and spiritual being, connecting Sattva,
                  Rajas, and Tamas at the base of spine. Learn advanced
                  grounding techniques and root chakra activation.
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
                  Center of procreative and sexual energy below the navel,
                  responsible for life formation and creative power. Master
                  techniques for creative energy channeling.
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
                  The power seat controlling physical and physiological
                  wellbeing. Advanced practices for personal power and
                  transformation.
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
                  Center of emotions in the chest, opening deep happiness and
                  peace when awakened. Learn heart-opening kriyas and compassion
                  meditation.
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
                  Chakra of purity behind throat, awakening brings sweet voice
                  and divine communication. Master mantra chanting and truth
                  expression.
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
                  Command center between eyebrows providing visions, light
                  flashes and deep stillness. Advanced Trataka and intuition
                  development.
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
                  Supreme state at top of skull - the lotus with multiple
                  petals, opening tremendous powers and divine trance state.
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
            <span className={styles.sectionLabel}>Advanced Training</span>
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
                className={`${styles.tabBtn} ${activeTab === 'kriyas' ? styles.active : ''}`}
                onClick={() => setActiveTab('kriyas')}
              >
                Kriyas
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'asanas' ? styles.active : ''}`}
                onClick={() => setActiveTab('asanas')}
              >
                Asanas
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
                  <h3>What You Will Master</h3>
                  <div className={styles.curriculumGrid}>
                    <div className={styles.curriculumCard}>
                      <h4>🔥 Advanced Kundalini Kriyas</h4>
                      <p>
                        Master complex kriyas for chakra awakening, energy
                        channeling and Shiva-Shakti union
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧘 140+ Yoga Asanas</h4>
                      <p>
                        Complete practice including advanced inversions, arm
                        balances and Hatha yog mastery
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌬️ Advanced Pranayama</h4>
                      <p>
                        15+ breathing techniques including Sushumna breathing
                        and advanced retention practices
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧠 Deep Meditation</h4>
                      <p>
                        Himalayan meditation, Trataka, Vipassana, chakra
                        awareness and Kundalini active meditation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🙏 Bandhas & Mudras</h4>
                      <p>
                        Energy locks and 20+ spiritual mudras for energy saving
                        and transformation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>💫 Yoga Nidra Mastery</h4>
                      <p>
                        Psychic sleep techniques, chakra awareness nidra and
                        31-point relaxation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>✨ Shatkarma Cleansing</h4>
                      <p>
                        Complete detoxification practices including Jala Neti,
                        Kunjal Kriya and Agnisar
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>📚 Tantra Philosophy</h4>
                      <p>
                        Deep understanding of chakras, nadis, Kundalini anatomy
                        and energy body systems
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🎵 Mantra & Kirtan</h4>
                      <p>
                        Sacred chanting including Om, Shiva Mantra, Gayatri
                        Mantra and Bija Mantras
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌿 Ayurveda Integration</h4>
                      <p>
                        5 element theory, doshas, chakra massage and energy
                        system balancing
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>👥 Teaching Methodology</h4>
                      <p>
                        Professional skills for class sequencing, verbal cues,
                        alignment and student safety
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>⚡ Energy Transmission</h4>
                      <p>
                        Mantra Diksha, Shaktipat initiation and sound healing
                        sessions with Guru
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'kriyas' && (
                <div className={styles.tabPane}>
                  <h3>Kundalini Kriyas & Energy Practices</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Advanced Kundalini awakening kriyas for all 7 chakras
                    </li>
                    <li>Chakra Sadhana - systematic activation practices</li>
                    <li>
                      Energy channeling through Ida, Pingala, Sushumna nadis
                    </li>
                    <li>Bindu awakening practices and light visualization</li>
                    <li>Shiva-Shakti union meditation and tantric practices</li>
                    <li>Kundalini fire meditation for transformation</li>
                    <li>Granthis piercing - removing energy blockages</li>
                    <li>Advanced spinal breathing techniques</li>
                    <li>Sushumna activation for spiritual awakening</li>
                    <li>Kundalini Shakti transmission practices</li>
                  </ul>
                </div>
              )}

              {activeTab === 'asanas' && (
                <div className={styles.tabPane}>
                  <h3>Advanced Hatha Yog Asana Practice</h3>
                  <ul className={styles.curriculumList}>
                    <li>140+ traditional yoga asanas and variations</li>
                    <li>Surya Namaskar (Sun Salutation) - 12 steps mastery</li>
                    <li>Chandra Namaskar (Moon Salutation) variations</li>
                    <li>Advanced Warrior poses (Virabhadrasana I, II, III)</li>
                    <li>
                      Inversions: Headstand, Shoulder Stand, Handstand
                      progressions
                    </li>
                    <li>Arm Balances: Crow Pose, Side Crow, Flying Pigeon</li>
                    <li>Deep backbends: Wheel, Camel, King Pigeon, Bow Pose</li>
                    <li>
                      Forward bends: Paschimottanasana, Uttanasana variations
                    </li>
                    <li>Spinal twists: Ardha Matsyendrasana and variations</li>
                    <li>Core strengthening: Boat Pose, Plank variations</li>
                    <li>Hip openers: Pigeon, Lizard, Frog Pose</li>
                    <li>Balance poses: Tree, Eagle, Dancer's Pose</li>
                    <li>Alignment, assists and adjustment techniques</li>
                    <li>Contraindications and modifications for safety</li>
                  </ul>
                </div>
              )}

              {activeTab === 'meditation' && (
                <div className={styles.tabPane}>
                  <h3>Advanced Meditation & Consciousness</h3>
                  <ul className={styles.curriculumList}>
                    <li>Himalayan meditation practices from ancient lineage</li>
                    <li>
                      Chakra Awareness Meditation - deep energy center
                      activation
                    </li>
                    <li>
                      Kundalini Active Meditation - awakening dormant energy
                    </li>
                    <li>Trataka (Candle Gazing) - third eye activation</li>
                    <li>Vipassana - insight meditation and mindfulness</li>
                    <li>Nada Meditation - inner sound awareness</li>
                    <li>Ajapa Meditation - spontaneous breath awareness</li>
                    <li>Yoga Nidra - psychic sleep for deep healing</li>
                    <li>Chakra visualization and color meditation</li>
                    <li>Mantra Meditation - sacred sound vibrations</li>
                    <li>
                      Silent Meditation - one day Mauna (silence) practice
                    </li>
                    <li>Kirtan - devotional chanting evenings</li>
                    <li>Ganga beach meditation at sunrise</li>
                    <li>Walking meditation in Himalayan nature</li>
                  </ul>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className={styles.tabPane}>
                  <h3>Kundalini Tantra & Yoga Philosophy</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Understanding Kundalini Shakti - The Divine Feminine
                      Energy
                    </li>
                    <li>
                      Seven Chakras - detailed study of location, qualities,
                      awakening methods
                    </li>
                    <li>
                      Nadis - 72,000 energy channels, focus on Ida, Pingala,
                      Sushumna
                    </li>
                    <li>
                      Granthis - three psychic knots (Brahma, Vishnu, Rudra)
                      blocking energy flow
                    </li>
                    <li>
                      Kundalini Awakening Process - safe practices, signs and
                      precautions
                    </li>
                    <li>
                      Shiva-Shakti Union - merger of consciousness and energy
                    </li>
                    <li>Pancha Kosha - five sheaths of existence</li>
                    <li>Yoga Sutras of Patanjali - eight limbs foundation</li>
                    <li>
                      Tantra Tradition - ancient practices of energy
                      transformation
                    </li>
                    <li>
                      Kundalini Anatomy - subtle body systems and energy
                      pathways
                    </li>
                    <li>Guru-Disciple relationship in spiritual tradition</li>
                    <li>Understanding prana, apana and the five vayus</li>
                    <li>Karma, dharma and spiritual evolution</li>
                    <li>Bhagavad Gita wisdom for yoga practitioners</li>
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
            <span className={styles.sectionLabel}>Your Daily Rhythm</span>
            <h2 className={styles.sectionTitle}>Daily Schedule</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>
              Immerse yourself in advanced yogic discipline designed to deepen
              your spiritual practice
            </p>
          </div>

          <div className={styles.scheduleTimeline}>
            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>05:30</div>
              <div className={styles.scheduleContent}>
                <h4>Morning Bell & Herbal Tea</h4>
                <p>
                  Wake up to temple bells and prepare for the sacred day ahead
                </p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>06:00</div>
              <div className={styles.scheduleContent}>
                <h4>Kundalini Kriya & Meditation</h4>
                <p>Advanced awakening practices and deep chakra meditation</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>07:30</div>
              <div className={styles.scheduleContent}>
                <h4>Pranayama & Shatkarma</h4>
                <p>Advanced breathing exercises and cleansing practices</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>09:00</div>
              <div className={styles.scheduleContent}>
                <h4>Breakfast</h4>
                <p>Nutritious sattvic vegetarian meal with herbal tea</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>10:30</div>
              <div className={styles.scheduleContent}>
                <h4>Hatha Yog Asana Practice</h4>
                <p>Advanced postures, inversions and alignment practice</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>12:00</div>
              <div className={styles.scheduleContent}>
                <h4>Theory Class</h4>
                <p>Kundalini philosophy, anatomy and teaching methodology</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>13:00</div>
              <div className={styles.scheduleContent}>
                <h4>Lunch & Rest</h4>
                <p>Main meal of the day with self-study time</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>16:00</div>
              <div className={styles.scheduleContent}>
                <h4>Advanced Kundalini Practice</h4>
                <p>Kriyas, bandhas, mudras and energy channeling</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>18:00</div>
              <div className={styles.scheduleContent}>
                <h4>Mantra Chanting & Kirtan</h4>
                <p>Sacred mantras and devotional singing</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>19:00</div>
              <div className={styles.scheduleContent}>
                <h4>Dinner</h4>
                <p>Light evening meal for optimal digestion</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>20:00</div>
              <div className={styles.scheduleContent}>
                <h4>Satsang & Self Study</h4>
                <p>Spiritual discourse and personal practice</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>21:30</div>
              <div className={styles.scheduleContent}>
                <h4>Yoga Nidra & Lights Out</h4>
                <p>Deep relaxation and early sleep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Investment in Yourself</span>
            <h2 className={styles.sectionTitle}>Course Pricing</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Shared Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1399</span>
                </div>
                <p className={styles.priceDesc}>Per Person</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>28 Days / 27 Nights Accommodation</li>
                <li>Shared Room with Private Bathroom</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Excursions</li>
                <li>RYT-300 Certification</li>
                <li>Airport Pickup (Dehradun)</li>
                <li>Yoga Books & Notebooks</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3>Private Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1699</span>
                </div>
                <p className={styles.priceDesc}>Single Occupancy</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>28 Days / 27 Nights Accommodation</li>
                <li>Private Room with Ensuite Bathroom</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Excursions</li>
                <li>RYT-300 Certification</li>
                <li>Airport Pickup (Dehradun)</li>
                <li>2 Full Body Massage Sessions</li>
                <li>Himalayan Sightseeing Trip</li>
                <li>Priority Support</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Private Deluxe</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1999</span>
                </div>
                <p className={styles.priceDesc}>Premium Experience</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>28 Days / 27 Nights Accommodation</li>
                <li>Deluxe Private Room with AC</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>Weekend Excursions</li>
                <li>RYT-300 Certification</li>
                <li>Airport Pickup (Delhi or Dehradun)</li>
                <li>4 Full Body Massage Sessions</li>
                <li>Ayurvedic Consultation</li>
                <li>Private Meditation Sessions</li>
                <li>Sound Healing Session</li>
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
                q: 'How is Kundalini different from other styles of yoga?',
                a: 'Kundalini yoga is more spiritual than physical. While it includes asanas, the main focus is on awakening dormant energy through breathing, mantra, and meditation. Unlike Vinyasa or Hatha which focus mainly on physical postures, Kundalini is highly precise, repetitive, and works faster for spiritual development.',
              },
              {
                q: 'Can a beginner in yoga learn Kundalini?',
                a: 'The 300-hour course is designed for those who have completed 200-hour YTT and have at least 6 months of regular yoga practice. While beginners can benefit from Kundalini, this advanced training requires foundational knowledge of Hatha yog, pranayama, and meditation.',
              },
              {
                q: 'What are chakras and how do we awaken them?',
                a: 'Chakras are energy centers along the spine. To awaken them, you need strong focus, elimination of distractions, practice of pranayama, meditation, and guidance from an experienced teacher. Our course teaches systematic and safe methods to activate each chakra.',
              },
              {
                q: 'Is 300-Hour training eligible for RYT-300 certification?',
                a: "Yes! Upon successful completion, you'll receive RYT-300 certification recognized by Yoga Alliance International, allowing you to teach yoga anywhere in the world with advanced credentials.",
              },
              {
                q: 'What is the eligibility for 300-Hour training?',
                a: 'Best for: students who completed 200-hour training; those wanting comprehensive Kundalini knowledge; practitioners with 6+ months regular practice; anyone committed to spiritual growth and self-transformation; teachers wanting to deepen their expertise.',
              },
              {
                q: 'What is included in the course fee?',
                a: 'All accommodation, 3 daily meals, course materials, weekend excursions, certification, airport pickup from Dehradun, yoga books, cleansing kits, and temple visits are included. Only visa, flights, air-conditioning ($150 extra), and personal expenses are not covered.',
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
          <h2>Ready to Master Kundalini Yoga?</h2>
          <p>
            Join us in Rishikesh for an advanced journey of spiritual awakening
            and energy transformation
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
