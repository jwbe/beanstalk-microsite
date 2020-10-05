import React from 'react'
import Layout from '../templates/homepage'
import Homepage from '../components/homepage/homepage'
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>{`The Family App That Invests In Your Kids | Beanstalk`}</title>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="Beanstalk is an app-based JISA that helps families build a pot of money for their children's futures. Making saving and investing accessible for all." />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
        </Helmet>
        <Homepage/>
      </>
    </Layout>
  )
}

export default IndexPage;