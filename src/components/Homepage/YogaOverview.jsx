import React, { useState } from 'react';
import styles from '../../assets/styles/Homepage/YogaOverview.module.css';

import asanaIcon from '../../assets/images/icons/icon1.webp';
import pranayamaIcon from '../../assets/images/icons/icon2.webp';
import anatomyIcon from '../../assets/images/icons/icon3.webp';
import philosophyIcon from '../../assets/images/icons/icon4.webp';
import teachingIcon from '../../assets/images/icons/icon5.webp';
import meditationIcon from '../../assets/images/icons/icon6.webp';

const items = [
  { key: 'asana', title: 'Asana', icon: asanaIcon, number: '01' },
  { key: 'pranayama', title: 'Pranayama', icon: pranayamaIcon, number: '02' },
  { key: 'anatomy', title: 'Yoga Anatomy', icon: anatomyIcon, number: '03' },
  { key: 'philosophy', title: 'Yogic Philosophy', icon: philosophyIcon, number: '04' },
  { key: 'teaching', title: 'Teaching Methodology', icon: teachingIcon, number: '05' },
  { key: 'meditation', title: 'Meditation & Cleansing', icon: meditationIcon, number: '06' },
];

const content = {
  asana: 'Asana is a meditative discipline cultivating strength, stability, flexibility, and inner awareness. Through mindful alignment and breath coordination, practitioners prepare the body for pranayama and meditation.',
  pranayama: 'Pranayama refines the flow of life force through conscious breathing techniques. Regular practice balances the nervous system, improves concentration, and creates inner calm.',
  anatomy: 'Yoga Anatomy bridges modern science with yogic wisdom. Understanding the body ensures safe practice, injury prevention, and intelligent alignment.',
  philosophy: 'Yogic philosophy provides ethical and spiritual guidance through classical texts such as the Yoga Sutras and Bhagavad Gita, helping practitioners live consciously.',
  teaching: 'Teaching methodology develops confident, ethical yoga teachers through sequencing, cueing, hands-on adjustments, communication skills, and professional responsibility.',
  meditation: 'Meditation and cleansing practices cultivate inner stillness, energetic purification, clarity of perception, and long-term self-awareness.',
};

const YogaOverview5 = () => {
  const [active, setActive] = useState('asana');

  return (
    <section className={styles.section}>
      <div className={styles.particlesBg}>
        <span className={styles.particle}>ॐ</span>
        <span className={styles.particle}>卐</span>
        <span className={styles.particle}>🪷</span>
        <span className={styles.particle}>ॐ</span>
        <span className={styles.particle}>卐</span>
      </div>

      <div className={styles.container}>
        <div className={styles.titleSection}>
          <span className={styles.badge}>Comprehensive Training</span>
          <h2 className={styles.heading}>Yoga Teacher Training Overview</h2>
          <p className={styles.description}>
            Explore our six pillars of yogic wisdom and teaching excellence
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
                </div>
                
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