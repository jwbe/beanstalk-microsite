import React from 'react';
import CookiesNotice from '../cookies-notice/cookies-notice';

const CookiesNoticeWrapper = ({children, props}) => (
  <>
    {children}
    <CookiesNotice/>
  </>
);

export default CookiesNoticeWrapper;