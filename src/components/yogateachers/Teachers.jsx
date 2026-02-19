import React from 'react';
import styles from '../../assets/styles/yogateachers/Teachers.module.css';
import teacher1 from '../../assets/images/ourteachers/teacher1.jpeg';
import teacher2 from '../../assets/images/ourteachers/teacher2.jpeg';
import teacher3 from '../../assets/images/ourteachers/teacher3.jpeg';
import teacher4 from '../../assets/images/ourteachers/teacher4.jpeg';
import teacher5 from '../../assets/images/ourteachers/teacher-jitender.webp';
import teacher6 from '../../assets/images/ourteachers/teacher-Prahlad.webp';
import teacher7 from '../../assets/images/ourteachers/teacher-mandeep.webp';

const Teachers = () => {
  const teachers = [
    {
  name: 'Gagan Bhandari Ji',
  role: ['Hatha Yoga', 'Teaching Methodology'],
  image: teacher1,
  bio: [
    "Gagan Bhandari ji is a dedicated yoga teacher from Rishikesh, Uttarakhand, with over 12 years of teaching experience. He began practicing yoga at a young age and later completed his formal training at Rishikesh Gurus. He holds a Master’s Degree in Yoga (2021) and is a USA Yoga Alliance Certified Teacher.",
    "He specializes in Hatha, Shivananda, Ashtanga, Iyengar, and Power Yoga. His empathetic teaching style helps students connect deeply and achieve their physical and emotional wellness goals."
  ],
  education: [
    "Master’s Degree in Yoga – 2021",
    "Formal Training at Rishikesh Gurus",
    "USA Yoga Alliance Certified Teacher"
  ],
  experience: [
    "12+ years of yoga teaching experience",
    "Conducted online and offline classes",
    "Led workshops, retreats, and teacher training programs",
    "Taught Indian and international students"
  ],
  expertise: [
    "Hatha Yoga",
    "Ashtanga Yoga",
    "Shivananda Yoga",
    "Iyengar Yoga",
    "Power Yoga",
    "Pranayama & Breathwork",
    "Yoga Therapy",
    "Sanskrit Mantra Chanting",
    "Alignment & Teaching Methodology"
  ]
}
,
{
  name: 'Dilwar',
  role: ['Senior Yoga Teacher', 'Hatha Yoga', 'Ashtanga Vinyasa'],
  image: teacher2,
  bio: [
    "Dilwar was born and raised in Rishikesh, India, known as the birthplace of yoga. Growing up in a spiritual environment surrounded by ashrams and traditional teachers, yoga naturally became part of his daily life from an early age.",
    "He began teaching professionally in 2018 and has since worked with students from many countries, sharing traditional yoga practices in a simple, practical, and accessible way. His teaching emphasizes patience, awareness, and steady progress."
  ],
  education: [
    "Traditional Yoga Training in Rishikesh",
    "Deep study under traditional yoga teachers",
    "Continuous self-practice and advanced training"
  ],
  experience: [
    "Teaching yoga professionally since 2018",
    "Conducted retreats, workshops, and teacher trainings",
    "Worked with international students",
    "Experience teaching beginners to advanced practitioners"
  ],
  expertise: [
    "Classical Hatha Yoga",
    "Advanced Hatha Yoga",
    "Ashtanga Vinyasa Yoga",
    "Pranayama & Breath Awareness",
    "Meditation",
    "Shatkarma (Yogic Cleansing)",
    "Alignment & Mindful Movement"
  ]
}
,
{
  name: 'Yogi Sri Sachidananda',
  role: ['Kundalini Yoga Master', 'Spiritual Teacher', 'Meditation Guide'],
  image: teacher3,
  bio: [
    "Yogi Sri Sachidananda, born in 1972 into a spiritual family, developed a deep interest in spirituality from a young age. His inquisitive nature led him to study various spiritual scriptures and explore life’s deeper truths.",
    "With over 15 years of teaching experience, he shares a unique approach that blends traditional yogic wisdom with scientific understanding, guiding students worldwide toward inner transformation and self-awareness."
  ],
  education: [
    "Master’s Degree in Geography",
    "Master’s Degree in Naturopathy & Yogic Science",
    "Advanced Meditation Training – Brahma Kumaris (Raja Yoga)",
    "12 Years Spiritual Study – Sri Aurobindo Ashram",
    "20 Years Training – Bihar School of Yoga",
    "Yoga Alliance USA Certified Instructor – 2017"
  ],
  experience: [
    "15+ years teaching spiritual seekers worldwide",
    "Expert in Kundalini Yoga training and workshops",
    "Guided international retreats and meditation programs",
    "Long-term traditional training under renowned spiritual institutions"
  ],
  expertise: [
    "Kundalini Yoga",
    "Meditation & Consciousness Practices",
    "Pranayama & Energy Awakening",
    "Spiritual Philosophy",
    "Raja Yoga",
    "Mind-Body Healing",
    "Traditional Yogic Lifestyle Guidance"
  ]
},
    {
  name: 'Dipendra Tripathi',
  role: ['Yoga Teacher'],
  image: teacher4,
  bio: [
    'Raised in Swami Rama’s ashram in Rishikesh, Dipendra specializes in Kundalini Yoga, Yin Yoga, meditation, and yoga therapy.'
  ],
  education: [
    'M.A. in Yoga',
    'M.Sc. in Chemistry'
  ],
  experience: [
    'Years of teaching in schools, private sessions, and yoga training programs'
  ],
  expertise: [
    'Kundalini Yoga',
    'Yin Yoga',
    'Meditation',
    'Yoga Nidra',
    'Yoga Therapy',
    'Anatomy & Relaxation Techniques'
  ]
},
     {
      name: 'Jitender Ji',
      role: ['Hatha Yog', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
      image: teacher5,
      bio: ["A distinguished and time-honoured individual, Jitu ji embodies traditionalism. He completed his Bachelor's in Sanskrit from Parmarth Niketan Ashram here in Rishikesh itself and went on to pursue his Master's in Yoga from the prestigious Uttarakhand Sanskrit University. He has spent over 10 years of his life in various ashrams like Bhagirathi Dham Ashram and Anand Dham Ashram.","While he teaches Ashtanga Vinyasa at our school, his classical method of teaching brings students in, leaving them with a sense of gratitude and fulfilment."],
      education: [
        "Bachelor's Degree in Sanskrit",
        "Master's Degree in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)"
      ],
      experience: [
        "10+ years of teaching experience"
      ],
      expertise: [
        "Hatha Yog",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
     {
      name: 'Prahlad Ji',
      role: ['Hatha Yog', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
      image: teacher6,
      bio: ["Dynamic, passionate, and deeply rooted in traditional Hatha Yog, Prahlad Ji brings youthful energy and refined knowledge to every class he leads. With both a Bachelor’s and Master’s degree in Yoga, along with over five years of dedicated teaching and self-practice, he offers students a powerful blend of academic depth and personal experience.",
"Known for the vibrant atmosphere he creates, his classes encourage students to challenge themselves, explore their potential, and deepen their understanding of true yogic principles. His supportive teaching style makes yoga accessible to practitioners of all levels, earning him immense appreciation from students across the globe."],
      education: [
        "Bachelor's Degree in Sanskrit",
        "Master's Degree in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)"
      ],
      experience: [
        "10+ years of teaching experience"
      ],
      expertise: [
        "Hatha Yog",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
     {
      name: 'Mandeep Ji',
      role: ['', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
      image: teacher7,
      bio: ["Mandeep ji came to Rishikesh in 2002 and wrapped himself in the practise of Yoga by the banks of the holy river Ganga for years. Having completed his early education from the renowned Parmarth Niketan Ashram, he has been expounding his knowledge of Mantra Chanting, Yoga Philosophy and Meditation unto other seekers for more than 10 years now. Besides this, he is a learned astrologer and has been practising the same for more than 9 years.", "Not stopping there, Mandeep ji also possesses a deep interest in music and is also a sound healing expert. Indeed a maestro in his field, Mandeep ji, with a staggering 18 years of experience in Yoga practice, goes above and beyond to motivate his students to explore and realize their full potential!"],
      education: [
        "Bachelor's Degree in Sanskrit",
        "Master's Degree in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)"
      ],
      experience: [
        "10+ years of teaching experience"
      ],
      expertise: [
        "Hatha Yog",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
  ];

  const videos = [
  {
    id: 1,
    iframe:
      "https://www.youtube.com/embed/VIDEO_ID_1?controls=0&modestbranding=1",
  },
  {
    id: 2,
    iframe:
      "https://www.youtube.com/embed/VIDEO_ID_2?controls=0&modestbranding=1",
  },
  {
    id: 3,
    iframe:
      "https://www.youtube.com/embed/VIDEO_ID_3?controls=0&modestbranding=1",
  },
  {
    id: 4,
    iframe:
      "https://www.youtube.com/embed/VIDEO_ID_4?controls=0&modestbranding=1",
  },
];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            A Good Teacher Doesn't Teach From The Book. A Good Teacher Teaches From The Heart
          </p>
          <h1 className={styles.mainTitle}>
            Experienced Teachers at Hatha Yogashram, Rishikesh
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Our Teachers</span>
          </div>
        </div>
      </section>

      {/* Teaching Faculty Section */}
      <section className={styles.facultySection}>
        <div className={styles.facultyHeader}>
          <p className={styles.facultyTitle}>Teaching Faculty</p>
          <h2 className={styles.facultySubtitle}>
           Teaching Faculty – Hatha Yogashram, Rishikesh
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.facultyDescription}>
            Our teachers at Hatha Yogashram are dedicated practitioners of traditional yoga,
            sharing authentic knowledge through discipline, compassion, and lived experience.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className={styles.teachersGrid}>
          {teachers.map((teacher, index) => (
            <div key={index} className={styles.teacherCard}>
              {/* Left Side - Info */}
              <div className={styles.teacherInfo}>
                
                <h3 className={styles.teacherName}>{teacher.name}</h3>
                {/* Tags at top */}
                <div className={styles.teacherTags}>
                  {teacher.role.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.teacherBio}>
  {teacher.bio.map((para, i) => (
    <p key={i}>{para}</p>
  ))}
</div>


                {/* Education */}
                <div className={styles.infoSection}>
  <h4 className={styles.infoTitle}>Education & Certifications</h4>
  <ul className={styles.infoList}>
    {teacher.education.map((edu, i) => (
      <li key={i} className={styles.infoItem}>
        <span className={styles.infoIcon}></span>
        <span className={styles.infoText}>{edu}</span>
      </li>
    ))}
  </ul>
</div>

                {/* Experience */}
                <div className={styles.infoSection}>
                  <h4 className={styles.infoTitle}>Teaching Experience</h4>
                  <ul className={styles.infoList}>
                    {teacher.experience.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>

                {/* Expertise */}
                {teacher.expertise && (
                  <div className={styles.infoSection}>
                    <h4 className={styles.infoTitle}>Expertise & Specializations</h4>
                    <ul className={styles.infoList}>
                      {teacher.expertise.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Side - Image */}
              <div className={styles.teacherImageSection}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className={styles.teacherImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
       <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Experience the Best Yoga Teacher Training Course of Your Life.
        </h1>

        <p className={styles.subtitle}>
          Rishikesh Yogkulam Exists To Bring The Authentic Teachings Of Yoga Back
          to yoga; both on and off the mat.
        </p>

        <button className={styles.ctaBtn}>
          Join Our Course Now
        </button>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>Short & Sweet Videos</span>
        <h2>Yoga Moments In Motion</h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
            <iframe
              src={video.iframe}
              title="Yoga Short"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Teachers;