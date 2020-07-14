import React from 'react';
import numberWithCommas from '../../helpers';
import GraphTheme from './graph.module.scss';

const MIN_GRAPH_BAR_HEIGHT = 8;

const _heightEquation = (value, total, scale) => {
  return MIN_GRAPH_BAR_HEIGHT + (((value / total) * 100) / scale);
}

const _bar = (identifier, annualPercentageCharge, totalCharge, height) => {
  return (
    <div className={`${GraphTheme.Graph_Bar}`}>
      <div className={`${GraphTheme.Graph_Bar_Inner} ${identifier}`} style={{height: `${height}%`}}>
        <div className={GraphTheme.Graph_Bar_AnnualPercentageCharge}>
          {annualPercentageCharge}
        </div>
        <div className={GraphTheme.Graph_Bar_Plot}>
          <div className={GraphTheme.Graph_Bar_TotalCharge}>
            {totalCharge}
          </div>
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

  const SCALE = 0.25;

  return (
    <>
      <h3 className={GraphTheme.Graph_Heading}>
        How do our fees compare?
      </h3>
      <div className={GraphTheme.Graph}>
        <div className={GraphTheme.Graph_Bars}>
          {_bar(
              GraphTheme.Graph_Bar___First,
              `${firstAnnualPercentageCharge}%`, 
              `£${numberWithCommas(firstTotalCharge)}`, 
              _heightEquation(
                firstTotalCharge, 
                ctfValue, 
                SCALE))}
          {_bar(
              GraphTheme.Graph_Bar___Second,
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