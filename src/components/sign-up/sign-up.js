import React from 'react';
import { Header as Nav } from '../header/header';
import Footer from '../footer/footer';
import Container from './components/container/container';
import Header from './components/header/header';
import QuoteCredential from './components/quote-credential/quote-credential';
import Heading from './components/heading/heading';
import Callout from './components/callout/callout';
import SmallPrint from './components/small-print/small-print';
import Points from './components/points/points';
import ProcessSteps from '../process-steps/process-steps';
import SecondaryColourSectionOnMobile from './components/secondary-colour-section-on-mobile/secondary-colour-section-on-mobile';
import TermsAndConditions from './components/terms-and-conditions/terms-and-conditions';

const SignUp = ({
  whitelabelId, 
  quote,
  children,
  mainCta,
  secondaryCta,
  partner,
  logo,
  formSmallPrint,
  processSteps,
  processStepsHeading

}) => {

  return (
    <>
      <Nav/>
      <Header {...{
        mainCta: mainCta,
        secondaryCta: secondaryCta,
        partner: partner,
        logo: logo,
        formSmallPrint: formSmallPrint,
        whitelabelId: whitelabelId
      }}
      />
      <Container>
        <QuoteCredential>
          {quote}
        </QuoteCredential>
        {
          processSteps && <ProcessSteps {...{ 
            heading: processStepsHeading && processStepsHeading, 
            processSteps 
          }}/>
        }
        <SecondaryColourSectionOnMobile>
          <Heading>
            The easiest way to build a nest egg for yourself, your children or your grandchildren
          </Heading>
          <Points/>
          <Callout/>
        </SecondaryColourSectionOnMobile>
        {
          children &&
          <TermsAndConditions>
            {children}
          </TermsAndConditions>
        }
      </Container>
      <Footer/>
    </>
  )
}

export default SignUp;