import React from 'react'
import Hero from '../../components/Homepage/Hero'
import YogaStyle from '../../components/Homepage/Yogastyle'
import MeaningSection from './MeaningSection'
import ExpertInstruction from './ExpertInstruction'
import FaqSection from './FaqSection'

export const Homepage = () => {
  return (
    <>
    <Hero/>
    <YogaStyle/>
    <MeaningSection/>
    <ExpertInstruction/>
    <FaqSection/>
    </>
  )
}
