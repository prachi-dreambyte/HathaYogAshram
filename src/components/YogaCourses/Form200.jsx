import React, { useState } from 'react';
import styles from '../../assets/styles/YogaCourse/Form200.module.css';

const Form200 = () => {
  const [activeTab, setActiveTab] = useState('2026');
  const [includedTab, setIncludedTab] = useState('included');

  const courses2026 = [
    { 
      date: '1st To 24th Jan 2026', 
      status: 'Fully Booked', 
      statusClass: 'fullyBooked',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Feb 2026', 
      status: 'Fully Booked', 
      statusClass: 'fullyBooked',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Mar 2026', 
      status: '1 Seat Left', 
      statusClass: 'seatLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Apr 2026', 
      status: '1 Seat Left', 
      statusClass: 'seatLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th May 2026', 
      status: '2 Seats Left', 
      statusClass: 'seatsLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Jun 2026', 
      status: '1 Seat Left', 
      statusClass: 'seatLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Jul 2026', 
      status: '2 Seats Left', 
      statusClass: 'seatsLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Aug 2026', 
      status: '5 Seats Left', 
      statusClass: 'seatsLeftPurple',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Sep 2026', 
      status: '3 Seats Left', 
      statusClass: 'seatsLeftPurple',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Oct 2026', 
      status: '2 Seats Left', 
      statusClass: 'seatsLeft',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Nov 2026', 
      status: '4 Seats Left', 
      statusClass: 'seatsLeftPurple',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
    { 
      date: '1st To 24th Dec 2026', 
      status: '7 Seats Left', 
      statusClass: 'seatsLeftPurple',
      sharing4: { price: '$649', old: '$866', note: '(Females Only)' },
      sharing3: { price: '$799', old: '$1065', note: '(Females Only)' },
      sharing2: { price: '$999', old: '$1332' },
      private: { price: '$1199', old: '$1599' }
    },
  ];

  const included = [
    '25 Days & 24 Nights Accommodation',
    'Yoga material',
    'Kirtan Night',
    'Daily nutritious vegetarian, vegan meals',
    'Kirtan night',
    'Full body massage',
    'Weekend excursions'
  ];

  const notIncluded = [
    'Ayurvedic Panchakarma & Treatment',
    'Air-conditioner (On Additional Charges)',
    'Visa fee/Air fare/Taxi pick-up from Delhi, Haridwar'
  ];

  const getStatusClass = (statusClass) => {
    switch(statusClass) {
      case 'fullyBooked': return styles.fullyBooked;
      case 'seatLeft': return styles.seatLeft;
      case 'seatsLeft': return styles.seatsLeft;
      case 'seatsLeftPurple': return styles.seatsLeftPurple;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            Upcoming Dates For This Course
          </h1>
          <div className={styles.headerDivider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerIcon}>🕉️</span>
            <span className={styles.dividerLine}></span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === '2026' ? styles.tabButtonActive : styles.tabButtonInactive}`}
            onClick={() => setActiveTab('2026')}
          >
            Dates Of 2026
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === '2027' ? styles.tabButtonActive : styles.tabButtonInactive}`}
            onClick={() => setActiveTab('2027')}
          >
            Dates Of 2027
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === '2028' ? styles.tabButtonActive : styles.tabButtonInactive}`}
            onClick={() => setActiveTab('2028')}
          >
            Dates Of 2028
          </button>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper} id="course-dates1">
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>
              <h5 className={styles.headerTitle}>Course Date</h5>
              <span className={styles.headerBadge}>Availability</span>
            </div>
            <div className={styles.headerPriceSection}>
              <h5 className={styles.headerPriceTitle}>Course Price</h5>
              <div className={styles.headerPriceColumns}>
                <span className={styles.headerBadge}>4 Sharing Room</span>
                <span className={styles.headerBadge}>3 Sharing Room</span>
                <span className={styles.headerBadge}>2 Sharing Room</span>
                <span className={styles.headerBadge}>Private Room</span>
              </div>
            </div>
            <div className={styles.headerCell}>
              <h5 className={styles.headerTitle}>Book Now</h5>
              <span className={styles.headerBadge}>Limited Offer</span>
            </div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {courses2026.map((course, index) => (
              <div 
                key={index} 
                className={`${styles.tableRow} ${index < courses2026.length - 1 ? styles.tableRowBorder : ''}`}
              >
                <div className={styles.dateCell}>
                  <div className={styles.courseDate}>{course.date}</div>
                  <span className={`${styles.statusBadge} ${getStatusClass(course.statusClass)}`}>
                    {course.status}
                  </span>
                </div>
                <div className={styles.priceSection}>
                  <div className={styles.priceCell}>
                    <div className={styles.priceAmount}>
                      <span className={styles.currentPrice}>{course.sharing4.price}</span>
                      <span className={styles.oldPrice}>{course.sharing4.old}</span>
                    </div>
                    {course.sharing4.note && (
                      <div className={styles.priceNote}>{course.sharing4.note}</div>
                    )}
                  </div>
                  <div className={styles.priceCell}>
                    <div className={styles.priceAmount}>
                      <span className={styles.currentPrice}>{course.sharing3.price}</span>
                      <span className={styles.oldPrice}>{course.sharing3.old}</span>
                    </div>
                    {course.sharing3.note && (
                      <div className={styles.priceNote}>{course.sharing3.note}</div>
                    )}
                  </div>
                  <div className={styles.priceCell}>
                    <div className={styles.priceAmount}>
                      <span className={styles.currentPrice}>{course.sharing2.price}</span>
                      <span className={styles.oldPrice}>{course.sharing2.old}</span>
                    </div>
                  </div>
                  <div className={styles.priceCell}>
                    <div className={styles.priceAmount}>
                      <span className={styles.currentPrice}>{course.private.price}</span>
                      <span className={styles.oldPrice}>{course.private.old}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.bookCell}>
                  <button className={styles.bookButton}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included Section */}
        <div className={styles.includedSection}>
          <div className={styles.includedCard}>
            {/* Tabs */}
            <div className={styles.includedTabs}>
              <button 
                className={`${styles.includedTabButton} ${includedTab === 'included' ? styles.includedTabActive : styles.includedTabInactive}`}
                onClick={() => setIncludedTab('included')}
              >
                <span className={styles.tabIcon}>✓</span> What Is Included?
              </button>
              <button 
                className={`${styles.includedTabButton} ${includedTab === 'notIncluded' ? styles.includedTabActive : styles.includedTabInactive}`}
                onClick={() => setIncludedTab('notIncluded')}
              >
                <span className={styles.tabIcon}>⊗</span> What Is Not Included?
              </button>
              <button 
                className={`${styles.includedTabButton} ${includedTab === 'toBring' ? styles.includedTabActive : styles.includedTabInactive}`}
                onClick={() => setIncludedTab('toBring')}
              >
                <span className={styles.tabIcon}>☰</span> What To Bring With You?
              </button>
            </div>

            {/* Content */}
            <div className={styles.includedContent}>
              {includedTab === 'included' && (
                <>
                  <h3 className={styles.includedTitle}>
                    What does the course fees include?
                  </h3>
                  <div className={styles.includedGrid}>
                    {included.map((item, index) => (
                      <div key={index} className={styles.includedItem}>
                        <span className={styles.includedIcon}>🕉️</span>
                        <span className={styles.includedText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {includedTab === 'notIncluded' && (
                <>
                  <h3 className={styles.includedTitle}>
                    What is not included in the course fees?
                  </h3>
                  <div className={styles.includedGrid}>
                    {notIncluded.map((item, index) => (
                      <div key={index} className={styles.includedItem}>
                        <span className={styles.includedIcon}>🕉️</span>
                        <span className={styles.includedText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {includedTab === 'toBring' && (
                <>
                  <h3 className={styles.includedTitle}>
                    What to bring with you?
                  </h3>
                  <div className={styles.imageContainer}>
                    <img 
                      src="/mnt/user-data/uploads/1771226018830_image.png" 
                      alt="What to bring for Yoga Teacher Training" 
                      className={styles.toBringImage}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form200;