import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import ToolContainer from '../components/ToolContainer'

const Home: NextPage = () => {
  return (
    <Layout>
      <ToolContainer />
    </Layout>
  )
}

export default Home