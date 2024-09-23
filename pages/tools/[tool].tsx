import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ToolContainer from '../../components/ToolContainer'

const ToolPage: NextPage = () => {
  const router = useRouter()
  const { tool } = router.query

  return (
    <Layout>
      <ToolContainer />
    </Layout>
  )
}

export default ToolPage