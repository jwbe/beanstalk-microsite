import React from 'react';
import numberWithCommas from '../../helpers';
import GraphTheme from './graph.module.scss';

const MIN_GRAPH_BAR_HEIGHT = 8;

const _heightEquation = (value, total, scale) => {
  return MIN_GRAPH_BAR_HEIGHT + (((value / total) * 100) / scale);
}

const _bar = (identifier, annualPercentageCharge, totalCharge, height) => {
  const FONT_SIZE_THRESHOLD = 20;
  const belowThresholdValue = (height * 100 / 2500) + 0.25;
  return (
    <div className={`${GraphTheme.Graph_Bar}`}>
      <div className={`${GraphTheme.Graph_Bar_Label} ${GraphTheme.Graph_Bar_Label___AnnualPercentageCharge} ${GraphTheme['Graph_Bar_Label___AnnualPercentageCharge' + identifier]}`}>
        {annualPercentageCharge}
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
          {totalCharge}
        </div>
      </div>
    </div>
  )
}

const Graph = (
  firstAnnualPercentageCharge, 
  secondAnnualPercentageCharge, 
  firstTotalCharge, 
  secondTotalCharge, 
  firstProvider, 
  secondProvider, 
  {ctfValue}) => {

  const SCALE = 0.20;

  return (
    <>
      <h3 className={GraphTheme.Graph_Heading}>
        How do our fees compare?
      </h3>
      <div className={GraphTheme.Graph}>
        <div className={GraphTheme.Graph_Bars}>
          {_bar(
              `___First`,
              `${firstAnnualPercentageCharge}%`, 
              `£${numberWithCommas(firstTotalCharge)}`, 
              _heightEquation(
                firstTotalCharge, 
                ctfValue, 
                SCALE))}
          {_bar(
              `___Second`,
              `${secondAnnualPercentageCharge}%`, 
              `£${numberWithCommas(secondTotalCharge)}`, 
              _heightEquation(
                secondTotalCharge, 
                ctfValue, 
                SCALE))}
        </div>
        <div className={GraphTheme.Graph_Axis}>
          <div className={GraphTheme.Graph_Axis_Providers}>
            <div className={GraphTheme.Graph_Axis_Provider}>
              {firstProvider.name}
            </div>
            <div className={GraphTheme.Graph_Axis_Provider}>
              {secondProvider.name}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graph;