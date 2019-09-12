import React from 'react'
import Layout from '../templates/homepage'
import Homepage from '../components/homepage/homepage'
import Head from '../components/head/head';

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Head title='Beanstalk'/>
        <Homepage/>
      </>
    </Layout>
  )
}

export default IndexPage;