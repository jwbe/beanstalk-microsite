import React from 'react'
import Layout from '../templates/homepage'
import LandingOne from '../components/landing-one/homepage'
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

const LandingOnePage = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`Beanstalk - The Savings App Changing The Way Families Save`}</title>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="Discover the easy way to save and invest whatever your family’s shape or budget. The UK saving app with no minimums and low fees. Get the app!" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
        </Helmet>
        <LandingOne/>
      </>
    </Layout>
  )
}

export default LandingOnePage;