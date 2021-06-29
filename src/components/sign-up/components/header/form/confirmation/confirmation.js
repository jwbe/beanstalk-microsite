import React from 'react';
import Theme from './confirmation.module.scss';

import AppleAppStoreBadge from './images/apple-app-store-badge.png';
import GooglePlayStoreBadge from './images/google-play-store-badge.png';

const Confirmation = (props) => {
  const { responseStatus } = props;

  const ResponseStatus = (props) => {
    const { status } = props;
    switch(status) {
      case `UserCreatedOk`:
        return (
          <>
            <h2 className={Theme.Heading}>
              Great!
            </h2>

            <p className={Theme.Text}>
              <strong>To complete your registration, download the<br/> Beanstalk app and log in with the same email address. </strong><br/> Check your email for your temporary password.
            </p>
          </>
        )
        break;
      case `DuplicateEmail`:
        return (
          <>
            <h2 className={Theme.Heading}>
              You are already registered
            </h2>
            <p className={Theme.Text}>
              <strong>Download the Beanstalk app and then log in / reset your password on the app.</strong>
            </p>
          </>
        )
        break;
      case `DuplicateUserName`:
        return (
          <>
            <h2 className={Theme.Heading}>
              You are already registered
            </h2>
            <p className={Theme.Text}>
              <strong>Download the Beanstalk app and then log in / reset your password on the app.</strong>
            </p>
          </>
        )
    }
  }
  return (
    <div className={Theme.Wrapper}>
      <ResponseStatus {...{
        status: responseStatus
      }}/>
      <div className={Theme.Badges}>
        <a className={Theme.Badge} href="https://smart.link/nayw9a5wruuts?site_id=iospartner" target="_blank" rel="noreferrer">
          <img src={AppleAppStoreBadge} width="135" height="40" alt="Apple App Store logo"/>
        </a>
        <a className={Theme.Badge} href="https://smart.link/i0x4v7cw1rb98?site_id=andrpartner" target="_blank" rel="noreferrer">
          <img src={GooglePlayStoreBadge} width="135" height="40" alt="Google Play Store logo"/>
        </a>
      </div>
    </div>
  )
};

export default Confirmation;