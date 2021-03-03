import React, { Component } from 'react';
import Header from './header/header';
import Step1 from './step-1/step-1';
import Step2 from './step-2/step-2';
import Step3 from './step-3/step-3';
import Step4 from './step-4/step-4';

import CtfCalculatorTheme from './ctf-calculator.module.scss';

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
        </div>
      </>
    )
  }
}

export default CtfCalculator;

