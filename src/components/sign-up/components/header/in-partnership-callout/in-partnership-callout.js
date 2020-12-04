import React from 'react';
import Theme from './in-partnership-callout.module.scss';
import PlaceholderLogo from './images/partner-logo-placeholder.png';

const InPartnershipCallout = ({
  logo
}) => (
  <div className={Theme.InPartnershipCallout}>
    <div className={Theme.InPartnershipCallout_Legend_Wrapper}>
      <div className={Theme.InPartnershipCallout_Legend}></div>
    </div>
    <div className={Theme.InPartnershipCallout_LogoContainer}>
      <img className={Theme.InPartnershipCallout_Logo} src={logo}/>
    </div>
  </div>
)

export default InPartnershipCallout;