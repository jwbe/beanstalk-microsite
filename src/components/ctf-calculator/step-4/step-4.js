import React, { Component } from 'react';
import { Link } from 'gatsby'
import Slider from 'react-slider';
import Data from '../data.js';
import numberWithCommas from '../helpers';

import SliderTheme from './slider/slider.module.scss';
import Graph from './graph/graph.js';

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
        <div>
          <div>
            CTF Current Value
          </div>
          <Slider
            className={SliderTheme.Slider}
            thumbClassName={SliderTheme.Slider_Thumb}
            trackClassName={SliderTheme.Slider_Track}
            defaultValue={50}
            onChange={this.props.updateCtfValue}
            step={10}
          />
          <div>
            {this.props.ctfValue}
          </div>
        </div>

        <div>
          <div>
            Child's age
          </div>
          <Slider
            className={SliderTheme.Slider}
            thumbClassName={SliderTheme.Slider_Thumb}
            trackClassName={SliderTheme.Slider_Track}
            defaultValue={50}
            onChange={this.props.updateChildAge}
            step={10}
          />
          <div>
            {this.props.childAge}
          </div>

        </div>

        <div>
          <div>
            When your child is 18 you will have saved
          </div>
          <div>
            {`£${numberWithCommas(firstTotalCharge - secondTotalCharge)}`}
          </div>
        </div>

        {Graph(
          firstAnnualPercentageCharge, 
          secondAnnualPercentageCharge, 
          firstTotalCharge, 
          secondTotalCharge, 
          firstProduct, 
          secondProduct, 
          formData)}

        <Link to=''>Open a Beanstalk account</Link>

        <p>
          *Capital at risk
        </p>
      </>
    )
  }
}

export default Step4;