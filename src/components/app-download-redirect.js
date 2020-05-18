import React, { Component } from 'react';
import { isIOS, isAndroid, isBrowser } from 'react-device-detect';

if (typeof window !== `undefined`) {
  
  var redirectFired = false;

  function redirectToAppleStore() {
    if (!redirectFired) {
      redirectFired = true;
      window.location.replace(`https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597`);
    }
  }

  function redirectToGooglePlay() {
    if (!redirectFired) {
      redirectFired = true;
      window.location.replace(`https://play.google.com/store/apps/details?id=com.beanstalk`);
    }
  }

  if(isBrowser){
    window.location.replace(`https://beanstalkapp.co.uk`);
  }

  if(isIOS){
    window.gtag('event', 'directed_to_appleStore', {
      'event_callback': redirectToAppleStore
    });
  }

  if(isAndroid){
    window.gtag('event', 'directed_to_googlePlay', {
      'event_callback': redirectToGooglePlay
    });
  }

}

const AppDownloadRedirect = () => {
  return <></>
}

export default AppDownloadRedirect;