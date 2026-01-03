import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/YogaOverview.module.css";

import asanaIcon from "../../assets/images/icons/icon1.webp";
import pranayamaIcon from "../../assets/images/icons/icon2.webp";
import anatomyIcon from "../../assets/images/icons/icon3.webp";
import philosophyIcon from "../../assets/images/icons/icon4.webp";
import teachingIcon from "../../assets/images/icons/icon5.webp";
import meditationIcon from "../../assets/images/icons/icon6.webp";

const iconsMap = {
  asana: asanaIcon,
  pranayama: pranayamaIcon,
  anatomy: anatomyIcon,
  philosophy: philosophyIcon,
  teaching: teachingIcon,
  meditation: meditationIcon,
};

const contentData = {
  asana: {
    title: "Asana",
    text: `“Sthira Sukham Asanam” — a posture that is steady, comfortable, and effortless — 
    forms the foundation of traditional Hatha Yoga practice.

    At Hatha Yog Ashram, asana is approached as a deeply meditative discipline rather than 
    a physical exercise routine. Students are guided to explore each posture with patience, 
    awareness, and precision. Emphasis is placed on correct alignment, breath awareness, 
    and mindful transitions so that the body opens gradually and safely.

    Through consistent practice, asanas help develop strength, flexibility, balance, 
    and coordination while improving spinal health and joint mobility. Beyond physical 
    benefits, asana practice cultivates mental stability, emotional balance, and inner 
    focus. Students learn to observe sensations without attachment, fostering a calm 
    and receptive state of mind.

    Asana practice also prepares the body for prolonged sitting in pranayama and 
    meditation by creating steadiness and comfort. This disciplined approach encourages 
    practitioners to move beyond ego-driven goals and into a deeper connection with 
    their inner experience, making asana a powerful tool for holistic transformation.`
  },

  pranayama: {
    title: "Pranayama",
    text: `Pranayama is the yogic science of breath control and expansion of life force 
    energy (prana). In classical yoga, breath is considered the vital link between the 
    body, mind, and emotions.

    At Hatha Yog Ashram, pranayama is taught in a gradual, systematic, and safe manner, 
    respecting the individual capacity of each student. Foundational practices such as 
    Nadi Shodhana, Kapalbhati, Bhastrika, and Ujjayi are introduced step by step to purify 
    the energy channels (nadis) and balance the nervous system.

    Regular pranayama practice enhances lung capacity, improves oxygen efficiency, and 
    calms mental fluctuations. Students often experience improved concentration, emotional 
    stability, reduced stress, and a heightened sense of awareness.

    Over time, pranayama creates a stable inner environment that supports deeper states 
    of meditation. It acts as a bridge between physical practice and inner awareness, 
    guiding practitioners toward subtle perception and self-mastery.`
  },

  anatomy: {
    title: "Yoga Anatomy",
    text: `Yoga Anatomy provides essential knowledge of the human body from both modern 
    scientific and traditional yogic perspectives. Understanding anatomy allows students 
    to practice intelligently, safely, and sustainably.

    At Hatha Yog Ashram, anatomy is taught in a practical and experiential way, closely 
    integrated with asana practice. Students learn about the skeletal system, muscles, 
    joints, spine mechanics, and movement patterns relevant to yoga postures.

    This knowledge helps prevent injuries, improves alignment awareness, and enables 
    practitioners to modify poses according to individual needs and limitations. For 
    aspiring teachers, anatomy builds confidence in guiding students responsibly and 
    offering safe adjustments.

    By bridging ancient yogic wisdom with modern anatomical understanding, students 
    develop respect for the body’s natural design and limitations, creating a balanced 
    and informed yoga practice.`
  },

  philosophy: {
    title: "Yogic Philosophy",
    text: `Yogic Philosophy forms the spiritual and ethical foundation of yoga practice. 
    It provides timeless insights into the nature of the mind, suffering, and the path 
    toward self-realization.

    At Hatha Yog Ashram, students study classical yogic texts such as the Yoga Sutras of 
    Patanjali, the Bhagavad Gita, and other foundational teachings. Concepts such as Yama, 
    Niyama, Karma, Dharma, and Moksha are explored with practical relevance to modern life.

    Philosophy classes encourage reflection, self-inquiry, and conscious living. Students 
    learn to integrate yogic values both on and off the mat, transforming yoga from a 
    physical practice into a holistic way of life.

    This deeper understanding nurtures clarity, ethical awareness, and spiritual growth, 
    supporting long-term progress on the yogic path.`
  },

  teaching: {
    title: "Teaching Methodology",
    text: `Teaching Methodology equips students with the skills and confidence required 
    to become effective, ethical, and compassionate yoga teachers.

    At Hatha Yog Ashram, students learn class sequencing, verbal cueing, demonstration 
    techniques, hands-on adjustments, and the use of voice and presence. Emphasis is placed 
    on creating inclusive, safe, and supportive learning environments for students of 
    all levels.

    The curriculum also covers professional ethics, teacher-student relationships, 
    classroom management, and the responsibility of holding space with awareness and 
    empathy.

    Through regular practice teaching sessions and constructive feedback, students 
    refine their teaching skills, build confidence, and develop an authentic teaching 
    style rooted in yogic principles.`
  },

  meditation: {
    title: "Meditation & Cleansing",
    text: `Meditation represents the culmination of yogic practice, guiding practitioners 
    toward inner stillness, clarity, and self-awareness.

    At Hatha Yog Ashram, meditation is introduced as a natural progression from asana 
    and pranayama. Students are guided through traditional meditation techniques that 
    cultivate mindfulness, concentration, and inner silence.

    Alongside meditation, yogic cleansing practices (Shatkarma) are introduced to support 
    physical and energetic purification. These practices help remove toxins, balance 
    internal systems, and prepare the body and mind for deeper spiritual work.

    Together, meditation and cleansing foster holistic transformation, nurturing harmony 
    of body, breath, and mind while supporting long-term inner growth and self-realization.`
  },
};


const YogaOverview = () => {
  const [active, setActive] = useState("asana");

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Overview Of Yoga Teacher Training</h2>

      <div className="row justify-content-center mb-2">
        <div className="col-md-6 text-center">
          <p className={styles.intro}>
            The yogic journey starts with Hawan (fire ceremony) and Mantra Chanting
            to purify the energy of our surroundings and receive blessings from
            ancestors and gurus.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.side}>
          {["asana", "pranayama", "anatomy"].map((item) => (
            <div
              key={item}
              className={`${styles.iconBox} ${
                active === item ? styles.active : ""
              }`}
              onClick={() => setActive(item)}
            >
              <img src={iconsMap[item]} alt={contentData[item].title} />
              <p>{contentData[item].title}</p>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className={styles.contentCard}>
          <span className={styles.om}>ॐ</span>
          <h3>{contentData[active].title}</h3>
          <p>{contentData[active].text}</p>
        </div>

        {/* RIGHT */}
        <div className={styles.side}>
          {["philosophy", "teaching", "meditation"].map((item) => (
            <div
              key={item}
              className={`${styles.iconBox} ${
                active === item ? styles.active : ""
              }`}
              onClick={() => setActive(item)}
            >
              <img src={iconsMap[item]} alt={contentData[item].title} />
              <p>{contentData[item].title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaOverview;
