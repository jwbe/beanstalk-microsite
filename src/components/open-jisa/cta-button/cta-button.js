import React from 'react';
import { Link } from 'gatsby';
import CtaButtonTheme from './cta-button.module.scss';

const CtaButton = (props) => {
  let { link } = props
  return (
    <div className={CtaButtonTheme.CtaButton_Wrapper}>
      <Link className={CtaButtonTheme.CtaButton} to={link}>Let's get it set up</Link>
    </div>
  );
};

export default CtaButton;