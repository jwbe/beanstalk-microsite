import React, { Component } from 'react'
import Header from './header/header'
import Step1 from './step-1/step-1'
import Step2 from './step-2/step-2'
import Step3 from './step-3/step-3'
import Step4 from './step-4/step-4'
import SmsCapture from '../sms-capture/sms-capture'
import Callout from '../shared/callout/callout'

import CtfCalculatorTheme from './ctf-calculator.module.scss'

class CtfCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      ctfValue: 10000,
      childAge: 8,
      firstSelectionId: 1,
      secondSelectionId: 0
    }

    this._goToStep= this._goToStep.bind(this)
  }

  _goToStep = (index) => {
    let currentStep = this.state.currentStep;

    currentStep = index;

    this.setState({
      currentStep: currentStep
    })
  }


  _updateProviderSelection = (id) => {
    let firstSelectionId = this.state.firstSelectionId;

    firstSelectionId = id;

    this.setState({
      firstSelectionId: firstSelectionId
    })
  }

  _updateCtfValue = (val) => {
    let ctfValue = this.state.ctfValue;

    ctfValue = val;

    this.setState({
      ctfValue: ctfValue
    })
  }

  _updateChildAge = (val) => {
    let childAge = this.state.childAge;

    childAge = val;

    this.setState({
      childAge: childAge
    })
  }

  render() {
    return(
      <>
        <SmsCapture {...{
          embedded: true,
          mainCta: `Customers save on average £150+*`,
          paraOne: () => (<>Save on investment fees by transferring your child trust fund to Beanstalk. <strong>It just takes a minute to open an account.</strong></>),
          paraTwo: `The app helps your family work together to build a pot of money, giving your kids the best possible launch into adult life.`
        }}/>
        
        <div className={CtfCalculatorTheme.Container}>
          <Header
            currentStep={this.state.currentStep}
            goToStep={this._goToStep}/>
          <Step1 
            currentStep={this.state.currentStep} 
            goToStep={this._goToStep}/>
          <Step2 
            currentStep={this.state.currentStep} 
            goToStep={this._goToStep}/>
          <Step3 
            currentStep={this.state.currentStep} 
            goToStep={this._goToStep} 
            updateProviderSelection={this._updateProviderSelection}
            providerSelection={this.state.firstSelectionId}/>
          <Step4 
            currentStep={this.state.currentStep}
            goToStep={this._goToStep}
            updateCtfValue={this._updateCtfValue}
            updateChildAge={this._updateChildAge}
            childAge={this.state.childAge}
            ctfValue={this.state.ctfValue}
            firstSelectionId={this.state.firstSelectionId}
            secondSelectionId={this.state.secondSelectionId}
            />
            <div className={CtfCalculatorTheme.Callout}>
              <Callout/>
            </div>
            <div className={CtfCalculatorTheme.Smallprint}>
              *A 13 year old with £2500 in a stakeholder CTF charging 1.5% would save ~£115 in fees over the remaining life of the account. The funds we offer have their own fees built in of 0.12 - 0.15%
            </div>
        </div>
      </>
    )
  }
}

export default CtfCalculator;

