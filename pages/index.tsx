import {useState} from "react"

import Layout from "components/Layout"
import {MenuItem} from "components/containers/leftMenu/menuItemLink"
import {userContext} from "context/UserContext"
import {twMerge} from "tailwind-merge"

const HomePage = () => {
  const {data: user, isLoading} = userContext()

  return (
    <Layout>
      Home
    </Layout>
  )
}

export default HomePage
