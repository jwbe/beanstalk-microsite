import React from 'react'
import Layout from '../templates/homepage'
import Homepage from '../components/homepage/homepage'
import Head from '../components/head/head';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`Beanstalk`}</title>
          <script src={withPrefix('smartbanner.min.js')} type="text/javascript" />
          <meta name="apple-itunes-app" content="app-id=1470619597" />
          <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png"/>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
          <meta name="smartbanner:title" content="Beanstalk App"/>
          <meta name="smartbanner:author" content="KidStart Ltd"/>
          <meta name="smartbanner:price" content="FREE"/>
          <meta name="smartbanner:price-suffix-apple" content=" - On the App Store"/>
          <meta name="smartbanner:price-suffix-google" content=" - In Google Play"/>
          <meta name="smartbanner:icon-apple" content="https://beanstalkapp.co.uk/images/beanstalk-icon.png"/>
          <meta name="smartbanner:icon-google" content="https://beanstalkapp.co.uk/images/beanstalk-icon.png"/>
          <meta name="smartbanner:button" content="VIEW"/>
          <meta name="smartbanner:button-url-apple" content="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597"/>
          <meta name="smartbanner:button-url-google" content="https://play.google.com/store/apps/details?id=com.beanstalk"/>
          <meta name="smartbanner:enabled-platforms" content="android,ios"/>
          <meta name="smartbanner:close-label" content="Close"/>
        </Helmet>
        <Homepage/>
      </>
    </Layout>
  )
}

export default IndexPage;