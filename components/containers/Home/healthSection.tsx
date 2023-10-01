import Section from 'components/ui/section'
import React from 'react'
import {twMerge} from 'tailwind-merge'

const HealthSection = () => {
  return (
    <Section
      className="w-full h-full bg-cover"
      title="Health"
      titleClass="text-secondary"
    >
      <p>
        Hit points are called Will in my system. Taking damage is not just
        physical injury; it is primarily your will to fight eroding through the
        stress of combat.
      </p>
    </Section>
  )
}

export default HealthSection