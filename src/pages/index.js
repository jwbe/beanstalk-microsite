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
          <meta name="smartbanner:api" content="true"/>
        </Helmet>
        <Homepage/>
        <script dangerouslySetInnerHTML= {{ __html: `(function() {
  window.onload = function() {
    smartbanner.publish();
  }
})();
`}} />`
      </>
    </Layout>
  )
}

export default IndexPage;