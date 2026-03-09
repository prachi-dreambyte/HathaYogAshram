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
import HathaYoga from 'components/HomepageOverview/HathaYoga(Traditional)';
import AnatomyPhysiology from 'components/HomepageOverview/Anatomy&Physiology';
import AshtangaYoga from 'components/HomepageOverview/AsthangaYoga';
import Bandhas from 'components/HomepageOverview/Bandhas';
import BasicAerialYoga from 'components/HomepageOverview/BasicArialYogasession';
import BasicAyurvedicRemedies from 'components/HomepageOverview/BasicAyurvedicRemedies';
import BodyAsanaAlignment from 'components/HomepageOverview/Body&AsanaAlignment';
import FlexibilityTechniques from 'components/HomepageOverview/FlexibilityTechniques';
import PracticeAtGanga from 'components/HomepageOverview/Ganga';
import KundaliniYoga from 'components/HomepageOverview/KundaliniYoga';
import MarmaTechniques from 'components/HomepageOverview/MarmaTechniques';
import Meditation from 'components/HomepageOverview/Meditation';
import Mudra from 'components/HomepageOverview/Mudra';
import Pranayama from 'components/HomepageOverview/Pranayama';
import PropsYoga from 'components/HomepageOverview/PropsYoga';
import RYS200Certification from 'components/HomepageOverview/RYS200Internationalcertification';
import Shatkarma from 'components/HomepageOverview/shatkarma';
import SoundHealingSession from 'components/HomepageOverview/SoundHealingSession';
import TeachingMethodology from 'components/HomepageOverview/TeachingMethodology';
import TrackingSelfPractice from 'components/HomepageOverview/Tracking&SelfPractice';
import VedantaPhilosophy from 'components/HomepageOverview/VedantaPhilosophy';
import VedicMantraChanting from 'components/HomepageOverview/VedicMantraChanting';
import VinyasaFlow from 'components/HomepageOverview/VinyasaFlow';
import YogaNidra from 'components/HomepageOverview/YogaNidra';
import YogaTherapy from 'components/HomepageOverview/YogaTherapy';
import AncientYogicPractices from 'components/HomepageOverview/AncientYogicPractices';
import FloatingApplyForm from "components/ApplyForm/FloatingApplyForm";
import WhatsAppButton from 'components/whatsappbutton/WhatsAppButton';
import AyurvedaPage from 'components/Ayurveda/Ayurveda';
import NotFound from 'components/Error404/Error404';


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
        {showHeaderFooter && <FloatingApplyForm />}
        {showHeaderFooter && <WhatsAppButton />}

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
        <Route path="/course/:slug" element={<YogaCourse100 />} />
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
        <Route path="/Hatha-Yoga" element={<HathaYoga />} />
        <Route path="/Anatomy-Physiology" element={<AnatomyPhysiology />} />
        <Route path="/Ancient-Yogic-Practices" element={<AncientYogicPractices />}/>
        <Route path="/Ashtanga-Yoga" element={<AshtangaYoga />} />
        <Route path="/Bandhas" element={<Bandhas />} />
        <Route path="/Basic-Aerial-Yoga" element={<BasicAerialYoga />} />
        <Route path="/Basic-Ayurvedic-Remedies" element={< BasicAyurvedicRemedies />}/>
        <Route path="/Body-Asana" elemenAlignmentt={<BodyAsanaAlignment />} />
        <Route path="/Flexibility-Techniques" element={<FlexibilityTechniques />} />
        <Route path="/Practice-at-Ganga" element={<PracticeAtGanga />}/>
        <Route path="/Kundalini-Yoga" element={<KundaliniYoga />}/>
        <Route path="/MarmaTechniques" element={<MarmaTechniques/>} />
        <Route path="/Meditation" element={< Meditation/>}/>
        <Route path="/Mudra" element={<Mudra/>}/>
        <Route path="/Pranayama" element={<Pranayama/>}/>
        <Route path="/Props-Yoga" element={<PropsYoga/>}/>
        <Route path="/RYS200-Certification" element={<RYS200Certification />}/>
        <Route path="/shatkarma" element={<Shatkarma/>}/>
        <Route path="/Sound-Healing-Session" element={<SoundHealingSession />}/>
        <Route path="/Teaching-Methodology" element={<TeachingMethodology />}/>
        <Route path="/Tracking-Self-Practice" element={<TrackingSelfPractice/>}/>
        <Route path="/Vedanta-Philosophy" element={<VedantaPhilosophy/>}/>
        <Route path="/Vedic-Mantra-Chanting" element={<VedicMantraChanting />}/>
        <Route path="/Vinyasa-Flow" element={<VinyasaFlow/>}/>
        <Route path="/Yoga-Nidra" element={<YogaNidra />}/>
        <Route path="/Yoga-Therapy" element={<YogaTherapy />}/>
        <Route path="/Ayurveda-Page" element={<AyurvedaPage />}/>
         <Route path="*" element={<NotFound/>} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </ChakraProvider>
  );
}
