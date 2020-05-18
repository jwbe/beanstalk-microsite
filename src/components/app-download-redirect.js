import React, { Component } from 'react';
import { isIOS, isAndroid, isBrowser } from 'react-device-detect';


if (typeof window !== `undefined`) {
  if(isBrowser){
    window.location.replace(`https://beanstalkapp.co.uk`);
  }

  if(isIOS){
    window.location.replace(`https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597`);
  }

  else if(isAndroid){
    window.location.replace(`https://play.google.com/store/apps/details?id=com.beanstalk`);
  }
}

const AppDownloadRedirect = () => {
  return <></>
}

export default AppDownloadRedirect;