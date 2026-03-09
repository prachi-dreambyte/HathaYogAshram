import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../assets/styles/YogaCourse/Form100.module.css';

const API_BASE = "http://localhost:8000/api";

const DEFAULT_INCLUDED = [
  '12 Days & 11 Nights Accommodation',
  'Yoga material',
  'Daily nutritious vegetarian, vegan meals',
  'Kirtan Night',
  'Full Body Massage',
  'Weekend excursions'
];

const DEFAULT_NOT_INCLUDED = [
  'Ayurvedic Panchakarma & Treatment',
  'Air-conditioner (On Additional Charges)',
  'Visa fee/Air fare/Taxi pick-up from Delhi, Haridwar'
];

const toOrdinal = (num) => {
  const n = Number(num);
  if (!n) return '';
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  const mod10 = n % 10;
  if (mod10 === 1) return `${n}st`;
  if (mod10 === 2) return `${n}nd`;
  if (mod10 === 3) return `${n}rd`;
  return `${n}th`;
};

const formatDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return '';
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return '';
  const startLabel = `${toOrdinal(start.getDate())} ${start.toLocaleString('en-US', { month: 'short' })} ${start.getFullYear()}`;
  const endLabel = `${toOrdinal(end.getDate())} ${end.toLocaleString('en-US', { month: 'short' })} ${end.getFullYear()}`;
  return `${startLabel} To ${endLabel}`;
};

const groupByYear = (items) => {
  const groups = {};
  items.forEach((item) => {
    const year = new Date(item.startDate).getFullYear();
    if (!groups[year]) groups[year] = [];
    groups[year].push(item);
  });
  return groups;
};

const getStatusClass = (statusType) => {
  switch (statusType) {
    case 'success':
      return styles.statusSuccess;
    case 'warning':
      return styles.statusWarning;
    case 'primary':
      return styles.statusPrimary;
    default:
      return '';
  }
};

const Form100 = ({
  courseId,
  courseTitle,
  batches: initialBatches,
  included,
  notIncluded,
  toBringImage,
  includedTitle,
  notIncludedTitle,
  toBringTitle,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [includedTab, setIncludedTab] = useState('included');
  const [batches, setBatches] = useState(initialBatches || []);

  useEffect(() => {
    setBatches(initialBatches || []);
  }, [initialBatches]);

  useEffect(() => {
    if (!courseId || (initialBatches && initialBatches.length)) return;
    const fetchBatches = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses/${courseId}/batches`);
        setBatches(res.data?.data || []);
      } catch (err) {
        console.error('Failed to load batches', err);
      }
    };
    fetchBatches();
  }, [courseId, initialBatches]);

  const grouped = useMemo(() => groupByYear(batches), [batches]);
  const years = useMemo(() => Object.keys(grouped).sort(), [grouped]);

  useEffect(() => {
    if (!years.length) return;
    if (activeTab && years.includes(activeTab)) return;
    const currentYear = String(new Date().getFullYear());
    setActiveTab(years.includes(currentYear) ? currentYear : years[0]);
  }, [years, activeTab]);

  const rows = grouped[activeTab] || [];

  const includedItems = included && included.length ? included : DEFAULT_INCLUDED;
  const notIncludedItems = notIncluded && notIncluded.length ? notIncluded : DEFAULT_NOT_INCLUDED;
  const includedHeading = includedTitle || 'What does the course fees include?';
  const notIncludedHeading = notIncludedTitle || 'What is not included in the course fees?';
  const toBringHeading = toBringTitle || 'What to bring with you?';

  const handleBook = (batchId) => {
    if (!courseId || !batchId) return;
    navigate(`/BookingForm?course=${courseId}&batch=${batchId}`);
  };

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            Upcoming Dates For {courseTitle || 'Yoga Teacher Training'}
          </h1>
          <div className={styles.headerDivider}>
            <span className={styles.dividerLine}></span>
            <span>🕉️</span>
            <span className={styles.dividerLine}></span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabContainer}>
          {years.map((year) => (
            <button
              key={year}
              className={`${styles.tabButton} ${activeTab === year ? styles.tabButtonActive : styles.tabButtonInactive}`}
              onClick={() => setActiveTab(year)}
            >
              Dates Of {year}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className={styles.tableWrapper} id="course-dates">
          {/* Table Header */}
          <div className={`row ${styles.tableHeader}`}>
            <div className="col-md-3 text-center">
              <h5 className={styles.tableHeaderTitle}>Course Date</h5>
              <span className={styles.tableBadge}>Availability</span>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 text-center">
                  <h5 className={styles.priceHeader}>Course Price</h5>
                </div>
                <div className="col-6 text-center">
                  <span className={styles.tableBadge}>2 Sharing Room</span>
                </div>
                <div className="col-6 text-center">
                  <span className={styles.tableBadge}>Private Room</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <h5 className={styles.tableHeaderTitle}>Book Now</h5>
              <span className={styles.tableBadge}>Limited Offer</span>
            </div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {rows.length === 0 && (
              <div className={`row ${styles.tableRow}`}>
                <div className="col-12 text-center">
                  <p className="mb-0">No batches available.</p>
                </div>
              </div>
            )}

            {rows.map((batch, index) => (
              <div
                key={batch._id || index}
                className={`row ${styles.tableRow} ${index < rows.length - 1 ? styles.tableRowBorder : ''}`}
              >
                <div className="col-md-3 text-center">
                  <div className={styles.courseDate}>{formatDateRange(batch.startDate, batch.endDate)}</div>
                  <span className={`${styles.statusBadge} ${getStatusClass(batch.statusType)}`}>
                    {batch.statusLabel}
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <div className={styles.priceContainer}>
                        <span className={styles.currentPrice}>{batch.priceShared || '-'}</span>
                        <span className={styles.oldPrice}>{batch.priceSharedOld || ''}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className={styles.priceContainer}>
                        <span className={styles.currentPrice}>{batch.pricePrivate || '-'}</span>
                        <span className={styles.oldPrice}>{batch.pricePrivateOld || ''}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <button
                    className={styles.bookButton}
                    onClick={() => handleBook(batch._id)}
                    disabled={batch.availableSeats <= 0}
                  >
                    {batch.availableSeats <= 0 ? 'Fully Booked' : 'Book Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included Section */}
        <div className={styles.includedSection}>
          <div className="row">
            <div className="col-12">
              <div className={styles.includedCard}>
                {/* Tabs */}
                <div className={`row ${styles.includedTabs}`}>
                  <div className="col-md-4">
                    <button
                      className={`${styles.includedTabButton} ${includedTab === 'included' ? styles.includedTabActive : styles.includedTabInactive}`}
                      onClick={() => setIncludedTab('included')}
                    >
                      ✓ What Is Included?
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      className={`${styles.includedTabButton} ${includedTab === 'notIncluded' ? styles.includedTabActive : styles.includedTabInactive}`}
                      onClick={() => setIncludedTab('notIncluded')}
                    >
                      ⊗ What Is Not Included?
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      className={`${styles.includedTabButton} ${includedTab === 'toBring' ? styles.includedTabActive : styles.includedTabInactive}`}
                      onClick={() => setIncludedTab('toBring')}
                    >
                      ☰ What To Bring With You?
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.includedContent}>
                  {includedTab === 'included' && (
                    <>
                      <h3 className={styles.includedTitle}>
                        {includedHeading}
                      </h3>
                      <div className="row">
                        {includedItems.map((item, index) => (
                          <div key={index} className={`col-md-6 ${styles.includedItem}`}>
                            <div className={styles.includedItemContent}>
                              <span className={styles.includedIcon}>🕉️</span>
                              <span className={styles.includedText}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {includedTab === 'notIncluded' && (
                    <>
                      <h3 className={styles.includedTitle}>
                        {notIncludedHeading}
                      </h3>
                      <div className="row">
                        {notIncludedItems.map((item, index) => (
                          <div key={index} className={`col-md-6 ${styles.includedItem}`}>
                            <div className={styles.includedItemContent}>
                              <span className={styles.includedIcon}>🕉️</span>
                              <span className={styles.includedText}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {includedTab === 'toBring' && (
                    <>
                      <h3 className={styles.includedTitle}>
                        {toBringHeading}
                      </h3>
                      <div className="row">
                        <div className="col-12">
                          {toBringImage ? (
                            <img
                              src={toBringImage}
                              alt="What to bring for Yoga Teacher Training"
                              style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                            />
                          ) : (
                            <p className="mb-0">Please contact us for the packing checklist.</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form100;
