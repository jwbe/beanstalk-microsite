import React from 'react';
import Theme from './quote-credential.module.scss';
import Iphone from '../iphone/iphone';

const QuoteCredential = ({ children }) => (
  <div className={Theme.QuoteContainer}>
    <div className={Theme.Iphone}>
      <Iphone/>
    </div>
    <div className={Theme.Inner}>
      <div className={`${Theme.Speechmark} ${Theme.Speechmark__MobileOnly}`}></div>
      <p className={Theme.Quote}>
        {children}
      </p>
      <div className={Theme.Speechmark}></div>
    </div>
  </div>
);

export default QuoteCredential;