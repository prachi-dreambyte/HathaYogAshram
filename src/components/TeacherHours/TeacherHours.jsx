import React from 'react';
import styles from '../../assets/styles/TeacherHours/TeacherHours.module.css';

const TeacherHours = () => {
  const teachers = [
    {
      name: 'Yogacharya Ramesh',
      title: 'Lead Instructor | E-RYT 500',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      bio: '15+ years teaching experience, trained in Himalayan tradition, specializes in Hatha and Ashtanga yoga.'
    },
    {
      name: 'Dr. Anjali Sharma',
      title: 'Philosophy & Anatomy Expert',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=400&fit=crop',
      bio: 'PhD in Yoga Philosophy, certified yoga therapist, author of three books on yogic sciences.'
    },
    {
      name: 'Swami Devananda',
      title: 'Meditation & Pranayama Master',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      bio: '30+ years in meditation practice, trained in traditional Himalayan meditation techniques.'
    }
  ];
  return (
    <div className={styles.teachersSection}>
      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        {/* Floating Circles */}
        <div className={`${styles.floatingCircle} ${styles.circle1}`} />
        <div className={`${styles.floatingCircle} ${styles.circle2}`} />
        <div className={`${styles.floatingCircle} ${styles.circle3}`} />
        
        {/* Lotus Patterns */}
        <div className={`${styles.lotusPattern} ${styles.lotus1}`} />
        <div className={`${styles.lotusPattern} ${styles.lotus2}`} />
        
        {/* Wave Lines */}
        <div className={`${styles.waveLine} ${styles.wave1}`} />
        <div className={`${styles.waveLine} ${styles.wave2}`} />
      </div>

      {/* Container */}
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Our Experts</div>
          <h2 className={styles.sectionTitle}>Meet Our Teachers</h2>
          <p className={styles.sectionSubtitle}>
            Learn from certified masters with decades of experience
          </p>
        </div>

        {/* Teachers Grid */}
        <div className={styles.teachersGrid}>
          {teachers.map((teacher, index) => (
            <div key={index} className={styles.teacherCard}>
              {/* Corner Decorations */}
              <div className={`${styles.cornerDecoration} ${styles.cornerTopRight}`} />
              <div className={`${styles.cornerDecoration} ${styles.cornerBottomLeft}`} />

              {/* Image Container */}
              <div className={styles.teacherImageContainer}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className={styles.teacherImage}
                />
                
                {/* Image Overlay */}
                <div className={styles.imageOverlay} />
              </div>

              {/* Teacher Info */}
              <div className={styles.teacherInfo}>
                {/* Color Accent */}
                <div className={styles.colorAccent} />

                <h3 className={styles.teacherName}>{teacher.name}</h3>
                
                <div className={styles.teacherTitle}>{teacher.title}</div>
                
                <p className={styles.teacherBio}>{teacher.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show More Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.showMoreBtn}>
            <span className={styles.btnText}>Show More Teachers</span>
            <span className={styles.btnIcon}>→</span>
          </button>
        </div>
    </div>
  );
};

export default TeacherHours;