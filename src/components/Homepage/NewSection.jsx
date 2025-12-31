import styles from '../../assets/styles/Homepage/newsection.module.css';
import React from 'react';

const YogaTeachersSection = () => {
  const teachers = [
    {
      name: "Sarah Johnson",
      specialty: "Hatha Yoga",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
      description: "Passionate about helping students find balance through traditional Hatha practices.",
      experience: "12 years experience"
    },
    {
      name: "Maya Patel",
      specialty: "Vinyasa Flow",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80",
      description: "Dynamic flow sequences that connect breath with movement for transformative practice.",
      experience: "8 years experience"
    },
    {
      name: "David Chen",
      specialty: "Yin Yoga",
      image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=400&q=80",
      description: "Specializing in deep stretching and meditation for inner peace and flexibility.",
      experience: "10 years experience"
    },
    {
      name: "Emma Williams",
      specialty: "Ashtanga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
      description: "Dedicated to the disciplined practice of Ashtanga, building strength and focus.",
      experience: "15 years experience"
    },
    {
      name: "Michael Brown",
      specialty: "Power Yoga",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      description: "High-energy classes that build strength, stamina, and confidence.",
      experience: "9 years experience"
    },
    {
      name: "Priya Sharma",
      specialty: "Restorative",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      description: "Gentle healing practices focused on deep relaxation and stress relief.",
      experience: "11 years experience"
    },
    {
      name: "James Taylor",
      specialty: "Kundalini",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&q=80",
      description: "Awakening spiritual energy through breathwork, meditation, and dynamic movement.",
      experience: "13 years experience"
    },
    {
      name: "Lisa Anderson",
      specialty: "Prenatal Yoga",
      image: "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=400&q=80",
      description: "Supporting mothers-to-be with safe, nurturing practices for pregnancy wellness.",
      experience: "7 years experience"
    }
  ];

  return (
    <section className={styles.yogaTeachersSection}>
      <div className={styles.parallaxBg}></div>
      
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