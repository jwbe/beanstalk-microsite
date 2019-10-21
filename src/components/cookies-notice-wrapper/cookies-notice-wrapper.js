import React from 'react';

import CookiesNotice from '../cookies-notice/cookies-notice';

const CookiesNoticeWrapper = ({children}) => (
  <>
    {children}
    <CookiesNotice/>
  </>
);

export default CookiesNoticeWrapper;