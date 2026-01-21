// import React, { useEffect, useState } from 'react';
// import styles from '../../assets/styles/AboutUs/banner.module.css';

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState('next');

//   const images = [
//     {
//       url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
//       title: 'Mountain Landscape',
//       description: 'Breathtaking mountain views',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop',
//       title: 'Desert Sunset',
//       description: 'Golden hour in the desert',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop',
//       title: 'Ocean Waves',
//       description: 'Peaceful ocean scenery',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
//       title: 'Forest Path',
//       description: 'Nature trail adventure',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection('next');
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setDirection('prev');
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setDirection(index > currentIndex ? 'next' : 'prev');
//     setCurrentIndex(index);
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <div className={styles.sliderWrapper}>
//         {images.map((image, index) => {
//           const isActive = index === currentIndex;

//           return (
//             <div
//               key={index}
//               className={`${styles.slide}
//                 ${isActive ? styles.activeSlide : ''}
//                 ${isActive && direction === 'next' ? styles.nextSlide : ''}
//                 ${isActive && direction === 'prev' ? styles.prevSlide : ''}
//               `}
//             >
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className={styles.slideImage}
//               />

//               <div
//                 className={`${styles.slideOverlay} ${
//                   isActive ? styles.activeOverlay : ''
//                 }`}
//               >
//                 <div className={styles.slideContent}>
//                   <h2 className={styles.slideTitle}>{image.title}</h2>
//                   <p className={styles.slideDescription}>
//                     {image.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Prev Button */}
//         <button
//           className={`${styles.sliderBtn} ${styles.prevBtn}`}
//           onClick={handlePrev}
//           aria-label="Previous slide"
//         >
//           ‹
//         </button>

//         {/* Next Button */}
//         <button
//           className={`${styles.sliderBtn} ${styles.nextBtn}`}
//           onClick={handleNext}
//           aria-label="Next slide"
//         >
//           ›
//         </button>

//         {/* Indicators */}
//         <div className={styles.sliderIndicators}>
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`${styles.indicator} ${
//                 index === currentIndex ? styles.activeIndicator : ''
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
