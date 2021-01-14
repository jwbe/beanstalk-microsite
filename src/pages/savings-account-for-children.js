import React from 'react';
import { Helmet } from 'react-helmet';

import SmsCapture from '../components/sms-capture/sms-capture';
import { Header as Nav } from'../components/header-stripped/header';
import Footer from '../components/footer/footer';
import Points from '../components/shared/points/points';
import Heading from '../components/shared/heading/heading';
import Container from '../components/shared/container/container';
import SecondaryColourSectionOnMobile from '../components/shared/secondary-colour-section-on-mobile/secondary-colour-section-on-mobile';
import Callout from '../components/shared/secondary-colour-section-on-mobile/callout/callout';

const SmsCapturePage = () => {
  return (
    <>
      <Helmet>
        <title>{`Savings and investment accounts for children | Beanstalk`}</title>
        <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
        <meta name="description" content="Discover the easy way to save and invest whatever your family’s shape or budget. The UK saving app with no minimums and low fees. Get the app!" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
      </Helmet>
      <Nav/>
      <SmsCapture/>
      <Container>
        <SecondaryColourSectionOnMobile>
          <Heading>
            Changing the way families save and invest for their children and grandchildren
          </Heading>
          <Points/>
          <Callout/>
        </SecondaryColourSectionOnMobile>
      </Container>
      <Footer/>
    </>
  )
}

export default SmsCapturePage;