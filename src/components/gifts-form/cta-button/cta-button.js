import React from 'react';
import { Link } from 'gatsby';
import CtaButtonTheme from './cta-button.module.scss';

const CtaButton = () => {
  return (
    <div className={CtaButtonTheme.CtaButton_Wrapper}>
      <button className={CtaButtonTheme.CtaButton} type='submit'>Send the gift</button>
    </div>
  );
};

export default CtaButton;


