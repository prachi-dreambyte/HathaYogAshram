import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Homepage/YogaOverview.module.css';

import asanaIcon from '../../assets/images/icons/icon1.webp';
import pranayamaIcon from '../../assets/images/icons/icon2.webp';
import anatomyIcon from '../../assets/images/icons/icon3.webp';
import philosophyIcon from '../../assets/images/icons/icon4.webp';
import teachingIcon from '../../assets/images/icons/icon5.webp';
import meditationIcon from '../../assets/images/icons/icon6.webp';
import Image1 from '../../assets/images/Yoga.jpeg';
import Image2 from '../../assets/images/Yoga1.jpg';
import Image3 from '../../assets/images/Yoga2.jpg';
import Image4 from '../../assets/images/Yoga3.jpg';
import Image5 from '../../assets/images/YogaTeacher.webp';
import Image6 from '../../assets/images/Yoga5.jpg';
// import Link1 from '../../components/HomepageOverview/Asana';
// import Link2 from '../../components/HomepageOverview/Ayurveda&Nutrition';
// import Link3 from '../../components/HomepageOverview/Chakras&Energy';
// import Link4 from '../../components/HomepageOverview/Mantras&Chanting';
// import Link5 from '../../components/HomepageOverview/Meditation';
// import Link6 from '../../components/HomepageOverview/Pranayama';
// import Link7 from '../../components/HomepageOverview/TeachingMethodology';
// import Link8 from '../../components/HomepageOverview/YogaAnatomy';
// import Link9 from '../../components/HomepageOverview/YogicEthics&Lifestyle';
// import Link10 from '../../components/HomepageOverview/YogicPhilosophy';


const items = [
  { key: 'asana', title: 'Asana', icon: asanaIcon, number: '01', Image: Image1, link: '/asana' },
  { key: 'pranayama', title: 'Pranayama', icon: pranayamaIcon, number: '02', Image: Image2, link: '/pranayama' },
  { key: 'anatomy', title: 'Yoga Anatomy', icon: anatomyIcon, number: '03', Image: Image3, link: '/yoga-anatomy' },
  { key: 'philosophy', title: 'Yogic Philosophy', icon: philosophyIcon, number: '04', Image: Image4, link: '/yogic-philosophy' },
  { key: 'teaching', title: 'Teaching Methodology', icon: teachingIcon, number: '05', Image: Image5, link: '/teaching-methodology' },
  { key: 'meditation', title: 'Meditation & Cleansing', icon: meditationIcon, number: '06', Image: Image6, link: '/meditation' },
  { key: 'mantras', title: 'Mantras & Chanting', icon: asanaIcon, number: '07', Image: Image1, link: '/mantras-chanting' },
  { key: 'ayurveda', title: 'Ayurveda & Nutrition', icon: pranayamaIcon, number: '08', Image: Image2, link: '/ayurveda-nutrition' },
  { key: 'chakras', title: 'Chakras & Energy', icon: anatomyIcon, number: '09', Image: Image3, link: '/chakras-energy' },
  { key: 'ethics', title: 'Yogic Ethics & Lifestyle', icon: philosophyIcon, number: '10', Image: Image4, link: '/yogic-ethics' },
];

const content = {
  asana: 'Asana is a meditative discipline cultivating strength, stability, flexibility, and inner awareness. Through mindful alignment and breath coordination, practitioners prepare the body for pranayama and meditation.',
  pranayama: 'Pranayama refines the flow of life force through conscious breathing techniques. Regular practice balances the nervous system, improves concentration, and creates inner calm.',
  anatomy: 'Yoga Anatomy bridges modern science with yogic wisdom. Understanding the body ensures safe practice, injury prevention, and intelligent alignment.',
  philosophy: 'Yogic philosophy provides ethical and spiritual guidance through classical texts such as the Yoga Sutras and Bhagavad Gita, helping practitioners live consciously.',
  teaching: 'Teaching methodology develops confident, ethical yoga teachers through sequencing, cueing, hands-on adjustments, communication skills, and professional responsibility.',
  meditation: 'Meditation and cleansing practices cultivate inner stillness, energetic purification, clarity of perception, and long-term self-awareness.',
  mantras: 'Mantras and chanting harness the power of sacred sound vibrations to deepen meditation, elevate consciousness, and connect with ancient yogic traditions.',
  ayurveda: 'Ayurveda and nutrition teach the ancient science of holistic health, balancing body constitution (doshas), seasonal eating, and mindful dietary practices for optimal wellbeing.',
  chakras: 'Chakras and energy systems explore the subtle body architecture, understanding how energy centers influence physical, emotional, and spiritual health through practices and awareness.',
  ethics: 'Yogic ethics and lifestyle embody the Yamas and Niyamas, guiding practitioners to live with integrity, compassion, self-discipline, and conscious choices both on and off the mat.',
};

const YogaOverview5 = () => {
  const [active, setActive] = useState('asana');

  return (
    <section className={styles.section}>
      <div className={styles.particlesBg}>
        <span className={styles.particle}>ॐ</span>
        <span className={styles.particle}>☮</span>
        <span className={styles.particle}>🪷</span>
        <span className={styles.particle}>ॐ</span>
        <span className={styles.particle}>☮</span>
      </div>

      <div className={styles.container}>
        <div className={styles.titleSection}>
          <span className={styles.badge}>Comprehensive Training</span>
          <h2 className={styles.heading}>Yoga Teacher Training Overview</h2>
          <p className={styles.description}>
            Explore our ten pillars of yogic wisdom and teaching excellence
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          {/* Timeline Line */}
          <div className={styles.timelineLine}>
            <div className={styles.lineProgress}></div>
          </div>

          {/* Timeline Items */}
          <div className={styles.timelineItems}>
            {items.map((item, index) => (
              <div
                key={item.key}
                className={`${styles.timelineItem} ${
                  active === item.key ? styles.activeTimeline : ''
                } ${index % 2 === 0 ? styles.leftItem : styles.rightItem}`}
                onClick={() => setActive(item.key)}
              >
                <div className={styles.itemContent}>
                  <div className={styles.itemNumber}>{item.number}</div>
                  <div className={styles.itemIcon}>
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p className={styles.itemDesc}>{content[item.key]}</p>
                  <Link to={item.link} className={styles.itemLink}>
                    Learn More →
                  </Link>
                </div>

                {item.Image && (
                  <div className={styles.oppositeImage}>
                    <img src={item.Image} alt={item.title} />
                  </div>
                )}
                
                <div className={styles.timelineDot}>
                  <div className={styles.dotInner}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className={styles.mobileAccordion}>
          {items.map((item) => (
            <div
              key={item.key}
              className={`${styles.accordionItem} ${
                active === item.key ? styles.activeAccordion : ''
              }`}
              onClick={() => setActive(item.key)}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.accordionLeft}>
                  <span className={styles.accordionNumber}>{item.number}</span>
                  <img src={item.icon} alt={item.title} />
                  <span className={styles.accordionTitle}>{item.title}</span>
                </div>
                <span className={styles.accordionArrow}>
                  {active === item.key ? '−' : '+'}
                </span>
              </div>
              {active === item.key && (
                <div className={styles.accordionContent}>
                  <p>{content[item.key]}</p>
                  <Link to={item.link} className={styles.itemLink}>
                    Learn More →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>                                                                                                                                                                                                                                                                                                                                                                
      </div>
    </section>
  );
};

export default YogaOverview5;