import React from 'react';
import Theme from './small-print.module.scss';

const SmallPrint = ({
  children
}) => (
  <p className={Theme.SmallPrint}>
    <>
      {
        children ?
          children 
        :
        <>
          <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.
        </>
      }
      <strong> Capital at risk.</strong>
    </>
  </p>
);

export default SmallPrint;