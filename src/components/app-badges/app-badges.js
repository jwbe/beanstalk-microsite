import React from 'react'
import styles from './app-badges.module.scss'

import AppStoreLogo from './images/app-store-logo.png'
import GooglePlayLogo from './images/google-play-logo.png'

const AppBadges = () => (
  <div className={styles.AppBadges}>
    <div className={styles.AppBadges_Inner}>
      <a href="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597" target="_blank" rel="noreferrer">
        <img className={styles.AppBadges_Badge} src={AppStoreLogo} width="162" height="48"/>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank" rel="noreferrer">
        <img className={styles.AppBadges_Badge} src={GooglePlayLogo} width="162" height="48"/>
      </a>
    </div>
  </div>
)

export default AppBadges