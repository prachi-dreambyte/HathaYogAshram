import React from "react";
import styles from "../../assets/styles/Homepage/CourseCards.module.css";
import img1 from "../../assets/images/images.jpg";
import img2 from "../../assets/images/international.webp";
import img3 from "../../assets/images/course3.jpg";
import img4 from "../../assets/images/course4.jpg";
import img5 from "../../assets/images/images.jpg";
import img6 from "../../assets/images/international.webp";
import img7 from "../../assets/images/course3.jpg";
import img8 from "../../assets/images/Anatomy.webp";
import img9 from "../../assets/images/images.jpg";
import img10 from "../../assets/images/international.webp";
import img11 from "../../assets/images/course3.jpg";
import img12 from "../../assets/images/course4.jpg";
import img13 from "../../assets/images/images.jpg";
import img14 from "../../assets/images/international.webp";


const courses = [
  { id: 1,  name: "100 Hour TTC", price: '$99.00',  seats: 12, img: img1, link:'/YogaCourse100', FormLink:'#course-dates'},
  { id: 2,  name: "200 Hour TTC", price: '$199.00',  seats: 0, img: img2, link:'/YogaCourse200', FormLink:'course-dates1'},
  { id: 3,  name: "300 Hour TTC", price: '$399.00',  seats: 5,      img: img3, link:'/YogaCourse300', FormLink:'course-dates2'},
  { id: 4,  name: "500 Hour TTC", price: '$498.00',  seats: 0,      img:img4, link:'/YogaCourse500', FormLink:'course-dates3'},
  { id: 5,  name: "100 Hour Kundalini Yoga", price: "$109.99", seats: 20,        img:img5, link:'/kundalini-100', FormLink:''},
  { id: 6,  name: "200 Hour Kundalini Yoga", price: "$84.99",  seats: 8,       img: img6, link:'/kundalini-200', FormLink:''},
  { id: 7,  name: "300 Hour Kundalini Yoga ", price: "$99.99",  seats: 0,     img:img7, link:'/kundalini-300', FormLink:''},
  { id: 8,  name: "Yin Yoga ", price: "$89.99",  seats: 14,       img: img8, link:'/YinYoga', FormLink:''},
  { id: 9,  name: "Vedic Mantra ", price: "$64.99",  seats: 3, img:img9, link:'/Vedic-Mantra-Chanting', FormLink:''},
  { id: 10, name: "5 Days Yoga Retreat",  price: "$119.99", seats: 0,   img: img10, link:'/5-days-yoga-retreat', FormLink:''},
  { id: 11, name: "10 Days Yoga Retreat", price: "$104.99", seats: 7,    img: img11, link:'/10-days-yoga-retreat', FormLink:''},
  { id: 12, name: "20 Days Yoga Retreat", price: "$69.99",  seats: 18, img: img12 , link:'/20-days-yoga-retreat', FormLink:''},
  { id: 13, name: "Meditation", price: "$114.99", seats: 0,  img: img13 , link:'/Meditation', FormLink:''},
  { id: 14, name: "Pranayama",  price: "$84.99",  seats: 11,  img: img14 , link:'/Pranayama', FormLink:''},
  { id: 15, name: "Ayurveda",  price: "$100.99",  seats: 11,  img: img12 , link:'/Ayurveda', FormLink:''},
  { id: 16, name: "Online Courses",  price: "$99.99",  seats: 11,  img: img1 , link:'/Pranayama', FormLink:''},
];

export default function CourseCards() {
  return (
    <div className={styles.page}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerBadge}>✦ Course Catalog</div>
        <h1 className={styles.headerTitle}>
          Explore Our <span className={styles.accentSpan}>Top Courses</span>
        </h1>
        <p className={styles.headerSub}>14 expert-led programs to accelerate your career</p>
      </div>

      {/* ── Grid ── */}
      <div className={styles.gridWrapper}>
        <div className="row">
          {courses.map((course) => {
            const available = course.seats > 0;
            return (
              <div key={course.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className={styles.card}>

                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    <img src={course.img} alt={course.name} className={styles.cardImage} />
                    <span className={styles.categoryTag}>{course.category}</span>
                  </div>

                  {/* Body */}
                  <div className={styles.cardBody}>
                    <p className={styles.courseName}>{course.name}</p>

                    {/* Price + Seats */}
                    <div className={styles.metaRow}>
                      <span className={styles.price}>{course.price}</span>
                      <span className={`${styles.seatsBadge} ${available ? styles.seatsBadgeAvailable : styles.seatsBadgeFull}`}>
                        <span className={`${styles.dot} ${available ? styles.dotGreen : styles.dotRed}`} />
                        {available ? `${course.seats} Seats Left` : "Fully Booked"}
                      </span>
                    </div>

                    <div className={styles.divider} />

                    {/* Buttons */}
                    <div className={styles.btnGroup}>
                      <a href={course.link} className={styles.btnDetail}>Course Detail</a>
                      {available ? (
                        <a href={course.FormLink || course.link} className={styles.btnBook}>Book Now</a>
                      ) : (
                        <button className={styles.btnBook} disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                          Fully Booked
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}