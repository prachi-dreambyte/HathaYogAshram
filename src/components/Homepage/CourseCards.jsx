import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/Homepage/CourseCards.module.css";

const API_BASE = "http://localhost:8000/api";
const ASSET_BASE = "http://localhost:8000";

const toAssetUrl = (value) => {
  if (!value) return "";
  if (typeof value !== "string") return value;
  if (value.startsWith("http") || value.startsWith("data:")) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, "")}`;
};

export default function CourseCards() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses`, {
          params: { homeSection: "top-courses", withBatches: true },
        });
        setCourses(res.data?.data || []);
      } catch (error) {
        console.error("Failed to load courses", error);
      }
    };

    fetchCourses();
  }, []);

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
            const card = course.card || {};
            const nextBatch = course.nextBatch || {};
            const seats = Number.isFinite(nextBatch.availableSeats)
              ? nextBatch.availableSeats
              : Number(card.seats || 0);
            const available = seats > 0;
            const price = card.price || nextBatch.priceShared || "";
            const image = toAssetUrl(card.image || course.banner || "");
            const link = card.link || course.legacyPath || (course.slug ? `/course/${course.slug}` : "#");
            const formLink = card.formLink || link;

            return (
              <div key={course._id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className={styles.card}>
                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    {image && <img src={image} alt={card.title || course.title} className={styles.cardImage} />}
                    <span className={styles.categoryTag}>{course.category}</span>
                  </div>

                  {/* Body */}
                  <div className={styles.cardBody}>
                    <p className={styles.courseName}>{card.title || course.shortTitle || course.title}</p>

                    {/* Price + Seats */}
                    <div className={styles.metaRow}>
                      <span className={styles.price}>{price}</span>
                      <span className={`${styles.seatsBadge} ${available ? styles.seatsBadgeAvailable : styles.seatsBadgeFull}`}>
                        <span className={`${styles.dot} ${available ? styles.dotGreen : styles.dotRed}`} />
                        {available ? `${seats} Seats Left` : "Fully Booked"}
                      </span>
                    </div>

                    <div className={styles.divider} />

                    {/* Buttons */}
                    <div className={styles.btnGroup}>
                      <a href={link} className={styles.btnDetail}>Course Detail</a>
                      {available ? (
                        <a href={formLink} className={styles.btnBook}>Book Now</a>
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
