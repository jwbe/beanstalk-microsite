import React from 'react';
import { Link } from 'gatsby';
import CtaButtonTheme from './cta-button.module.scss';

const CtaButton = () => {
  return <Link className={CtaButtonTheme.CtaButton} to=''>Open a Beanstalk account</Link>
}

export default CtaButton;