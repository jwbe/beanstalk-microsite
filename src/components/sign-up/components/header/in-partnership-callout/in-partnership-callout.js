import React from 'react';
import Theme from './in-partnership-callout.module.scss';
import Logo from './images/partner-logo-placeholder.png';

const InPartnershipCallout = () => (
  <div className={Theme.InPartnershipCallout}>
    <div className={Theme.InPartnershipCallout_Legend_Wrapper}>
      <div className={Theme.InPartnershipCallout_Legend}></div>
    </div>
    <div className={Theme.InPartnershipCallout_LogoContainer}>
      <img className={Theme.InPartnershipCallout_Logo} src={Logo}/>
    </div>
  </div>
)

export default InPartnershipCallout;