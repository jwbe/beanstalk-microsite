import React from 'react'
import Layout from '../templates/homepage'
import LandingTwo from '../components/landing-two/homepage'
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

const LandingTwoPage = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`Beanstalk - The Easy Way To Save For Your Children`}</title>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="Find out how to save for your kids with Beanstalk. The unique app makes investing for your kids simple to build them a brighter future. Download now!" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
        </Helmet>
        <LandingTwo/>
      </>
    </Layout>
  )
}

export default LandingTwoPage;