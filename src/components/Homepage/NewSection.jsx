import React from 'react';
import styles from '../../assets/styles/Homepage/newsection.module.css';
// import axios from "axios";
// import { useEffect, useState } from "react";
import teacher1 from '../../assets/images/ourteachers/teacher1.jpeg';
import teacher2 from '../../assets/images/ourteachers/teacher2.jpeg';
import teacher3 from '../../assets/images/ourteachers/teacher3.jpeg';
import teacher4 from '../../assets/images/ourteachers/teacher-ella.webp';
import teacher5 from '../../assets/images/ourteachers/teacher4.jpeg';
import teacher6 from '../../assets/images/ourteachers/teacher-mandeep.webp';
import teacher7 from '../../assets/images/ourteachers/teacher-hemlata.webp';
import teacher8 from '../../assets/images/ourteachers/teacher-sadhushri.webp';



const YogaTeachersSection = () => {
  const teachers = [
  {
    name: "Gagan Bhandari",
    specialty: "Hatha Yog",
    image: teacher1,
    description:'Gagan Bhandari is a Rishikesh-based yoga teacher with 12+ years experience, a Master’s in Yoga, and USA Yoga Alliance certification.',
    experience: "12+ years experience"
  },
  {
    name: "Dilwar",
    specialty: "Hatha Yog",
    image: teacher2,
    description: "Dilwar, born in Rishikesh, grew up in a spiritual environment surrounded by ashrams, where yoga naturally became part of his life.",
    experience:  "Teaching yoga professionally since 2018",
  },
  {
    name: "Yogi Sri Sachidananda",
    specialty: "Hatha Yog",
    image: teacher3,
    description:  "Yogi Sri Sachidananda, born in 1972, developed early spiritual interest and studied scriptures deeply to explore life’s deeper truths.",
    experience: "15+ years teaching spiritual seekers worldwide",
  },
  {
    name: "Ella Ji",
    specialty: "Ashtanga",
    image: teacher4,
    description: "Ashtanga teacher whose yoga journey transformed life and purpose.",
    experience: "10+ years experience"
  },
  {
    name: "Dipendra Tripathi  ",
    specialty: "Hatha Yog",
    image: teacher5,
    description: "Dipendra Tripathi, raised in Swami Rama’s ashram in Rishikesh, is a yoga teacher specializing in Kundalini, Yin Yoga, meditation, and yoga therapy.",
    experience: "Years of teaching in schools, private sessions, and yoga training programs"
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
// const [teachers, setTeachers] = useState([]);
// const [heading, setHeading] = useState({});
// useEffect(() => {
//   fetchTeachers();
//   fetchHeading();
// }, []);

// const fetchTeachers = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:8000/api/teacher-name"
//     );

//     setTeachers(res.data.data || []);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchHeading = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:8000/api/teacher-heading"
//     );

//     if (res.data.data.length > 0) {
//       setHeading(res.data.data[0]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

  return (
    <section className={styles.yogaTeachersSection}>
      
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Meet Our Teachers</h1>
          {/* <h1 className={styles.sectionTitle}>{heading.mainHeading}</h1> */}
          <p className={styles.sectionSubtitle}>
            Experienced and certified yoga instructors dedicated to guiding you on your wellness journey
          </p>
          {/* <p className={styles.sectionSubtitle}>{heading.subHeading}</p> */}
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
        {/* <div className={styles.teachersGrid}>
  {teachers.map((teacher, index) => (
    <div key={index} className={styles.teacherItem}>
      <div className={styles.teacherImageWrapper}>
        <img
          src={`http://localhost:8000/uploads/${teacher.img}`}
          alt={teacher.teacherName}
          className={styles.teacherImage}
        />
      </div>

      <div className={styles.teacherOverlay}>
        <h3 className={styles.teacherName}>
          {teacher.teacherName}
        </h3>

        <p className={styles.teacherSpecialty}>
          {teacher.specialty}
        </p>

        <p className={styles.teacherDescription}>
          {teacher.subPara}
        </p>

        <p className={styles.teacherExperience}>
          {teacher.experience}
        </p>
      </div>
    </div>
  ))}
</div> */}
      </div>
    </section>
  );
};

export default YogaTeachersSection;