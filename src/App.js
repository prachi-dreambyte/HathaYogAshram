import './assets/css/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import { Homepage } from 'components/Homepage';

import Header from 'components/navigations/Header';
import Footer from 'components/navigations/Footer';
import Gallery from 'components/gallery/Gallery';
import BlogList from 'components/blog/BlogList';
import SingleBlog from 'components/blog/SingleBlog';
import ContactForm from 'components/ContactForm/ContactForm';
import Kundalini200Page from 'components/kundaliniyoga/Kundalini200page';
import Kundalini300 from 'components/kundaliniyoga/Kundalini300';
import Teachers from 'components/yogateachers/Teachers';
import VedicMantra from 'components/Retreatlinks/Vedicmantra';
import YogaRetreat from 'components/Retreatlinks/5daysyogaretreat';
import Yoga10DaysRetreat from 'components/Retreatlinks/Yoga10DaysRetreat';
import Yoga20DaysRetreat from 'components/Retreatlinks/Yoga20DaysRetreat';
import YogaRetreatRishikesh from 'components/Retreatlinks/YogaRetreatRishikesh';
import AboutSchool from 'components/Aboutschool/AboutSchool';
import YogaCourse100 from 'components/YogaCourses/YogaCourse100';
import YogaCourse200 from 'components/YogaCourses/YogaCourse200';
import YogaCourse300 from 'components/YogaCourses/YogaCourse300';
import YogaCourse500 from 'components/YogaCourses/YogaCourse500';
import Founders from 'components/Aboutfounder/AboutFounder';
import AccommodationFood from 'components/AccommodationFood/AccommodationFood';
import YinYoga from 'components/YogaCourses/Yinyoga';
import AboutUs from 'components/AboutUs/AboutUs';
import BookingForm from 'components/Bookingform/Bookingformred';
import OnlineYTTC from 'components/onlineyogacourse/onlineyogayttc';
import OnlineYoga from 'components/onlineyogacourse/Onlineyoga';
import Kundalini100 from 'components/kundaliniyoga/Kundalini100';
import Books from 'components/MyBooks/Books';
import BooksSection from 'components/MyBooks/Bookssection';
import AsanaPage from 'components/HomepageOverview/Asana';
import PranayamaPage from 'components/HomepageOverview/Pranayama';
import EthicsLifestylePage from 'components/HomepageOverview/YogicEthics&Lifestyle';
import ChakrasEnergyPage from 'components/HomepageOverview/Chakras&Energy';
import AyurvedaNutritionPage from 'components/HomepageOverview/Ayurveda&Nutrition';
import MantrasChantingPage from 'components/HomepageOverview/Mantras&Chanting';
import MeditationCleansingPage from 'components/HomepageOverview/Meditation';
import TeachingMethodologyPage from 'components/HomepageOverview/TeachingMethodology';
import YogaAnatomyPage from 'components/HomepageOverview/YogaAnatomy';
import PhilosophyPage from 'components/HomepageOverview/YogicPhilosophy';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const location = useLocation();

  // 🔹 admin & auth check
  const isAdmin = location.pathname.startsWith('/admin');
  const isAuth = location.pathname.startsWith('/auth');

  const showHeaderFooter = !isAdmin && !isAuth;

  return (
    <ChakraProvider theme={currentTheme}>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/kundalini-100" element={<Kundalini100 />} />
        <Route path="/kundalini-200" element={<Kundalini200Page />} />
        <Route path="/kundalini-300" element={<Kundalini300 />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/vedic-mantra" element={<VedicMantra />} />
        <Route path="/5-days-yoga-retreat" element={<YogaRetreat />} />
        <Route path="/10-days-yoga-retreat" element={<Yoga10DaysRetreat />} />
        <Route path="/20-days-yoga-retreat" element={<Yoga20DaysRetreat />} />
        <Route path="/meditation-retreat" element={<YogaRetreatRishikesh />} />
        <Route path="/Our-Founder" element={<Founders />} />
        <Route path="/Our-School" element={<AboutSchool />} />
        <Route path="/Accommodation-Food" element={<AccommodationFood />} />
        <Route path="/YogaCourse100" element={<YogaCourse100 />} />
        <Route path="/YogaCourse200" element={<YogaCourse200 />} />
        <Route path="/YogaCourse300" element={<YogaCourse300 />} />
        <Route path="/YogaCourse500" element={<YogaCourse500 />} />
        <Route path="/Yoga-Books" element={<Books />} />
        <Route path="/Booksection" element={<BooksSection />} />
        <Route path="/YinYoga" element={<YinYoga />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/Online-YTTC" element={<OnlineYTTC />} />
        <Route path="/Yoga-Online" element={<OnlineYoga />} />
        <Route path="/asana" element={<AsanaPage />} />
        <Route path="/pranayama" element={<PranayamaPage />} />
        <Route path="/yogic-philosophy" element={<PhilosophyPage />} />
        <Route path="/yoga-anatomy" element={<YogaAnatomyPage />} />
        <Route
          path="/teaching-methodology"
          element={<TeachingMethodologyPage />}
        />
        <Route path="/meditation" element={<MeditationCleansingPage />} />
        <Route path="/mantras-chanting" element={<MantrasChantingPage />} />
        <Route path="/ayurveda-nutrition" element={<AyurvedaNutritionPage />} />
        <Route path="/chakras-energy" element={<ChakrasEnergyPage />} />
        <Route path="/yogic-ethics" element={<EthicsLifestylePage />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </ChakraProvider>
  );
}
