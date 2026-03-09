import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../assets/styles/MyBooks/Bookssection.module.css';

const API = "http://localhost:8000/api/books?limit=4";
const FILE_BASE = "http://localhost:8000/uploads/books";

const getFileUrl = (file) => (file ? `${FILE_BASE}/${file}` : "");
const getAssetUrl = (value) =>
  value && value.startsWith("http") ? value : getFileUrl(value);

const BooksSection = () => {
  const navigate = useNavigate();

  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API);
        setLatestBooks(res.data?.data || []);
      } catch (err) {
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleViewBook = (book) => {
    const pdfUrl = book.pdfUrl || getFileUrl(book.pdfFile);
    if (pdfUrl) window.open(pdfUrl, '_blank');
  };

  const handleDownload = (e, book) => {
    e.stopPropagation();
    const pdfUrl = book.pdfUrl || getFileUrl(book.pdfFile);
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
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
          {loading && <p>Loading...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && latestBooks.length === 0 && <p>No books available.</p>}
          {!loading && !error && latestBooks.map((book) => (
            <div 
              key={book._id || book.id} 
              className={styles.bookCard}
            >
              <div 
                className={styles.bookCover}
                onClick={() => handleViewBook(book)}
              >
                <img src={getAssetUrl(book.coverImage)} alt={book.title} />
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
