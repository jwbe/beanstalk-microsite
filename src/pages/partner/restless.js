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
        partner={
          <>
            from Rest Less
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
        <li>
          Users must be genuine new, non-duplicate registrations who enter their details on this page and then download and register with the same details on the Beanstalk app
        </li>

        <li>
          Your details will be passed on to Reading Eggs once you have signed up to Beanstalk for them to send you your unique code
        </li>

        <li>
          Offer is 34% off a combined Mathseeds and Reading Eggs 12 month subscription
        </li>

        <li>
          Only one bonus per member.
        </li>

        <li>
          The offer is valid until midnight on the 28th February 2021.
        </li>

        <li>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </li>
      </SignUp>
    </>
  )
}

export default SignUpPage;