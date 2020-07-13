import React from 'react';
import numberWithCommas from '../../helpers';
import GraphTheme from './graph.module.scss';

const MIN_GRAPH_BAR_HEIGHT = 8;

const _heightEquation = (value, total, scale) => {
  return MIN_GRAPH_BAR_HEIGHT + (((value / total) * 100) / scale);
}

const _bar = (annualPercentageCharge, totalCharge, height) => {
  return (
    <div className={GraphTheme.Graph_Bar} style={{height: `${height}%`}}>
      <div className={GraphTheme.Graph_Bar_AnnualPercentageCharge}>
        {annualPercentageCharge}
      </div>
      <div className={GraphTheme.Graph_Bar_Plot}>
        <div className={GraphTheme.Graph_Bar_TotalCharge}>
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
  firstProduct, 
  secondProduct, 
  {ctfValue}) => {

  const SCALE = 0.25;

  return (
    <div className={GraphTheme.Graph}>
      {_bar(
          `${firstAnnualPercentageCharge}%`, 
          `£${numberWithCommas(firstTotalCharge)}`, 
          _heightEquation(
            firstTotalCharge, 
            ctfValue, 
            SCALE))}
      {_bar(
          `${secondAnnualPercentageCharge}%`, 
          `£${numberWithCommas(secondTotalCharge)}`, 
          _heightEquation(
            secondTotalCharge, 
            ctfValue, 
            SCALE))}
    </div>
  )
}

export default Graph;