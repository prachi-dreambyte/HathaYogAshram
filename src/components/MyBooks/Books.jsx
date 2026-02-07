import React from 'react';
import styles from '../../assets/styles/MyBooks/Books.module.css';

// Placeholder book cover images (replace with your actual images later)
// For now using placeholder URLs - you can download actual book covers from Google
const book1 = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400';
const book2 = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400';
const book3 = 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400';
const book4 = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400';

const Books = () => {

  const books = [
    {
      id: 1,
      title: 'Hatha Yoga Pradipika',
      author: 'Swami Swatmarama',
      description: 'A classical Sanskrit manual on hatha yoga, written by Swami Swatmarama in the 15th century. It is one of the most influential texts of Hatha yoga.',
      coverImage: book1,
      pdfUrl: '/pdfs/1766929251310.pdf', // Add your PDF URLs here
      category: 'Classical Texts',
      pages: 156,
      language: 'Sanskrit/English'
    },
    {
      id: 2,
      title: 'Yoga Sutras of Patanjali',
      author: 'Maharishi Patanjali',
      description: 'The foundational text of yoga philosophy, containing 196 aphorisms on the theory and practice of yoga.',
      coverImage: book2,
      pdfUrl: '/pdfs/yoga-sutras.pdf',
      category: 'Classical Texts',
      pages: 208,
      language: 'Sanskrit/English'
    },
    {
      id: 3,
      title: 'Bhagavad Gita',
      author: 'Vyasa',
      description: 'A 700-verse Hindu scripture that is part of the epic Mahabharata, containing a conversation between Prince Arjuna and Lord Krishna.',
      coverImage: book3,
      pdfUrl: '/pdfs/bhagavad-gita.pdf',
      category: 'Spiritual Texts',
      pages: 352,
      language: 'Sanskrit/English'
    },
    {
      id: 4,
      title: 'Light on Yoga',
      author: 'B.K.S. Iyengar',
      description: 'A comprehensive guide to yoga asanas and pranayama, often considered the bible of modern yoga.',
      coverImage: book4,
      pdfUrl: '/pdfs/light-on-yoga.pdf',
      category: 'Modern Yoga',
      pages: 544,
      language: 'English'
    },
    {
      id: 5,
      title: 'Autobiography of a Yogi',
      author: 'Paramahansa Yogananda',
      description: 'A spiritual classic that introduces readers to the life of one of India\'s great spiritual masters.',
      coverImage: book1,
      pdfUrl: '/pdfs/autobiography-yogi.pdf',
      category: 'Spiritual Biography',
      pages: 502,
      language: 'English'
    },
    {
      id: 6,
      title: 'The Complete Illustrated Book of Yoga',
      author: 'Swami Vishnu-Devananda',
      description: 'A comprehensive guide to the practice of yoga with detailed illustrations and instructions.',
      coverImage: book2,
      pdfUrl: '/pdfs/complete-yoga.pdf',
      category: 'Modern Yoga',
      pages: 384,
      language: 'English'
    }
  ];

  const handleViewBook = (book) => {
    // Open PDF in new tab for viewing
    window.open(book.pdfUrl, '_blank');
  };

  const handleDownload = (e, book) => {
    e.stopPropagation(); // Prevent view from opening when clicking download
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = book.pdfUrl;
    link.download = `${book.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            Knowledge Is The Light That Illuminates The Path Of Yoga
          </p>
          <h1 className={styles.mainTitle}>
            Sacred Yoga Books & Ancient Scriptures
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Yoga Books</span>
          </div>
        </div>
      </section>

      {/* Books Library Section */}
      <section className={styles.librarySection}>
        <div className={styles.libraryHeader}>
          <p className={styles.libraryTitle}>Digital Library</p>
          <h2 className={styles.librarySubtitle}>
            Explore Our Collection of Yoga Literature
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.libraryDescription}>
            Discover timeless wisdom through our curated collection of classical and modern yoga texts.
            Read online or download for your personal study and practice.
          </p>
        </div>

        {/* Books Grid */}
        <div className={styles.booksGrid}>
          {books.map((book) => (
            <div 
              key={book.id} 
              className={styles.bookCard}
            >
              <div className={styles.bookCover}>
                <img src={book.coverImage} alt={book.title} />
                <div className={styles.bookOverlay}>
                  <button 
                    className={styles.viewButton}
                    onClick={() => handleViewBook(book)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    View Book
                  </button>
                </div>
              </div>
              <div className={styles.bookInfo}>
                <span className={styles.bookCategory}>{book.category}</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>by {book.author}</p>
                <div className={styles.bookMeta}>
                  <span>{book.pages} pages</span>
                  <span className={styles.metaSeparator}>•</span>
                  <span>{book.language}</span>
                </div>
                <button 
                  className={styles.downloadButton}
                  onClick={(e) => handleDownload(e, book)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Deepen Your Practice Through Sacred Knowledge
          </h1>
          <p className={styles.subtitle}>
            Join our yoga teacher training and gain access to comprehensive study materials
            and traditional yoga scriptures.
          </p>
          <button className={styles.ctaBtn}>
            Explore Our Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default Books;