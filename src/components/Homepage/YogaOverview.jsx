import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from '../../assets/styles/Homepage/YogaOverview.module.css';

import asanaIcon from '../../assets/images/icons/icon1.webp';
import pranayamaIcon from '../../assets/images/icons/icon2.webp';
import anatomyIcon from '../../assets/images/icons/icon3.webp';
import philosophyIcon from '../../assets/images/icons/icon4.webp';
import teachingIcon from '../../assets/images/icons/icon5.webp';
import meditationIcon from '../../assets/images/icons/icon6.webp';

const items = [
  { key: 'asana', title: 'Asana', icon: asanaIcon },
  { key: 'pranayama', title: 'Pranayama', icon: pranayamaIcon },
  { key: 'anatomy', title: 'Yoga Anatomy', icon: anatomyIcon },
  { key: 'philosophy', title: 'Yogic Philosophy', icon: philosophyIcon },
  { key: 'teaching', title: 'Teaching Methodology', icon: teachingIcon },
  { key: 'meditation', title: 'Meditation & Cleansing', icon: meditationIcon },
];

const content = {
  asana:
    'Asana is a meditative discipline cultivating strength, stability, flexibility, and inner awareness. Through mindful alignment and breath coordination, practitioners prepare the body for pranayama and meditation.',
  pranayama:
    'Pranayama refines the flow of life force through conscious breathing techniques. Regular practice balances the nervous system, improves concentration, and creates inner calm.',
  anatomy:
    'Yoga Anatomy bridges modern science with yogic wisdom. Understanding the body ensures safe practice, injury prevention, and intelligent alignment.',
  philosophy:
    'Yogic philosophy provides ethical and spiritual guidance through classical texts such as the Yoga Sutras and Bhagavad Gita, helping practitioners live consciously.',
  teaching:
    'Teaching methodology develops confident, ethical yoga teachers through sequencing, cueing, hands-on adjustments, communication skills, and professional responsibility.',
  meditation:
    'Meditation and cleansing practices cultivate inner stillness, energetic purification, clarity of perception, and long-term self-awareness.',
};

const YogaOverviewRadial = () => {
  const [active, setActive] = useState('asana');
  const contentRef = useRef(null);
  const [diameter, setDiameter] = useState(360);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const rect = contentRef.current.getBoundingClientRect();
    const contentHeight = rect.height;

    // SAFE calculation
    const newDiameter = Math.min(
      520, // max size
      Math.max(360, contentHeight + 180), // min size + padding
    );

    setDiameter(newDiameter);
  }, [active]);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Yoga Teacher Training Overview</h2>

      <div className={styles.wrapper}>
        {/* CENTER AUTO-GROW CIRCLE */}
        <div
          className={styles.centerCircle}
          style={{ width: diameter, height: diameter }}
        >
          <span className={styles.om}>ॐ</span>

          <div ref={contentRef} className={styles.centerContent}>
            <h3>{items.find((i) => i.key === active).title}</h3>
            <p>{content[active]}</p>
          </div>
        </div>

        {/* RADIAL NODES (DESKTOP ONLY) */}
        {items.map((item, index) => (
          <button
            key={item.key}
            className={`${styles.node} ${
              active === item.key ? styles.activeNode : ''
            }`}
            style={{
              transform: `rotate(${index * 60}deg)
      translate(${diameter / 2 + 80}px)
      rotate(-${index * 60}deg)`,
            }}
            onClick={() => setActive(item.key)}
          >
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* MOBILE NAV */}
      <div className={styles.mobileNav}>
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={active === item.key ? styles.active : ''}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default YogaOverviewRadial;
