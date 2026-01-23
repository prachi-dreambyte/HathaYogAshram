import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/yogateachers/Teachers.module.css';

const Teachers = () => {
  const [activeSchool, setActiveSchool] = useState('rishikesh-yogkulam');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const schools = {
    'rishikesh-yogkulam': {
      name: 'Rishikesh Yogkulam',
      color: '#D4AF37',
      teachers: [
        {
          name: 'Dhirendra Ji',
          role: 'Hatha Yoga Teaching Methodology',
          image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
          bio: 'Born in the lap of the Holy Ganga, at the feet of the Bhootnath Shiva Temple, amidst the forests of the Himalayas, Dhirendra reveals himself as a nature lover and spiritual seeker.',
          fullBio:
            'Having started his schooling at the tender age of 5, from one of the oldest, most iconic and traditional schools of Rishikesh, Dhirendra believes he was drawn to Yoga by a mystical force as he practiced asanas during the physical education lessons in school. He began to live the yogic way of life from that early age and embraced spirituality as his routines began with worshipping Lord Shiva and the Holy Ganga and continued with practising asanas, eating satvik food and attending music lessons.',
        },
        {
          name: 'Amit Ji',
          role: 'Yoga Anatomy Teaching Methodology',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          bio: "Amit Payal, the founder of Rishikesh Yogkulam®, is an E-RYT 500-Hour Yoga instructor with a Master's degree in Yoga Science.",
          fullBio:
            'He is a well-known, appreciated and celebrated Yoga master in Rishikesh, India. With several specialisations like Alignment, Adjustment, Hatha and Ashtanga Yoga, Yoga philosophy, Anatomy and Pranayama, Amit ensures that his pupils, whether teachers or students, push their limits, test their boundaries and achieve their goals.',
        },
        {
          name: 'Ella Ji',
          role: 'Yin Yoga Meditation',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          bio: 'An ex marketing manager who has always been very curious about the human mind and the holistic approaches, which led her to study Neuro Linguistic Programming and Aromatherapy.',
          fullBio:
            "Her journey into yoga begun in a period were she was experiencing a deep depression and she couldn't find a purpose to live. Moved by an inner call, she decided to go to India and enroll in a yoga course and that's when her life had a turn point. After short, she healed completely from depression.",
        },
        {
          name: 'Pankaj Ji',
          role: 'Hatha Yoga Ashtanga Vinyasa Alignment & Adjustment',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
          bio: 'Pankaj Sharma was born and brought up in the foothills of Himalayas, Himachal Pradesh.',
          fullBio:
            "After the completion of B.A in Sanskrit, he moved to Rishikesh and spent 8 years of his life in an ashram, learning yoga in the age-old Gurukul style leading a disciplined and yogic life. To Satiate his urge for knowledge Pankaj went on to pursue a Masters's degree in Yoga.",
        },
        {
          name: 'Jitender Ji',
          role: 'Hatha Yoga Ashtanga Vinyasa Alignment & Adjustment',
          image:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
          bio: 'A distinguished and time-honoured individual, Jitu ji embodies traditionalism.',
          fullBio:
            "He completed his Bachelor's in Sanskrit from Parmarth Niketan Ashram here in Rishikesh itself and went on to pursue his Master's in Yoga from the prestigious Uttarakhand Sanskrit University. He has spent over 10 years of his life in various ashrams.",
        },
        {
          name: 'Prahlad Ji',
          role: 'Hatha Yoga Alignment and Adjustment',
          image:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
          bio: 'A dynamic and passionate teacher, Prahlad Ji is inclined towards the traditional practice of Hatha Yoga.',
          fullBio:
            "Being a Master's degree holder in Yoga and with more than five dedicated years of teaching as well as personal practice, he adds a unique treasure of experience and energy to his classes. His in-depth know-how of Hatha Yoga, coupled with his youthful enthusiasm, make him a true favourite among the students.",
        },
        {
          name: 'Mandeep Ji',
          role: 'Yoga Philosophy Mantra Chanting',
          image:
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
          bio: 'Mandeep ji came to Rishikesh in 2002 and wrapped himself in the practise of Yoga by the banks of the holy river Ganga for years.',
          fullBio:
            'Having completed his early education from the renowned Parmarth Niketan Ashram, he has been expounding his knowledge of Mantra Chanting, Yoga Philosophy and Meditation unto other seekers for more than 10 years now. Besides this, he is a learned astrologer and has been practising the same for more than 9 years.',
        },
        {
          name: 'Deepa Ji',
          role: 'Yog Nidra Meditation',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
          bio: 'As a teacher, Deepa Negi Mira focuses largely on Meditation, Yoga Nidra, Mantra Chanting, and Laughing Yoga.',
          fullBio:
            "She has fondly been teaching 200 hours and 300 hours of Yoga teacher training courses at various prestigious yoga schools for more than 12 years. For Deepa 'spirituality' is all about peace of mind, being consistent within striking a perfect balance with yourself.",
        },
        {
          name: 'Dr. Mahesh Ji',
          role: 'Yoga Therapy Yoga Philosophy',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
          bio: 'Yogacharya Mahesh was born and brought up in Rishikesh at the base of the Himalayas.',
          fullBio:
            'He completed his B.Sc. in Science from HNB Garhwal University. Then, he went after his love for yoga by getting a P.G. Diploma in Yoga from Uttarakhand Sanskrit University. Here, he got the honorable gold medal. Yogacharya Mahesh has been teaching yoga philosophy and therapy in Rishikesh for over 12 years.',
        },
        {
          name: 'Dr. Hemlata Ji',
          role: 'Yoga Anatomy',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
          bio: 'Dr. Hemlata ji represents deep understanding and commitment in yoga, anatomy and physiotherapy field.',
          fullBio:
            'For many years, she has been teaching about yoga anatomy and therapy in the spiritual place of Rishikesh. She is inspiring lots of people to move forward on their yogic adventures. Her lessons have given her a good name as a trusted expert and guide.',
        },
        {
          name: 'Dr. Shivani Ji',
          role: 'Ayurvedic Doctor Wellness Consultant',
          image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
          bio: 'Dr. Shivani is a dedicated Ayurvedic doctor with a Bachelor of Ayurvedic Medicine and Surgery (BAMS).',
          fullBio:
            'As an Ayurveda consultant, teacher, and Panchkarma specialist, she brings extensive knowledge and experience to her practice. Dr. Shivani is passionate about guiding people toward better health using the natural and time-tested methods of Ayurveda.',
        },
        {
          name: 'Atharva Ji',
          role: 'Meditation Morning Rituals',
          image:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
          bio: 'Atharva Ji is a respected teacher and scholar rooted in the sacred sciences of Mantra Chanting, Astrology, and Yoga.',
          fullBio:
            'A devoted disciple from the lineage of Saint Morya Gosawi, he began his spiritual journey at the age of ten, studying Yajurveda through the Gurushishya Parampara and mastering the ancient method of shravan (listening and memorization). For the past eight years, he has taught across India and South Africa.',
        },
      ],
    },
    'vinyasa-yogashala': {
      name: 'Vinyasa Yogashala',
      color: '#8B4789',
      teachers: [
        {
          name: 'Ashish Rawat',
          role: 'Founder - Ashtanga Yoga - Alignment',
          image:
            'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop',
          bio: 'Ashish is a charming young yoga master with uniqueness in him to attract the learners with his dynamic teaching style.',
          fullBio:
            'Ashish obtained his Masters of Science in Yogic Science from Sanskrit University in Uttarakhand in 2014. He won gold, silver, and bronze at the Straight Level competition in asana. Ashish was also awarded bronze at the Lakulish World Yogasana Championships in 2013.',
        },
        {
          name: 'Ravi Bisht',
          role: 'Traditional Hatha Yoga',
          image:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop',
          bio: 'Ravi Bisht is a registered yoga teacher of 500 Hours from the Yoga Alliance USA commenced his yogic journey 15 years back.',
          fullBio:
            'With the intention of spreading yoga as a tool for overall well-being, Ravi Bisht started his yogic path 16 years ago in the spiritual city of Rishikesh where he was born and brought up. He strongly believes yoga can be understood only if one is ready to accept the disciplinary rules and regulations.',
        },
        {
          name: 'Acharya Vinay',
          role: 'Yoga Philosophy - Astrology',
          image:
            'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop',
          bio: 'Acharya Vinay was born into a Brahmin family where yoga was a household virtue.',
          fullBio:
            'His grandfather passed his legacy to his father in form of traditional values of yoga, astrology and dharma. He started studying the scriptures on Veda, Upanishads, and Yoga under his father at the early age of 12. It got ripe with the initiation by his Guru Yogi Rudranath of Himalayas.',
        },
        {
          name: 'Tanushree Rawat',
          role: 'Meditation - Pranayama',
          image:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
          bio: 'Tanushree Rawat is responsible for teaching asanas, pranayama, meditation, mantras and other yoga forms.',
          fullBio:
            'Tanushree obtained her post-graduate in Yoga from Sanskrit University in Haridwar in 2011. She worked as a yoga instructor at Ananda in the Himalayas, a world-renowned yoga and spa that celebrities such as Prince Charles have attended.',
        },
        {
          name: 'Yogi Raghav',
          role: 'Bhagwat Geeta',
          image:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
          bio: 'Yogi Raghav is an awakened personality and he is strongly rooted in Hatha yoga and Therapeutic yoga.',
          fullBio:
            'His style is a dynamic combination of intelligent sequencing and alignment for the body and health condition of the person. He was introduced to yoga at a very tender age. He became a devotee of Rama and long-time he lived a monastic life.',
        },
        {
          name: 'Rozee Srichandran',
          role: 'Aerial Yoga',
          image:
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
          bio: 'Meet Rozee Srichandran, also known as the flying master of Vinyasa Yogashala. She is an expert in Aerial Yoga.',
          fullBio:
            "She has worked in Beijing as a Pilates, yoga & aerial teacher for five years. Her expertise lies in understanding students' fears and helping them overcome them through yoga. She has been teaching yoga for the last 15 years.",
        },
        {
          name: 'Jeet',
          role: 'Vinyasa Flow, Mantra Chanting',
          image:
            'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop',
          bio: 'At the tender age of twelve, Jeet began his journey into the depths of Yoga, seeking solace for his partially deaf ears.',
          fullBio:
            'Through dedicated practice, his hearing mended, and his body found balance once more. Now, with over a decade of personal practice and formal teaching, Jeet teaches students Vinyasa Flow, Hatha Yoga, and Mantra Chanting.',
        },
      ],
    },
    'world-peace': {
      name: 'World Yoga Peace School',
      color: '#2E7D32',
      teachers: [
        {
          name: 'Yogi Vishnu Panigrahi',
          role: 'Founder',
          image:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
          bio: 'Yogi Vishnu Panigrahi has been steeped in spiritual endeavors since when he was a kid.',
          fullBio:
            'As a young boy, his grandfather told him to meditate and pursue spirituality from an honest and pure perspective. A Radhe-Krishna Temple was constructed by his grandfather in their village in Odisha, India where Vishnu would frequently serve food and water to wandering sadhus.',
        },
        {
          name: 'Maa Haripriya',
          role: 'Traditional Kundalini & Tantra Yoga',
          image:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
          bio: 'My life is dedicated to human unity, love, and compassion through our work at Samadhi Kundalini Yoga Ashram.',
          fullBio:
            'Born in the UK to an Indian family, I was drawn to the path of spirituality from a young age. Yoga was the path that lifted the veil for me to live life once again in the present moment. I quickly immersed myself in the wisdom of yoga, learning from many of the great masters of the Himalayas.',
        },
        {
          name: 'Yogi Naveen',
          role: 'Hatha, Ashtanga & Prenatal',
          image:
            'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop',
          bio: 'Mr. Naveen has been teaching Yoga Teacher Training since 2015.',
          fullBio:
            'He had trained over a 1000 teachers in India and abroad. Most of his work is in Yoga Capital Rishikesh, India. He has also taught yoga in China and Vietnam. Naveen holds a Master in yogic science, and is a certified Prenatal and postnatal yoga teacher trainer.',
        },
        {
          name: 'Yogi Sunil',
          role: 'Hatha Yoga, Yoga Philosophy & Meditation',
          image:
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop',
          bio: 'Yogi Sunil Bisht, has started learning the ethics and moral values under the Guidance of His father in very early age of 4-5.',
          fullBio:
            'He has studied and practiced Yoga and Ayurveda from different teachers and masters. He studied in Kriya Yoga Ashram and has been initiated in kriya yoga by the Swami Shankranda Giri ji. He has about 15 years of long experience of teaching.',
        },
      ],
    },
    'vinyasa-yogashram': {
      name: 'Vinyasa YogAshram',
      color: '#C44536',
      teachers: [
        {
          name: 'Ajay Ji',
          role: 'Founder - Anatomy, Pranayama, Sound Healing',
          image:
            'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop',
          bio: "Ajay ji's vision birthed Vinyasa Yoga Ashram and his guidance has shaped the mission for our school.",
          fullBio:
            'Rooted in love and purpose, he is a true leader guiding us to the path of light and wisdom, and a realization that our knees have been falling in since birth.',
        },
        {
          name: 'Pradeep Ji',
          role: 'Course Director',
          image:
            'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=400&h=400&fit=crop',
          bio: 'Pradeep ji is the pillar of our school.',
          fullBio:
            'Having curated a strong team, he is a role model and an inspiration to teach authentically and to live like a true yogi. His wealth of knowledge across yoga, human psychology and neuroscience, and years of experience in teaching are unparalleled.',
        },
        {
          name: 'Anupritha Ji',
          role: 'Pranayama Expert',
          image:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
          bio: 'Anupritha ji is our light, providing unwavering support through her warm hugs and knowing smile.',
          fullBio:
            'We call her "amma" - mother - as reverence for her deep affection, that sometimes comes in the form of tough love, but much needed! She has been sharing her wisdom for over 11 years, with an expertise in pranayama that is unmatched.',
        },
        {
          name: 'Bhagyashree Ji',
          role: 'Vedas & Indian Philosophy',
          image:
            'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop',
          bio: 'Bhagyashree Ji is the epitome of intelligence and discipline. Students call her a fairy!',
          fullBio:
            'Holding a Ph.D in Indian scriptures, she is a master of the Vedas and Indian Philosophy. Her storytelling will leave you enchanted, and her life itself is a learning to be honoured.',
        },
        {
          name: 'Prajna Ji',
          role: 'Meditation Master',
          image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
          bio: 'If you want to meditate, you must meet Prajna Ji! A meditation master, who has a way to take you to new heights.',
          fullBio:
            "With her eccentric personality, she teaches us how to thrive in one's uniqueness. Under her guidance, you will experience the essence of yoga– Dhyan.",
        },
        {
          name: 'Arvind Ji',
          role: 'Advanced Asana Practice',
          image:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop',
          bio: "If you are confused whether to be in awe of the teacher or focus on your practice, you must be in Arvind Ji's class!",
          fullBio:
            'From backflips to pincha, he can do it all. With over 5 years of teaching under his belt, his commitment to his craft can be seen in his work.',
        },
        {
          name: 'Sangam Ji',
          role: 'Vinyasa Krama',
          image:
            'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop',
          bio: 'Grace and humility– the best way to describe Sangam Ji.',
          fullBio:
            'His classes are where your soul takes the front seat, every movement becomes an exploration of the body, breath and mind. He has dedicated over 5 years to mastering the style of Vinyasa Krama.',
        },
      ],
    },
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.highlight}>Teachers</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experienced masters guiding your journey to inner peace and
            spiritual awakening
          </p>
          <div className={styles.heroDivider}></div>
        </div>
      </section>

      {/* School Navigation */}
      <nav className={styles.schoolNav}>
        <div className={styles.schoolNavInner}>
          {Object.entries(schools).map(([key, school]) => (
            <button
              key={key}
              className={`${styles.schoolButton} ${activeSchool === key ? styles.active : ''}`}
              onClick={() => setActiveSchool(key)}
              style={{
                '--school-color': school.color,
              }}
            >
              {school.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Teachers Grid */}
      <section className={styles.teachersSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{schools[activeSchool].name}</h2>
          <div
            className={styles.sectionLine}
            style={{ backgroundColor: schools[activeSchool].color }}
          ></div>
        </div>

        <div className={styles.teachersGrid}>
          {schools[activeSchool].teachers.map((teacher, index) => (
            <div
              key={index}
              className={styles.teacherCard}
              onClick={() => handleTeacherClick(teacher)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.teacherIcon}>
                    <img src={teacher.image} alt={teacher.name} />
                  </div>
                  <h3 className={styles.teacherName}>{teacher.name}</h3>
                  <p className={styles.teacherRole}>{teacher.role}</p>
                  <div
                    className={styles.cardAccent}
                    style={{ backgroundColor: schools[activeSchool].color }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Modal */}
      {selectedTeacher && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                <img src={selectedTeacher.image} alt={selectedTeacher.name} />
              </div>
              <h2 className={styles.modalTitle}>{selectedTeacher.name}</h2>
              <p
                className={styles.modalRole}
                style={{ color: schools[activeSchool].color }}
              >
                {selectedTeacher.role}
              </p>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalBio}>{selectedTeacher.bio}</p>
              {selectedTeacher.fullBio && (
                <p className={styles.modalFullBio}>{selectedTeacher.fullBio}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* How to Reach Section */}
      <section className={styles.reachSection}>
        <h2 className={styles.reachTitle}>How to Reach Us</h2>
        <div className={styles.reachGrid}>
          <div className={styles.reachCard}>
            <div className={styles.reachIcon}>✈️</div>
            <h3>By Airways</h3>
            <p>
              Fly to Jolly Grant International Airport (Dehradun). We can
              arrange a taxi from the airport to our school in Rishikesh.
            </p>
          </div>
          <div className={styles.reachCard}>
            <div className={styles.reachIcon}>🚗</div>
            <h3>By Roadways</h3>
            <p>
              Hire a taxi from Delhi International Airport. Enjoy a scenic 5-6
              hour journey through the beautiful Indian countryside.
            </p>
          </div>
          <div className={styles.reachCard}>
            <div className={styles.reachIcon}>🚂</div>
            <h3>By Railways</h3>
            <p>
              Take a train to Haridwar Railway Station, just 25 km from
              Rishikesh. From there, hire a taxi or Tuk-Tuk to reach us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
