import React, { Component } from 'react';

const CustomEntryTracker = () => {
  if (typeof window !== `undefined`) {
    function redirectToHomepage() {
      setTimeout(function() {
        window.location.replace(`https://beanstalkapp.co.uk`);
      }, 2000)
    }

    window.gtag('event', `arrived from ${window.location.pathname}`, {
      'event_callback': redirectToHomepage
    });
  }
  return <></>
} 

export default CustomEntryTracker;