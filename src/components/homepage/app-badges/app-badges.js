import React from 'react';
import styles from './app-badges.module.scss';

import googlePlayBadge from './images/google-play-badge.png';
import appStoreBadge from './images/app-store-badge.png';

const AppBadges = () => {
  return (
    <div className={styles.appBadges_wrapper}>
      <div className={styles.appBadges_appBadge}>
        <a href="https://apps.apple.com/us/app/beanstalk-save-invest/id1470619597?ls=1" target="_blank">
          <img src={appStoreBadge} width="135" height="40" alt="Apple app store badge"/>
        </a>
      </div>
      <div>
        <a href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank">
          <img src={googlePlayBadge} width="135" height="40" alt="Google Play store badge"/>
        </a>
      </div>
    </div>
  );
}

export default AppBadges;