import React from 'react';
import styles from '../../assets/styles/YogaCourse/500Hours.module.css';
import heroVideo from '../../assets/images/500.webp';
import Refund from 'components/Refund/refund';
import Hours24 from 'components/Hours24/Hours24';
import TeacherHours from 'components/TeacherHours/TeacherHours';


export default function YogaCourse500() {
  return (
    <div className={styles.yogaPage}>
       {/* Banners */}
        <div>
           <img src={heroVideo} alt="img"/>
        </div>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.overlay}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className={styles.heroContent}>
                <span className={styles.certBadge}>Yoga Alliance RYT-500 Certified</span>
                <h1 className={styles.mainTitle}>500 Hour Yoga Teacher Training Course</h1>
                <h2 className={styles.subTitle}>Transformative 56-Day Immersion in Rishikesh, India</h2>
                <div className={styles.heroStats}>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>56</span>
                    <span className={styles.statLabel}>Days of Immersion</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>500</span>
                    <span className={styles.statLabel}>Training Hours</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>RYT</span>
                    <span className={styles.statLabel}>Yoga Alliance</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>🌄</span>
                    <span className={styles.statLabel}>Himalayas</span>
                  </div>
                </div>
                <p className={styles.heroDescription}>
                  The <strong>500 Hour Yoga Teacher Training Course</strong> is a comprehensive, residential program designed for beginners and practitioners who want to deepen their practice and become certified yoga teachers. This month-long immersive experience in Rishikesh, the yoga capital of the world, combines traditional teachings with modern methodology.
                </p>
                <div className={styles.ctaButtons}>
                  <button className={`btn ${styles.primaryBtn}`}>Download Brochure</button>
                  <button className={`btn ${styles.secondaryBtn}`}>Apply Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.yogaElements}>
                <div className={styles.floatingYogi}>🧘‍♀️</div>
                <div className={styles.courseCard}>
                  <h4>Course Details</h4>
                  <ul>
                    <li><strong>Duration:</strong> 56 Days</li>
                    <li><strong>Level:</strong> Beginner to Advanced</li>
                    <li><strong>Certification:</strong> Yoga Alliance USA</li>
                    <li><strong>Location:</strong> Rishikesh, India</li>
                    <li><strong>Next Batch:</strong> April 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Refund/>

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete Yoga Transformation Journey</h2>
            <p className={styles.sectionSubtitle}>Master Yoga in the Heart of Rishikesh</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8">
              <div className={styles.contentCard}>
                <h3>What You'll Experience</h3>
                <p>Our 500 Hour Yoga Teacher Training in Rishikesh is designed for seekers who wish to advance their practice and explore Yoga in its deepest, most authentic and purest form. This two month-long, complete immersion course is ideal for individuals aspiring to engender growth and establish themselves as holistic Yoga teachers in any part of the world.</p>
                
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className={styles.featureItem}>
                      <span className={styles.featureIcon}>🧘‍♂️</span>
                      <h5>Advanced Practice</h5>
                      <p>Deepen your Hatha and Ashtanga Vinyasa practice with master teachers</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.featureItem}>
                      <span className={styles.featureIcon}>📚</span>
                      <h5>Comprehensive Learning</h5>
                      <p>Study anatomy, philosophy, Sanskrit, and teaching methodology</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.featureItem}>
                      <span className={styles.featureIcon}>🌿</span>
                      <h5>Traditional Wisdom</h5>
                      <p>Learn from authentic Himalayan yoga lineage holders</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.featureItem}>
                      <span className={styles.featureIcon}>🎓</span>
                      <h5>Global Certification</h5>
                      <p>Receive Yoga Alliance RYT-500 certification recognized worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className={styles.whyRishikesh}>
                <h4>Why Rishikesh?</h4>
                <p>Rishikesh – A home for authentic yoga schools! Located in Northern India, tucked into the Himalayas, and the holy river Ganges flows through it. This small city has become the best yoga destination in the world.</p>
                <ul>
                  <li>🎯 Birthplace of Yoga</li>
                  <li>🏔️ Himalayan foothills</li>
                  <li>🕉️ Spiritual energy center</li>
                  <li>🌊 Holy Ganga River</li>
                  <li>🧘 Authentic yoga traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className={styles.highlightsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Makes Our Program Special</h2>
            <p className={styles.sectionSubtitle}>Key Features of Our 500-Hour Yoga TTC</p>
          </div>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className={styles.highlightCard}>
                <div className={styles.highlightNumber}>01</div>
                <h4>Structured & Comprehensive Learning</h4>
                <p>Our 500 Hour Yoga TTC covers all essential dimensions: Yoga Anatomy, Philosophy, Pranayama, Meditation, Asanas, Mantras, Yoga Therapy, and Teaching Methodology.</p>
                <div className={styles.highlightTags}>
                  <span className={styles.tag}>📖 Philosophy</span>
                  <span className={styles.tag}>💪 Asanas</span>
                  <span className={styles.tag}>🌬️ Pranayama</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className={styles.highlightCard}>
                <div className={styles.highlightNumber}>02</div>
                <h4>Authentic Teachings from the Source</h4>
                <p>Study in Rishikesh – the spiritual heartland of yoga. Learn from highly experienced and traditionally trained Indian yoga teachers in an immersive environment.</p>
                <div className={styles.highlightTags}>
                  <span className={styles.tag}>🎯 Authentic</span>
                  <span className={styles.tag}>🧭 Traditional</span>
                  <span className={styles.tag}>📜 Lineage</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className={styles.highlightCard}>
                <div className={styles.highlightNumber}>03</div>
                <h4>Internationally Recognized Certification</h4>
                <p>Receive a 200 Hour + 300 Hour Yoga Teacher Training Certificate, eligible for RYT-500 registration with Yoga Alliance. Teach advanced classes worldwide with confidence.</p>
                <div className={styles.highlightTags}>
                  <span className={styles.tag}>🌍 Global</span>
                  <span className={styles.tag}>✅ Certified</span>
                  <span className={styles.tag}>🎓 Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hours24/>

      {/* Curriculum Details */}
      <section className={styles.curriculumSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Detailed Curriculum</h2>
            <p className={styles.sectionSubtitle}>Complete Learning Journey Over 56 Days</p>
          </div>
          
          <div className={styles.curriculumTabs}>
            <div className={styles.tabHeader}>
              <button className={`${styles.tabButton} ${styles.active}`}>First Month (200 Hours)</button>
              <button className={styles.tabButton}>Second Month (300 Hours)</button>
              <button className={styles.tabButton}>Daily Schedule</button>
            </div>
            
            <div className={styles.tabContent}>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.subjectCard}>
                    <h5>Hatha Yoga Foundations</h5>
                    <ul>
                      <li>Pawanmuktasana Series 1-3</li>
                      <li>Surya Namaskar & Chandra Namaskar</li>
                      <li>50+ foundational asanas</li>
                      <li>Proper alignment techniques</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.subjectCard}>
                    <h5>Ashtanga Vinyasa Primary Series</h5>
                    <ul>
                      <li>Complete Primary Series</li>
                      <li>Vinyasa count with breath</li>
                      <li>Bandhas and drishti</li>
                      <li>Traditional Mysore style</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.subjectCard}>
                    <h5>Pranayama & Meditation</h5>
                    <ul>
                      <li>Nadi Shodhana</li>
                      <li>Bhastrika & Kapalbhati</li>
                      <li>Bhramari & Ujjayi</li>
                      <li>Meditation techniques</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.subjectCard}>
                    <h5>Yoga Philosophy</h5>
                    <ul>
                      <li>Patanjali Yoga Sutras</li>
                      <li>Bhagavad Gita teachings</li>
                      <li>Hatha Yoga Pradipika</li>
                      <li>Eight Limbs of Yoga</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Subjects */}
          <div className={styles.detailedSubjects}>
            <h4>Complete Syllabus Includes:</h4>
            <div className="row">
              <div className="col-md-3">
                <div className={styles.subjectList}>
                  <h6>Techniques & Practice</h6>
                  <ul>
                    <li>Hatha Yoga Asanas</li>
                    <li>Ashtanga Vinyasa</li>
                    <li>Pranayama</li>
                    <li>Meditation</li>
                    <li>Mantra Chanting</li>
                    <li>Shatkarma</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.subjectList}>
                  <h6>Teaching Methodology</h6>
                  <ul>
                    <li>Class Sequencing</li>
                    <li>Adjustments & Alignment</li>
                    <li>Voice & Cueing</li>
                    <li>Classroom Management</li>
                    <li>Teaching Practice</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.subjectList}>
                  <h6>Anatomy & Physiology</h6>
                  <ul>
                    <li>Musculoskeletal System</li>
                    <li>Respiratory System</li>
                    <li>Nervous System</li>
                    <li>Yoga Therapy</li>
                    <li>Injury Prevention</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.subjectList}>
                  <h6>Philosophy & Lifestyle</h6>
                  <ul>
                    <li>Yoga Sutras Study</li>
                    <li>Bhagavad Gita</li>
                    <li>Ayurveda Basics</li>
                    <li>Yogic Diet</li>
                    <li>Ethics for Teachers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className={styles.scheduleSection}>
        <div className="container">
          <h3 className={styles.scheduleTitle}>Daily Schedule (Monday - Saturday)</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>5:30 AM</div>
              <div className={styles.activity}>Wake Up & Herbal Tea</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>6:00 AM</div>
              <div className={styles.activity}>Pranayama & Meditation</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>7:30 AM</div>
              <div className={styles.activity}>Ashtanga/Hatha Practice</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>10:00 AM</div>
              <div className={styles.activity}>Breakfast</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>11:00 AM</div>
              <div className={styles.activity}>Philosophy/Anatomy Class</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>1:00 PM</div>
              <div className={styles.activity}>Lunch & Rest</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>3:00 PM</div>
              <div className={styles.activity}>Alignment & Adjustment Workshop</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>4:30 PM</div>
              <div className={styles.activity}>Teaching Methodology</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>6:30 PM</div>
              <div className={styles.activity}>Evening Practice (Yin/Restorative)</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>8:00 PM</div>
              <div className={styles.activity}>Dinner</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeSlot}>9:30 PM</div>
              <div className={styles.activity}>Lights Out</div>
            </div>
          </div>
          <div className={styles.scheduleNote}>
            <p>💡 <strong>Note:</strong> Sundays are for rest, self-study, and optional excursions to local temples, waterfalls, and spiritual sites.</p>
          </div>
        </div>
      </section>

      {/* Accommodation & Facilities */}
      <section className={styles.accommodationSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Home in Rishikesh</h2>
            <p className={styles.sectionSubtitle}>Comfortable Stay & Nourishing Meals</p>
          </div>
          
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.roomOptions}>
                <h4>Accommodation Options</h4>
                <div className={styles.roomCard}>
                  <h5>Private Room</h5>
                  <p>Single occupancy with attached bathroom</p>
                  <ul>
                    <li>🛏️ Comfortable bed with fresh linens</li>
                    <li>🚿 Hot water bathroom</li>
                    <li>🧺 Daily housekeeping</li>
                    <li>📶 Wi-Fi access</li>
                    <li>🧘 Yoga mat & props provided</li>
                  </ul>
                </div>
                <div className={styles.roomCard}>
                  <h5>Shared Room</h5>
                  <p>Twin sharing with attached bathroom</p>
                  <ul>
                    <li>🛏️ Two comfortable beds</li>
                    <li>🚿 Private bathroom</li>
                    <li>🧺 Weekly housekeeping</li>
                    <li>📶 Common area Wi-Fi</li>
                    <li>🎒 Storage space</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.foodSection}>
                <h4>Sattvic Vegetarian Meals</h4>
                <p>Nourish your body with our traditional yogic diet prepared with love and care:</p>
                
                <div className={styles.mealCard}>
                  <div className={styles.mealTime}>Breakfast</div>
                  <div className={styles.mealDescription}>
                    Seasonal fruits, porridge, herbal teas, and traditional Indian breakfast items
                  </div>
                </div>
                
                <div className={styles.mealCard}>
                  <div className={styles.mealTime}>Lunch</div>
                  <div className={styles.mealDescription}>
                    Balanced thali with grains, lentils, vegetables, fresh salad, and ayurvedic drinks
                  </div>
                </div>
                
                <div className={styles.mealCard}>
                  <div className={styles.mealTime}>Dinner</div>
                  <div className={styles.mealDescription}>
                    Light, easily digestible meal to support evening practice and restful sleep
                  </div>
                </div>
                
                <div className={styles.dietaryNote}>
                  <p>🌱 <strong>Special Diets:</strong> Vegan, gluten-free, and other dietary requirements accommodated upon advance request.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Facilities */}
          <div className={styles.facilities}>
            <h4>Campus Facilities</h4>
            <div className="row">
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🧘‍♀️</span>
                  <span>Yoga Shalas</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>📚</span>
                  <span>Library</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🌳</span>
                  <span>Garden</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🏥</span>
                  <span>First Aid</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🧺</span>
                  <span>Laundry</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>💧</span>
                  <span>Filtered Water</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🛡️</span>
                  <span>24/7 Security</span>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className={styles.facilityItem}>
                  <span className={styles.facilityIcon}>🚗</span>
                  <span>Transport</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included & Excluded */}
      <section className={styles.includedSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.includedCard}>
                <h4 className={styles.includedTitle}>✅ Included in Course Fee</h4>
                <ul>
                  <li>58 nights accommodation in chosen room type</li>
                  <li>Three organic vegetarian meals daily (Mon-Sat)</li>
                  <li>Complete 500-hour curriculum and study materials</li>
                  <li>Yoga mat and props for practice</li>
                  <li>Welcome and graduation ceremonies</li>
                  <li>Weekly excursions and cultural activities</li>
                  <li>One Ayurvedic massage session</li>
                  <li>Airport pickup from Dehradun</li>
                  <li>Yoga Alliance RYT-500 certificate</li>
                  <li>Wi-Fi access in common areas</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className={styles.excludedCard}>
                <h4 className={styles.excludedTitle}>❌ Not Included</h4>
                <ul>
                  <li>International airfare to India</li>
                  <li>Visa fees (tourist visa required)</li>
                  <li>Travel insurance (mandatory)</li>
                  <li>Personal expenses and shopping</li>
                  <li>Additional therapies or treatments</li>
                  <li>Meals on Sundays and during breaks</li>
                  <li>Delhi airport pickup (available at extra cost)</li>
                  <li>Room heater/AC (available at extra cost)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.totalInvestment}>
            <h4>Total Investment: <span className={styles.price}>USD $2,199</span></h4>
            <p>Early bird discount: $200 off for registrations 3+ months in advance</p>
            <div className={styles.paymentOptions}>
              <span>💳 Payment Options:</span>
              <span>Bank Transfer</span>
              <span>Credit Card</span>
              <span>Cash on Arrival</span>
            </div>
          </div>
        </div>
      </section>
      <TeacherHours/>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Everything you need to know</p>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className={styles.faqItem}>
                <h5>👶 I'm a complete beginner. Is this course suitable for me?</h5>
                <p>Absolutely! Our program is designed for all levels. The first month builds strong foundations, and teachers provide individual attention and modifications.</p>
              </div>
              <div className={styles.faqItem}>
                <h5>🎓 What is RYT-500 certification?</h5>
                <p>RYT-500 is the highest level of Yoga Alliance certification, combining 200-hour and 300-hour training. It qualifies you to teach advanced classes worldwide.</p>
              </div>
              <div className={styles.faqItem}>
                <h5>📅 What's the typical age range of students?</h5>
                <p>We've had students from 18 to 65 years old. Yoga is for every body at every age. Our diverse community enriches the learning experience.</p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className={styles.faqItem}>
                <h5>🛏️ Can I choose my room type?</h5>
                <p>Yes! You can choose between private or shared rooms. Private rooms have limited availability, so early booking is recommended.</p>
              </div>
              <div className={styles.faqItem}>
                <h5>🌡️ What's the weather like in Rishikesh?</h5>
                <p>Rishikesh has pleasant weather most of the year. Winters (Oct-Feb) are cool, summers (Mar-Jun) are warm, and monsoon (Jul-Sep) brings rain.</p>
              </div>
              <div className={styles.faqItem}>
                <h5>✈️ How do I reach Rishikesh?</h5>
                <p>Fly to Delhi, then take a domestic flight to Dehradun (45 min) or taxi from Delhi to Rishikesh (5-6 hours). We provide pickup from Dehradun airport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaContainer}>
            <h2>Ready to Begin Your Transformation?</h2>
            <p>Join hundreds of students who have transformed their lives through our 500-hour yoga teacher training program.</p>
            
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <span>15+</span>
                <small>Years Experience</small>
              </div>
              <div className={styles.ctaStat}>
                <span>1000+</span>
                <small>Graduates</small>
              </div>
              <div className={styles.ctaStat}>
                <span>50+</span>
                <small>Countries</small>
              </div>
              <div className={styles.ctaStat}>
                <span>98%</span>
                <small>Satisfaction</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
