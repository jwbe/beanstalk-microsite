import React, { Component } from 'react';
import Progress from './progress/progress';
import HeaderTheme from './header.module.scss';

class Header extends Component {
  render() {
    return(
      <>
        <Progress currentStep={this.props.currentStep}/>
        <h2 className={HeaderTheme.Heading}>
          See how much you could save by transferring  your child's CTF to Beanstalk
        </h2>
      </>
    )
  }
}

export default Header;