import React from 'react';
import Theme from './confirmation.module.scss';

import AppleAppStoreBadge from './images/apple-app-store-badge.png';
import GooglePlayStoreBadge from './images/google-play-store-badge.png';

const Confirmation = () => (
  <div className={Theme.Wrapper}>
    <h2 className={Theme.Heading}>
      Thank you.
    </h2>
    <p className={Theme.Text}>
      <strong>Now just download the Beanstalk app and<br/>  register with the same email you just gave us.</strong>  <br/>It takes just a couple of minutes to open an account.
    </p>
    <div className={Theme.Badges}>
      <a className={Theme.Badge} href="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597" target="_blank" rel="noreferrer">
        <img src={AppleAppStoreBadge} width="135" height="40" alt="Apple App Store logo"/>
      </a>
      <a className={Theme.Badge} href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank" rel="noreferrer">
        <img src={GooglePlayStoreBadge} width="135" height="40" alt="Google Play Store logo"/>
      </a>
    </div>
  </div>
);

export default Confirmation;