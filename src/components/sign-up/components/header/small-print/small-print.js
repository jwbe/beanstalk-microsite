import React from 'react';
import Theme from './small-print.module.scss';
import { Link } from 'gatsby';

const SmallPrint = ({
  children
}) => (
  <p className={Theme.SmallPrint}>
    <>
      <strong>Note:</strong> By registering you consent to Beanstalk sending you information about its services, see <Link {...{ to: `/data-privacy-and-cookies`}}>privacy policy</Link>. 
      {
        children
      }
      <strong> Capital at risk.</strong>
    </>
  </p>
);

export default SmallPrint;


