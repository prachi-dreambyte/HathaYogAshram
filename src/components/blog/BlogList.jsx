import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/blog/BlogList.module.css";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:8000/api";
const ASSET_BASE = "http://localhost:8000";

const toAssetUrl = (value) => {
  if (!value) return "";
  if (typeof value !== "string") return value;
  if (value.startsWith("http") || value.startsWith("data:")) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, "")}`;
};

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

const estimateReadTime = (html) => {
  const text = String(html || "").replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (!words) return "";
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

const BlogList = () => {
  const [pageContent, setPageContent] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, pageRes] = await Promise.all([
          axios.get(`${API_BASE}/blogs`),
          axios.get(`${API_BASE}/blog-page`),
        ]);
        setPosts(postsRes.data?.data || []);
        setPageContent(pageRes.data?.data || null);
      } catch (error) {
        console.error("Failed to load blog data:", error);
      }
    };
    fetchData();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set((posts || []).map((post) => post.category).filter(Boolean))
    );
    return ["All Posts", ...unique];
  }, [posts]);

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory("All Posts");
    }
  }, [categories, activeCategory]);

  const filteredBlogs =
    activeCategory === "All Posts"
      ? posts
      : posts.filter((blog) => blog.category === activeCategory);

  return (
    <section className={styles.wrapper}>
      {/* ================= HERO HEADER ================= */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>
            {pageContent?.topLabel || "Wisdom, Insights & Inspiration"}
          </span>

          <h1 className={styles.pageTitle}>
            {pageContent?.title || "Yoga Blog - Rishikesh Yogkulam®"}
          </h1>

          <div className={styles.breadcrumb}>
            Home <span>/</span> {pageContent?.breadcrumbLabel || "Blog"}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>
          {pageContent?.sectionTitle || "Latest Articles & Yoga Insights"}
        </h2>

        <p className={styles.description}>
          {pageContent?.description ||
            "Explore our collection of articles covering yoga philosophy, teacher training tips, pranayama techniques, and transformative experiences from our yoga community in Rishikesh."}
        </p>

        {/* ================= CATEGORY TABS ================= */}
        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterTab} ${
                activeCategory === cat ? styles.activeTab : ""
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className={styles.blogGrid}>
          {filteredBlogs.slice(0, visibleCount).map((blog) => {
            const dateLabel =
              formatDate(blog.publishedAt || blog.createdAt) || "";
            const readTime = blog.readTime || estimateReadTime(blog.contentHtml);
            return (
              <article key={blog._id || blog.slug} className={styles.blogCard}>
                <div className={styles.imageWrapper}>
                  <img src={toAssetUrl(blog.coverImage)} alt={blog.title} />
                  <span className={styles.categoryBadge}>
                    {blog.category || "Yoga"}
                  </span>
                  <div className={styles.imageOverlay}></div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.metaInfo}>
                    {dateLabel && (
                      <span className={styles.date}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {dateLabel}
                      </span>
                    )}
                    {readTime && (
                      <span className={styles.readTime}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {readTime}
                      </span>
                    )}
                  </div>

                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.cardExcerpt}>{blog.excerpt}</p>

                  <Link to={`/blog/${blog.slug}`} className={styles.readMore}>
                    Read Full Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= VIEW MORE ================= */}
        {visibleCount < filteredBlogs.length && (
          <div className={styles.viewMoreWrapper}>
            <button
              className={styles.viewMoreBtn}
              onClick={() => setVisibleCount((v) => v + 3)}
            >
              Load More Articles
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
