import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Logo from './images/reading-eggs-logo.png'

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
            & get 34% off a<br/> 12 month subscription
          </>
        }
        partner={
          <>
            from Reading Eggs
          </>
        }
        formSmallPrint={
          <>
            We will use your email address to send you the Reading Eggs offer code.
          </>
        }
        quote={
          <>
            We're excited to have teamed up with Beanstalk to help parents save for their children and to help their reading and maths skills. Parents can get 34% off a subscription to Reading Eggs and Mathseeds when they join Beanstalk! - <strong>Reading Eggs.</strong>
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