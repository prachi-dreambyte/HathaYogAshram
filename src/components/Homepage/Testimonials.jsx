import React from 'react';
import styles from '../../assets/styles/Homepage/Testimonials.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';

import user1 from '../../assets/images/yogateacher1.jpg';
import user2 from '../../assets/images/yogateacher2.jpg';
import user3 from '../../assets/images/yogateacher3.jpg';
import user4 from '../../assets/images/yoogateacher4.webp';

const testimonials = [
  {
    name: 'Ananya Sharma',
    location: 'Delhi, India',
    image: user1,
    quote:
      'Hatha Yog transformed not just my body, but my mindset. Every session feels intentional and deeply calming.',
  },
  {
    name: 'Rohit Mehta',
    location: 'Mumbai, India',
    image: user2,
    quote:
      'The experience feels premium and personal. The teachers guide you gently yet powerfully through every practice.',
  },
  {
    name: 'Sophia Williams',
    location: 'London, UK',
    image: user3,
    quote:
      'This platform brings stillness into my everyday life. It’s elegant, thoughtful, and incredibly grounding.',
  },
  {
    name: 'Daniel Cooper',
    location: 'New York, USA',
    image: user4,
    quote:
      'Beautifully designed sessions that meet you exactly where you are. This has become my daily ritual.',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotateX: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const avatarPop = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { delay: 0.4, type: 'spring', stiffness: 200 },
  },
};

const textSlide = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.7 },
  },
};

const Testimonials = () => {
  return (
    <section className={styles.section}>
      {/* PULSING GLOW */}
      <motion.div
        className={styles.glow}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container text-center">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Loved by Our Community
        </motion.h2>

        <motion.p
          className={styles.subText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Thousands of people around the world trust Hatha Yog for mindful
          movement and inner balance.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          className={styles.swiper}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={styles.card}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                key={item.name}
              >
                {/* AVATAR POP */}
                <motion.div
                  className={styles.avatarWrapper}
                  variants={avatarPop}
                  initial="hidden"
                  animate="visible"
                >
                  <img src={item.image} alt={item.name} />
                </motion.div>

                {/* TEXT SLIDE */}
                <motion.p
                  className={styles.quote}
                  variants={textSlide}
                  initial="hidden"
                  animate="visible"
                >
                  {item.quote}
                </motion.p>

                <div className={styles.stars}>★★★★★</div>

                <h5 className={styles.name}>{item.name}</h5>
                <span className={styles.location}>{item.location}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
