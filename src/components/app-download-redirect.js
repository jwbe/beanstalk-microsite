import React, { Component, useEffect} from 'react';
import { isIOS, isAndroid, isBrowser } from 'react-device-detect';

const AppDownloadRedirect = () => {
  if (typeof window !== `undefined`) {
    function redirectToAppleStore() {
      setTimeout(function() {
        window.location.replace(`https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597`);
      }, 500)
    }

    function redirectToGooglePlay() {
      setTimeout(function() {
        window.location.replace(`https://play.google.com/store/apps/details?id=com.beanstalk`);
      }, 500)
    }

    function redirectToHomepage() {
      setTimeout(function() {
        window.location.replace(`https://beanstalkapp.co.uk`);
      }, 500)
    }

    if(isBrowser){
      useEffect(() => {
        window.gtag('event', `redirected_to_homepage from ${window.location.pathname}`, {
          'event_callback': redirectToHomepage
        });
      }, [])
    }

    if(isIOS){
      useEffect(() => {
        window.gtag('event', `redirected_to_appleStore from ${window.location.pathname}`, {
          'event_callback': redirectToAppleStore
        });
      }, [])
    }

    if(isAndroid){
      useEffect(() => {
        window.gtag('event', `redirected_to_googlePlay from ${window.location.pathname}`, {
          'event_callback': redirectToGooglePlay
        });
      }, [])
    }
  }
  return <></>
} 

export default AppDownloadRedirect;


