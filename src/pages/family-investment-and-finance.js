import React from 'react'
import Layout from '../templates/homepage'
import LandingThree from '../components/landing-three/homepage'
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

const LandingThreePage = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`Beanstalk - The Family Investment App For You`}</title>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="The easiest way to save for children, Beanstalk helps families invest together. All the family can help with your children’s finances. Get the app!" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
        </Helmet>
        <LandingThree/>
      </>
    </Layout>
  )
}

export default LandingThreePage;