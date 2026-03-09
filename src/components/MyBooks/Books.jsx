import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/MyBooks/Books.module.css';

const API = "http://localhost:8000/api/books";
const PAGE_API = "http://localhost:8000/api/books-page";
const FILE_BASE = "http://localhost:8000/uploads/books";

const getFileUrl = (file) => (file ? `${FILE_BASE}/${file}` : "");
const getAssetUrl = (value) =>
  value && value.startsWith("http") ? value : getFileUrl(value);

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageContent, setPageContent] = useState({
    heroQuote: "Knowledge Is The Light That Illuminates The Path Of Yoga",
    heroTitle: "Sacred Yoga Books & Ancient Scriptures",
    heroBreadcrumb: "Yoga Books",
    libraryTitle: "Digital Library",
    librarySubtitle: "Explore Our Collection of Yoga Literature",
    libraryDescription:
      "Discover timeless wisdom through our curated collection of classical and modern yoga texts. Read online or download for your personal study and practice.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API);
        setBooks(res.data?.data || []);
      } catch (err) {
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };

    const fetchPageContent = async () => {
      try {
        const res = await axios.get(PAGE_API);
        const latest = Array.isArray(res.data?.data) ? res.data.data[0] : null;
        if (latest) {
          setPageContent((prev) => ({
            heroQuote: latest.heroQuote || prev.heroQuote,
            heroTitle: latest.heroTitle || prev.heroTitle,
            heroBreadcrumb: latest.heroBreadcrumb || prev.heroBreadcrumb,
            libraryTitle: latest.libraryTitle || prev.libraryTitle,
            librarySubtitle: latest.librarySubtitle || prev.librarySubtitle,
            libraryDescription:
              latest.libraryDescription || prev.libraryDescription,
          }));
        }
      } catch (err) {
        // keep defaults
      }
    };

    fetchBooks();
    fetchPageContent();
  }, []);

  const handleViewBook = (book) => {
    // Open PDF in new tab for viewing
    const pdfUrl = book.pdfUrl || getFileUrl(book.pdfFile);
    if (pdfUrl) window.open(pdfUrl, '_blank');
  };

  const handleDownload = (e, book) => {
    e.stopPropagation(); // Prevent view from opening when clicking download
    // Create a temporary link and trigger download
    const pdfUrl = book.pdfUrl || getFileUrl(book.pdfFile);
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
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
            {pageContent.heroQuote}
          </p>
          <h1 className={styles.mainTitle}>
            {pageContent.heroTitle}
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>{pageContent.heroBreadcrumb}</span>
          </div>
        </div>
      </section>

      {/* Books Library Section */}
      <section className={styles.librarySection}>
        <div className={styles.libraryHeader}>
          <p className={styles.libraryTitle}>{pageContent.libraryTitle}</p>
          <h2 className={styles.librarySubtitle}>
            {pageContent.librarySubtitle}
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.libraryDescription}>
            {pageContent.libraryDescription}
          </p>
        </div>

        {/* Books Grid */}
        <div className={styles.booksGrid}>
          {loading && <p>Loading...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && books.length === 0 && <p>No books available.</p>}
          {!loading && !error && books.map((book) => (
            <div 
              key={book._id || book.id} 
              className={styles.bookCard}
            >
              <div className={styles.bookCover}>
                <img src={getAssetUrl(book.coverImage)} alt={book.title} />
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
