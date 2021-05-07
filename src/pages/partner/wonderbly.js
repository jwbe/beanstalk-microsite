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
            & get a free personalised<br/>Wonderbly book when <br/>you save into a <br/>Beanstalk Junior ISA
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
        partner={
          <>
          </>
        }
        formSmallPrint={
          <>
            <strong>Note:</strong> We will only use your email address so Reading Eggs can share the offer code, remind you to register and to record whether you registered.
          </>
        }
        quote={
          <>
            We're excited to have teamed up with Beanstalk to help you save for your children and as a bonus get one of our beautiful, personalised You & The Beanstalk books for free when you make your first saving into a Beanstalk JISA - <strong>Wonderbly</strong>
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