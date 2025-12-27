import React from 'react';
import styles from '../../assets/styles/Homepage/TeacherCarousel.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';

import teacher1 from '../../assets/images/yogateacher1.jpg';
import teacher2 from '../../assets/images/yogateacher2.jpg';
import teacher3 from '../../assets/images/yogateacher3.jpg';
import teacher4 from '../../assets/images/yoogateacher4.webp';

const teachers = [
  {
    name: 'Esther Ekhart',
    style: 'Hatha, Meditation, Yin',
    image: teacher1,
  },
  {
    name: 'Laia Bovè',
    style: 'Vinyasa Flow',
    image: teacher2,
  },
  {
    name: 'Gemma Vassallo',
    style: 'Yin, Vinyasa Flow',
    image: teacher3,
  },
  {
    name: 'David Lurey',
    style: 'Mixed Movement, Vinyasa Flow',
    image: teacher4,
  },
  {
    name: 'Laia Bovè',
    style: 'Vinyasa Flow',
    image: teacher2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const TeacherCarousel = () => {
  return (
    <section className={styles.teacherSection}>
      <div className="container position-relative">

        {/* HEADER ANIMATION */}
        <motion.div
          className="text-center mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>
            Practice with experienced teachers
          </h2>
          <p className={styles.subText}>
            Our experienced teachers meet you where you are, offering guidance
            that helps you move with confidence, clarity, and ease.
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            document.getElementById('prevTeacher').onclick = () =>
              swiper.slidePrev();
            document.getElementById('nextTeacher').onclick = () =>
              swiper.slideNext();
          }}
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={styles.cardWrapper}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className={styles.teacherCard}>
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className={styles.teacherImg}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <h5 className={styles.teacherName}>{teacher.name}</h5>
                  <p className={styles.teacherStyle}>{teacher.style}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM ARROWS */}
        <div className={styles.customNav}>
          <button
            id="prevTeacher"
            className={`${styles.navBtn} ${styles.prev}`}
          >
            ‹
          </button>
          <button
            id="nextTeacher"
            className={`${styles.navBtn} ${styles.next}`}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeacherCarousel;
