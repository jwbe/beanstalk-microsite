import React from 'react';
import Progress from './progress/progress';
import HeaderTheme from './header.module.scss';

import Badges from '../shared-components/badges/badges';

const Header = (props) => {
  let { embedded, currentStep, goToStep } = props;
  return (
    <>
      {
        (currentStep === 1 && embedded !== true) &&
        <header className={HeaderTheme.SuperHeader}>
          <h1 className={HeaderTheme.SuperHeading}>
            Transfer your child's CTF/JISA and save
          </h1>
          <p className={HeaderTheme.SubSuperHeading}>
            Save on fees by transferring your child trust fund to Beanstalk. It just <strong>takes a minute</strong> to open an account.
          </p>
          <p className={HeaderTheme.SubSuperHeading}>
            The app helps your family work together to build a pot of money, giving your kids the best possible launch into adult life. You or anyone you invite can contribute whenever you want, and you can see immediately how much your kids have.
          </p>
          <div className={HeaderTheme.Badges}>
            <Badges/>
          </div>
        </header>
      }

      <Progress props={{ currentStep, goToStep }}/>

      <h2 className={HeaderTheme.Heading}>
        See how much you could save in fees
      </h2>
    </>
  )
}

export default Header;