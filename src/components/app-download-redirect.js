import React, { Component } from 'react';
import { isIOS, isAndroid, isBrowser } from 'react-device-detect';

const AppDownloadRedirect = () => {
  if (typeof window !== `undefined`) {
    function redirectToAppleStore() {
      setTimeout(function() {
        window.location.replace(`https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597`);
      }, 2000)
    }

    function redirectToGooglePlay() {
      setTimeout(function() {
        window.location.replace(`https://play.google.com/store/apps/details?id=com.beanstalk`);
      }, 2000)
    }

    function redirectToHomepage() {
      setTimeout(function() {
        window.location.replace(`https://beanstalkapp.co.uk`);
      }, 2000)
    }

    if(isBrowser){
      window.gtag('event', `redirected_to_Homepage from ${window.location.pathname}`, {
        'event_callback': redirectToHomepage
      });
    }

    if(isIOS){
      window.gtag('event', `redirected_to_appleStore from ${window.location.pathname}`, {
        'event_callback': redirectToAppleStore
      });
    }

    if(isAndroid){
      window.gtag('event', `directed_to_googlePlay from ${window.location.pathname}`, {
        'event_callback': redirectToGooglePlay
      });
    }
  }
  return <></>
} 

export default AppDownloadRedirect;