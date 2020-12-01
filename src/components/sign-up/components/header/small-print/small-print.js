import React from 'react';
import Theme from './small-print.module.scss';

const SmallPrint = () => (
  <p className={Theme.SmallPrint}>
    <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.  
    <strong className={Theme.StandOut}>Capital at risk.</strong>
  </p>
);

export default SmallPrint;