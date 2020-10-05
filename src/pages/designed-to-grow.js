import React from 'react'
import Layout from '../templates/homepage'
import DesignedForGrowthSimple from '../components/designed-for-growth-simple/designed-for-growth-simple'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import { Header, HEADER_VARIANT } from '../components/header-stripped/header'
import { Main, LAYOUT_VARIANT } from  '../components/main/main'
import AppBadges from '../components/app-badges/app-badges'

import Footer from '../components/footer-stripped/footer'

const DesignedForGrowthSimplePage = () => {
  return (
    <Layout>
        <>
        <Helmet>
          <title>{`Designed for growth`}</title>
          <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
          <meta name="description" content="Beanstalk is an app-based JISA that helps families build a pot of money for their children's futures. Making saving and investing accessible for all." />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
          <link rel="canonical" href="https://beanstalkapp.co.uk/designed-for-growth" />
        </Helmet>

        <Header plain={true}/>

        <Main layoutVariant={LAYOUT_VARIANT.PLAIN_PAGE}>
          <AppBadges centred/>
          <DesignedForGrowthSimple/>
          <AppBadges centred/>
        </Main>

        <Footer/>

        </>
    </Layout>
  )
}

export default DesignedForGrowthSimplePage;