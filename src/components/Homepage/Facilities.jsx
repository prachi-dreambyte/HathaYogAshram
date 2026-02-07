import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/Facilities.module.css";
import transportationImg from "../../assets/images/library.jpg";
import libraryImg from "../../assets/images/excursion.jpg";
import excursionsImg from "../../assets/images/station.jpg";
import foodImg from "../../assets/images/food.jpg";
import supportImg from "../../assets/images/24to7avavlible.jpg";

const FacilitiesDesign4 = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilities = [
    {
      title: "Transportation",
      image: transportationImg,
      text: `We provide complete transportation assistance to ensure a smooth and stress-free arrival for our students. For those without a direct flight to Dehradun, we arrange comfortable pickups from Dehradun Airport, Haridwar Railway Station, or even Delhi upon request.`,
      fullDescription: `Our comprehensive transportation service ensures that your journey to our yoga school is as peaceful as your practice will be. We understand that travel can be stressful, especially when arriving in a new country or region. That's why we offer door-to-door pickup services from major transport hubs including Jolly Grant Airport (Dehradun), Haridwar Railway Station, and even Indira Gandhi International Airport in Delhi for international students. Our experienced drivers are familiar with the mountain roads and will ensure your safe arrival. We also provide departure transfers and can arrange special transportation for weekend excursions. All our vehicles are well-maintained, air-conditioned, and equipped for comfortable mountain travel.`,
      icon: "🚗",
      modalImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
    },
    {
      title: "Library",
      image: libraryImg,
      text: `Our yoga library is a calm and inspiring space designed to deepen your learning experience. It is thoughtfully stocked with a wide collection of books covering Yoga Asanas, Pranayama, Meditation, Yoga Philosophy, Anatomy, and ancient yogic texts.`,
      fullDescription: `Step into our serene library, a sanctuary of wisdom housing over 500 carefully curated books and resources on yoga, meditation, Ayurveda, and Eastern philosophy. The collection includes rare translations of ancient Sanskrit texts like the Yoga Sutras of Patanjali, Bhagavad Gita, Hatha Yoga Pradipika, and Upanishads. You'll find comprehensive guides on asana practice, pranayama techniques, meditation methods, and yoga anatomy. Modern research papers and journals on yoga therapy and neuroscience are also available. The library features comfortable reading nooks with natural lighting, making it an ideal space for self-study, research, or quiet contemplation. We also maintain a digital library with online subscriptions to international yoga journals.`,
      icon: "📚",
      modalImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800"
    },
    {
      title: "Excursions",
      image: excursionsImg,
      text: `To help students connect with nature and local culture, we organize weekly excursions around Rishikesh and the Himalayan region. Explore sacred temples, pristine waterfalls, and breathtaking mountain trails.`,
      fullDescription: `Every week, we organize transformative excursions that blend adventure, spirituality, and cultural immersion. Visit the sacred Beatles Ashram where the legendary band composed the White Album while studying meditation. Trek to hidden waterfalls like Neer Garh and Patna Falls for a refreshing dip in crystal-clear Himalayan waters. Explore ancient temples including Neelkanth Mahadev Temple nestled high in the mountains. Experience the mesmerizing Ganga Aarti ceremony at Parmarth Niketan and Triveni Ghat as the sun sets over the holy river. For the adventurous, we offer white-water rafting on the Ganges and sunrise hikes to viewpoints offering panoramic Himalayan vistas. Each excursion is guided by knowledgeable locals who share stories, legends, and insights into the region's rich spiritual heritage.`,
      icon: "⛰️",
      modalImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    },
    {
      title: "Satvik Food",
      image: foodImg,
      text: `Our school serves freshly prepared Satvik vegetarian meals that support a yogic lifestyle and holistic well-being. Every dish is prepared with pure, organic ingredients to enhance mental clarity and spiritual practice.`,
      fullDescription: `Nourish your body and soul with our thoughtfully prepared Satvik cuisine, designed to complement your yoga practice and promote inner peace. All meals are 100% vegetarian, prepared with organic ingredients sourced from local farmers and our own herb garden. We follow traditional Satvik principles, avoiding onion, garlic, and processed foods, while emphasizing fresh vegetables, whole grains, lentils, nuts, fruits, and aromatic herbs like turmeric, cumin, and coriander. Our experienced cooks prepare three delicious meals daily: energizing breakfast with fresh fruits, overnight oats, and herbal teas; wholesome lunch featuring dal, sabzi, roti, and rice; light dinner with soups, salads, and steamed vegetables. Special dietary requirements including vegan, gluten-free, and allergies are accommodated with advance notice. The dining hall overlooks the mountains, creating a peaceful atmosphere for mindful eating.`,
      icon: "🍽️",
      modalImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
    },
    {
      title: "24/7 Support",
      image: supportImg,
      text: `Our reception desk is available 24/7 to assist students throughout their stay and ensure a peaceful experience. Whether you need medical assistance or have questions, our dedicated team is always ready to support you.`,
      fullDescription: `Your comfort and safety are our top priorities. Our multilingual reception team is available around the clock to assist with any needs or concerns. From the moment you arrive until your departure, we provide comprehensive support services. Need a doctor? We have partnerships with reputable clinics and can arrange immediate medical consultations. Having trouble adjusting to the altitude or food? Our staff can provide remedies and recommendations. Want to extend your stay or book additional workshops? We'll handle all arrangements. Lost something or need laundry service? Just let us know. We also offer travel assistance for onward journeys, currency exchange information, and local SIM card setup. Emergency contact numbers are provided to all students. Our team includes experienced yoga practitioners who understand the physical and emotional journey you're on and can offer guidance when needed.`,
      icon: "🏨",
      modalImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    },
    {
      title: "Yoga Shala",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600",
      text: `Practice in our spacious, naturally-lit yoga shalas designed according to Vastu principles. The halls feature traditional wooden floors, high ceilings, and panoramic mountain views to enhance your practice.`,
      fullDescription: `Our state-of-the-art yoga shalas are architectural marvels designed to create the perfect environment for practice and transformation. The main hall spans 3,000 square feet with soaring 20-foot ceilings that create an expansive, uplifting atmosphere. Floor-to-ceiling windows on three sides flood the space with natural light and offer breathtaking views of the Himalayas and Ganges valley. Traditional teak wood flooring provides the ideal surface for asana practice, while the acoustics are optimized for chanting and mantra meditation. We maintain separate shalas for different practice styles: a heated room for hot yoga, a meditation hall with cushioned seating, and an outdoor platform for sunrise sessions. All spaces are equipped with props including mats, blocks, bolsters, straps, and blankets. Air purification systems ensure clean air, while the layout follows Vastu Shastra principles to optimize energy flow.`,
      icon: "🧘",
      modalImage: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800"
    },
    {
      title: "Meditation Garden",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600",
      text: `Find inner peace in our beautifully landscaped meditation garden featuring lotus ponds, sacred trees, and dedicated spaces for silent contemplation and walking meditation.`,
      fullDescription: `Our meditation garden is an oasis of tranquility spanning over one acre of meticulously maintained grounds. Winding stone pathways lead through areas designed for different meditation practices. The central lotus pond, home to blooming pink and white lotuses, serves as a focal point for contemplation. Ancient Bodhi trees and fragrant flowering plants create natural sanctuaries for seated meditation. We've designated specific areas for walking meditation with circular labyrinth patterns and straight pathways lined with prayer flags. Comfortable seating areas with shade structures allow for journaling and reflection. The garden includes a rock garden inspired by Japanese Zen aesthetics, perfect for mindfulness practice. Bird feeders and butterfly plants attract wildlife, adding to the natural symphony. Early morning sessions in the garden, when mist rises from the valley and birds begin their songs, offer particularly profound experiences. Evening hours bring cooling breezes and the chance to meditate under the stars.`,
      icon: "🌸",
      modalImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    },
    {
      title: "Ayurveda Spa",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
      text: `Rejuvenate with authentic Ayurvedic treatments including Abhyanga massage, Shirodhara, and Panchakarma therapies administered by certified Ayurvedic practitioners.`,
      fullDescription: `Our authentic Ayurveda spa brings the ancient healing science to life through traditional treatments that complement your yoga practice. Certified Ayurvedic doctors conduct personalized consultations to determine your dosha (constitution) and recommend customized treatment plans. Experience Abhyanga, the traditional oil massage using warm medicated oils to balance doshas and release toxins. Shirodhara, where warm oil flows continuously over the forehead, calms the nervous system and enhances mental clarity. For deeper detoxification, we offer Panchakarma programs ranging from 7 to 21 days. Other treatments include Kati Basti for back pain, Nasya for sinus issues, and therapeutic steam baths. Our spa uses only organic, traditionally prepared herbal oils and formulations. Treatment rooms are designed for complete relaxation with soft lighting, soothing music, and aromatic herbs. We also offer Ayurvedic consultations for dietary and lifestyle recommendations to maintain balance after your course.`,
      icon: "💆",
      modalImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
    },
    {
      title: "Yoga Props Store",
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600",
      text: `Access quality yoga equipment and authentic spiritual items in our well-stocked store. Purchase mats, blocks, meditation cushions, mala beads, books, and traditional Indian clothing.`,
      fullDescription: `Our on-campus yoga boutique offers everything you need for your practice and spiritual journey. We stock premium eco-friendly yoga mats from brands like Manduka and Jade, available in various thicknesses and materials. Choose from cork blocks, foam blocks, cotton straps, and supportive bolsters in beautiful colors. For meditation, we offer zafu cushions, zabuton mats, and meditation benches. Our spiritual items section features authentic rudraksha and gemstone mala beads, singing bowls, incense, essential oils, and crystals. The clothing section includes comfortable yoga wear, traditional kurtas, meditation shawls, and locally-made hemp clothing. We carry an extensive collection of books on yoga, meditation, Ayurveda, and Indian philosophy, including many titles not easily found elsewhere. All proceeds support the school and local artisan communities. Special student discounts available, and we can arrange international shipping for larger purchases.`,
      icon: "🛍️",
      modalImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
    },
    {
      title: "Cultural Workshops",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      text: `Immerse yourself in Indian culture through workshops on kirtan, classical music, Hindi language, traditional cooking, and sacred arts to deepen your understanding of yoga's roots.`,
      fullDescription: `Expand your cultural horizons through our diverse workshop offerings that illuminate yoga's rich cultural context. Join evening kirtan sessions where you'll learn devotional chanting and play traditional instruments like harmonium and tabla. Our Hindi language classes help you understand Sanskrit terms and communicate with locals. Learn to cook authentic Indian dishes in hands-on classes where you'll prepare dal, chapati, and regional specialties. Sacred arts workshops teach kolam (rangoli) floor designs, mandala painting, and henna application. Philosophy seminars delve deep into texts like the Bhagavad Gita with scholarly teachers. Classical Indian music appreciation classes introduce ragas and their connection to yoga and meditation. We also offer workshops on Vedic astrology, vastu shastra, and mudra hand gestures. Special guest teachers regularly visit to share expertise in various aspects of Indian spirituality and culture. These workshops, mostly complimentary or low-cost, occur several times weekly and greatly enrich the immersive experience.`,
      icon: "🎵",
      modalImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"
    },
    {
      title: "Filtered Water System",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600",
      text: `Stay hydrated with our advanced multi-stage water purification system providing unlimited clean drinking water throughout the campus, reducing plastic waste and ensuring your health.`,
      fullDescription: `Access to pure, safe drinking water is fundamental to your wellbeing during your stay. Our campus-wide water purification system features advanced multi-stage filtration including sediment filters, activated carbon, UV sterilization, and reverse osmosis. Water stations are conveniently located in each building, yoga hall, and accommodation area, providing unlimited fresh, cold, and room-temperature water 24/7. We encourage all students to bring reusable water bottles (also available in our store) as part of our commitment to environmental sustainability. Our system eliminates the need for plastic bottles, preventing thousands of bottles from entering the waste stream annually. Regular testing by certified laboratories ensures water quality meets international standards. The mineral-balanced water supports your practice, especially important as you adjust to the climate and physical demands of intensive yoga training. Hot water for herbal teas is available in the dining area and common spaces.`,
      icon: "💧",
      modalImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
    },
    {
      title: "Wifi & Study Areas",
      image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=600",
      text: `Stay connected with high-speed WiFi throughout campus. Quiet study areas and common lounges provide comfortable spaces for homework, online research, and staying in touch with loved ones.`,
      fullDescription: `While we encourage digital detox during your yoga journey, we understand the need to stay connected. High-speed fiber-optic WiFi covers the entire campus including all accommodation areas, yoga halls, dining areas, and outdoor spaces. The connection is reliable enough for video calls, streaming yoga tutorials, and uploading photos to share your experience. We've created dedicated study zones with comfortable seating, good lighting, and electrical outlets for completing course assignments, researching yoga topics, and online learning. The main common lounge features sofas, coffee tables, and a relaxed atmosphere perfect for socializing or quiet work. Each study area maintains a respectful noise level policy to ensure everyone can focus. We also have a computer station with printing services for students who need to print certificates, assignments, or travel documents. While devices are discouraged during training hours to maintain presence and focus, you're welcome to use technology during free time to document your journey, connect with family, or continue your learning beyond the mat.`,
      icon: "📶",
      modalImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
    }
  ];

  const openModal = (facility) => {
    setSelectedFacility(facility);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFacility(null);
    document.body.style.overflow = 'unset';
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
              key={index} 
              className={styles.facilityItem}
              onClick={() => openModal(facility)}
            >
              <div className={styles.facilityImageWrapper}>
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className={styles.facilityImage}
                />
              </div>
              
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>{facility.title}</h3>
                <p className={styles.facilityText}>{facility.text}</p>
              </div>
              <div className={styles.facilityIcon}>{facility.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFacility && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modalImageWrapper}>
              <img 
                src={selectedFacility.modalImage} 
                alt={selectedFacility.title}
                className={styles.modalImage}
              />
              <div className={styles.modalImageOverlay}>
                <span className={styles.modalIcon}>{selectedFacility.icon}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedFacility.title}</h3>
              <div className={styles.modalDivider}></div>
              <p className={styles.modalDescription}>{selectedFacility.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesDesign4;