import React from 'react';
import styles from './app-badges.module.scss';

import googlePlayBadge from './images/google-play-badge.png';
import appStoreBadge from './images/app-store-badge.png';

const AppBadges = () => {
  return (
    <div className={styles.appBadges_wrapper}>
      <div className={styles.appBadges_appBadge}>
        <a href="https://smart.link/e1zksqyenr6pj?site_id=home" target="_blank" rel="noreferrer">
          <img src={appStoreBadge} width="135" height="40" alt="Apple app store badge"/>
        </a>
      </div>
      <div>
        <a href="https://smart.link/e1zksqyenr6pj?site_id=home" target="_blank" rel="noreferrer">
          <img src={googlePlayBadge} width="135" height="40" alt="Google Play store badge"/>
        </a>
      </div>
    </div>
  );
}

export default AppBadges;