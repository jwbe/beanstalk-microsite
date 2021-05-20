import React from 'react';
import Theme from './badges.module.scss';

import AppleAppStoreBadge from './images/apple-app-store-badge.png';
import GooglePlayStoreBadge from './images/google-play-store-badge.png';

const Badges = () => (
  <div className={Theme.Container}>
    <a className={Theme.Badge} href="https://smart.link/nayw9a5wruuts?site_id=iosctfcalc" target="_blank" rel="noreferrer">
      <img src={AppleAppStoreBadge} width="135" height="40" alt="Apple App Store logo"/>
    </a>
    <a className={Theme.Badge} href="https://smart.link/i0x4v7cw1rb98?site_id=andrctfcalc" target="_blank" rel="noreferrer">
      <img src={GooglePlayStoreBadge} width="135" height="40" alt="Google Play Store logo"/>
    </a>
  </div>
);

export default Badges;