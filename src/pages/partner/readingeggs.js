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
        quote={
          <>
            We're excited to have teamed up with Beanstalk to help parents save for their children and to help them read. Parents can get 30 days free trial plus up to 34% off a subscription when they join Beanstalk! - <strong>Reading Eggs.</strong>
          </>
        }
      >
        <p>
          Must be genuine new, non-duplicate registrations who enter their details on this page and then download and sign up to the Beanstalk app 
        </p>

        <p>
          Your details will be passed on to Reading Eggs once you have signed up to Beanstalk for them to send you your unique code
        </p>

        <p>
          Offer is 34% off a combined Mathseeds and Reading Eggs 12 month subscription
        </p>

        <p>
          Only one bonus per member.
        </p>

        <p>
          The offer is valid until midnight on the 28th February 2021.
        </p>

        <p>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </p>
      </SignUp>
    </>
  )
}

export default SignUpPage;