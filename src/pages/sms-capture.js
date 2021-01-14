import React from 'react';
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