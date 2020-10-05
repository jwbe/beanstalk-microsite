import React from 'react';
import CookiesNoticeWrapper from './src/components/cookies-notice-wrapper/cookies-notice-wrapper';
//import './src/global/css/smartbanner.min.css';

export const wrapPageElement = ({ element, props }) => {
  return (
    <CookiesNoticeWrapper {...props}>{element}</CookiesNoticeWrapper>
  );
};