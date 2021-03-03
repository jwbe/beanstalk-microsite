import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';
import Slider from 'react-slider';
import Theme from './open-jisa.module.scss';

const OpenJisa = () => {
  const CASH_GROWTH = 0.0414;
  const SHARE_GROWTH = 0.366;
  const GRAPH_TYPE = 'Bar';
  const GRAPH_OPTIONS = {
    low: 0,
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        new Intl.NumberFormat('en-UK', {
          currency: 'GBP',
          style: 'currency',
          minimumFractionDigits: 0
        }).format(value);
      }
    }
  }

  const initialCalculatorResults = {
    allocation: 60,
    monthlyContribution: 50,
    childAge: 5,
    upFrontContribution: 50
  }

  const [calculatorResults, setCalculatorResults] = useState(initialCalculatorResults);

  const calculateFutureValue = (monthDepth, numberOfMonths, percentage, growthRate) => {
    let amount = 1 + growthRate;
    amount = Math.pow(amount, numberOfMonths) - 1;
    amount = amount / growthRate;
    amount = amount * (monthDepth * percentage);
    return amount;
  }

  const calculateFixedAmountFutureValue = (initialDepth, numberOfMonths, percentage, growthRate) => {
    let amount = 1 + growthRate;
    amount = Math.pow(amount, numberOfMonths) - 1;
    amount = amount * (initialDepth * percentage)
    return amount;
  }

  const recalculateStackGraphData = (initialDepth, monthDepth, KidStartMonthDepth, cashPercentage, numberOfMonths) => {
    let sharePercentage = 1 - cashPercentage;
    let cashGrowthRate = CASH_GROWTH / 100;
    let shareGrowthRate = SHARE_GROWTH / 100;

    let cashAmount = calculateFutureValue(monthDepth, numberOfMonths, cashPercentage, cashGrowthRate);
    let shareAmount = calculateFutureValue(monthDepth, numberOfMonths, sharePercentage, shareGrowthRate);

    let cashAmountFixed = calculateFixedAmountFutureValue(initialDepth, numberOfMonths, cashPercentage, cashGrowthRate);
    let shareAmountFixed = calculateFixedAmountFutureValue(initialDepth, numberOfMonths, sharePercentage, shareGrowthRate);

    let KidStartCashAmount = calculateFutureValue(KidStartMonthDepth, numberOfMonths, cashPercentage, cashGrowthRate);
    let KidStartShareAmount = calculateFutureValue(KidStartMonthDepth, numberOfMonths, sharePercentage, shareGrowthRate);

    let total = Math.round(cashAmount + shareAmount + cashAmountFixed + shareAmountFixed);
    let KidStartTotal = Math.round(KidStartCashAmount + KidStartShareAmount);

    let series = [];
    series[0] = new Array();
    series[0].push(total);
    series[1] = new Array();
    series[1].push(KidStartTotal);

    return series;
  }

  const recalculateData = () => {
    let data = null;

  }

  const updateAllocation = (value) => {
    let allocation = value;
    setCalculatorResults({ ...calculatorResults, allocation: allocation })
  }

  const updateMonthlyContribution = (value) => {
    let monthlyContribution = value;
    setCalculatorResults({ ...calculatorResults, monthlyContribution: monthlyContribution })
  }

  const updateChildAge = (value) => {
    let childAge = value;
    setCalculatorResults({ ...calculatorResults, childAge: childAge })
  }

  const updateUpFrontContribution = (value) => {
    let upFrontContribution = value;
    setCalculatorResults({ ...calculatorResults, upFrontContribution: upFrontContribution })
  }

  const GRAPH_DATA = {
    labels: [''],
    series: [
      [5, 2]
    ]
  }

  return (
    <>
      <ChartistGraph data={GRAPH_DATA} options={GRAPH_OPTIONS} type={GRAPH_TYPE}/>

      <Slider
      className={Theme.Slider_Input}
      thumbClassName={Theme.Slider_Thumb}
      trackClassName={Theme.Slider_Track}
      defaultValue={60}
      onChange={updateAllocation}
      min={20}
      max={100}
      step={5}
      />

      <div>
        Allocation result
      </div>

      <Slider
      className={Theme.Slider_Input}
      thumbClassName={Theme.Slider_Thumb}
      trackClassName={Theme.Slider_Track}
      defaultValue={50}
      onChange={updateMonthlyContribution}
      min={0}
      max={355}
      step={5}
      />

      <div>
        Monthly amount result
      </div>

      <Slider
      className={Theme.Slider_Input}
      thumbClassName={Theme.Slider_Thumb}
      trackClassName={Theme.Slider_Track}
      defaultValue={4}
      onChange={updateChildAge}
      min={0}
      max={13}
      step={1}
      />

      <div>
        Child age result
      </div>

      <Slider
      className={Theme.Slider_Input}
      thumbClassName={Theme.Slider_Thumb}
      trackClassName={Theme.Slider_Track}
      defaultValue={50}
      onChange={updateUpFrontContribution}
      min={0}
      max={13}
      step={1}
      />

      <div>
        Up-front contribution result
      </div>

      { calculatorResults.allocation }
      { calculatorResults.monthlyContribution }
      { calculatorResults.upFrontContribution }
      { calculatorResults.childAge }
    </>
  )
}

export default OpenJisa;
