import React from 'react';
import styles from '../../assets/styles/yogateachers/Teachers.module.css';
import teacher1 from '../../assets/images/ourteachers/teacher-dheeru.webp';
import teacher2 from '../../assets/images/ourteachers/teacher-amit.webp';
import teacher3 from '../../assets/images/ourteachers/teacher-ella.webp';
import teacher4 from '../../assets/images/ourteachers/teacher-pankaj.webp';
import teacher5 from '../../assets/images/ourteachers/teacher-jitender.webp';
import teacher6 from '../../assets/images/ourteachers/teacher-Prahlad.webp';
import teacher7 from '../../assets/images/ourteachers/teacher-mandeep.webp';

const Teachers = () => {
  const teachers = [
    {
      name: 'Dhirendra Ji',
      role: ['Hatha Yoga', 'Teaching Methodology'],
      image: teacher1,
      bio: ["Born in the lap of the Holy Ganga, at the feet of the Bhootnath Shiva Temple, amidst the forests of the Himalayas, Dhirendra reveals himself as a nature lover and spiritual seeker. Having started his schooling at the tender age of 5, from one of the oldest, most iconic and traditional schools of Rishikesh, Dhirendra believes he was drawn to Yoga by a mystical force as he practiced asanas during the physical education lessons in school. He began to live the yogic way of life from that early age and embraced spirituality as his routines began with worshipping Lord Shiva and the Holy Ganga and continued with practising asanas, eating satvik food and attending music lessons.",
      "It was under the able guidance of his Guru Narender Gusain that he was able to leave all his vices and practice Yoga religiously. His dedication was such that there were times that he would practice till his body was sore, and it was around this time that he realized that the external appreciation and praise were pointless and the true meaning of Yoga was the alignment of the body, mind and soul, being able to appreciate himself from within.",
       "The next part of his training came under Guru Nalin Sharma, under whom he learned Yogic Philosophy and spiritual growth and finally under Guru Roshan Singh, Dhirendra underwent lessons on personal growth. When his three Gurus thought he was ready, Dhirendra started the Yoga school with one goal - helping other seekers on their yogic journey to explore their full potential."],
      education: [
        "Bachelor's Degree in Science",
        "Diploma in Mechanical Engineering",
        "Master's Degree in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)",
        "RPYT - Registered Prenatal Yoga Teacher",
        "Early education is spiritual foundation from Parmarth Niketan Ashram, Rishikesh"
      ],
      experience: [
        "12+ years of teaching experience across traditional and modern yogic disciplines",
        "5+ years of teaching in China, sharing classical Indian yoga with international communities",
        "3+ years in Thailand, guiding diverse groups of practitioners"
      ],
      expertise: [
        "Hatha Yoga",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Teaching Methodology",
        "Pranayama",
        "Restorative Yoga",
        "Prenatal Yoga"
      ]
    },
    {
      name: 'Amit Ji',
      role: ['Yoga Anatomy', 'Teaching Methodology'],
      image: teacher2,
      bio: ["Amit Payal, the founder of Rishikesh Rishikesh Yogkulam®, is an E-RYT 500-Hour Yoga instructor with a Master's degree in Yoga Science. He is a well-known, appreciated and celebrated Yoga master in Rishikesh, India. With several specialisations like Alignment, Adjustment, Hatha and Ashtanga Yoga, Yoga philosophy, Anatomy and Pranayama, Amit ensures that his pupils , whether teachers or students, push their limits, test their boundaries and achieve their goals.As warm as he is passionate about Yoga, he makes sure each and every person that comes through his school leaves there, confident about their capabilities and with a feeling of oneness and family.", "He has been conducting teacher training courses regularly for more than five years and has taught more than 100 YTTC's to seekers from across the globe. His experience, skill and warmth help all his students journey into their minds and bodies as he adeptly schools them in breath control and movement - the pillars of a Yoga practice. Amit believes it vital that his teachings convey the profound, authentic and ancient knowledge of Yoga and it's millennia-old traditions."],
      education: [
        "Bachelor's Degree in Mechanical Engineering",
        "Master's Degree in Yoga Science",
        "Diploma in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)",
        "RPYT - Registered Prenatal Yoga Teacher",
        "Traditional Ashtanga Vinyasa Training under Guru BKS Iyengar, the direct disciple of T. Krishnamacharya",
        "Certified in Functional Yoga Anatomy & Alignment techniques"
      ],
      experience: [
        "12+ years of teaching experience in Teacher Training Courses (TTCs)",
        "432+ Yoga Teacher Training Courses taught to international students"
      ],
      expertise: [
        "Hatha Yoga",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Functional Yoga Anatomy",
        "Teaching Methodology",
        "Pranayama",
        "Restorative Yoga",
        "Prenatal Yoga"
      ]
    },
    {
      name: 'Ella Ji',
      role: ['Yin Yoga', 'Meditation'],
      image: teacher3,
      bio: ["Ella is an ex marketing manager who has always been very curios about the human mind and the holistic approaches, which led her to study Neuro Linguistic Programming and Aromatherapy. Her journey into yoga begun in a period were she was experiencing a deep depression and she couldn't find a purpose to live. Moved by an inner call, she decided to go to India and enroll in a yoga course and that's when her life had a turn point.", "After short, she healed completely from depression, and inspired by the incredible change yoga brought into her life she decided to continue to deepen her studies by taking teacher training courses, retreats and workshop specializing herself in Yin Yoga, meditation techniques (especially Buddhist, Osho, yoga nidra), Pranayama, and Reiki. For her Yin Yoga practice she takes inspiration from Sarah Powers, with whom she did a course in London; and Paul Grilley. Her classes are focused to release the blockages from the body, both mental and physical. In her cueing, you can find many anatomical as psychological and spiritual aspects."," She always puts great emphasis on breathing techniques during the class and meditation, both before and after the practice. Since her passion for music and naturopathy, she also likes to add mantra chanting, sound healing and aromatherapy in her classes. Her favourite motto is 'Change is hardest at the beginning, messiest in the middle and best at the end."],
      education: [
        "E-RYT 500 (Experienced Registered Yoga Teacher)",
        "RPYT - Registered Prenatal Yoga Teacher",
        "Yin Yoga Certifications from Paul Grilley",
        "Yin Yoga Certification & Traditional Chinese Medicine (TCM) under Jo Phee",
        "Traditional Chinese Medicine & Acupuncture - University of Shanghai",
        "Reiki Healing Certification",
        "Pranic Healing Certification",
        "Aromatherapy Studies",
        "Neuro-Linguistic Programming (NLP) Studies",
        "Buddhist Philosophy Studies"
      ],
      experience: [
        "10+ years of teaching experience",
        "Worked with students from multiple countries across teacher trainings, workshops, & retreats",
        "Leads specialized classes in meditation, yin yoga, & energy healing"
      ],
      expertise: [
        "Yin Yoga",
        "Meditation (Buddhist, Osho, Yoga Nidra)",
        "Reiki Healing",
        "Aromatherapy",
        "Prenatal Yoga"
      ]
    },
    {
      name: 'Pankaj Ji',
      role: ['Hatha Yoga', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
      image: teacher4,
      bio: ["Pankaj Sharma was born and brought up in the foothills of Himalayas, Himachal Pradesh. After the completion of B.A in Sanskrit, he moved to Rishikesh and spent 8 years of his life in an ashram, learning yoga in the age-old Gurukul style leading a disciplined and yogic life. To Satiate his urge for knowledge Pankaj went on to pursue a Masters's degree in Yoga simultaneously teaching in various ashrams and Yoga schools.","Due to his early induction to ashram life, Pankaj at a very young age has carved a niche for himself in yoga with his teaching skills and knowledge in Vedas, Upanishads, and philosophy."],
      education: [
        "Bachelor's Degree in Sanskrit",
        "Master's Degree in Yoga",
        "E-RYT 500 (Experienced Registered Yoga Teacher)"
      ],
      experience: [
        "10+ years of teaching experience"
      ],
      expertise: [
        "Hatha Yoga",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
     {
      name: 'Jitender Ji',
      role: ['Hatha Yoga', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
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
        "Hatha Yoga",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
     {
      name: 'Prahlad Ji',
      role: ['Hatha Yoga', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
      image: teacher6,
      bio: ["Dynamic, passionate, and deeply rooted in traditional Hatha Yoga, Prahlad Ji brings youthful energy and refined knowledge to every class he leads. With both a Bachelor’s and Master’s degree in Yoga, along with over five years of dedicated teaching and self-practice, he offers students a powerful blend of academic depth and personal experience.",
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
        "Hatha Yoga",
        "Ashtanga Vinyasa",
        "Alignment & Adjustment",
        "Restorative Yoga"
      ]
    },
     {
      name: 'Mandeep Ji',
      role: ['Hatha Yoga', 'Ashtanga Vinyasa', 'Alignment & Adjustment'],
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
        "Hatha Yoga",
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
            Experienced Teachers at Hatha Yoga Ashram, Rishikesh
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
           Teaching Faculty – Hatha Yoga Ashram, Rishikesh
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.facultyDescription}>
            Our teachers at Hatha Yoga Ashram are dedicated practitioners of traditional yoga,
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