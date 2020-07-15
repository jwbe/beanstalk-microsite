import React from 'react';
import { Link } from 'gatsby';
import CtaButtonTheme from './cta-button.module.scss';

const CtaButton = () => (
  <div className={CtaButtonTheme.CtaButton_Wrapper}>
    <Link className={CtaButtonTheme.CtaButton} to='/from-ctf-calculator'>Open a Beanstalk account</Link>
  </div>
)

export default CtaButton;