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
        <Route path="/contact-us" element={<ContactForm />} />
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
      </Routes>

      {showHeaderFooter && <Footer />}
    </ChakraProvider>
  );
}
