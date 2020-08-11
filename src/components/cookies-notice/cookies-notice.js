import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from './cookies-notice.module.scss';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, MOBILE_SIZES, DESKTOP_BACKGROUNDS } from '../button/button';

const CookiesNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  const dismissNotice = () => {
    setIsVisible(false);
    window.localStorage.setItem('BeanstalkCookiesNotice', true)
  }

  const getShownStatus = () => {
    return window.localStorage.getItem('BeanstalkCookiesNotice');
  }

  const onAppPage = () => {
    return window.location.href.slice(-3) === 'app'
  }

  return (
    onAppPage() ? null :
    !getShownStatus() ?
    <div className={isVisible ? styles.CookiesNotice_wrapper : `${styles.CookiesNotice_wrapper} ${styles.CookiesNotice_wrapper___hidden}`}>
      <div className={styles.CookiesNotice}>
        <h2 className={styles.CookiesNotice_header}>
          Your Privacy
        </h2>
        <p className={styles.CookiesNotice_info}>
          We use cookies to improve our user's experience on the site. <br className={styles.CookiesNotice_break}/>To find out more, read our <Link to='/data-privacy-and-cookies'>cookie policy</Link>.
        </p>
        <Button 
          desktopBackground={DESKTOP_BACKGROUNDS.WHITE}
          desktopColour={DESKTOP_COLOURS.PRIMARY}
          desktopSize={DESKTOP_SIZES.LARGE}
          mobileSize={MOBILE_SIZES.MEDIUM}
          clickHandle={dismissNotice}>Ok</Button>
      </div>
    </div> 
    :
    null
  );
};

export default CookiesNotice;