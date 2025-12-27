import React from 'react'
import Hero from '../../components/Homepage/Hero'
import YogaStyle from '../../components/Homepage/Yogastyle'
import MeaningSection from './MeaningSection'
import ExpertInstruction from './ExpertInstruction'
import FaqSection from './FaqSection'
import TeacherCarousel from './TeacherCarousel'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import YogaAbout from './YogaAbout'
import YogaJourney from './YogaJourney'

export const Homepage = () => {
  return (
    <>
    <Hero/>
    <YogaAbout/>
    <YogaStyle/>
    <MeaningSection/>
    <ExpertInstruction/>
    <TeacherCarousel/>
    <YogaJourney/>
    <WhyChooseUs/>
    <Testimonials/>
    <FaqSection/>
    </>
  )
}
