import Section from 'components/ui/section'
import React from 'react'
import {twMerge} from 'tailwind-merge'

const AboutSection = () => {
  return (
    <Section
      className="w-full h-full bg-cover bg-opacity-20 flex flex-col items-center"
      bannerImage="img/cd0.jpeg"
    >
      <h1 className="mt-4 text-secondary text-shadow-lg shadow-black">
        CORDITE
      </h1>
      <p className="text-glow glow-success">
        for the tabletop role-playing game system by{' '}
        <span className="font-semibold text-success">madeleine & friends</span>
      </p>
    </Section>
  )
}

export default AboutSection