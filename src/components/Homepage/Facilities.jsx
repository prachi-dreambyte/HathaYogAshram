import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../assets/styles/Homepage/Facilities.module.css";

const API = "http://localhost:8000/api/home-facility-cards";

const FacilitiesDesign4 = () => {

  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const res = await axios.get(API);

      if (res.data.success) {
        setFacilities(res.data.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (facility) => {
    setSelectedFacility(facility);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedFacility(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.sectionContent}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Facilities You Enjoy At The Yoga School
          </h2>
          <div className={styles.headingLine}></div>
        </div>

        <div className={styles.facilitiesGrid}>
          {facilities.map((facility, index) => (

            <div
              key={facility._id}
              className={styles.facilityItem}
              onClick={() => openModal(facility)}
            >

              <div className={styles.facilityImageWrapper}>
                <img
                  src={`http://localhost:8000/${facility.image}`}
                  alt={facility.heading}
                  className={styles.facilityImage}
                />
              </div>

              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>
                  {facility.heading}
                </h3>

                <p className={styles.facilityText}>
                  {facility.subParagraph}
                </p>
              </div>

            </div>

          ))}
        </div>
      </div>

      {/* Modal */}

      {selectedFacility && (
        <div className={styles.modalOverlay} onClick={closeModal}>

          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className={styles.modalClose}
              onClick={closeModal}
            >
              ✕
            </button>

            <div className={styles.modalImageWrapper}>
              <img
                src={`http://localhost:8000/${selectedFacility.image}`}
                alt={selectedFacility.heading}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>
                {selectedFacility.heading}
              </h3>

              <div className={styles.modalDivider}></div>

              <p className={styles.modalDescription}>
                {selectedFacility.mainParagraph}
              </p>

            </div>

          </div>

        </div>
      )}
    </section>
  );
};

export default FacilitiesDesign4;