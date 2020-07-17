import React, { Component } from 'react';
import Question from '../shared-components/question/question';
import SmallButton from '../shared-components/small-button/small-button';

import StepTheme from './step-1.module.scss';

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <>
        <Question 
        number={'1'} 
        topsFlushOnMobile={true}>
          Does your child have a cash or stakeholder / stocks & shares account?
        </Question>

        <div className={StepTheme.Buttons}>
          <SmallButton handler={() => {this.props.goToStep(2)}}>
            Cash
          </SmallButton>

          <SmallButton handler={() => {this.props.goToStep(3)}}>
            Stakeholder / Equity
          </SmallButton>
        </div>
      </>
    )
  }
}

export default Step1;