import React from 'react';
import styles from '../../assets/styles/OurCourses/OurCourses.module.css';

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "100 Hour Teachers Training Course",
      description: "Be a Part of USA Yoga Alliance Registered as a 100 Hour Yoga Teacher Training with Hatha Yogashram, Rishikesh India, and become a professional International Yoga Teacher.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80"
    },
    {
      id: 2,
      title: "300 Hour Teachers Training Course",
      description: "On the path of Yoga, knowledge is very vast and deep. To achieve it we have to be ready to learn continuously. We 'Hatha Yogashram' are ready to offer you an Advanced Level Yoga program i.e 300 Hour Yoga Teacher Training in Rishikesh.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
    },
    {
      id: 3,
      title: "500 Hour Teachers Training Course",
      description: "Be a Part of USA Yoga Alliance Registered as (RYT500) 500 Hour Yoga Teacher Training with Hatha Yogashram, Rishikesh India, and become a professional by an International Yoga Teacher.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    }
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
                <button className={styles.courseBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;