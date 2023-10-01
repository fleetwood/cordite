import Section from 'components/ui/section'
import React from 'react'
import {classNameProps} from 'types'


const HomeSection
 = (props:classNameProps) => {
  return (
    <Section className={props.className} title="Character Expression" titleClass="text-secondary">
      <>
        <p>
          Increasing your stats or getting better weapons is not the only means
          of progression in Cordite; you also accrue Character EXP(ression)
          points as you increase your stats (or through other DM-defined
          methods) which can be spent in a set of expression trees.
        </p>
        <p>
          EXP trees are only unlocked once you have at least a 1 in their stat,
          except the universal tree, which is always available. You are given an
          EXP point every level; this point can be placed in any tree you have
          unlocked. Each time you level a stat, you're granted an additional EXP
          point to spend ONLY in that stat's tree. You can spend no more than 10
          points in a tree - any excess can be spent in another available tree.
        </p>
        <p>
          EXP trees are divided into 3 tiers, with the 3rd tier being the
          strongest. Tier 1 is immediately accessible, tier 2 is only accessible
          after reaching level 3, and tier 3 is available after reaching level
          5. Each tree also has minimum stat modifier requirements to access the
          higher tiers, as well as limits on how many points you can spend in
          their higher tiers.
        </p>
        <p>Now, onto the trees!</p>
      </>
    </Section>
  )
}

export default HomeSection
