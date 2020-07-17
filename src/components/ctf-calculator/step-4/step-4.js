import React, { Component } from 'react';
import Slider from 'react-slider';
import Data from '../data.js';
import numberWithCommas from '../helpers';

import SliderTheme from './slider/slider.module.scss';
import StepTheme from './step-4.module.scss';
import Graph from './graph/graph';
import Dashboard from './dashboard/dashboard';
import CtaButton from '../shared-components/cta-button/cta-button';

const _calculateProviderCost = ({ annualPercentageCharge }, { MAX_CHILD_AGE }, { ctfValue, childAge }) => {
  return Math.round((annualPercentageCharge * ctfValue) * (MAX_CHILD_AGE - childAge) / 100);
}

const NOTE_SYMBOLS = ['*','†','‡','§'];


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
    const secondProvider = Data.providers[this.props.secondSelectionId];
    const secondTotalCharge = _calculateProviderCost(secondProvider, params, formData);
    const secondAnnualPercentageCharge = Data.providers[this.props.secondSelectionId].annualPercentageCharge;
    const firstAdditionalGraphBarAnnualPercentageLabel = Data.providers[this.props.firstSelectionId].additionalGraphBarAnnualPercentageLabel;
    const secondAdditionalGraphBarAnnualPercentageLabel = Data.providers[this.props.secondSelectionId].additionalGraphBarAnnualPercentageLabel;
    const firstAdditionalProviderComment = Data.providers[this.props.firstSelectionId].additionalProviderComment;
    const secondAdditionalProviderComment = Data.providers[this.props.secondSelectionId].additionalProviderComment;
    const firstAdditionalGraphBarAnnualPercentageLabelComment = Data.providers[this.props.firstSelectionId].additionalGraphBarAnnualPercentageLabelComment;
    const secondAdditionalGraphBarAnnualPercentageLabelComment = Data.providers[this.props.secondSelectionId].additionalGraphBarAnnualPercentageLabelComment;

    const footNotes = [];

    let firstAdditionalProviderCommentIconIndex = null;
    let secondAdditionalProviderCommentIconIndex = null;
    let firstAdditionalGraphBarAnnualPercentageLabelCommentIconIndex = null;
    let secondAdditionalGraphBarAnnualPercentageLabelCommentIconIndex = null;

    if (firstAdditionalProviderComment) {
      footNotes.push(firstAdditionalProviderComment)
      firstAdditionalProviderCommentIconIndex = footNotes.length - 1;
    }

    if (secondAdditionalProviderComment) {
      footNotes.push(secondAdditionalProviderComment)
      secondAdditionalProviderCommentIconIndex = footNotes.length - 1;
    }

    if (firstAdditionalGraphBarAnnualPercentageLabelComment) {
      footNotes.push(firstAdditionalGraphBarAnnualPercentageLabelComment)
      firstAdditionalGraphBarAnnualPercentageLabelCommentIconIndex = footNotes.length - 1;
    }

    if (secondAdditionalGraphBarAnnualPercentageLabelComment) {
      footNotes.push(secondAdditionalGraphBarAnnualPercentageLabelComment)
      secondAdditionalGraphBarAnnualPercentageLabelCommentIconIndex = footNotes.length - 1;
    }

    const firstAdditionalProviderCommentIcon = NOTE_SYMBOLS[firstAdditionalProviderCommentIconIndex];
    const secondAdditionalProviderCommentIcon = NOTE_SYMBOLS[secondAdditionalProviderCommentIconIndex];
    const firstAdditionalGraphBarAnnualPercentageLabelCommentIcon = NOTE_SYMBOLS[firstAdditionalGraphBarAnnualPercentageLabelCommentIconIndex];
    const secondAdditionalGraphBarAnnualPercentageLabelCommentIcon = NOTE_SYMBOLS[secondAdditionalGraphBarAnnualPercentageLabelCommentIconIndex];

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
              min={0}
              max={16}
              />
              <div className={SliderTheme.Slider_Feedback}>
                {`${this.props.childAge} years`}
              </div>
            </div>
          </div>
        </div>

        <Dashboard totalFees={firstTotalCharge - secondTotalCharge}/>

        <Graph
        firstAnnualPercentageCharge={firstAnnualPercentageCharge}
        secondAnnualPercentageCharge={secondAnnualPercentageCharge}
        firstAdditionalProviderComment={firstAdditionalProviderComment}
        secondAdditionalProviderComment={secondAdditionalProviderComment}
        firstTotalCharge={firstTotalCharge}
        secondTotalCharge={secondTotalCharge}
        firstProvider={firstProvider}
        secondProvider={secondProvider}
        firstAdditionalGraphBarAnnualPercentageLabel={firstAdditionalGraphBarAnnualPercentageLabel}
        secondAdditionalGraphBarAnnualPercentageLabel={secondAdditionalGraphBarAnnualPercentageLabel}
        firstAdditionalProviderCommentIcon={firstAdditionalProviderCommentIcon}
        secondAdditionalProviderCommentIcon={secondAdditionalProviderCommentIcon}
        firstAdditionalGraphBarAnnualPercentageLabelCommentIcon={firstAdditionalGraphBarAnnualPercentageLabelCommentIcon}
        secondAdditionalGraphBarAnnualPercentageLabelCommentIcon={secondAdditionalGraphBarAnnualPercentageLabelCommentIcon}
        formData={formData}/>

        <CtaButton/>

        <div className={StepTheme.Footnotes}>
          {footNotes.map((note, index) => <div className={StepTheme.Footnotes_Footnote} key={index}>{NOTE_SYMBOLS[index]} {note}</div>)}
          <div className={StepTheme.Footnotes_Footnote}><strong>Note:</strong> Competitor fees as listed on their websites. Data accurate as of 15/07/20</div>
        </div>

      </>
    )
  }
}

export default Step4;