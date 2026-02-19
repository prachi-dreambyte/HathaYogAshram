// NotFound.jsx
import { Link, useNavigate } from "react-router-dom";
import styles from "../../assets/styles/Error404/Error404.module.css";

// Floating petals data
const PETALS = [
  { left: "10%",  size: 14, delay: 0,    duration: 8  },
  { left: "25%",  size: 20, delay: 1.5,  duration: 11 },
  { left: "45%",  size: 12, delay: 3,    duration: 9  },
  { left: "60%",  size: 18, delay: 0.8,  duration: 13 },
  { left: "78%",  size: 10, delay: 2.2,  duration: 7  },
  { left: "88%",  size: 16, delay: 4,    duration: 10 },
  { left: "5%",   size: 9,  delay: 5,    duration: 12 },
  { left: "55%",  size: 22, delay: 1,    duration: 14 },
];

    const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* Om symbol */}
        <div className={styles.iconWrap}>
          <span className={styles.omSymbol}>ॐ</span>
        </div>

        {/* 404 */}
        <p className={styles.errorCode}>404</p>

        {/* Title */}
        <h1 className={styles.mainTitle}>Path Not Found</h1>

        <div className={styles.divider} />

        <p className={styles.subText}>
          Even the most devoted seeker sometimes wanders off the path.
          <br />
          The page you seek has not yet manifested in this realm.
        </p>

        <p className={styles.mantra}>
          "Yogaḥ karmasu kauśalam" — Excellence in action is Yoga
        </p>

        {/* Buttons */}
        <div className={styles.btnGroup}>
          <Link to="/" className={styles.btnPrimary}>
            🪷 Return to Ashram
          </Link>
          <button
            onClick={() => navigate(-1)}
            className={styles.btnSecondary}
          >
            ← Go Back
          </button>
        </div>
      </div>
  );
}
export default NotFound;