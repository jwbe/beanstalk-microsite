import React from 'react';
import Theme from './heading.module.scss';

const DEFAULT_MAIN_CTA = 'Join Beanstalk';
//const PARA_ONE = 'The easiest way to save for children, Beanstalk helps families work together to build a pot of money to give their kids the best possible launch into adult life.';
const PARA_ONE= 'The easiest way to save for children, Beanstalk helps families work together to save for their kids’ future.';

const PARA_TWO = 'The family app that invests in your kids.';

const Header = ({
  mainCta
}) => (
  <div className={Theme.Container}>
    <h1 className={Theme.MainCta}>
      { mainCta ? mainCta : DEFAULT_MAIN_CTA }
    </h1>
    <p>
      { PARA_ONE }
    </p>
    <p>
      { PARA_TWO }
    </p>
  </div>
);

export default Header;