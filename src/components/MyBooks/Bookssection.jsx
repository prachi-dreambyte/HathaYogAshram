import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/MyBooks/Bookssection.module.css';

// Placeholder book cover images
const book1 = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400';
const book2 = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400';
const book3 = 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400';
const book4 = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400';

const BooksSection = () => {
  const navigate = useNavigate();

  // Latest 4 books only
  const latestBooks = [
    {
      id: 1,
      title: 'Hatha Yoga Pradipika',
      author: 'Swami Swatmarama',
      coverImage: book1,
      pdfUrl: '/pdfs/1766929251310.pdf',
      category: 'Classical Texts',
      pages: 156,
      language: 'Sanskrit/English'
    },
    {
      id: 2,
      title: 'Yoga Sutras of Patanjali',
      author: 'Maharishi Patanjali',
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
      coverImage: book4,
      pdfUrl: '/pdfs/light-on-yoga.pdf',
      category: 'Modern Yoga',
      pages: 544,
      language: 'English'
    }
  ];

  const handleViewBook = (book) => {
    window.open(book.pdfUrl, '_blank');
  };

  const handleDownload = (e, book) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = book.pdfUrl;
    link.download = `${book.title}.pdf`;
    link.setAttribute('download', `${book.title}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewMore = () => {
    navigate('/Yoga-Books'); // Navigate to books page
  };

  return (
    <section className={styles.booksSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTitle}>Sacred Knowledge</p>
          <h2 className={styles.sectionSubtitle}>
            Explore Ancient Yoga Literature
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            Discover timeless wisdom through our curated collection of classical and modern yoga texts.
          </p>
        </div>

        {/* Books Grid - Only 4 books */}
        <div className={styles.booksGrid}>
          {latestBooks.map((book) => (
            <div 
              key={book.id} 
              className={styles.bookCard}
            >
              <div 
                className={styles.bookCover}
                onClick={() => handleViewBook(book)}
              >
                <img src={book.coverImage} alt={book.title} />
                <div className={styles.bookOverlay}>
                  <span className={styles.viewText}>Click to View PDF</span>
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

        {/* View More Button */}
        <div className={styles.viewMoreContainer}>
          <button 
            className={styles.viewMoreBtn}
            onClick={handleViewMore}
          >
            View All Books
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round"/>
              <polyline points="12 5 19 12 12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;