import React from 'react';
import Hero from '../../components/Homepage/Hero';
import FaqSection from './FaqSection';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import HowToReach from './HowToReach';
import Facilities from './Facilities';
import StudentReviews from './StudentReviews';
import YogaSchool from './YogaSchool';
import FacilitiesSection from './FacilitiesSection';
import HathaAshramSection from './HathaAshramSection';
import ReviewsSection from './ReviewsSection';
import WhatWeOffer from './WhatWeOffer';
import YogaTeacherTraining from './YogaTeacherTraining';
import VedicMantraCourse from './VedicMantraCourse';
import YogaRetreat from './YogaRetreat';
import YogaTeachersSection from './NewSection';
import YogaOverview from './YogaOverview';
import GivingBack from './GivingBack';
import GoogleReviews from './GoogleReviews';
import YogaAlliance from './YoogaAlliance';
import VideoHero from './VideoHero';
import BooksSection from 'components/MyBooks/Bookssection';
import EnrollmentForm from 'components/Enrollmentform/Enrollmentform';

export const Homepage = () => {
  return (
    <>
      <Hero />
      <YogaSchool />
      <EnrollmentForm/>
      <YogaTeacherTraining />
      <YogaRetreat />
      <VedicMantraCourse />
      <YogaTeachersSection />
      <YogaAlliance />
      <BooksSection />
      <YogaOverview />
      <FacilitiesSection />
      <Facilities />
      <HathaAshramSection />
      <WhyChooseUs />
      <Testimonials />
      <StudentReviews />
      <ReviewsSection />
      <WhatWeOffer />
      <VideoHero />
      <FaqSection />
      <GoogleReviews />
      <GivingBack />
      <HowToReach />
    </>
  );
};
