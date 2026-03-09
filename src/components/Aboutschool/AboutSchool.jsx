import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/Aboutschool/AboutSchool.module.css";
import {
  School,
  Heart,
  Mountain,
  BookOpen,
  Target,
  Users,
  Award,
  Globe,
  Compass,
  Star,
  Sparkles,
  Leaf,
  CheckCircle,
  TrendingUp,
  Shield,
  Lightbulb,
  Zap,
  MapPin,
  GraduationCap,
  Sun,
  Layers,
  Activity,
  Flame,
  Wind,
  Flower2,
  TreePine,
  Sunset,
} from "lucide-react";

const API = "http://localhost:8000/api/our-school";

const ICONS = {
  School,
  Heart,
  Mountain,
  BookOpen,
  Target,
  Users,
  Award,
  Globe,
  Compass,
  Star,
  Sparkles,
  Leaf,
  CheckCircle,
  TrendingUp,
  Shield,
  Lightbulb,
  Zap,
  MapPin,
  GraduationCap,
  Sun,
  Layers,
  Activity,
  Flame,
  Wind,
  Flower2,
  TreePine,
  Sunset,
};

const DEFAULT_HERO = {
  title: "About Our Schools",
  subtitle: "Yoga Alliance Certified Teacher Training Schools in Rishikesh, India",
  omText: "ॐ",
};

const DEFAULT_NAV = [
  { id: "about", label: "About School", iconKey: "School" },
  { id: "vision", label: "Vision & Mission", iconKey: "Target" },
  { id: "teaching", label: "Teaching", iconKey: "BookOpen" },
  { id: "values", label: "Values", iconKey: "Star" },
  { id: "edge", label: "Our Edge", iconKey: "Zap" },
];

const getIcon = (key, props = {}) => {
  const IconComponent = ICONS[key] || School;
  return <IconComponent {...props} />;
};

const AboutSchool = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data?.data || null);
      } catch (error) {
        console.error("Failed to load Our School data:", error);
        setData(null);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data?.schools?.length) {
      setActiveTab((prev) => prev || data.schools[0].id);
    }
  }, [data]);

  const hero = data?.hero || DEFAULT_HERO;
  const sectionNav = data?.sectionNav?.length ? data.sectionNav : DEFAULT_NAV;
  const schools = Array.isArray(data?.schools) ? data.schools : [];

  useEffect(() => {
    const ids = sectionNav.map((section) => section.id);
    if (ids.length && !ids.includes(activeSection)) {
      setActiveSection(ids[0]);
    }
  }, [sectionNav, activeSection]);

  const activeSchool =
    schools.find((school) => school.id === activeTab) || schools[0];
  const activeSectionData =
    activeSchool?.sections?.[activeSection] || null;
  const activeSectionMeta =
    sectionNav.find((section) => section.id === activeSection) || {};

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <GraduationCap className={styles.heroIcon} size={80} />
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <div className={styles.heroOm}>{hero.omText || "ॐ"}</div>
        </div>
      </div>

      {/* School Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabContainer}>
          {schools.map((school) => (
            <button
              key={school.id}
              className={`${styles.tab} ${
                activeTab === school.id ? styles.tabActive : ""
              }`}
              onClick={() => {
                setActiveTab(school.id);
                setActiveSection("about");
              }}
            >
              {getIcon(school.iconKey, { size: 20 })}
              <span>{school.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Navigation */}
      <div className={styles.sectionNav}>
        {sectionNav.map((section) => (
          <button
            key={section.id}
            className={`${styles.sectionBtn} ${
              activeSection === section.id ? styles.sectionBtnActive : ""
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {getIcon(section.iconKey, { size: 18 })}
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {!activeSchool && (
          <div className={styles.schoolCard}>
            <div className={styles.contentText}>
              <p>Content coming soon.</p>
            </div>
          </div>
        )}

        {activeSchool && activeSectionData && (
          <div className={styles.schoolCard}>
            <div className={styles.cardHeader}>
              {getIcon(activeSectionMeta.iconKey, {
                size: 40,
                className: styles.headerIcon,
              })}
              <h2 className={styles.cardTitle}>
                {activeSectionData.title || activeSectionMeta.label}
              </h2>
            </div>

            {activeSectionData.image && (
              <div className={styles.imageSection}>
                <img
                  src={activeSectionData.image}
                  alt={activeSectionData.imageAlt || activeSectionData.title}
                  className={styles.heroImage}
                />
              </div>
            )}

            <div
              className={styles.contentText}
              dangerouslySetInnerHTML={{
                __html:
                  activeSectionData.contentHtml ||
                  "<p>Content coming soon.</p>",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSchool;
