import React from 'react';
import styles from '../../assets/styles/OurCourses/OurCourses.module.css';
import { useNavigate } from 'react-router-dom';

const OurCourses = () => {
  const navigate = useNavigate();
const courses = [
  {
    id: 1,
    title: "100 Hour Teachers Training Course",
    description:
      "Be a part of USA Yoga Alliance registered 100 Hour Yoga Teacher Training with Hatha Yogashram, Rishikesh, India. This foundational course is ideal for beginners who want to explore yogic philosophy, asana practice, pranayama, and meditation while building a strong base for a yogic lifestyle.",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80", // beginner yoga
    link: "/course/100-hour-yttc",
  },
  {
    id: 2,
    title: "200 Hour Teachers Training Course",
    description:
      "The 200 Hour Yoga Teacher Training Course is a complete and immersive program registered with USA Yoga Alliance (RYT 200). This course is designed to deepen your understanding of yoga through asana alignment, pranayama, meditation, anatomy, philosophy, and teaching methodology",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80", // yoga class teaching
    link: "/course/200-hour-yttc",
  },
  {
    id: 3,
    title: "300 Hour Teachers Training Course",
    description:
      "The 300 Hour Yoga Teacher Training Course is an advanced-level program for students who have completed 200 hours of training. It focuses on refined teaching skills, advanced asana practices, in-depth yoga philosophy, therapeutic applications, and self-transformation on a deeper spiritual level.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80", // advanced yoga pose
    link: "/course/300-hour-yttc",
  },
  {
    id: 4,
    title: "500 Hour Teachers Training Course",
    description:
      "The 500 Hour Yoga Teacher Training Course is a master-level program registered with USA Yoga Alliance (RYT 500). This intensive course combines both 200 and 300 hour teachings, offering complete mastery in traditional yoga practices, advanced philosophy, anatomy, and professional teaching excellence.",
    image:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&q=80", // meditation + mastery
    link: "/course/500-hour-yttc",
  },
];


  return (
    <section className={styles.coursesSection}>
      <div className={styles.coursesContainer}>
        <h1 className={styles.coursesTitle}>Our Courses</h1>
        
        <p className={styles.coursesIntro}>
          The homeland of Yoga, Rishikesh from the ancient era attracts yogis to conduct yoga activities in the lap of nature. The pious land of Rishikesh with the spiritual existence of the Holy River Ganga and the natural environment created by the majestic Himalayan Range is the place where you can learn and feel yoga from the bottom of your heart.
        </p>
        
        <p className={styles.coursesSubtitle}>
          So are you ready to embark your Yogic Journey in Rishikesh with Hathayogashram?
        </p>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseImageWrapper}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className={styles.courseImage}
                />
                <div className={styles.courseOverlay}>
                  <h2 className={styles.courseTitle}>{course.title}</h2>
                </div>
              </div>
              <div className={styles.courseContent}>
                <p className={styles.courseDescription}>{course.description}</p>
                <button
  className={styles.courseBtn}
  onClick={() => navigate(course.link)}
>
  Learn More
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
