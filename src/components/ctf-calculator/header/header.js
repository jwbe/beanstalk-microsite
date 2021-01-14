import React from 'react';
import Progress from './progress/progress';
import HeaderTheme from './header.module.scss';

import Badges from '../../shared/badges/badges';

const Header = ({ currentStep }) => {
  return (
    <>
      <header className={HeaderTheme.SuperHeader}>
        <h1 className={HeaderTheme.SuperHeading}>
          Transfer your CTF to the family app that invests in your kids
        </h1>
        <p className={HeaderTheme.SuperHeading}>
          The easiest way to save on investment fees, transferring your child trust fund to Beanstalk helps your family work together to build a pot of money, giving your kids the best possible launch into adult life.
        </p>
        <p className={HeaderTheme.SuperHeading}>
          No minimum or regular contribution required, you or anyone you invite can contribute whenever you want, and even opt to round-up your purchases to invest little and often.
        </p>
        <div className={HeaderTheme.Badges}>
          <Badges/>
        </div>
      </header>

      <Progress currentStep={{ currentStep }}/>
      <h2 className={HeaderTheme.Heading}>
        See how much you could save in fees by transferring your child's Child Trust Fund or Junior ISA to Beanstalk
      </h2>
    </>
  )
}

export default Header;