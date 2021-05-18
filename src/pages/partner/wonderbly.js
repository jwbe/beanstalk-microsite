import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import Logo from './images/wonderbly-logo.png'

import thumbnailThree from './images/wonderbly/menu-thumbnail.png'
import thumbnailFour from './images/wonderbly/ella-and-the-beanstalk.png'

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
            & get a free personalised<br/>Wonderbly book* when <br/>you save into a <br/>Beanstalk Junior ISA
          </>
        }
        processSteps={
          [
            {
              id: 2,
              thumbnail: thumbnailThree,
              copy: 'Open a Junior ISA for your child and make your top-up using one of the tools'
            },
            {
              id: 3,
              thumbnail: thumbnailFour,
              copy: `We'll email you a unique code to claim your free book`
            }
          ]
        }
        formSmallPrint={
          <>
            <strong>Note:</strong> Your email will be used to record your registration for the offer and to send information on Beanstalk.
          </>
        }
        partner={
          <>
          </>
        }
        quote={
          <>
            We're excited to have teamed up with Beanstalk to help you save for your children and as a bonus get one of our beautiful, personalised You & The Beanstalk books for free when you make your first saving into a Beanstalk JISA - <strong>Wonderbly</strong>
          </>
        }

      >
        <li>
          * Your unique voucher code is only valid on a softcover copy of You & The Beanstalk book and can’t be exchanged in part or in full for cash. Change can't be given and it can’t be used for multiple purchases.
        </li>

        <li>
          Users must be genuine new, non-duplicate registrations who enter their details on this page and then download and register with the same details on the Beanstalk app
        </li>

        <li>
          Unique code for the Wonderbly You & The Beanstalk softcover book will be emailed to you within two weeks of Junior ISA being open and funded.
        </li>

        <li>
          Code will cover cost of a You & The Beanstalk softcover book RRP £21.99. You will have to cover cost of postage from £3.99.
        </li>

        <li>
          The offer is valid until midnight on the 4th July 2021.
        </li>

        <li>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </li>
      </SignUp>
    </>
  )
}

export default SignUpPage;