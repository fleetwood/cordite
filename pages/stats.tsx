import {useState} from "react"

import Layout from "components/Layout"
import {MenuItem} from "components/containers/leftMenu/menuItemLink"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"
import StatSection from "components/containers/Stat/statSection"
import CastingSection from "components/containers/Casting/castingSection"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      <StatSection />
      <CastingSection />
    </Layout>
  )
}

export default HomePage
