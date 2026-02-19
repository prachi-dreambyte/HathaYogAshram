// NotFound.jsx
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Error404/Error404.module.css';

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
        <button onClick={() => navigate(-1)} className={styles.btnSecondary}>
          ← Go Back
        </button>
      </div>
    </div>
  );
};
export default NotFound;
