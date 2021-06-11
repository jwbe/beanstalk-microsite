import React from 'react'
import JisaGuidePortal from '../../components/jisa-guide-portal/jisa-guide-portal';

const JisaGuidePortalPage = () => (
  <JisaGuidePortal {...{
    formSubmitted: false,
    heading: `Junior ISAs can be a great way to save for your children and grandchildren`,
    subheading: `Request your free guide to learn about:`,
    points: [
      `How Junior ISAs work`,
      `How parents, grandparents and friends can contribute up to the JISA allowance of £9,000 in 2020/21`,
      `The tax advantage of Junior ISAs`,
      `The types of Junior ISAs: cash JISAs and stocks & shares JISAs`,
      `Transferring Child Trust Funds (CTFs) into Junior ISAs`
    ]
  }}/>
)

export default JisaGuidePortalPage;