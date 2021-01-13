import React from 'react';
import Theme from './stars.module.scss';

const SCORE = '4.6';

const Stars = () => (
  <div className={Theme.Container}>
    <div className={Theme.Star}>
    </div>
    <div className={Theme.Star}>
    </div>
    <div className={Theme.Star}>
    </div>
    <div className={Theme.Star}>
    </div>
    <div className={Theme.Star}>
    </div>
    <div className={Theme.Score}>
      { SCORE }
    </div>
  </div>
);

export default Stars;