import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Homepage/YogaOverview.module.css';

import asanaIcon from '../../assets/images/icons/icon1.webp';
import pranayamaIcon from '../../assets/images/icons/icon2.webp';
import anatomyIcon from '../../assets/images/icons/icon3.webp';
import philosophyIcon from '../../assets/images/icons/icon4.webp';
import teachingIcon from '../../assets/images/icons/icon5.webp';
import meditationIcon from '../../assets/images/icons/icon6.webp';
import International from '../../assets/images/international.webp';
import Ganga from "../../assets/images/download.jpg";

const items = [
  {
    key: 'hatha',
    title: 'Hatha Yoga (Traditional)',
    icon: asanaIcon,
    number: '01',
    Image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    link: '/Hatha-Yoga',
  },
  {
    key: 'ashtanga',
    title: 'Ashtanga Yoga',
    icon: pranayamaIcon,
    number: '02',
    Image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    link: '/Ashtanga-Yoga',
  },
  {
    key: 'kundalini',
    title: 'Kundalini Yoga',
    icon: anatomyIcon,
    number: '03',
    Image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
    link: '/Kundalini-Yoga',
  },
  {
    key: 'props',
    title: 'Props Yoga',
    icon: philosophyIcon,
    number: '04',
    Image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
    link: '/Props-Yoga',
  },
  {
    key: 'ancient',
    title: 'Ancient Yogic Practices',
    icon: teachingIcon,
    number: '05',
    Image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80',
    link: '/Ancient-Yogic-Practices',
  },
  {
    key: 'anatomy',
    title: 'Anatomy & Physiology',
    icon: meditationIcon,
    number: '06',
    Image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=800&q=80',
    link: '/Anatomy-Physiology',
  },
  {
    key: 'vinyasa',
    title: 'Vinyasa Flow',
    icon: asanaIcon,
    number: '07',
    Image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
    link: '/Vinyasa-Flow',
  },
  {
    key: 'alignment',
    title: 'Body & Asana Alignment',
    icon: pranayamaIcon,
    number: '08',
    Image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    link: '/Body-Asana-Alignment',
  },
  {
    key: 'shatkarma',
    title: 'Shatkarma (Body cleansing Detox)',
    icon: anatomyIcon,
    number: '09',
    Image: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf0?w=800&q=80',
    link: '/shatkarma',
  },
  {
    key: 'teaching',
    title: 'Teaching Methodology',
    icon: philosophyIcon,
    number: '10',
    Image: 'https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=800&q=80',
    link: '/Teaching-Methodolog',
  },
  {
    key: 'pranayama',
    title: 'Pranayama',
    icon: pranayamaIcon,
    number: '11',
    Image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    link: '/Pranayama',
  },
  {
    key: 'meditation',
    title: 'Meditation',
    icon: meditationIcon,
    number: '12',
    Image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    link: '/Meditation',
  },
  {
    key: 'yoganidra',
    title: 'Yoga Nidra',
    icon: asanaIcon,
    number: '13',
    Image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    link: '/Yoga-Nidra',
  },
  {
    key: 'mantra',
    title: 'Vedic Mantra Chanting',
    icon: pranayamaIcon,
    number: '14',
    Image: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=80',
    link: '/Vedic-Mantra-Chanting',
  },
  {
    key: 'vedanta',
    title: 'Vedanta Philosophy MahaRishi Patanjali 8 Limbs',
    icon: anatomyIcon,
    number: '15',
    Image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    link: '/Vedanta-Philosophy',
  },
  {
    key: 'ganga',
    title: 'Practice at The bank of Ganga ji',
    icon: philosophyIcon,
    number: '16',
    Image: Ganga,
    link: '/Practice-at-Ganga',
  },
  {
    key: 'sound',
    title: 'Sound Healing Session',
    icon: teachingIcon,
    number: '17',
    Image: 'https://images.unsplash.com/photo-1545434013-d3641db90732?w=800&q=80',
    link: '/Sound-Healing-Session',
  },
  {
    key: 'marma',
    title: 'Marma Techniques',
    icon: meditationIcon,
    number: '18',
    Image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
    link: '/MarmaTechniques',
  },
  {
    key: 'aerial',
    title: 'Basic Arial Yoga session',
    icon: asanaIcon,
    number: '19',
    Image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    link: '/Basic-Aerial-Yoga',
  },
  {
    key: 'certification',
    title: 'RYS200 International certification ',
    icon: pranayamaIcon,
    number: '20',
    Image: International,
    link: '/RYS200-Certification',
  },
  {
    key: 'flexibility',
    title: 'Flexibility Techniques',
    icon: anatomyIcon,
    number: '21',
    Image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80',
    link: '/Flexibility-Techniques',
  },
  {
    key: 'mudra',
    title: 'Mudra',
    icon: philosophyIcon,
    number: '22',
    Image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80',
    link: '/Mudra',
  },
  {
    key: 'bandha',
    title: 'Bandhas',
    icon: teachingIcon,
    number: '23',
    Image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
    link: '/Bandhas',
  },
  {
    key: 'ayurvedic',
    title: 'Basic Ayurvedic Remedies',
    icon: meditationIcon,
    number: '24',
    Image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    link: '/Basic-Ayurvedic-Remedies',
  },
  {
    key: 'therapy',
    title: 'Yoga Therapy',
    icon: asanaIcon,
    number: '25',
    Image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80',
    link: '/Yoga-Therapy',
  },
  {
    key: 'tracking',
    title: 'Tracking & Self Practice',
    icon: pranayamaIcon,
    number: '26',
    Image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    link: '/Tracking-Self-Practice',
  },
];

const content = {
  hatha: 'Traditional Hatha Yoga focuses on foundational postures, breath awareness, and stillness, building strength, balance, flexibility, and mindfulness for a stable yoga practice.',
  ashtanga: 'Ashtanga Yoga is a dynamic and disciplined practice combining breath, movement, and gaze to build stamina, focus, detoxification, and mental clarity.',
  kundalini: 'Kundalini Yoga awakens dormant energy through kriyas, breathwork, mantra, and meditation, enhancing awareness, emotional balance, and inner transformation.',
  props: 'Props Yoga uses tools such as chair, yoga block, strap, wheel, and wall to support alignment, accessibility, deeper awareness, and injury-free practice.',
  ancient: 'Ancient yogic practices include hip opening, shoulder opening, back bending, forward bending, and leg splits to release deep tension and improve mobility.',
  anatomy: 'Anatomy and physiology provide a scientific understanding of muscles, joints, spine, and body systems to ensure safe, intelligent, and sustainable yoga practice.',
  vinyasa: 'Vinyasa Flow links breath with movement in a continuous sequence, enhancing strength, flexibility, coordination, and meditative flow awareness.',
  alignment: 'Body and asana alignment training emphasizes correct posture, biomechanics, and adjustments to prevent injury and deepen the effectiveness of each pose.',
  shatkarma: 'Shatkarma consists of yogic cleansing techniques that detoxify the body, purify internal systems, and prepare practitioners for higher yogic practices.',
  teaching: 'Teaching methodology develops confident yoga teachers through sequencing, cueing, class planning, adjustments, ethics, communication skills, and teaching practice.',
  pranayama: 'Pranayama teaches conscious breath regulation to balance the nervous system, expand lung capacity, increase prana flow, and support mental clarity.',
  meditation: 'Meditation practices cultivate inner silence, concentration, emotional stability, and heightened self-awareness through guided and self-practice techniques.',
  yoganidra: 'Yoga Nidra is a systematic relaxation technique that brings deep physical, mental, and emotional rest while maintaining conscious awareness.',
  mantra: 'Vedic mantra chanting uses sacred sound vibrations to calm the mind, purify energy, enhance focus, and connect practitioners with ancient yogic traditions.',
  vedanta: 'Vedanta philosophy explores self-realization and universal truth through the teachings of the Upanishads and the eightfold path of yoga described by Maharishi Patanjali.',
  ganga: 'Practicing yoga at the sacred bank of the Ganga provides a deeply spiritual environment that enhances meditation, purification, and inner transformation.',
  sound: 'Sound healing sessions use therapeutic vibrations from instruments and voice to balance energy, reduce stress, and support deep relaxation and healing.',
  marma: 'Marma techniques involve stimulation of vital energy points to release blockages, improve circulation, and support physical and energetic healing.',
  aerial: 'Basic aerial yoga introduces supported postures using fabric hammocks to improve strength, flexibility, spinal decompression, and body awareness.',
  certification: 'RYS 200 international certification qualifies students to teach yoga worldwide with a strong foundation in traditional practice, philosophy, and teaching ethics.',
  flexibility: 'Flexibility techniques focus on gradual muscle opening, joint mobility, and fascia release to improve range of motion, posture, and injury prevention.',
  mudra: 'Mudras are symbolic hand gestures that redirect pranic energy, enhance meditation, support healing, and deepen mind–body awareness.',
  bandha: 'Bandhas are internal energy locks that regulate prana flow, stabilize the core, and enhance strength, focus, and energetic control during practice.',
  ayurvedic: 'Basic Ayurvedic remedies introduce natural healing methods using lifestyle guidance, diet awareness, herbs, and daily routines to maintain balance and wellbeing.',
  therapy: 'Yoga therapy applies yogic tools such as asana, pranayama, relaxation, and mindfulness to support physical recovery, mental health, and chronic conditions.',
  tracking: 'Tracking and self-practice observation help students monitor progress, understand limitations, build discipline, and develop mindful consistency in practice.',
};

const YogaOverview5 = () => {
  const [active, setActive] = useState('hatha');

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
                    Read More →
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