import React from 'react';
import styles from './app-badges.module.scss';

import googlePlayBadge from './images/google-play-badge.png';
import appStoreBadge from './images/app-store-badge.png';

const AppBadges = ({centred}) => {
  return (
    <div className={`${styles.appBadges_wrapper} ${centred ? styles.appBadges_wrapper___Centred : null}`}>
      <div className={styles.appBadges_appBadge}>
        <a href="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597" target="_blank" rel="noreferrer">
          <img src={appStoreBadge} width="135" height="40" alt="Apple app store badge"/>
        </a>
      </div>
      <div>
        <a href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank" rel="noreferrer">
          <img src={googlePlayBadge} width="135" height="40" alt="Google Play store badge"/>
        </a>
      </div>
    </div>
  );
}

export default AppBadges;