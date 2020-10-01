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
          <script src={withPrefix('smartbanner.min.js')} type="text/javascript" />
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="Discover the easy way to save and invest whatever your family’s shape or budget. The UK saving app with no minimums and low fees. Get the app!" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
          <meta name="smartbanner:title" content="Beanstalk App"/>
          <meta name="smartbanner:author" content="Beanstalk"/>
          <meta name="smartbanner:price" content={"Free"}/>
          <meta name="smartbanner:price-suffix-google" content=" - In Google Play"/>
          <meta name="smartbanner:price-suffix-apple" content=" - on the App Store"/>
          <meta name="smartbanner:icon-google" content="https://beanstalkapp.co.uk/images/beanstalk-icon.png"/>
          <meta name="smartbanner:icon-apple" content="https://beanstalkapp.co.uk/images/beanstalk-icon.png"/>
          <meta name="smartbanner:button" content="View"/>
          <meta name="smartbanner:button-url-google" content="https://play.google.com/store/apps/details?id=com.beanstalk"/>
          <meta name="smartbanner:button-url-apple" content="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597"/>
          <meta name="smartbanner:enabled-platforms" content="android, ios"/>
          <meta name="smartbanner:close-label" content="Close"/>
        </Helmet>
        <LandingOne/>
      </>
    </Layout>
  )
}

export default LandingOnePage;