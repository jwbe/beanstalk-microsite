import React from 'react';
import Button from '../cta-button/cta-button';
import Theme from './results.module.scss';

const Results = (props) => {
  let { childAge, data } = props;
  return (
    <>
      <div className={Theme.Container}>

        <div className={Theme.Header}>
          In <span className={Theme.Highlight}>{ 18 - childAge }</span> years when your child is 18, fund could be worth
        </div>

        <div className={`${Theme.MainResult} ${Theme.Highlight}`}>
          { new Intl.NumberFormat('en-UK', {
            currency: "GBP",
            style: "currency",
            minimumFractionDigits: 0
          }).format(data()[0][0] + data()[1][0]) }
        </div>

        <div className={Theme.SecondaryResult}>
          inc <span className={Theme.Highlight}>
            { new Intl.NumberFormat('en-UK', {
              currency: "GBP",
              style: "currency",
              minimumFractionDigits: 0
            }).format(data()[1][0]) }
          </span> if you regularly use KidStart
        </div>

        <Button link={`/`}/>

      </div>
    </>
  );
}

export default Results;