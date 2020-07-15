import React, { Component } from 'react';
import { Link } from 'gatsby'
import Slider from 'react-slider';
import Data from '../data.js';
import numberWithCommas from '../helpers';

import SliderTheme from './slider/slider.module.scss';
import Graph from './graph/graph';
import Dashboard from './dashboard/dashboard';
import CtaButton from '../shared-components/cta-button/cta-button';

const _calculateProviderCost = ({ annualPercentageCharge }, { MAX_CHILD_AGE }, { ctfValue, childAge }) => {
  return Math.round((annualPercentageCharge * ctfValue) * (MAX_CHILD_AGE - childAge) / 100);
}

class Step4 extends Component {
  render() {
    const params = {
      MAX_CHILD_AGE: 18
    }

    const formData = { 
      ctfValue: this.props.ctfValue,
      childAge: this.props.childAge
    }

    const firstProvider = Data.providers[this.props.firstSelectionId];
    const firstTotalCharge = _calculateProviderCost(firstProvider, params, formData);
    const firstAnnualPercentageCharge = Data.providers[this.props.firstSelectionId].annualPercentageCharge;
    const firstProduct = Data.providers[this.props.firstSelectionId].product;
    const secondProvider = Data.providers[this.props.secondSelectionId];
    const secondTotalCharge = _calculateProviderCost(secondProvider, params, formData);
    const secondAnnualPercentageCharge = Data.providers[this.props.secondSelectionId].annualPercentageCharge;
    const secondProduct = Data.providers[this.props.secondSelectionId].product;

    if (this.props.currentStep !== 4) {
      return null
    }

    return(
      <>
        <div className={SliderTheme.Sliders}>
          <div className={SliderTheme.Slider}>
            <div className={SliderTheme.Slider_Heading}>
              CTF Current Value
            </div>
            <div className={`${SliderTheme.Slider_InputAndFeedbackWrapper} ${SliderTheme.Slider_InputAndFeedbackWrapper___Top}`}>
              <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={10000}
                onChange={this.props.updateCtfValue}
                step={50}
                min={0}
                max={50000}
              />
              <div className={SliderTheme.Slider_Feedback}>
                {`£${numberWithCommas(this.props.ctfValue)}`}
              </div>
            </div>
          </div>

          <div className={SliderTheme.Slider}>
            <div className={SliderTheme.Slider_Heading}>
              Child's age
            </div>
            <div className={SliderTheme.Slider_InputAndFeedbackWrapper}>
              <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={8}
                onChange={this.props.updateChildAge}
                min={8}
                max={18}
              />
              <div className={SliderTheme.Slider_Feedback}>
                {`${this.props.childAge} years`}
              </div>
            </div>
          </div>
        </div>

        <Dashboard totalFees={firstTotalCharge - secondTotalCharge}/>

        {Graph(
          firstAnnualPercentageCharge, 
          secondAnnualPercentageCharge, 
          firstTotalCharge, 
          secondTotalCharge, 
          firstProvider, 
          secondProvider, 
          formData)}

        <CtaButton/>
      </>
    )
  }
}

export default Step4;