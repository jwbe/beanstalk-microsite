import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Logo from './images/restless-logo.png'

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>{`The Family App That Invests In Your Kids | Beanstalk`}</title>
        <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
        <meta name="description" content="Beanstalk is an app-based JISA that helps families build a pot of money for their children's futures. Making saving and investing accessible for all." />
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
      </Helmet>
      <SignUp
        logo={Logo}
        mainCta={
          <>
            Join Beanstalk
          </>
        }
        secondaryCta={
          <>
            & save for yourself<br/> & the children you love 
          </>
        }
        processSteps
        formSmallPrint={
          <>
            <strong>Note:</strong> We will only use your email address so Rest Less can share the offer code, remind you to register and to record whether you registered.
          </>
        }
        quote={
          <>
            We've teamed up with Beanstalk as it's a revolutionary new app-based Junior ISA and ISA that makes it easy to save for yourself and the children you love. <strong>Rest Less</strong>
          </>
        }
      >
      </SignUp>
    </>
  )
}

export default SignUpPage;