import React from 'react';
import CookiesNoticeWrapper from './src/components/cookies-notice-wrapper/cookies-notice-wrapper';

export const wrapPageElement = ({ element, props }) => {
  return (
    <CookiesNoticeWrapper {...props}>{element}</CookiesNoticeWrapper>
  );
};