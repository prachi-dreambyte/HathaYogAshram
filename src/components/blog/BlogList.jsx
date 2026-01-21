import { useState } from "react";
import styles from "../../assets/styles/blog/BlogList.module.css";

import blog1 from "../../assets/images/blog/5-Ways-to.webp";
import blog2 from "../../assets/images/blog/500-.webp";
import blog3 from "../../assets/images/blog/Sheetkari-.webp";

const categories = [
  "All Posts",
  "Kundalini Yoga",
  "Yoga Online",
  "Yoga Philosophy",
  "Yoga Retreat",
  "Yoga Training",
];

const blogData = [
  {
    id: 1,
    title: "Sheetkari Pranayama: Benefits and Techniques for Daily Yoga",
    excerpt:
      "Sheetkari Pranayama helps bring a wave of calm and coolness into daily yoga practice...",
    category: "Yoga Philosophy",
    image: blog1,
    link: "/blog/sheetkari-pranayama",
  },
  {
    id: 2,
    title: "5 Ways to Prepare for Yoga Teacher Training in Rishikesh, India",
    excerpt:
      "If you’re feeling the call to deepen your practice, here are five essential ways...",
    category: "Yoga Training",
    image: blog2,
    link: "/blog/prepare-ytt-rishikesh",
  },
  {
    id: 3,
    title:
      "500-Hour Yoga Teacher Training in Rishikesh: Key Benefits for Advanced Practitioners",
    excerpt:
      "Discover how a 500-hour yoga teacher training can elevate your teaching skills...",
    category: "Yoga Training",
    image: blog3,
    link: "/blog/500-hour-ytt",
  },
  {
    id: 4,
    title: "Sheetkari Pranayama: Benefits and Techniques for Daily Yoga",
    excerpt:
      "Sheetkari Pranayama helps bring a wave of calm and coolness into daily yoga practice...",
    category: "Yoga Philosophy",
    image: blog1,
    link: "/blog/sheetkari-pranayama",
  },
  {
    id: 5,
    title: "5 Ways to Prepare for Yoga Teacher Training in Rishikesh, India",
    excerpt:
      "If you’re feeling the call to deepen your practice, here are five essential ways...",
    category: "Yoga Training",
    image: blog2,
    link: "/blog/prepare-ytt-rishikesh",
  },
  {
    id: 6,
    title:
      "500-Hour Yoga Teacher Training in Rishikesh: Key Benefits for Advanced Practitioners",
    excerpt:
      "Discover how a 500-hour yoga teacher training can elevate your teaching skills...",
    category: "Yoga Training",
    image: blog3,
    link: "/blog/500-hour-ytt",
  },
  {
    id: 7,
    title: "Sheetkari Pranayama: Benefits and Techniques for Daily Yoga",
    excerpt:
      "Sheetkari Pranayama helps bring a wave of calm and coolness into daily yoga practice...",
    category: "Yoga Philosophy",
    image: blog1,
    link: "/blog/sheetkari-pranayama",
  },
  {
    id: 8,
    title: "5 Ways to Prepare for Yoga Teacher Training in Rishikesh, India",
    excerpt:
      "If you’re feeling the call to deepen your practice, here are five essential ways...",
    category: "Yoga Training",
    image: blog2,
    link: "/blog/prepare-ytt-rishikesh",
  },
  {
    id: 9,
    title:
      "500-Hour Yoga Teacher Training in Rishikesh: Key Benefits for Advanced Practitioners",
    excerpt:
      "Discover how a 500-hour yoga teacher training can elevate your teaching skills...",
    category: "Yoga Training",
    image: blog3,
    link: "/blog/500-hour-ytt",
  },
];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredBlogs =
    activeCategory === "All Posts"
      ? blogData
      : blogData.filter(blog => blog.category === activeCategory);

  return (
    <section className={styles.blogSection}>
      {/* CATEGORY TABS */}
      <div className={styles.tabs}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.tab} ${
              activeCategory === cat ? styles.active : ""
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

      {/* BLOG GRID */}
      <div className={styles.grid}>
        {filteredBlogs.slice(0, visibleCount).map(blog => (
          <article key={blog.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={blog.image} alt={blog.title} />
              <span className={styles.badge}>{blog.category}</span>
            </div>

            <div className={styles.content}>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href={blog.link} className={styles.readMore}>
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* VIEW MORE */}
      {visibleCount < filteredBlogs.length && (
        <div className={styles.viewMoreWrap}>
          <button
            className={styles.viewMore}
            onClick={() => setVisibleCount(v => v + 3)}
          >
            View More Blogs
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogList;
