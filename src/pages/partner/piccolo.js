import React from 'react'
import SignUp from '../../components/sign-up/sign-up'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Logo from './images/piccolo-logo.png'

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
            £5 top up for your kids'  <br/>savings when you sign<br/> up to Beanstalk<br/>  with Piccolo.
          </>
        }
        partner={
          <>
          </>
        }
        quote={
          <>
            "Our products are all 100% organic, packed full of goodness and approved by me. We believe there's no 'right' way to parent, so we're here to support you and your growing family on your journey every step (and crawl) of the way​" - <strong>Alice, Piccolo Co-founder, infant nutritionist and amazing mum.</strong>
          </>
        }
      >

        <li>Users must be genuine new, non-duplicate registrations who enter their details on this page and then opens and saves into a Beanstalk Junior ISA or ISA.</li>

        <li> To be eligible for the £5 bonus register with Beanstalk with the same details you entered on the Piccolo Club.</li>

        <li>£5 will be paid into every Junior ISA you open and contribute into. If an ISA is opened and saved into £5 will be paid into your KidStart account due to HMRC rules.</li>

        <li>Offer available until 23:59 8th September 2021.</li>

        <li>If account cancelled within 30 days of opening, we will not pay bonus</li>

        <li>If account is transferred within 3 months of opening, we will levy a transfer charge of £10.</li>

        <li>
          Full Beanstalk T&Cs can be viewed <Link to="/terms-and-conditions-governing-beanstalk">here</Link>. Beanstalk reserve the right to withdraw or amend this offer at any time.
        </li>
      </SignUp>
    </>
  )
}

export default SignUpPage;