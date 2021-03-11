import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';
import Slider from 'react-slider';
import Header from './header/header';
import Results from './results/results';
import Theme from './open-jisa.module.scss';
import SliderTheme from './slider.module.scss';

const OpenJisa = () => {
  const GRAPH = null;
  const CASH_GROWTH = 0.0414;
  const SHARE_GROWTH = 0.366;
  const GRAPH_TYPE = 'Bar';
  const GRAPH_OPTIONS = {
    low: 0,
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return new Intl.NumberFormat('en-UK', {
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
    amount = Math.pow(amount, numberOfMonths);
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
    series[0] = [];
    series[0].push(total);
    series[1] = [];
    series[1].push(KidStartTotal);

    return series;
  }

  const recalculateData = () => {
    let data = null;

    data = recalculateStackGraphData(calculatorResults.upFrontContribution, calculatorResults.monthlyContribution, 2.5, 1 - (calculatorResults.allocation / 100), (216 - (calculatorResults.childAge * 12)));
    return data;
  }

  const calculateStackMaxData = () => {
    let data = recalculateStackGraphData(calculatorResults.upFrontContribution, calculatorResults.monthlyContribution, 2.5, 0, (216 - (calculatorResults.childAge * 12)));

    return data[0][0] + data[1][0]
  }

  const graphEventListener = {
    draw: function(event) {
      console.log(event, 'graphEventListener event')
      if (event.type === "bar") {
        if (event.seriesIndex === 0) {
          event.element._node.textContent = "From You";
          event.element.attr({
            style: "stroke:#32b67a;"
          });
        }
        else if (event.seriesIndex === 0) {
          event.element._node.textContent = "From KidStart";
          event.element.attr({
            style: "stroke:#red"
          });
        }
      }
    }
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
    series: recalculateData()
  }

  return (
    <>
      <Header/>

      <div className={Theme.Results}>
        <div className={Theme.Column}>
          <div className={SliderTheme.Sliders}>
            <div className={SliderTheme.Slider}>
              <div className={SliderTheme.Slider_Heading}>
                Child's age
              </div>
              <div className={SliderTheme.Slider_InputAndFeedbackWrapper}>
                <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={4}
                onChange={updateChildAge}
                min={0}
                max={13}
                step={1}
                />
                <div className={SliderTheme.Slider_Feedback}>
                  {`${calculatorResults.childAge} ${calculatorResults.childAge === 1 ? `year` : `years`}`}
                </div>
              </div>
            </div>

            <div className={SliderTheme.Slider}>
              <div className={SliderTheme.Slider_Heading}>
                Will you make a monthly contribution?
              </div>
              <div className={SliderTheme.Slider_InputAndFeedbackWrapper}>
                <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={50}
                onChange={updateMonthlyContribution}
                min={0}
                max={355}
                step={5}
                />
                <div className={SliderTheme.Slider_Feedback}>
                  { new Intl.NumberFormat('en-UK', {
                    currency: "GBP",
                    style: "currency",
                    minimumFractionDigits: 0
                  }).format(calculatorResults.monthlyContribution) }
                </div>
              </div>
            </div>

            <div className={SliderTheme.Slider}>
              <div className={SliderTheme.Slider_Heading}>
                Up front contribution
              </div>
              <div className={SliderTheme.Slider_InputAndFeedbackWrapper}>
                <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={50}
                onChange={updateUpFrontContribution}
                min={0}
                max={4000}
                step={50}
                />
                <div className={SliderTheme.Slider_Feedback}>
                  { new Intl.NumberFormat('en-UK', {
                    currency: "GBP",
                    style: "currency",
                    minimumFractionDigits: 0
                  }).format(calculatorResults.upFrontContribution) }
                </div>
              </div>
            </div>

            <div className={SliderTheme.Slider}>
              <div className={`${SliderTheme.Slider_Heading} ${SliderTheme.Slider_Heading___Allocation}`}>
                How do you want your savings split?
              </div>

              <div className={SliderTheme.AllocationHeader}>
                <span className={SliderTheme.AllocationHeader_Label}>Cash Fund</span>
                <div className={SliderTheme.Slider_Feedback}>
                  { <><span>{100 - calculatorResults.allocation}%</span><span> </span><span>{calculatorResults.allocation}%</span></> }
                </div>
                <span className={SliderTheme.AllocationHeader_Label}>Shares Fund</span>
              </div>

              <div className={SliderTheme.Slider_InputAndFeedbackWrapper}>
                <Slider
                className={SliderTheme.Slider_Input}
                thumbClassName={SliderTheme.Slider_Thumb}
                trackClassName={SliderTheme.Slider_Track}
                defaultValue={50}
                onChange={updateAllocation}
                min={20}
                max={100}
                step={5}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Theme.Column}>
          <ChartistGraph 
            className={`ct-golden-section`}
            listener={graphEventListener}
            data={GRAPH_DATA} 
            options={GRAPH_OPTIONS} 
            type={GRAPH_TYPE}
          />
          <Results {...{ childAge: calculatorResults.childAge, data: recalculateData }}/>
        </div>
      </div>


    </>
  )
}

export default OpenJisa;
