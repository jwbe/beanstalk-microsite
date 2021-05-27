import React from 'react';
import Progress from './progress/progress';
import HeaderTheme from './header.module.scss';

import Badges from '../shared-components/badges/badges';

const Header = (props) => {
  let { currentStep, goToStep } = props;
  return (
    <>
      <Progress props={{ currentStep, goToStep }}/>
      <h2 className={HeaderTheme.Heading}>
        See how much you could save in fees
      </h2>
    </>
  )
}

export default Header;