import React from 'react';
import { Header as Nav } from '../header/header'
import Container from './components/container/container';
import Header from './components/header/header';
import QuoteCredential from './components/quote-credential/quote-credential';
import Heading from './components/heading/heading';
import Callout from './components/callout/callout';
import SmallPrint from './components/small-print/small-print';
import Points from './components/points/points';
import SecondaryColourSectionOnMobile from './components/secondary-colour-section-on-mobile/secondary-colour-section-on-mobile';
import TermsAndConditions from './components/terms-and-conditions/terms-and-conditions';

const SignUp = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Container>
        <QuoteCredential>
          We're excited to have teamed up with Beanstalk to help parents save for their children and to help them read. Parents can get 30 days free trial plus up to 34% off a subscription when they join Beanstalk! - <strong>Reading Eggs.</strong>
        </QuoteCredential>
        <SecondaryColourSectionOnMobile>
          <Heading>
            The easiest way to build a nest egg for yourself,  your children or your grandchildren
          </Heading>
          <Points/>
          <Callout/>
          <TermsAndConditions>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lorem at mauris consectetur lacinia. Vivamus rutrum gravida faucibus.
            </p>
            <p>
              Vivamus quis feugiat eros, id consectetur augue. In eu rutrum tellus. Integer at nibh tristique, scelerisque enim eget, sagittis mauris. Sed laoreet scelerisque massa, et fringilla enim accumsan non.
            </p>
            <p>
              Vivamus quis feugiat eros, id consectetur augue. In eu rutrum tellus. Integer at nibh tristique, scelerisque enim eget, sagittis mauris. Sed laoreet scelerisque massa, et fringilla enim accumsan non.
            </p>
            <p>
              Sed laoreet scelerisque massa, et fringilla enim accumsan non. Nam et elit sit amet sapien ornare elementum id id mi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lorem at mauris consectetur lacinia. Vivamus rutrum gravida faucibus.
            </p>
            <p>
              Vivamus quis feugiat eros, id consectetur augue. In eu rutrum tellus. Integer at nibh tristique, scelerisque enim eget, sagittis mauris. Sed laoreet scelerisque massa, et fringilla enim accumsan non.
            </p>
            <p>
              Vivamus quis feugiat eros, id consectetur augue. In eu rutrum tellus. Integer at nibh tristique, scelerisque enim eget, sagittis mauris. Sed laoreet scelerisque massa, et fringilla enim accumsan non.
            </p>
            <p>
              Sed laoreet scelerisque massa, et fringilla enim accumsan non. Nam et elit sit amet sapien ornare elementum id id mi.
            </p>
          </TermsAndConditions>
        </SecondaryColourSectionOnMobile>
        <SmallPrint/>
      </Container>
    </>
  )
}

export default SignUp;