import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Logo from './images/parent-zone-logo.png'

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
            & get £5 when you open and save into an account
          </>
        }
        partner={
          <>
          </>
        }
        quote={
          <>
            We’re delighted to have partnered with Beanstalk to help parents save for their children. We love their app and the tools you can use to make saving easy. Plus, Beanstalk are giving ParentZone mums and dads £5 for every Junior ISA they open and fund. - <strong>ParentZone.</strong>
          </>
        }
      >
        <p>
          Must be genuine new, non-duplicate registrations who enter their details on this page and then downloads, opens and contributes into a Beanstalk Junior ISA 
        </p>

        <p>
          To be eligible for the £5 bonus register with Beanstalk with the same details you enter on this page
        </p>

        <p>
          £5 will be paid into every Junior ISA you open and contribute into
        </p>

        <p>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </p>
      </SignUp>
    </>
  )
}

export default SignUpPage;