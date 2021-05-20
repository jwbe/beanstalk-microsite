import React, { Component } from 'react';

import StepTheme from './step-2.module.scss';

import GiltStudyDiagram from './gilt-study-diagram/gilt-study-diagram';
import CtaButton from '../shared-components/cta-button/cta-button';


class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return(
      <>
        <div className={StepTheme.Container}>
          <p className={StepTheme.Paragraph}>
            Cash CTFs and JISAs do not charge fees as banks make money by paying savers less interest on their cash than they charge to people who borrow from the bank.
          </p>

          <p className={`${StepTheme.Paragraph} ${StepTheme.Paragraph___Last}`}>
            Cash CTFs/JISAs give certainty as you know that the savings will grow by the interest rate but inflation can reduce the effective value of your child's savings.
          </p>

          <GiltStudyDiagram/>

          <p className={StepTheme.Paragraph}>
            Beanstalk is a unique app based stocks and shares JISA that allows you to choose between a cash fund and a shares fund.
          </p>

        </div>
        <CtaButton link={'https://smart.link/e1zksqyenr6pj?site_id=ctfcalccash'}/>

        <div className={StepTheme.Recalculate} onClick={() => {this.props.goToStep(1)}}>
          Recalculate
        </div>

      </>
    )
  }
}

export default Step2;