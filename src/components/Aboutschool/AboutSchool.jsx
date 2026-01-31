import React, { useState } from 'react';
import styles from '../../assets/styles/Aboutschool/AboutSchool.module.css';
import { 
  School, Heart, Mountain, BookOpen, Target, Users, 
  Award, Globe, Compass, Star, Sparkles, Leaf, 
  CheckCircle, TrendingUp, Shield, Lightbulb, Zap,
  MapPin, GraduationCap, Sun, Layers,
  Activity, Flame, Wind, Flower2, TreePine, Sunset
} from 'lucide-react';

const AboutSchool = () => {
  const [activeTab, setActiveTab] = useState('worldpeace');
  const [activeSection, setActiveSection] = useState('about');

  const schools = [
    { id: 'worldpeace', name: 'World Peace Yoga School', icon: <Heart size={20} /> },
    { id: 'vinyasa', name: 'Vinyasa Yogashram', icon: <School size={20} /> },
    { id: 'sattva', name: 'Sattva Yoga Academy', icon: <Mountain size={20} /> },
    { id: 'yogkulam', name: 'Rishikesh Yogkulam', icon: <Sparkles size={20} /> }
  ];

  const sections = [
    { id: 'about', label: 'About School', icon: <School size={18} /> },
    { id: 'vision', label: 'Vision & Mission', icon: <Target size={18} /> },
    { id: 'teaching', label: 'Teaching', icon: <BookOpen size={18} /> },
    { id: 'values', label: 'Values', icon: <Star size={18} /> },
    { id: 'edge', label: 'Our Edge', icon: <Zap size={18} /> }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <GraduationCap className={styles.heroIcon} size={80} />
          <h1 className={styles.heroTitle}>About Our Schools</h1>
          <p className={styles.heroSubtitle}>
            Yoga Alliance Certified Teacher Training Schools in Rishikesh, India
          </p>
          <div className={styles.heroOm}>ॐ</div>
        </div>
      </div>

      {/* School Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabContainer}>
          {schools.map(school => (
            <button
              key={school.id}
              className={`${styles.tab} ${activeTab === school.id ? styles.tabActive : ''}`}
              onClick={() => {
                setActiveTab(school.id);
                setActiveSection('about');
              }}
            >
              {school.icon}
              <span>{school.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Navigation */}
      <div className={styles.sectionNav}>
        {sections.map(section => (
          <button
            key={section.id}
            className={`${styles.sectionBtn} ${activeSection === section.id ? styles.sectionBtnActive : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* =============================================
            WORLD PEACE YOGA SCHOOL - COMPLETE CONTENT
            ============================================= */}
        {activeTab === 'worldpeace' && (
          <>
            {activeSection === 'about' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Heart size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>About World Peace Yoga School</h2>
                </div>

                <div className={styles.imageSection}>
                  <img 
                    src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=400&fit=crop" 
                    alt="Yoga School in Rishikesh"
                    className={styles.heroImage}
                  />
                </div>

                <div className={styles.contentText}>
                  <p>World Peace Yoga Schools, and Yoga Teacher Training Courses here in Rishikesh provide certified training accredited by Yoga Alliance USA. We offer 200 hours, 300 hours, and 500 hours of Hatha, Ashtanga & Vinyasa yoga teacher training courses, in addition, you can also undertake courses such as 95 hours Kids, 85 hours Pre-natal, 50 hours Yin yoga TTC. These courses are designed for all levels, from Beginners, and Intermediate to Advanced levels here in Rishikesh, India.</p>

                  <p>If you are looking for a true, authentic world-renowned Yoga teacher training experience in the land of Yoga, Rishikesh then you have come to the right place. Rishikesh is the spiritual hub of Yoga and tradition. World Peace Yoga School has become the landmark of choice for individuals and groups from all parts of the globe, seeking to learn and discover more about the ancient art and science of Yoga. Here in Rishikesh, India we are one of the leading Yoga Teacher Training Schools.</p>

                  <div className={styles.highlightBox}>
                    <Star size={28} className={styles.highlightIcon} />
                    <div>
                      <h3>Over 10 Years of Excellence</h3>
                      <p>World Peace Yoga School has been established for over ten years in Rishikesh India. We have trained over 10,000 students on the yoga journey both on and offline all over the world.</p>
                    </div>
                  </div>

                  <p>We offer a deep, spiritual experience alongside teaching various yoga styles- and there is a yoga style to suit you! It is our connection to our students and our traditional teaching methods which makes us stand out from the rest. Yoga Teacher Training is our passion.</p>

                  <h3>Our Approach</h3>
                  <p>Our focus is you, the student and we aim to have small and intimate class sizes that provide a more tailored and personal experience for our students. The classes are not oversubscribed. This means that we create a magical atmosphere and a special bond between the students, teachers, and our World Peace Yoga School team. An environment where students are able to feel safe in the knowledge that they are in great hands.</p>

                  <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                      <Users size={32} />
                      <h4>Expert Teachers</h4>
                      <p>30+ years of combined experience in specialist subject areas</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Award size={32} />
                      <h4>Quality Education</h4>
                      <p>Renowned for quality teaching and facilities</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Heart size={32} />
                      <h4>Supportive Environment</h4>
                      <p>Loving, supportive style of conducting classes</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Globe size={32} />
                      <h4>Global Community</h4>
                      <p>Students from all corners of the world</p>
                    </div>
                  </div>

                  <div className={styles.imageSection}>
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop" 
                      alt="Rishikesh Ganges River"
                      className={styles.contentImage}
                    />
                  </div>

                  <h3>The Yoga Capital of the World</h3>
                  <p>As most people know, Rishikesh is the epitome and hub of yoga, the spiritual center and Yoga capital of the World. We attract millions of people here from all corners of the globe each year to further their Yoga Teacher Training and spiritual growth. Set in the Himalayan foothills inward to the northern state of Uttarakhand, alongside the majestic Ganges River, there's no other destination like it in the World.</p>

                  <p>The breathtaking scenery, vibrant but serene atmosphere, colors, smells and a history steeped in thousands of years of Yoga and spiritual tradition, it is impossible to replicate elsewhere. The vibration of Rishikesh is unmatched anywhere else in the world. The seers and sages who have meditated here and continue to do so, keep the energy in Rishikesh for all spiritual yogis high.</p>

                  <div className={styles.certificationBox}>
                    <Shield size={36} />
                    <div>
                      <h3>Yoga Alliance Certified</h3>
                      <p>As a comrade of Yoga Alliance, all our Yoga Teacher Training Courses (TTC) are approved and certified by Yoga Alliance USA, Yoga Alliance UK, Yoga Alliance International, and World Peace Yoga Alliance.</p>
                    </div>
                  </div>

                  <h3>What Makes Us Different</h3>
                  <ul className={styles.benefitsList}>
                    <li><CheckCircle size={20} /> Small, intimate class sizes for personalized attention</li>
                    <li><CheckCircle size={20} /> Traditional Himalayan teachings in modern, safe environment</li>
                    <li><CheckCircle size={20} /> Own time for practical application with students</li>
                    <li><CheckCircle size={20} /> Meet like-minded souls and form lifelong friendships</li>
                    <li><CheckCircle size={20} /> Proven track record of confident yoga teachers</li>
                    <li><CheckCircle size={20} /> Walking distance to local amenities while maintaining inner peace</li>
                  </ul>

                  <div className={styles.inspirationBox}>
                    <h3><Lightbulb size={24} /> Inspiration</h3>
                    <p className={styles.quote}>"The meaning of oneself is not to be found in its separateness from God and others, but in the ceaseless realization of yoga, of the union." - Rabindranath Tagore</p>
                    <p>World Peace Yoga School is a community of soulful individuals who are deeply inspired by yoga's eternal message of unity and peace.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Target size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Mission & Services</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>About Us</h3>
                  <p>World Peace Yoga School is a lively, vibrant and cutting-edge yoga ashram that differentiates itself by offering not only yogic practices but also by providing the traditional application, context and meaning of yogic science, asana and philosophy, mantra, and pranayama within each of the Yoga Teacher Training Courses.</p>

                  <div className={styles.missionGrid}>
                    <div className={styles.missionCard}>
                      <Award size={36} className={styles.missionIcon} />
                      <h3>Certification</h3>
                      <p>World Peace Yoga School is one of the most prestigious teacher training course schools in Rishikesh. By maintaining the highest standards of yoga curriculum, the school ensures premium services and supreme education.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Heart size={36} className={styles.missionIcon} />
                      <h3>Charity Work</h3>
                      <p>World Peace Yoga School's mission is to use our influence for the good of the human race. Profits are used to run the school, provide training to those less fortunate so that they are able to earn and give back to those who need it the most.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <MapPin size={36} className={styles.missionIcon} />
                      <h3>Accommodation</h3>
                      <p>Stay at World Peace Yoga School and experience the beauty of Rishikesh, India, in a relaxed and peaceful atmosphere with other spiritual-minded individuals. We have a variety of comfortable rooms available with views of the magnificent Ganga, mountains and private, twin and shared rooms all offering modern facilities and the comfort of home.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Users size={36} className={styles.missionIcon} />
                      <h3>Services</h3>
                      <p>At World Peace Yoga School, we offer various services for students during their undertaking of yoga teacher training course in Rishikesh, India.</p>
                    </div>
                  </div>

                  <div className={styles.goalBox}>
                    <h3>Our Goal</h3>
                    <p>Our goal is to cultivate a solid, safe, and effective practice as the foundation of teaching. Our training offers an in-depth journey of both the physical aspect of the practice and the more philosophical and spiritual dimensions of yoga such as mantra, pranayama, philosophy, etc.</p>
                    <p>Our Yoga teacher training courses validate our connection and devotion to the unique souls on this planet who want to carry, share and spread the practice of yoga. World Peace Yoga School is exactly what the name denotes – World Peace, Unity, Connection, and a part of the World Peace Yoga family – spreading peace, love, joy, and spirituality in the world.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'teaching' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <BookOpen size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Teaching Approach</h2>
                </div>

                <div className={styles.contentText}>
                  <p>World Peace Yoga School is a lively, vibrant, and cutting-edge yoga ashram that differentiates itself by offering not only yogic & spiritual practices but also by applying the correct traditions, context, and meaning of yogic science, asana, and philosophy. We will take you on a journey of self-discovery, meeting of minds, and amazing yoga asana styles, with a focus on Hatha, Vinyasa, and Ashtanga.</p>

                  <div className={styles.styleGrid}>
                    <div className={styles.styleCard}>
                      <Sun size={32} />
                      <h4>Hatha Yoga</h4>
                      <p>Traditional practice focusing on physical postures and breath control</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Zap size={32} />
                      <h4>Vinyasa Yoga</h4>
                      <p>Dynamic flow connecting breath with movement</p>
                    </div>
                    <div className={styles.styleCard}>
                      <TrendingUp size={32} />
                      <h4>Ashtanga Yoga</h4>
                      <p>Structured sequences building strength and flexibility</p>
                    </div>
                  </div>

                  <h3>Course Offerings</h3>
                  <div className={styles.coursesList}>
                    <div className={styles.courseItem}>
                      <CheckCircle size={24} className={styles.courseIcon} />
                      <div>
                        <h4>200 Hours Beginner Level (RYT 200)</h4>
                        <p>Foundation course for aspiring yoga teachers</p>
                      </div>
                    </div>
                    <div className={styles.courseItem}>
                      <CheckCircle size={24} className={styles.courseIcon} />
                      <div>
                        <h4>300 Hours Intermediate Level (RYT 300)</h4>
                        <p>Advanced training for experienced practitioners</p>
                      </div>
                    </div>
                    <div className={styles.courseItem}>
                      <CheckCircle size={24} className={styles.courseIcon} />
                      <div>
                        <h4>500 Hours Next Level (RYT 500)</h4>
                        <p>Comprehensive master-level certification</p>
                      </div>
                    </div>
                    <div className={styles.courseItem}>
                      <CheckCircle size={24} className={styles.courseIcon} />
                      <div>
                        <h4>Specialized Courses</h4>
                        <p>95 hours Kids Yoga, 85 hours Pre-natal, 50 hours Yin Yoga TTC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'values' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Star size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Values & Philosophy</h2>
                </div>

                <div className={styles.contentText}>
                  <p>World Peace Yoga School stands on foundational principles that guide our teaching and community:</p>

                  <div className={styles.valuesList}>
                    <div className={styles.valueItem}>
                      <Heart size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Unity and Peace</h4>
                        <p>We believe in yoga's eternal message of unity and peace, bringing together soulful individuals from around the world</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Users size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Community and Connection</h4>
                        <p>Creating a magical atmosphere and special bond between students, teachers, and our team</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <BookOpen size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Traditional Wisdom</h4>
                        <p>Authentic Himalayan teachings delivered in a modern, safe, and considerate environment</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Award size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Excellence in Education</h4>
                        <p>Maintaining highest standards of yoga curriculum with experienced teachers</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Leaf size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Holistic Approach</h4>
                        <p>In-depth journey covering physical, philosophical, and spiritual dimensions of yoga</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Globe size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Service to Humanity</h4>
                        <p>Using our influence for the good of human race through charity and compassionate teaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'edge' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Zap size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Competitive Edge</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>What Sets World Peace Yoga School Apart</h3>
                  <p>World Peace Yoga School distinguishes itself through a combination of authentic teachings, experienced faculty, and a nurturing environment that supports both personal and professional growth.</p>

                  <div className={styles.edgeGrid}>
                    <div className={styles.edgeCard}>
                      <Award size={32} className={styles.edgeIcon} />
                      <h4>Authentic Lineage</h4>
                      <p>Direct teachings from masters who have spent years in the Himalayan tradition, ensuring authenticity in every practice and philosophy shared.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Users size={32} className={styles.edgeIcon} />
                      <h4>Personal Attention</h4>
                      <p>Small class sizes ensure each student receives individualized guidance and support throughout their journey.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Globe size={32} className={styles.edgeIcon} />
                      <h4>Global Recognition</h4>
                      <p>Graduates from World Peace Yoga School are recognized worldwide for their depth of knowledge and teaching capabilities.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Heart size={32} className={styles.edgeIcon} />
                      <h4>Community Focus</h4>
                      <p>Strong emphasis on building lasting connections and a supportive global yoga family.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <MapPin size={32} className={styles.edgeIcon} />
                      <h4>Prime Location</h4>
                      <p>Situated in the heart of Rishikesh with views of the Ganges and Himalayas, providing the perfect environment for spiritual growth.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Shield size={32} className={styles.edgeIcon} />
                      <h4>Comprehensive Curriculum</h4>
                      <p>Well-rounded programs covering all aspects of yoga from asana to philosophy, anatomy to teaching methodology.</p>
                    </div>
                  </div>

                  <div className={styles.certificationBox}>
                    <Lightbulb size={36} />
                    <div>
                      <h3>Continuous Growth</h3>
                      <p>We believe in the continuous evolution of our students and teachers. Our alumni network provides ongoing support, advanced training opportunities, and a platform for collaboration and growth long after graduation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* =============================================
            VINYASA YOGASHRAM - COMPLETE CONTENT
            ============================================= */}
        {activeTab === 'vinyasa' && (
          <>
            {activeSection === 'about' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <School size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>About Vinyasa Yogashram</h2>
                </div>

                <div className={styles.imageSection}>
                  <img 
                    src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&h=400&fit=crop" 
                    alt="Vinyasa Yoga Practice"
                    className={styles.heroImage}
                  />
                </div>

                <div className={styles.contentText}>
                  <h3>History of Vinyasa Yoga Ashram</h3>
                  <p>Vinyasa Yoga Ashram was opened in 2015 witnessing the beauty and charisma of Rishikesh. We want to induce the guna (Qualities) of a true Rishi (Sages) inside you and are happy to announce that we are successful in this. Many of our yoga students become successful in their yogic style and are teaching others with great confidence and passion.</p>

                  <p>The professional and highly qualified teachers of our yoga school help you at every stage and impart the spiritual knowledge of yoga to our beloved students. We want to propagate the knowledge and wisdom of yoga as much as we can and so with this aim, we also established our yoga school also in the scenic places of Goa and Nepal.</p>

                  <div className={styles.locationGrid}>
                    <div className={styles.locationCard}>
                      <MapPin size={32} />
                      <h4>Rishikesh</h4>
                      <p>Main campus in the Yoga Capital</p>
                    </div>
                    <div className={styles.locationCard}>
                      <MapPin size={32} />
                      <h4>Goa</h4>
                      <p>Beachside yoga retreat</p>
                    </div>
                    <div className={styles.locationCard}>
                      <MapPin size={32} />
                      <h4>Nepal</h4>
                      <p>Himalayan sanctuary</p>
                    </div>
                  </div>

                  <h3>Yoga Alliance Certification</h3>
                  <p>A 200 Hours Yoga TTC by a registered yoga school is the beginner level yoga program that can help you in teaching yoga in yoga schools or studios in any part of the world. You can enroll yourself in the list of yoga professionals of Yoga Alliance after successfully completing the 200 Hours Yoga Teacher Training Program. This yoga proficiency course is the first step towards a successful yoga career.</p>

                  <div className={styles.allianceBox}>
                    <h4>What is Yoga Alliance?</h4>
                    <p>With its headquarter in Virginia, USA, Yoga Alliance is a nonprofit organization for yoga professionals and teachers, the certification of which is globally approved. Yoga Alliance provides the recognizability to the yoga TTC and accommodates a list of Yoga Alliance certified Yoga professional from any Yoga Alliance recognized school of Yoga.</p>

                    <p>The Yoga TTC programs conducted by Yoga Alliance are 100 Hours Yoga TTC in Rishikesh, 200 Hours Yoga TTC in Rishikesh, 300 Hours Yoga TTC, and 500 Hours Yoga TTC in Rishikesh. Yoga Alliance created some standards and guidelines for proficiency in yoga learning and certification.</p>
                  </div>

                  <h3>Benefits of Yoga Alliance Certificate</h3>
                  <ul className={styles.benefitsList}>
                    <li><CheckCircle size={20} /> Teach YTTC programs globally after certification</li>
                    <li><CheckCircle size={20} /> Open a Yoga School or Studio after certain years of proficiency</li>
                    <li><CheckCircle size={20} /> Globally recognized certification</li>
                    <li><CheckCircle size={20} /> Join worldwide community of certified teachers</li>
                  </ul>

                  <div className={styles.imageSection}>
                    <img 
                      src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=400&fit=crop" 
                      alt="Rishikesh Himalayan View"
                      className={styles.contentImage}
                    />
                  </div>

                  <h3>The Yoga Capital - Rishikesh</h3>
                  <p>The homeland of Yoga, Rishikesh from the ancient era attracts yogis to conduct yoga activities in the lap of nature. The pious land of Rishikesh with the spiritual existence of the Holy River Ganga and the natural environment created by the majestic Himalayan Range is the place where you can learn and feel yoga from the bottom of your heart.</p>

                  <p>200 Hours Yoga Teacher Training Courses conducted by Yoga Schools in Rishikesh is always the perfect kick start to the yoga career.</p>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Target size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Vision, Mission & Objectives</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>Vision and Mission</h3>
                  <p>Vinyasa Yoga Ashram is a yoga alliance registered yoga school in the city of yoga, Rishikesh. We are committed to providing people a healthy lifestyle to combat every issue of life. We create a safe and friendly environment where you nurture your skills and share the wisdom of yoga and spirituality with people of the same mindset as yours.</p>

                  <p>The community, we create at our yoga school by inviting the aspirants from every part of the world, supports each other to live a healthy and creative life. We let you explore the beauty of yoga and self-transformation in the most beautiful way.</p>

                  <div className={styles.aimsGrid}>
                    <div className={styles.aimCard}>
                      <Target size={28} />
                      <h4>Spreading Knowledge</h4>
                      <p>Spreading the pious knowledge of yoga with yoga enthusiasts from all over the world</p>
                    </div>

                    <div className={styles.aimCard}>
                      <Heart size={28} />
                      <h4>Health & Well-being</h4>
                      <p>Helping our students in attaining good health and well-being</p>
                    </div>

                    <div className={styles.aimCard}>
                      <Star size={28} />
                      <h4>Moral Values</h4>
                      <p>Integrating moral values into our teaching methodology</p>
                    </div>

                    <div className={styles.aimCard}>
                      <BookOpen size={28} />
                      <h4>Ancient Wisdom</h4>
                      <p>Developing teaching on the basis of Ancient Yoga Knowledge</p>
                    </div>

                    <div className={styles.aimCard}>
                      <TrendingUp size={28} />
                      <h4>Future Opportunities</h4>
                      <p>Offering you immense opportunities for the future</p>
                    </div>

                    <div className={styles.aimCard}>
                      <Award size={28} />
                      <h4>Confidence Building</h4>
                      <p>Improving self-esteem and confidence through yoga</p>
                    </div>
                  </div>

                  <div className={styles.objectivesBox}>
                    <h3>Our Objectives</h3>
                    <p>Yoga helps in attaining self-control and self-discipline. With our online and offline curriculum, we carry the aims of creating confident, knowledgeable yoga teachers who can spread the ancient wisdom of yoga while helping others achieve health, wellness, and spiritual growth.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'teaching' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <BookOpen size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Teaching & Tradition</h2>
                </div>

                <div className={styles.contentText}>
                  <p>At Vinyasa Yogashram, we focus on providing comprehensive yoga education that combines traditional wisdom with modern teaching methods. Our experienced teachers guide you through every step of your yogic journey.</p>
                  
                  <div className={styles.highlightBox}>
                    <Lightbulb size={28} className={styles.highlightIcon} />
                    <div>
                      <h3>Our Teaching Philosophy</h3>
                      <p>We believe in imparting not just the physical aspects of yoga, but also the spiritual and philosophical dimensions that make yoga a complete practice for life transformation.</p>
                    </div>
                  </div>

                  <h3>Comprehensive Curriculum</h3>
                  <p>Our teaching methodology is designed to provide students with a well-rounded education in all aspects of yoga. From the physical practice of asanas to the subtle energy work of pranayama, from the philosophical teachings of the ancient texts to the practical application of teaching methodology, we cover it all.</p>

                  <div className={styles.styleGrid}>
                    <div className={styles.styleCard}>
                      <Sun size={32} />
                      <h4>Asana Practice</h4>
                      <p>Detailed instruction in traditional and modern yoga postures</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Wind size={32} />
                      <h4>Pranayama</h4>
                      <p>Breath control techniques for energy management</p>
                    </div>
                    <div className={styles.styleCard}>
                      <BookOpen size={32} />
                      <h4>Philosophy</h4>
                      <p>Study of yogic texts and spiritual wisdom</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Users size={32} />
                      <h4>Teaching Skills</h4>
                      <p>Professional development and teaching methodology</p>
                    </div>
                  </div>

                  <h3>Traditional Approach with Modern Application</h3>
                  <p>While we honor the ancient traditions of yoga, we also understand the needs of modern practitioners. Our courses are designed to make ancient wisdom accessible and applicable to contemporary life, ensuring that graduates can teach effectively in any setting.</p>

                  <div className={styles.certificationBox}>
                    <Shield size={36} />
                    <div>
                      <h3>Internationally Recognized Certification</h3>
                      <p>Upon successful completion of our programs, students receive internationally recognized Yoga Alliance certification, enabling them to teach yoga anywhere in the world.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'values' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Star size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Values</h2>
                </div>

                <div className={styles.contentText}>
                  <p>Vinyasa Yogashram is built on a foundation of core values that guide everything we do:</p>

                  <div className={styles.valuesList}>
                    <div className={styles.valueItem}>
                      <Heart size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Authenticity</h4>
                        <p>Staying true to ancient yogic traditions while adapting to modern needs. We ensure that every teaching is rooted in authentic practice passed down through generations.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Users size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Community</h4>
                        <p>Building a supportive global community of yoga practitioners who uplift and inspire each other on the path of yoga.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Award size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Excellence</h4>
                        <p>Maintaining high standards in yoga education and practice, ensuring every graduate is well-prepared to share yoga with confidence and competence.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Leaf size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Holistic Development</h4>
                        <p>Focusing on the complete development of students - physical, mental, emotional, and spiritual - creating well-rounded yoga practitioners and teachers.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Lightbulb size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Continuous Learning</h4>
                        <p>Encouraging lifelong learning and growth, recognizing that the journey of yoga is ongoing and ever-evolving.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Globe size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Global Perspective</h4>
                        <p>Embracing diversity and welcoming students from all backgrounds, creating a truly international yoga community.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'edge' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Zap size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Our Competitive Edge</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>What Makes Vinyasa Yogashram Special</h3>
                  <p>Vinyasa Yogashram stands out in the crowded field of yoga teacher training through our unique combination of traditional wisdom, experienced faculty, and commitment to student success.</p>

                  <div className={styles.edgeGrid}>
                    <div className={styles.edgeCard}>
                      <MapPin size={32} className={styles.edgeIcon} />
                      <h4>Multiple Locations</h4>
                      <p>With campuses in Rishikesh, Goa, and Nepal, we offer diverse environments for yoga study, each with its unique spiritual and natural beauty.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Award size={32} className={styles.edgeIcon} />
                      <h4>Experienced Faculty</h4>
                      <p>Our teachers bring decades of combined experience, ensuring students receive the highest quality instruction in all aspects of yoga.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Users size={32} className={styles.edgeIcon} />
                      <h4>Personal Attention</h4>
                      <p>Small class sizes ensure every student receives individualized guidance and support throughout their training.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Shield size={32} className={styles.edgeIcon} />
                      <h4>Yoga Alliance Certified</h4>
                      <p>All our programs are registered with Yoga Alliance, providing internationally recognized certification upon completion.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Heart size={32} className={styles.edgeIcon} />
                      <h4>Supportive Community</h4>
                      <p>Join a global network of Vinyasa Yogashram graduates who continue to support and inspire each other long after training.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Lightbulb size={32} className={styles.edgeIcon} />
                      <h4>Comprehensive Programs</h4>
                      <p>From 100-hour introductory courses to 500-hour advanced training, we offer programs for every level of practitioner.</p>
                    </div>
                  </div>

                  <div className={styles.inspirationBox}>
                    <h3><Sparkles size={24} /> Join Our Community</h3>
                    <p>When you train at Vinyasa Yogashram, you're not just earning a certification - you're joining a family of passionate yoga practitioners dedicated to spreading the light of yoga throughout the world.</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* =============================================
            SATTVA YOGA ACADEMY - COMPLETE CONTENT
            ============================================= */}
        {activeTab === 'sattva' && (
          <>
            {activeSection === 'about' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Mountain size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>About Sattva Yoga Academy</h2>
                </div>

                <div className={styles.imageSection}>
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop" 
                    alt="Himalayan Yoga Meditation"
                    className={styles.heroImage}
                  />
                </div>

                <div className={styles.contentText}>
                  <h3>The Authentic Himalayan Yoga Teacher Training In India</h3>
                  <p>Sattva Yoga Academy is the premiere global destination for Yoga, Ayurveda, Meditation and Spiritual Transformation. If you are ready to live fully and be radically alive, you have come to the right place. The mother ship of the global Sattva Yoga movement and community, Sattva Yoga Academy is home to Sattva Yogis from all across the world. We are just not another yoga school handing out yoga certificates like a factory. At Sattva Yoga Academy, you are going to experience the best that the path of yoga has to offer.</p>

                  <p>No matter which program you choose, you will leave here transformed and more connected to the Truth of who you are. This is for the authentic yogi. The courses, retreats and experiences here are authentic, transformative, rich, detailed and full of Passion. No matter who you are, you will find something for you at Sattva Yoga Academy. This is your home away from home. For us Yoga is not what we do, it is who we are. Authentic, Dynamic, Connected and Compassionate.</p>

                  <div className={styles.highlightBox}>
                    <Sparkles size={28} className={styles.highlightIcon} />
                    <div>
                      <h3>Sattva in Sanskrit Means Whole</h3>
                      <p>That is the path of Sattva Yoga. Sattva Yoga is one of the most comprehensive approaches to yoga in the world today. With its roots in the timeless Vedantic and Tantric Traditions Sattva Yoga was developed in the Himalayas after years of study and research.</p>
                    </div>
                  </div>

                  <p>The vibrancy and intensity of Sattva Yoga Academy study is enriching and evolving, a 'yoga yatra' of watching yourself unfold during the course of study.</p>

                  <p>Sattva Yoga incorporates all essential practices and teachings of yoga in a radically holistic and powerful way. The practice incorporates contemporary evolution in science and mind-body research.</p>

                  <div className={styles.imageSection}>
                    <img 
                      src="https://images.unsplash.com/photo-1532798442725-41036acc7489?w=1200&h=400&fit=crop" 
                      alt="Yoga Meditation Practice"
                      className={styles.contentImage}
                    />
                  </div>

                  <h3>Comprehensive Practice</h3>
                  <p>Sattva Yoga path offers a unique and potent practice that includes physical postures Hatha Yoga (Static and Dynamic variations of all poses/asanas. Principle poses of Hatha with their variations, mastering of vinyasa Flows and principles of Cosmic Alignment), powerful breathwork techniques, Kundalini kriyas coming from the Tantric tradition, Naad Practices (understanding and use of sound as a tool for transformation and healing, including the use of mantras and music), Meditation technique and purpose, Tantric transformative practices, chanting, freedom movement and radical wisdom.</p>

                  <p>These practices are designed to awaken each practitioner to their true nature. They increase strength, build vitality and create mental clarity. They help raise our consciousness and enable us to live a life full of joy and possibility.</p>

                  <div className={styles.certificationBox}>
                    <Award size={36} />
                    <div>
                      <h3>Sattva Yoga is a Way of Living by Example</h3>
                      <p>Sattva Yoga cares deeply about coming together to have a sense of community, of truth, a sense of sacred relationship within the community. The community can be stronger than individuals when we tap into each other's capacity to evolve. Sattva Yoga also cares deeply about environmental consciousness; Sattva Yogis have a sense of responsibility for our planet and all creatures, deep compassion for all beings.</p>
                    </div>
                  </div>

                  <h3>Five Layers of Being</h3>
                  <p>It is a practice of opening mind and heart to the brilliance of life. The Sattva Yoga practice offers you tools and techniques to address and transform all 5 layers (Koshas) of the human body:</p>

                  <ul className={styles.benefitsList}>
                    <li><CheckCircle size={20} /> <strong>Annamaya Kosha</strong> - Outermost layer, body of food, muscular-skeletal structure with other organ systems</li>
                    <li><CheckCircle size={20} /> <strong>Pranamaya Kosha</strong> - Body of Energy, subtle energetic flows within and without</li>
                    <li><CheckCircle size={20} /> <strong>Manamaya Kosha</strong> - Body of thought, feelings and emotion</li>
                    <li><CheckCircle size={20} /> <strong>Gyanmaya Kosha</strong> - Body of belief systems, conditioning and innate wisdom</li>
                    <li><CheckCircle size={20} /> <strong>Anandamaya Kosha</strong> - Body of bliss, love, connection, silence</li>
                  </ul>

                  <div className={styles.inspirationBox}>
                    <h3><Flame size={24} /> The Experience of Aliveness</h3>
                    <p>Sattva Yoga is the Experience of Aliveness, Where Both Stillness and Movement Exist at the Same Time. Sattva Yoga is the experiencing and sharing of liberation and freedom on every level of our existence. Sattva Yoga absorbs ever new ways of being. Sattva Yoga is alive.</p>
                    <p>On the path of Sattva Yoga, individuals live life as a practice. A Sattva Yogi is always a student, even as a teacher. A Sattva Yogi is committed to the path, a sincere practitioner.</p>
                  </div>

                  <p>Sattva Yoga is a complete path to create an experience of wholeness in the individual and the collective. Sattva Yoga, developed in the Himalayas, has now spread around the world to the United States, Canada, Italy, Germany, Norway, Portugal, Netherlands, Russia, South Africa, Kazakhstan, India, and elsewhere.</p>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Target size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Vision & Mission</h2>
                </div>

                <div className={styles.contentText}>
                  <div className={styles.goalBox}>
                    <h3>Our Vision</h3>
                    <p>Sattva Yoga is freedom, movement, depth, stillness, transcendence, joy, compassion, grace, and truth. Sattva Yoga is the experience of non-duality, where both stillness and dynamism exist at the same time.</p>
                    <p>Sattva Yoga is the experiencing and sharing of liberation and freedom on every level of our existence. It is coming together for that common purpose and to end the conflict in our lives.</p>
                    <p>Sattva Yoga includes and transcends all branches of yoga, it is simultaneously a whole and a part, and by this fact of the coming together, a new layer of intelligence is occurring. Sattva Yoga absorbs ever new ways of being.</p>
                  </div>

                  <h3>Our Mission</h3>
                  <p>To create a global community of conscious individuals who embody the principles of Sattva Yoga in their daily lives, spreading peace, awareness, and transformation wherever they go.</p>

                  <div className={styles.missionGrid}>
                    <div className={styles.missionCard}>
                      <Heart size={36} className={styles.missionIcon} />
                      <h3>Authentic Transformation</h3>
                      <p>Providing genuine transformative experiences that go beyond superficial understanding to create deep, lasting change in practitioners' lives.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Globe size={36} className={styles.missionIcon} />
                      <h3>Global Community</h3>
                      <p>Building a worldwide network of Sattva practitioners who support each other in their journey of growth and awakening.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Leaf size={36} className={styles.missionIcon} />
                      <h3>Environmental Consciousness</h3>
                      <p>Promoting awareness and responsibility for our planet and all living beings through yogic principles and practices.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Sparkles size={36} className={styles.missionIcon} />
                      <h3>Holistic Living</h3>
                      <p>Teaching yoga as a complete way of life that encompasses all aspects of human existence - physical, mental, emotional, and spiritual.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'teaching' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <BookOpen size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>The Teaching and Tradition</h2>
                </div>

                <div className={styles.contentText}>
                  <p>Teachings at the Sattva Yoga Academy are holistic, integrative, and deeply transformative for all aspects of human existence. The ever-evolving practice at the core of the teachings is both ancient and modern. Rooted in the rich Vedantic and Tantric traditions of the Himalayas, the teachings integrate radical and relevant wisdom with meditation, breathwork, techniques, deepening connection and devotion through Laya and Bhakti practices, the Chakra healing power of sound, free movement, and Hatha Yoga asanas.</p>

                  <p>Sattva teachings are not separate from life, but rather are a practical, systematic science of enlightenment and evolution of consciousness. Thus, Sattva practice goes well beyond the yoga mat and includes and infuses all areas and aspects of life. Students experience radical transformation and learn how to experience enlightened living.</p>

                  <p>The trainings at Sattva Yoga Academy are not limited to any one aspect of Yoga. To study only one aspect of Yoga in isolation would not represent the tradition at all. And so the teachings at Sattva Yoga Academy are taught as an integrated whole that includes all the avenues, all the channels, of the teachings.</p>

                  <div className={styles.highlightBox}>
                    <Wind size={28} className={styles.highlightIcon} />
                    <div>
                      <h3>Sattva Meditation Technique</h3>
                      <p>Meditation is a fundamental foundation practice. The Sattva Meditation Technique is a Kriya-based, Mantra-based system. It is a seated meditation practice, a technique stemming from the Himalayan Yog-Vedantic Tradition. Sattva Meditation Technique is a comprehensive, simple and effective technique which consists of Breathwork, Kriya and Mantra. When practiced 20-30 minutes twice daily, it can benefit all aspects of oneself.</p>
                    </div>
                  </div>

                  <h3>An Integrative Practice</h3>
                  <p>Sattva Yoga is an integrative practice of opening mind and heart to the brilliance of life. The Sattva Yoga practice offers you tools and techniques to address and transform all layers of the human body. A Sattva Yogi learns and masters practical techniques that align all the layers of his/her being. Sattva Yoga is a complete path to create an experience of wholeness in the individual and the collective. The teachings of Sattva Yoga Academy have been developed in the Himalayas and have now spread around the world to every continent.</p>

                  <div className={styles.certificationBox}>
                    <Shield size={36} />
                    <div>
                      <h3>Quality Certification</h3>
                      <p>Sattva Yoga Academy has the yogic philosophy woven into all the teachings and offerings with the aim of creating a diverse group of yoga leaders, visionaries, and entrepreneurs. We pride ourselves on a quality approach assessing the readiness of a student before issuing their certification. There is a deep focus on the state of consciousness of our participants. We are devoted to bringing the most sincere, connected and evolved teachers forward to the world.</p>
                    </div>
                  </div>

                  <p>Every Sattva graduate is unique in that he or she is a master in their own right – inspiring and transforming people through their work, their teachings, and their presence. They are all leaders and at the same time a deep part of a growing awakened global community.</p>

                  <p>Sattva teachers are first and foremost humble and graceful students of Yoga who are committed to growth, evolution, and expansion in all areas of their existence. They serve in many ways. Sattva teachers teach and inspire through their own example by leading purposeful lives, serving and leading unconditionally and without a title. As the teachings at the Sattva Yoga Academy cover all aspects of life, Sattva teachers can share the wisdom of Sattva in innumerable ways. Many graduates of the Sattva Yoga Academy share Sattva teachings while serving in their roles as life coaches, trainers, meditation instructors, yoga teachers, retreat facilitators, company leaders in business and industry, healers, peacemakers, artists, designers, and engineers. Sattva teachers show up consciously wherever they are and have a sense of responsibility and deep compassion for and unity with the entire universe, especially all beings and our planet. Regardless of how Sattva teachers choose to express the teachings, they gracefully embody the very essence of Yoga – living in Truth, Consciousness, and Bliss.</p>
                </div>
              </div>
            )}

            {activeSection === 'values' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Star size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Sattva Family Principles</h2>
                </div>

                <div className={styles.contentText}>
                  <p>Sattva Yoga is a complete path, to create an experience of wholeness in the individual and the collective. Sattva Yoga was developed in the Himalayas over a decade ago and has now spread around the world. Sattva Yoga includes ancient yogic techniques as well as current evolutionary practices to create a clear path for the individual to experience a full, healthy, abundant, and joyous life.</p>

                  <p>Sattva Yoga is an ever-evolving and inclusive practice of meditation, kriya, asana, movement, pranayama, radical aliveness, and timeless wisdom. It is an integrated approach to yoga.</p>

                  <p>Sattva Yoga integrates the science of Hatha and Kriya Yoga from ancient lineages, incorporating Vinyasa Chikitsa (Purification) sequencing, so each journey has a subtle cellular shift, dynamic mind-body experience, as well as a mindful meditative experience.</p>

                  <div className={styles.inspirationBox}>
                    <h3><Flower2 size={24} /> Living Life as Practice</h3>
                    <p className={styles.quote}>On the path of Sattva Yoga, individuals live life as a practice. A Sattva Yogi is always a student, even as a teacher. A Sattva Yogi is committed to the path, a sincere practitioner.</p>
                  </div>

                  <h3>Core Values</h3>
                  <div className={styles.valuesList}>
                    <div className={styles.valueItem}>
                      <Heart size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Authenticity</h4>
                        <p>Being true to oneself and to the ancient wisdom traditions while remaining relevant to contemporary life.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Sparkles size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Radical Aliveness</h4>
                        <p>Embracing life fully with passion, presence, and vitality in every moment.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Globe size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Unity Consciousness</h4>
                        <p>Recognizing the interconnectedness of all beings and living from a place of compassion and service.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Leaf size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Environmental Stewardship</h4>
                        <p>Taking responsibility for the well-being of our planet and all its inhabitants.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Users size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Community & Sangha</h4>
                        <p>Supporting each other in growth and transformation through sacred relationships.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <TrendingUp size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Continuous Evolution</h4>
                        <p>Embracing growth and change as essential aspects of the yogic path.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'edge' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Zap size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Academy Edge</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>Sattva Yoga Academy's Yogic Teaching Methodology</h3>
                  <p>Sattva Yoga Academy teachings are the most comprehensive approach to the Yogic teachings in the world. We know what we do and we do it extremely well.</p>

                  <p>Sattva Yoga Academy offers world-class training from the ancient Vedic sciences of Yoga, Meditation, Ayurveda, and Jyotish Training (Vedic Astrology). There are many yoga schools and ashrams offering standard, non-differentiating courses and studies in these disciplines. However, Sattva Yoga Academy maintains an edge through the sophisticated, sincere, and worldly approach used by Anand Mehrotra and the Global Faculty at Sattva Yoga Academy.</p>

                  <p>Courses are meticulously designed to make them relevant to the individual seeker and responsive to global issues of the time, creating leadership on a different level. Teachings have a caliber that attracts an intellectual and professional level of students from different disciplines.</p>

                  <div className={styles.edgeGrid}>
                    <div className={styles.edgeCard}>
                      <Award size={32} className={styles.edgeIcon} />
                      <h4>Authentic Teachings</h4>
                      <p>Sattva Yoga Academy makes ancient wisdom simply and purely relevant in today's time in the most practical way. The teachings offered are authentic and current, ageless and yet relevant in today's world. The offerings include a wide range of trainings in fundamental and advanced courses.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Mountain size={32} className={styles.edgeIcon} />
                      <h4>Himalayan Enrichment</h4>
                      <p>Sattva Yoga Academy offers you a chance to study in Rishikesh, India – the birthplace of Yoga. In this soul-enriching environment, you are immersed in the energy of the ancient masters and yogis like nowhere else. Especially the location of the campus is truly optimal for the deepest experience of Yoga.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <TrendingUp size={32} className={styles.edgeIcon} />
                      <h4>Integrated Approach to Personal Evolution</h4>
                      <p>Sattva Yoga Academy offers a profound journey of personal evolution that, when committed to, will guarantee to transform an individual's life. It's an integrated approach that includes powerful practices of the Sattva Meditation Technique, Pranayama, Mantras and Sacred Rituals, Kundalini/Kriya, Asana and Vinyasa Flows that channel energy.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Lightbulb size={32} className={styles.edgeIcon} />
                      <h4>Experiential Knowledge</h4>
                      <p>We honor intellectual knowledge which is very important and a fundamental part of our growth. Yet we also honor experiential knowledge, because the experiential knowledge is always greater than the intellectual knowledge.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Layers size={32} className={styles.edgeIcon} />
                      <h4>Expanding Awareness</h4>
                      <p>When we study in India in our tradition, the Guru leads you to yourself. He doesn't limit the teaching. He expands your awareness and exposes you to the living tradition. It is very clear and comprehensive. That's what we are doing at Sattva Yoga Academy.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <TreePine size={32} className={styles.edgeIcon} />
                      <h4>Our Lineage</h4>
                      <p>Our lineage is the Himalayan lineage. Of course, Sattva Yoga Academy teachings are demanding learning because they are not reductionist. It's very important for us to realize that the source of the Yog-Vedantic Tradition is like one river. The closer you get to the source, the more comprehensive the teaching will get. And we have stayed true to that in the Sattva Yoga Academy teachings.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Globe size={32} className={styles.edgeIcon} />
                      <h4>Access to the Sattva Universe</h4>
                      <p>We can engage in different ways with the Sattva Universe. Sattva Sangha is a big group that is thriving. We have Sattva Jyotish Gems. We have Sattva Connect. We have Sattva Organic Farm. We have Sattva Publications and Sattva Music. We have Sattva Centers in Australia. We have upcoming Sattva centers in Europe and North America.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Users size={32} className={styles.edgeIcon} />
                      <h4>Global Network</h4>
                      <p>Sattva Yoga Academy connects with a network of teachers, studios, and communities around the world. With Sattva Yoga founder Anand teaching all across the globe, there is a network, a powerful Sangha, which the academy students have access to.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <BookOpen size={32} className={styles.edgeIcon} />
                      <h4>Continuing Education and Support</h4>
                      <p>At Sattva Yoga Academy we provide ongoing support post training. In addition to the support, we offer varied continuing education opportunities through which one can keep learning and growing. The continuing education opportunities are offered not only in India but also in USA, Canada, Russia and Europe</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Leaf size={32} className={styles.edgeIcon} />
                      <h4>Nurturing Abundance</h4>
                      <p>The Sattva Retreat Center setting means training is in a space of healing and nurturing to the mind, body, and soul. It is holistic and uplifting, one of the finest places you can find to support the student's studies and transformation. The Sattva Retreat Center is tailor-made for the Yogic path.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Sunset size={32} className={styles.edgeIcon} />
                      <h4>Phenomenal Campus</h4>
                      <p>From the food to living spaces, all is exceptional. The rooms are luxurious. All food prepared is organic vegetarian. A sparkling river flows past the campus. Nature abounds in every view, every experience. The facilities include the swimming pool, Ayurvedic Spa, steam room, big bathrooms, organic cotton linen, free high speed wifi, etc. All add to the nurturing experience at the teacher trainings and retreats.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Compass size={32} className={styles.edgeIcon} />
                      <h4>Complete Truly Whole Experience</h4>
                      <p>The Sattva Yoga Academy trainings presenting the Sattva Yoga teachings are the most complete and well-rounded teachings of Yoga. The students learn in-depth knowledge of the yogic path. The students learn truly multiple layers of the true practice of Yoga not limited to a narrow approach.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Heart size={32} className={styles.edgeIcon} />
                      <h4>Internship And Seva Possibilities</h4>
                      <p>Sattva Yoga Academy students have the opportunity to intern at the Sattva Center or the Sattva Yoga Studio in Rishikesh.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Sparkles size={32} className={styles.edgeIcon} />
                      <h4>Innovation</h4>
                      <p>Sattva Yoga Academy features in international media and social media blogs to create enticing platforms for sharing through global domains. This sharing is a form of ongoing research, which creates an ongoing dialogue throughout different disciplines, be it daily living, business, climate change, etc.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Star size={32} className={styles.edgeIcon} />
                      <h4>World Class Faculty</h4>
                      <p>Our team of teachers is truly comprised of dedicated and experienced individuals with a shared intention of imparting the best Yogic and Vedantic teachings. With the able leadership of Master Teacher Anand Mehrotra, all courses are taught in a truly enriching environment.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Activity size={32} className={styles.edgeIcon} />
                      <h4>Focus On Transformation</h4>
                      <p>The courses at Sattva Yoga Academy are not just to impart information but also to create an environment where there can be a transformation on the level of the Being for each and every participant. Every participant leaves transformed.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Users size={32} className={styles.edgeIcon} />
                      <h4>Vibrant Tribe</h4>
                      <p>Sattva Yoga Academy empowers a community of vibrant, like-minded, and evolving individuals to spread teachings in their communities. You connect with people from all over the world with different backgrounds. This helps one get a truly global perspective. To be part of such a Sangha is a very essential part of the Yogic path.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Sun size={32} className={styles.edgeIcon} />
                      <h4>Joy !!</h4>
                      <p>The yoga teacher training courses and Ayurvedic courses at the Academy are full of joy. We radiate joy. Apart from the brilliant classes, one also gets the opportunity to visit caves, waterfalls, climb mountains, experience local culture, music, dance, temples, nature, etc. Our courses help our students tap into the joy already inherent in their hearts so that they can share it with the world. The Sattva Yogis are all smile billionaires.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Flame size={32} className={styles.edgeIcon} />
                      <h4>Learn from the Source</h4>
                      <p>This is what we do and this is what we teach.</p>
                    </div>
                  </div>

                  <div className={styles.philosophySection}>
                    <h3>Teaching Philosophy</h3>
                    <p>Sattva Yoga Academy has it's yogi philosophy weaved into all the teachings, with the aim of creating a diverse group of Yoga Leaders, Visionaries, and Entrepreneurs.</p>

                    <p>The Ethos of our community is based on Sattva Yoga principles, which promote growth and unity. Sattva, a Sanskrit word meaning Whole, Complete, Truth, and Balance, encapsulates the essence of our philosophy. The Ethos embraces four Sattvic Codes, which serve as a pathway to transformational living. Through these codes, we aim to foster a harmonious and fulfilling way of life within our community.</p>

                    <div className={styles.philosophyGrid}>
                      <div className={styles.philosophyCard}>
                        <h4><Lightbulb size={24} /> Whole Intelligence</h4>
                        <p><strong>Mastering the Self, and in turn Mastering Life!</strong></p>
                        <ul>
                          <li>Embracing aspects of intelligence to develop holistic genius</li>
                          <li>Focus on the Whole Human Being (Still and Dynamic)</li>
                          <li>Combining Self Realization and Self-Actualization</li>
                          <li>Being Sincere, Humorous, Practical, Grounded, Insightful, Self-Reliant</li>
                          <li>Living with Clarity</li>
                        </ul>
                      </div>

                      <div className={styles.philosophyCard}>
                        <h4><Layers size={24} /> Balanced Individual/Way Of Life</h4>
                        <p><strong>Rising High, but going Deep!</strong></p>
                        <ul>
                          <li>Teachings are vast and inclusive</li>
                          <li>Feet firmly placed on the earth, and head rising in the sky</li>
                          <li>Understanding our own true nature - foundation for abundance</li>
                          <li>Living your Dharma - the purpose is about the inner quest</li>
                          <li>Sangha – community of like-minded, jewel of compassion</li>
                        </ul>
                      </div>

                      <div className={styles.philosophyCard}>
                        <h4><Heart size={24} /> Complete 'Being'</h4>
                        <p><strong>Living with Radical Aliveness</strong></p>
                        <ul>
                          <li>Blending Joy and Wisdom to be completely present</li>
                          <li>Living in Contentment - feeling you have everything needed</li>
                          <li>Beautiful, inviting, nurturing, nourishing lifestyles</li>
                        </ul>
                      </div>

                      <div className={styles.philosophyCard}>
                        <h4><Star size={24} /> Truthful Commitment</h4>
                        <p><strong>Becoming Free!</strong></p>
                        <ul>
                          <li>Knowing and Tapping into the Authentic Self</li>
                          <li>Commitment to your own self – becoming free</li>
                          <li>Living an awakened life, free from limitations</li>
                          <li>Committed to the teachings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* =============================================
            RISHIKESH YOGKULAM - COMPLETE CONTENT
            ============================================= */}
        {activeTab === 'yogkulam' && (
          <>
            {activeSection === 'about' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Sparkles size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>About Rishikesh Yogkulam</h2>
                </div>

                <div className={styles.imageSection}>
                  <img 
                    src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&h=400&fit=crop" 
                    alt="Rishikesh Yogkulam"
                    className={styles.heroImage}
                  />
                </div>

                <div className={styles.contentText}>
                  <p>Welcome to Rishikesh Yogkulam®, located in the foothills of the majestic Himalayas in the spiritual town of Rishikesh, India. Established in 2018 by our co-founders, Amit Ji and Dhirendra Ji and later joined by Ella Ji, Our yoga school has established itself as a leading provider of quality education and bringing together a diverse and growing international community of yoga teachers and enthusiasts worldwide.</p>

                  <p>With years of experience and wisdom, we have gained global recognition as the best yoga teacher training school in Rishikesh, India. Our team of highly dedicated and inspiring teachers apart from teaching also support and motivate you throughout your yogic journey.</p>

                  <div className={styles.highlightBox}>
                    <Award size={28} className={styles.highlightIcon} />
                    <div>
                      <h3>Over 5,000 Graduates</h3>
                      <p>Since 2018, more than 5,000 yoga students have successfully graduated from Rishikesh Yogkulam®. As the old saying goes, "Knowing others is intelligence. Knowing yourself is true wisdom." Join us on a transformative path of self-discovery and wisdom.</p>
                    </div>
                  </div>

                  <div className={styles.imageSection}>
                    <img 
                      src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=400&fit=crop" 
                      alt="Yoga Practice"
                      className={styles.contentImage}
                    />
                  </div>

                  <h3>What Rishikesh Yogkulam Means?</h3>
                  <p>The name Rishikesh Yogkulam® is deeply rooted in the ancient Sanskrit language where each word has a significant meaning behind it.</p>

                  <div className={styles.meaningGrid}>
                    <div className={styles.meaningCard}>
                      <MapPin size={32} />
                      <h4>Rishikesh</h4>
                      <p>Our yoga school stands on the sacred land of Rishikesh. This holy town has been the ultimate destination for many yogis and spiritual seekers since vedic times who have done their spiritual practices in this beautiful town located by the holy river Ganga. Rishikesh is not just a place, it's a global hub of spirituality. The energy and environment of this place have nurtured many seeking souls.</p>
                    </div>

                    <div className={styles.meaningCard}>
                      <Heart size={32} />
                      <h4>Yogkulam</h4>
                      <p>Yogkulam means yoga family. It signifies the family bond, a sense of union and togetherness. It represents the family of individuals who came together to practice yoga, learn and grow spiritually. Our name reflects our core values and philosophy. Rishikesh Yogkulam® is a place where students from all over the world with diverse backgrounds come together to develop a sense of unity and togetherness. Our mission is to create an environment that feels like home, where every student is welcomed with warmth and respect to build a strong family bond.</p>
                    </div>
                  </div>

                  <h3>Why Choose Our School?</h3>
                  <div className={styles.inspirationBox}>
                    <h3><Users size={24} /> Team Spirit</h3>
                    <p className={styles.quote}>"Yogkulam isn't just about an individual or a guru, it's about the whole team. At Yogkulam every member, whether they are a teacher or part of the support staff, works together. We put our egos aside and help each other out. We support one another and face challenges together just like in a family. We find joy in sharing happy moments. We celebrate each other's successes and support each other in tough times. This creates a warm and welcoming environment where everyone feels like they belong. Join us and experience the essence of unity, support, and togetherness that Yogkulam offers."</p>
                  </div>

                  <h3>The Story Behind Our Motto</h3>
                  <div className={styles.certificationBox}>
                    <Compass size={36} />
                    <div>
                      <h3>One Destination, Many Paths, One Journey</h3>
                      <p>Our tagline means we all have one ultimate goal in our spiritual journey. Even though we might take different paths to go there, but the journey itself is the same for everyone. The goal is to achieve yoga.</p>
                      <p>Yoga is like climbing a mountain. There are many trails you can take but they all lead to the same peak. Each trail has its own challenges with ups and downs, good times and tough moments. No path is easier or more comfortable than others, each one is unique and tests us in different ways.</p>
                      <p>This profound insight comes from none other than Amit Ji, the visionary founder of Yogkulam. He believes in sharing the wisdom of yoga with everyone. With this powerful vision and heartfelt intention, we nurture our yoga family. Join us on this incredible journey of self-discovery where we celebrate diversity in paths but unity in purpose.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Target size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Vision & Mission</h2>
                </div>

                <div className={styles.contentText}>
                  <div className={styles.goalBox}>
                    <h3>Our Vision</h3>
                    <p>To create a global yoga family where individuals from all walks of life come together to learn, grow, and transform through the ancient wisdom of yoga. We envision a world where yoga is accessible to everyone, regardless of their background, and where the teachings of yoga bring peace, health, and spiritual awakening to all.</p>
                  </div>

                  <div className={styles.goalBox}>
                    <h3>Our Mission</h3>
                    <p>To provide authentic, high-quality yoga teacher training that honors traditional teachings while making them accessible and relevant to the modern world. We strive to create a supportive community where every student feels valued and empowered to share the gift of yoga with others.</p>
                  </div>

                  <h3>Our Core Objectives</h3>
                  <div className={styles.missionGrid}>
                    <div className={styles.missionCard}>
                      <Heart size={36} className={styles.missionIcon} />
                      <h3>Family Environment</h3>
                      <p>Creating a warm, inclusive environment where every student feels part of the Yogkulam family, fostering deep connections and lasting friendships.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Award size={36} className={styles.missionIcon} />
                      <h3>Quality Education</h3>
                      <p>Providing comprehensive, high-standard yoga education that prepares students to become confident, knowledgeable teachers.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Globe size={36} className={styles.missionIcon} />
                      <h3>Cultural Bridge</h3>
                      <p>Bridging ancient Indian wisdom with modern global perspectives, making yoga accessible and relevant to practitioners worldwide.</p>
                    </div>

                    <div className={styles.missionCard}>
                      <Leaf size={36} className={styles.missionIcon} />
                      <h3>Holistic Growth</h3>
                      <p>Supporting the complete development of each student - physically, mentally, emotionally, and spiritually.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'teaching' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <BookOpen size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Teaching Approach</h2>
                </div>

                <div className={styles.contentText}>
                  <p>At Rishikesh Yogkulam®, our teaching approach combines traditional Himalayan wisdom with modern pedagogical methods to create a comprehensive and transformative learning experience.</p>

                  <h3>Our Teaching Philosophy</h3>
                  <p>We believe that yoga is more than just physical exercise - it's a complete science of life. Our teaching methodology reflects this understanding by integrating all aspects of yoga: asana, pranayama, meditation, philosophy, and lifestyle practices. We aim to create teachers who not only know yoga but who live yoga.</p>

                  <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                      <Users size={32} />
                      <h4>Small Group Sizes</h4>
                      <p>We value individual attention with only 15-20 students per group for personalized learning and deeper teacher-student connections.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Shield size={32} />
                      <h4>Safety First</h4>
                      <p>Great focus on alignment and adjustment classes to perform poses safely and teach them with confidence and care.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Layers size={32} />
                      <h4>Balanced Approach</h4>
                      <p>Blending traditional knowledge with modern scientific principles for a comprehensive understanding of yoga.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <Award size={32} />
                      <h4>Professionalism</h4>
                      <p>Every detail taken care of with professional guidance and experienced teachers dedicated to your success.</p>
                    </div>
                  </div>

                  <h3>Curriculum Highlights</h3>
                  <div className={styles.styleGrid}>
                    <div className={styles.styleCard}>
                      <Sun size={32} />
                      <h4>Hatha Yoga</h4>
                      <p>Traditional practice with focus on alignment and holding</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Zap size={32} />
                      <h4>Ashtanga Vinyasa</h4>
                      <p>Dynamic sequences with breath synchronization</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Wind size={32} />
                      <h4>Pranayama</h4>
                      <p>Advanced breathing techniques for energy control</p>
                    </div>
                    <div className={styles.styleCard}>
                      <Heart size={32} />
                      <h4>Meditation</h4>
                      <p>Various meditation practices for inner peace</p>
                    </div>
                  </div>

                  <div className={styles.certificationBox}>
                    <Shield size={36} />
                    <div>
                      <h3>Yoga Alliance Certification</h3>
                      <p>All our courses are registered with Yoga Alliance USA, ensuring that your certification is recognized worldwide and opens doors to teaching opportunities globally.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'values' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Star size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>Values Of Our School</h2>
                </div>

                <div className={styles.contentText}>
                  <p>Rishikesh Yogkulam is built on strong foundational values that guide our teaching, community, and approach to yoga:</p>

                  <div className={styles.valuesList}>
                    <div className={styles.valueItem}>
                      <Heart size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Yoga for Everyone</h4>
                        <p>We strongly believe that yoga is for everyone irrespective of their age or ethnicity. Yoga is a divine gift for everyone to experience. Whether you are an advanced yogi or complete beginner, we welcome all to Rishikesh Yogkulam®. You don't need to be young, flexible or strong to learn yoga, you just need to be yourself. The only thing you need is a strong desire to learn and grow.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Users size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Small Group Sizes</h4>
                        <p>We value individual attention. That's why we keep our group size intentionally small, with only 15-20 students in each group. This allows us to pay personal attention to each student, to acknowledge their practice so they can improve and progress.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Shield size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Safety First</h4>
                        <p>Your safety is always our priority. This is the reason why there is great focus on the alignment and adjustment classes. This helps you to learn how to perform poses safely and teach them safely too.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Layers size={28} className={styles.valueIcon} />
                      <div>
                        <h4>A Balanced Approach</h4>
                        <p>At Yogkulam we offer holistic teacher training programs which explore yoga not only as physical practice but also as a lifestyle and spiritual practice. We blend traditional knowledge with modern scientific principles. While the learning atmosphere is serious, at the same time we also have fun and enjoyable moments to make your experience more memorable.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Award size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Professionalism</h4>
                        <p>Every detail of the training is well taken care of with professional guidance. We offer the best teaching environment and a team of professional teachers to help you learn.</p>
                      </div>
                    </div>

                    <div className={styles.valueItem}>
                      <Sparkles size={28} className={styles.valueIcon} />
                      <div>
                        <h4>Family Spirit</h4>
                        <p>True to our name "Yogkulam" (Yoga Family), we create an environment where everyone - students, teachers, and staff - work together as one family, supporting each other's growth and celebrating successes together.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'edge' && (
              <div className={styles.schoolCard}>
                <div className={styles.cardHeader}>
                  <Zap size={40} className={styles.headerIcon} />
                  <h2 className={styles.cardTitle}>What Sets Us Apart</h2>
                </div>

                <div className={styles.contentText}>
                  <h3>The Yogkulam Advantage</h3>
                  <p>Rishikesh Yogkulam has quickly established itself as one of the premier yoga teacher training schools in Rishikesh through our unique approach and unwavering commitment to quality.</p>

                  <div className={styles.edgeGrid}>
                    <div className={styles.edgeCard}>
                      <Heart size={32} className={styles.edgeIcon} />
                      <h4>Family-Like Environment</h4>
                      <p>Unlike larger, impersonal yoga schools, Yogkulam maintains a close-knit family atmosphere where every student is known, valued, and supported individually.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Users size={32} className={styles.edgeIcon} />
                      <h4>Experienced Founders</h4>
                      <p>Founded by Amit Ji and Dhirendra Ji, two of the most respected yoga teachers in Rishikesh, with over 12+ years of teaching experience each.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Award size={32} className={styles.edgeIcon} />
                      <h4>Proven Track Record</h4>
                      <p>Over 5,000 successful graduates since 2018, with students going on to teach and inspire others around the world.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Globe size={32} className={styles.edgeIcon} />
                      <h4>International Community</h4>
                      <p>Students from over 50 countries have trained at Yogkulam, creating a truly diverse and enriching learning environment.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Shield size={32} className={styles.edgeIcon} />
                      <h4>Safety & Alignment Focus</h4>
                      <p>Special emphasis on proper alignment and safe practice, ensuring students can teach with confidence and prevent injuries.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Layers size={32} className={styles.edgeIcon} />
                      <h4>Comprehensive Curriculum</h4>
                      <p>Covering all aspects of yoga from asana to philosophy, anatomy to teaching methodology, meditation to pranayama.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <MapPin size={32} className={styles.edgeIcon} />
                      <h4>Prime Location</h4>
                      <p>Located in the heart of Rishikesh with easy access to the Ganges River and surrounded by the peaceful Himalayan atmosphere.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Lightbulb size={32} className={styles.edgeIcon} />
                      <h4>Modern Facilities</h4>
                      <p>Well-equipped yoga halls, comfortable accommodation, nutritious meals, and all modern amenities while maintaining traditional values.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <BookOpen size={32} className={styles.edgeIcon} />
                      <h4>Ongoing Support</h4>
                      <p>Lifetime access to our community, continued guidance from teachers, and opportunities for advanced training.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Sun size={32} className={styles.edgeIcon} />
                      <h4>Flexible Programs</h4>
                      <p>Various course durations and formats to suit different needs, from intensive 200-hour courses to extended 300-hour and 500-hour programs.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Sparkles size={32} className={styles.edgeIcon} />
                      <h4>Special Workshops</h4>
                      <p>Regular workshops on special topics like Yin Yoga, Prenatal Yoga, Kids Yoga, and advanced pranayama techniques.</p>
                    </div>

                    <div className={styles.edgeCard}>
                      <Activity size={32} className={styles.edgeIcon} />
                      <h4>Cultural Immersion</h4>
                      <p>Opportunities to experience Indian culture, visit temples, attend Ganga Aarti, and immerse in the spiritual atmosphere of Rishikesh.</p>
                    </div>
                  </div>

                  <div className={styles.inspirationBox}>
                    <h3><Compass size={24} /> One Destination, Many Paths, One Journey</h3>
                    <p className={styles.quote}>This is not just our motto - it's our lived experience at Yogkulam. Every student brings their unique path, but we all journey together towards the same destination of yoga - unity, peace, and self-realization. Join our family and discover your path to yoga.</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <GraduationCap size={40} />
          <p className={styles.footerText}>
            ॐ Transforming Lives Through Authentic Yoga Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;