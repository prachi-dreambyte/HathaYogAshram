import React, { useState } from 'react';
import styles from '../../assets/styles/YogaCourse/Form100.module.css';

const Form100 = () => {
  const [activeTab, setActiveTab] = useState('2026');
  const [includedTab, setIncludedTab] = useState('included');

  const courses2026 = [
    { date: '1st To 12th Jan 2026', status: 'Fully Booked', statusClass: 'success', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Feb 2026', status: 'Fully Booked', statusClass: 'success', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Mar 2026', status: 'Fully Booked', statusClass: 'success', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Apr 2026', status: 'Fully Booked', statusClass: 'success', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th May 2026', status: 'Waiting List', statusClass: 'warning', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Jun 2026', status: '3 Seats Left', statusClass: 'primary', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Jul 2026', status: '6 Seat Left', statusClass: 'primary', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Aug 2026', status: '6 Seats Left', statusClass: 'primary', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Sep 2026', status: '5 Seats Left', statusClass: 'primary', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Oct 2026', status: 'Waiting List', statusClass: 'warning', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Nov 2026', status: 'Waiting List', statusClass: 'warning', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
    { date: '1st To 12th Dec 2026', status: '5 Seats Left', statusClass: 'primary', sharing: '$449', sharingOld: '$599', private: '$599', privateOld: '$799' },
  ];

  const included = [
    '12 Days & 11 Nights Accommodation',
    'Yoga material',
    'Daily nutritious vegetarian, vegan meals',
    'Kirtan Night',
    'Full Body Massage',
    'Weekend excursions'
  ];

  const notIncluded = [
    'Ayurvedic Panchakarma & Treatment',
    'Air-conditioner (On Additional Charges)',
    'Visa fee/Air fare/Taxi pick-up from Delhi, Haridwar'
  ];

  const getStatusClass = (statusClass) => {
    switch(statusClass) {
      case 'success': return styles.statusSuccess;
      case 'warning': return styles.statusWarning;
      case 'primary': return styles.statusPrimary;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            Upcoming Dates For 100 Hour Yoga Teacher Training In Rishikesh
          </h1>
          <div className={styles.headerDivider}>
            <span className={styles.dividerLine}></span>
            <span>🕉️</span>
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
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
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
            {courses2026.map((course, index) => (
              <div 
                key={index} 
                className={`row ${styles.tableRow} ${index < courses2026.length - 1 ? styles.tableRowBorder : ''}`}
              >
                <div className="col-md-3 text-center">
                  <div className={styles.courseDate}>{course.date}</div>
                  <span className={`${styles.statusBadge} ${getStatusClass(course.statusClass)}`}>
                    {course.status}
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <div className={styles.priceContainer}>
                        <span className={styles.currentPrice}>{course.sharing}</span>
                        <span className={styles.oldPrice}>{course.sharingOld}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className={styles.priceContainer}>
                        <span className={styles.currentPrice}>{course.private}</span>
                        <span className={styles.oldPrice}>{course.privateOld}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <button className={styles.bookButton}>Book Now</button>
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
                        What does the course fees include?
                      </h3>
                      <div className="row">
                        {included.map((item, index) => (
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
                        What is not included in the course fees?
                      </h3>
                      <div className="row">
                        {notIncluded.map((item, index) => (
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
                        What to bring with you?
                      </h3>
                      <div className="row">
                        <div className="col-12">
                          <img 
                            src="/mnt/user-data/uploads/1771226018830_image.png" 
                            alt="What to bring for Yoga Teacher Training" 
                            style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                          />
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