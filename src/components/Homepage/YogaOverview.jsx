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
  {
  key: 'hatha',
  title: 'Hatha Yoga (Traditional)',
  icon: asanaIcon,
  number: '01',
  Image: Image1,
  link: '/hatha-yoga',
},
{
  key: 'ashtanga',
  title: 'Ashtanga Yoga',
  icon: pranayamaIcon,
  number: '02',
  Image: Image2,
  link: '/ashtanga-yoga',
},
{
  key: 'kundalini',
  title: 'Kundalini Yoga',
  icon: anatomyIcon,
  number: '03',
  Image: Image3,
  link: '/kundalini-yoga',
},
{
  key: 'props',
  title: 'Props Yoga',
  icon: philosophyIcon,
  number: '04',
  Image: Image4,
  link: '/props-yoga',
},
{
  key: 'ancient',
  title: 'Ancient Yogic Practices',
  icon: teachingIcon,
  number: '05',
  Image: Image5,
  link: '/ancient-yoga',
},
{
  key: 'anatomy',
  title: 'Anatomy & Physiology',
  icon: meditationIcon,
  number: '06',
  Image: Image6,
  link: '/anatomy-physiology',
},
{
  key: 'vinyasa',
  title: 'Vinyasa Flow',
  icon: asanaIcon,
  number: '07',
  Image: Image1,
  link: '/vinyasa-flow',
},
{
  key: 'alignment',
  title: 'Body & Asana Alignment',
  icon: pranayamaIcon,
  number: '08',
  Image: Image2,
  link: '/asana-alignment',
},
{
  key: 'shatkarma',
  title: 'Shatkarma (Body cleansing Detox)',
  icon: anatomyIcon,
  number: '09',
  Image: Image3,
  link: '/shatkarma',
},
{
  key: 'teaching',
  title: 'Teaching Methodology',
  icon: philosophyIcon,
  number: '10',
  Image: Image4,
  link: '/teaching-methodology',
},
{
  key: 'pranayama',
  title: 'Pranayama',
  icon: pranayamaIcon,
  number: '11',
  Image: Image5,
  link: '/pranayama',
},
{
  key: 'meditation',
  title: 'Meditation',
  icon: meditationIcon,
  number: '12',
  Image: Image6,
  link: '/meditation',
},
{
  key: 'yoganidra',
  title: 'Yoga Nidra',
  icon: asanaIcon,
  number: '13',
  Image: Image1,
  link: '/yoga-nidra',
},
{
  key: 'mantra',
  title: 'Vedic Mantra Chanting',
  icon: pranayamaIcon,
  number: '14',
  Image: Image2,
  link: '/vedic-mantra',
},
{
  key: 'vedanta',
  title: 'Vedanta Philosophy MahaRishi Patanjali 8 Limbs',
  icon: anatomyIcon,
  number: '15',
  Image: Image3,
  link: '/vedanta-philosophy',
},
{
  key: 'ganga',
  title: 'Practice at The bank of Ganga ji',
  icon: philosophyIcon,
  number: '16',
  Image: Image4,
  link: '/ganga-practice',
},
{
  key: 'sound',
  title: 'Sound Healing Session',
  icon: teachingIcon,
  number: '17',
  Image: Image5,
  link: '/sound-healing',
},
{
  key: 'marma',
  title: 'Marma Techniques',
  icon: meditationIcon,
  number: '18',
  Image: Image6,
  link: '/marma-therapy',
},
{
  key: 'aerial',
  title: 'Basic Arial Yoga session',
  icon: asanaIcon,
  number: '19',
  Image: Image1,
  link: '/aerial-yoga',
},
{
  key: 'certification',
  title: 'RYS200 International certification ',
  icon: pranayamaIcon,
  number: '20',
  Image: Image2,
  link: '/rys-200',
},
{
  key: 'flexibility',
  title: 'Flexibility Techniques',
  icon: anatomyIcon,
  number: '21',
  Image: Image3,
  link: '/flexibility-techniques',
},
{
  key: 'mudra',
  title: 'Mudra',
  icon: philosophyIcon,
  number: '22',
  Image: Image4,
  link: '/mudra',
},
{
  key: 'bandha',
  title: 'Bandhas',
  icon: teachingIcon,
  number: '23',
  Image: Image5,
  link: '/bandhas',
},
{
  key: 'ayurvedic',
  title: 'Basic Ayurvedic Remedies',
  icon: meditationIcon,
  number: '24',
  Image: Image6,
  link: '/ayurveda-remedies',
},
{
  key: 'therapy',
  title: 'Yoga Therapy',
  icon: asanaIcon,
  number: '25',
  Image: Image1,
  link: '/yoga-therapy',
},
{
  key: 'tracking',
  title: 'Tracking & Self Practice',
  icon: pranayamaIcon,
  number: '26',
  Image: Image2,
  link: '/tracking',
},

];

const content = {
  hatha:
  'Traditional Hatha Yoga focuses on foundational postures, breath awareness, and stillness, building strength, balance, flexibility, and mindfulness for a stable yoga practice.',

ashtanga:
  'Ashtanga Yoga is a dynamic and disciplined practice combining breath, movement, and gaze to build stamina, focus, detoxification, and mental clarity.',

kundalini:
  'Kundalini Yoga awakens dormant energy through kriyas, breathwork, mantra, and meditation, enhancing awareness, emotional balance, and inner transformation.',

props:
  'Props Yoga uses tools such as chair, yoga block, strap, wheel, and wall to support alignment, accessibility, deeper awareness, and injury-free practice.',

ancient:
  'Ancient yogic practices include hip opening, shoulder opening, back bending, forward bending, and leg splits to release deep tension and improve mobility.',

anatomy:
  'Anatomy and physiology provide a scientific understanding of muscles, joints, spine, and body systems to ensure safe, intelligent, and sustainable yoga practice.',

vinyasa:
  'Vinyasa Flow links breath with movement in a continuous sequence, enhancing strength, flexibility, coordination, and meditative flow awareness.',

alignment:
  'Body and asana alignment training emphasizes correct posture, biomechanics, and adjustments to prevent injury and deepen the effectiveness of each pose.',

shatkarma:
  'Shatkarma consists of yogic cleansing techniques that detoxify the body, purify internal systems, and prepare practitioners for higher yogic practices.',

teaching:
  'Teaching methodology develops confident yoga teachers through sequencing, cueing, class planning, adjustments, ethics, communication skills, and teaching practice.',
pranayama:
  'Pranayama teaches conscious breath regulation to balance the nervous system, expand lung capacity, increase prana flow, and support mental clarity.',

meditation:
  'Meditation practices cultivate inner silence, concentration, emotional stability, and heightened self-awareness through guided and self-practice techniques.',

yoganidra:
  'Yoga Nidra is a systematic relaxation technique that brings deep physical, mental, and emotional rest while maintaining conscious awareness.',

mantra:
  'Vedic mantra chanting uses sacred sound vibrations to calm the mind, purify energy, enhance focus, and connect practitioners with ancient yogic traditions.',

vedanta:
  'Vedanta philosophy explores self-realization and universal truth through the teachings of the Upanishads and the eightfold path of yoga described by Maharishi Patanjali.',

ganga:
  'Practicing yoga at the sacred bank of the Ganga provides a deeply spiritual environment that enhances meditation, purification, and inner transformation.',

sound:
  'Sound healing sessions use therapeutic vibrations from instruments and voice to balance energy, reduce stress, and support deep relaxation and healing.',

marma:
  'Marma techniques involve stimulation of vital energy points to release blockages, improve circulation, and support physical and energetic healing.',

aerial:
  'Basic aerial yoga introduces supported postures using fabric hammocks to improve strength, flexibility, spinal decompression, and body awareness.',

certification:
  'RYS 200 international certification qualifies students to teach yoga worldwide with a strong foundation in traditional practice, philosophy, and teaching ethics.',
flexibility:
  'Flexibility techniques focus on gradual muscle opening, joint mobility, and fascia release to improve range of motion, posture, and injury prevention.',

mudra:
  'Mudras are symbolic hand gestures that redirect pranic energy, enhance meditation, support healing, and deepen mind–body awareness.',

bandha:
  'Bandhas are internal energy locks that regulate prana flow, stabilize the core, and enhance strength, focus, and energetic control during practice.',

ayurvedic:
  'Basic Ayurvedic remedies introduce natural healing methods using lifestyle guidance, diet awareness, herbs, and daily routines to maintain balance and wellbeing.',

therapy:
  'Yoga therapy applies yogic tools such as asana, pranayama, relaxation, and mindfulness to support physical recovery, mental health, and chronic conditions.',

tracking:
  'Tracking and self-practice observation help students monitor progress, understand limitations, build discipline, and develop mindful consistency in practice.',

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
