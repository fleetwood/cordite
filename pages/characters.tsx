import {useState} from "react"

import Layout from "components/Layout"
import {MenuItem} from "components/ui/leftMenu/menuItemLink"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"
import CastingSection from "components/containers/Casting/castingSection"
import StatSection from "components/containers/Stat/statSection"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      Character
    </Layout>
  )
}

export default HomePage
