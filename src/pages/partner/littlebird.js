


import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Logo from './images/the-family-pass-logo.jpg'

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
            & get £6 when you open <br/>& save into an account
          </>
        }
        partner={
          <>
          </>
        }
        quote={
          <>
            We're thrilled to have teamed up with Beanstalk to help LittleBird Family Pass members save for their children's futures. You will get £6 for every Beanstalk Junior ISA and ISA you open. - <strong>LittleBird Family Pass.</strong>
          </>
        }
      >

        <li>Users must be genuine new, non-duplicate registrations who enter their details on this page and then opens and saves into a Beanstalk Junior ISA or ISA.</li>

        <li>To be eligible for the £6 bonus register with Beanstalk with the same details you enter on this page.</li>

        <li>£6 will be paid into every Junior ISA you open and contribute into. If an is ISA opened and saved into £6 will be paid into your KidStart account due to HMRC rules.</li>

        <li>Bonus will be paid within two weeks of when you make your first contribution into your open Beanstalk account</li>

        <li>Offer available until the 16th May 2021.</li>

        <li>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </li>
      </SignUp>
    </>
  )
}

export default SignUpPage;