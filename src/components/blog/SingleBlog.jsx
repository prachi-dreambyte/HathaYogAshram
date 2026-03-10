import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../assets/styles/blog/SingleBlog.module.css";

const API_BASE = "http://localhost:8000/api";
const ASSET_BASE = "http://localhost:8000";

const toAssetUrl = (value) => {
  if (!value) return "";
  if (typeof value !== "string") return value;
  if (value.startsWith("http") || value.startsWith("data:")) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, "")}`;
};

const normalizeContent = (value) => {
  if (!value) return "<p>Content coming soon.</p>";
  const hasHtml = /<\w+[\s\S]*>/i.test(value);
  if (hasHtml) return value;
  return value
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${block.replace(/\n/g, "<br/>")}</p>`)
    .join("");
};

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE}/blogs/slug/${slug}`);
        setPost(res.data?.data || null);
      } catch (error) {
        console.error("Failed to load blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const badge = post?.badge || post?.category || "Yoga Blog";
  const title = post?.title || "Blog Post";
  const subtitle = post?.subtitle || post?.excerpt || "";
  const breadcrumbLabel = post?.category || "Article";
  const contentHtml = normalizeContent(post?.contentHtml);

  return (
    <section className={styles.wrapper}>
      {/* ================= HERO HEADER ================= */}
      <div className={styles.heroSection}>
        {post?.coverImage && (
          <img
            src={toAssetUrl(post.coverImage)}
            alt={title}
            className={styles.heroBackgroundImage}
          />
        )}
        <div className={styles.heroContent}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h1 className={styles.pageTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          <div className={styles.breadcrumb}>
            Blog <span>/</span> {breadcrumbLabel}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className={styles.contentSection}>
        <article className={styles.contentCard}>
          {loading && (
            <div className={styles.richContent}>
              <p>Loading...</p>
            </div>
          )}
          {!loading && !post && (
            <div className={styles.richContent}>
              <p>Post not found.</p>
            </div>
          )}
          {!loading && post && (
            <div
              className={styles.richContent}
              dangerouslySetInnerHTML={{
                __html: contentHtml,
              }}
            />
          )}
        </article>
      </div>
    </section>
  );
};

export default SingleBlog;
