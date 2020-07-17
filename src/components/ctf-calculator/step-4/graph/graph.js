import React from 'react';
import numberWithCommas from '../../helpers';
import GraphTheme from './graph.module.scss';

const MIN_GRAPH_BAR_HEIGHT = 8;

const _heightEquation = (value, total, scale) => {
  return MIN_GRAPH_BAR_HEIGHT + (((value / total) * 100) / scale);
}

const _bar = (identifier, annualPercentageCharge, additionalPercentageChargeLabel, additionalGraphBarAnnualPercentageLabelCommentIcon, totalCharge, height) => {
  const FONT_SIZE_THRESHOLD = 20;
  const belowThresholdValue = (height * 100 / 2500) + 0.25;
  return (
    <div className={`${GraphTheme.Graph_Bar} ${GraphTheme['Graph_Bar' + identifier]}`}>
      <div className={`${GraphTheme.Graph_Bar_Label} ${GraphTheme.Graph_Bar_Label___AnnualPercentageCharge} ${GraphTheme['Graph_Bar_Label___AnnualPercentageCharge' + identifier]}`}>
        {`${annualPercentageCharge}%`}
        {additionalPercentageChargeLabel ? <span className={GraphTheme.Graph_Bar_Label___AnnualPercentageCharge_AdditionalLabel}>{additionalPercentageChargeLabel}{additionalGraphBarAnnualPercentageLabelCommentIcon}</span>: null}
      </div>
      <div 
        className={`${GraphTheme.Graph_Bar_Plot} ${GraphTheme['Graph_Bar_Plot' + identifier]}`} 
        style={{
          height: `${height}%`,
        }}>
        <div 
          className={`${GraphTheme.Graph_Bar_Label} ${GraphTheme.Graph_Bar_Label___TotalCharge}`}
          style={{
            marginTop: height < FONT_SIZE_THRESHOLD ? `${belowThresholdValue / 1.5}rem` : null,
            fontSize: height < FONT_SIZE_THRESHOLD ? `${belowThresholdValue}rem` : null,
            lineHeight: height < FONT_SIZE_THRESHOLD ? `${belowThresholdValue}rem` : null
          }}>
          {`£${numberWithCommas(totalCharge)}`}
        </div>
      </div>
    </div>
  )
}

const Graph = props => {

  const SCALE = 0.32;

  return (
    <>
      <h3 className={GraphTheme.Graph_Heading}>
        How do our fees compare?
      </h3>
      <div className={GraphTheme.Graph}>
        <div className={GraphTheme.Graph_Bars}>
          {_bar(
              `___First`,
              props.firstAnnualPercentageCharge,
              props.firstAdditionalGraphBarAnnualPercentageLabel,
              props.firstAdditionalGraphBarAnnualPercentageLabelCommentIcon,
              props.firstTotalCharge, 
              _heightEquation(
                props.firstTotalCharge, 
                props.formData.ctfValue, 
                SCALE))}
          {_bar(
              `___Second`,
              props.secondAnnualPercentageCharge,
              props.secondAdditionalGraphBarAnnualPercentageLabel,
              props.secondAdditionalGraphBarAnnualPercentageLabelCommentIcon,
              props.secondTotalCharge, 
              _heightEquation(
                props.secondTotalCharge, 
                props.formData.ctfValue, 
                SCALE))}
        </div>
        <div className={GraphTheme.Graph_Axis}>
          <div className={GraphTheme.Graph_Axis_Providers}>
            <div className={`${GraphTheme.Graph_Axis_Provider} ${GraphTheme.Graph_Axis_Provider___First}`}>
              {props.firstProvider.name}<span className={GraphTheme.Graph_Axis_Provider_Comment_Icon}>{props.firstAdditionalProviderCommentIcon}</span>
            </div>
            <div className={`${GraphTheme.Graph_Axis_Provider} ${GraphTheme.Graph_Axis_Provider___Second}`}>
              {props.secondProvider.name}{props.secondAdditionalProviderCommentIcon}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graph;