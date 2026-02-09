import React from 'react';
import styles from '../../assets/styles/Homepage/newsection.module.css';
import teacher1 from '../../assets/images/ourteachers/teacher-dheeru.webp';
import teacher2 from '../../assets/images/ourteachers/teacher-Prahlad.webp';
import teacher3 from '../../assets/images/ourteachers/teacher-amit.webp';
import teacher4 from '../../assets/images/ourteachers/teacher-ella.webp';
import teacher5 from '../../assets/images/ourteachers/teacher-jitender.webp';
import teacher6 from '../../assets/images/ourteachers/teacher-mandeep.webp';
import teacher7 from '../../assets/images/ourteachers/teacher-hemlata.webp';
import teacher8 from '../../assets/images/ourteachers/teacher-sadhushri.webp';



const YogaTeachersSection = () => {
  const teachers = [
  {
    name: "Dhirendra Ji",
    specialty: "Hatha Yog",
    image: teacher1,
    description: "Himalayan-born spiritual guide rooted in Ganga-side yogic traditions.",
    experience: "12+ years experience"
  },
  {
    name: "Prahlad Ji",
    specialty: "Hatha Yog",
    image: teacher2,
    description: "Energetic Hatha Yog teacher blending academics with deep practice.",
    experience: "5+ years experience"
  },
  {
    name: "Amit Ji",
    specialty: "Hatha Yog",
    image: teacher3,
    description: "Warm and disciplined teacher dedicated to authentic yogic teachings.",
    experience: "10 years experience"
  },
  {
    name: "Ella Ji",
    specialty: "Ashtanga",
    image: teacher4,
    description: "Ashtanga teacher whose yoga journey transformed life and purpose.",
    experience: "10+ years experience"
  },
  {
    name: "Jitender Ji",
    specialty: "Hatha Yog",
    image: teacher5,
    description: "Traditional Hatha Yog teacher carrying classical yogic wisdom.",
    experience: "9 years experience"
  },
  {
    name: "Mandeep Ji",
    specialty: "Mantra Chanting",
    image: teacher6,
    description: "Experienced mantra teacher deeply rooted in Ganga-side yogic discipline.",
    experience: "18 years experience"
  },
  {
    name: "Dr. Hemlata Ji",
    specialty: "Kundalini",
    image: teacher7,
    description: "Expert in Kundalini, anatomy, and therapeutic yogic sciences.",
    experience: "20+ years experience"
  },
  {
    name: "Sadhushri Ji",
    specialty: "Meditation",
    image: teacher8,
    description: "Indian philosophy teacher blending ancient wisdom with daily life.",
    experience: "10+ years experience"
  }
];


  return (
    <section className={styles.yogaTeachersSection}>
      
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Meet Our Teachers</h1>
          <p className={styles.sectionSubtitle}>
            Experienced and certified yoga instructors dedicated to guiding you on your wellness journey
          </p>
        </div>

        <div className={styles.teachersGrid}>
          {teachers.map((teacher, index) => (
            <div key={index} className={styles.teacherItem}>
              <div className={styles.teacherImageWrapper}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className={styles.teacherImage}
                />
              </div>
              <div className={styles.teacherOverlay}>
                <h3 className={styles.teacherName}>{teacher.name}</h3>
                <p className={styles.teacherSpecialty}>{teacher.specialty}</p>
                <p className={styles.teacherDescription}>{teacher.description}</p>
                <p className={styles.teacherExperience}>{teacher.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaTeachersSection;