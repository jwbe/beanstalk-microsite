import React from 'react';
import SmsCapture from '../components/sms-capture/sms-capture';
import { Header as Nav } from'../components/header/header';
import Footer from '../components/footer/footer';
import Points from '../components/shared/points/points';
import Heading from '../components/shared/heading/heading';
import Container from '../components/shared/container/container';
import SecondaryColourSectionOnMobile from '../components/shared/secondary-colour-section-on-mobile/secondary-colour-section-on-mobile';

const SmsCapturePage = () => {
  return (
    <>
      <Nav/>
      <SmsCapture/>
      <Container>
        <SecondaryColourSectionOnMobile>
          <Heading>
            The easiest way to build a nest egg for yourself,  your children or your grandchildren
          </Heading>
          <Points/>
        </SecondaryColourSectionOnMobile>
      </Container>
      <Footer/>
    </>
  )
}

export default SmsCapturePage;