import React from 'react';
import { isIOS, isAndroid, isBrowser } from 'react-device-detect';

const AppDownloadRedirect = (link) => {
  const EVENT_CODE = link ? link : `homepage`
  if (typeof window !== `undefined`) {
    function redirectToAppleStore() {
      setTimeout(function() {
        window.location.replace(`https://apps.apple.com/gb/app/beanstalk-save-for-your-kids/id1470619597`);
      }, 500)
    }

    function redirectToGooglePlay() {
      setTimeout(function() {
        window.location.replace(`https://play.google.com/store/apps/details?id=com.beanstalk`);
      }, 500)
    }

    function redirectToAddress() {
      let target = target ? target : `https://beanstalkapp.co.uk`
      setTimeout(function() {
        window.location.replace(target);
      }, 500)
    }

    if(isBrowser){
      window.gtag('event', `redirected_to_${EVENT_CODE} from ${window.location.pathname}`, {
        'event_callback': redirectToAddress
      });
    }

    if(isIOS){
      window.gtag('event', `redirected_to_appleStore from ${window.location.pathname}`, {
        'event_callback': redirectToAppleStore
      });
    }

    if(isAndroid){
      window.gtag('event', `redirected_to_googlePlay from ${window.location.pathname}`, {
        'event_callback': redirectToGooglePlay
      });
    }
  }
  return <></>
} 

export default AppDownloadRedirect;


