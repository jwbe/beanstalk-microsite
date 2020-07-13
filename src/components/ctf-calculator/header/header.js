import React, { Component } from 'react';
import Progress from './progress/progress';

class Header extends Component {
  render() {
    return(
      <>
        <Progress currentStep={this.props.currentStep}/>
        <h2>
          See how much you could save by transferring  your child's CTF to Beanstalk
        </h2>
      </>
    )
  }
}

export default Header;