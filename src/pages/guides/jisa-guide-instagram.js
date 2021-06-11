import React from 'react'
import JisaGuidePortal from '../../components/jisa-guide-portal/jisa-guide-portal';

const JisaGuidePortalPage = () => (
  <JisaGuidePortal {...{
    formSubmitted: true,
    heading: `Beanstalk is a unique family saving app that makes building a nest egg easy`,
    subheading: `What makes Beanstalk so unique?`,
    points: [
      `Save for yourself and your children from one app`,
      `Link family and friends to contribute too`,
      `Low fees and no contribution needed to open an account`,
      `Many ways to save including KidStart and round ups`
    ]
  }}/>
)

export default JisaGuidePortalPage;