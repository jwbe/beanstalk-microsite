import React, { Component } from 'react';

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <>
        <p>
          Does your child have a Cash or Stakeholder / Equity CTF?
        </p>

        <button onClick={() => { this.props.goToStep(2) }}>
          Cash
        </button>

        <button onClick={() => { this.props.goToStep(3) }}>
          Stakeholder / Equity
        </button>
        
      </>
    )
  }
}

export default Step1;