import React, { Component } from 'react';
import Progress from './progress/progress';
import HeaderTheme from './header.module.scss';

const Header = ({ currentStep }) => {
  return (
    <>
      <Progress currentStep={{ currentStep }}/>
      <h2 className={HeaderTheme.Heading}>
        See how much you could save in fees by transferring your child's Child Trust Fund or Junior ISA to Beanstalk
      </h2>
    </>
  )
}

export default Header;