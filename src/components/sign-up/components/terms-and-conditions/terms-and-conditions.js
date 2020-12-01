import React from 'react';
import Theme from './terms-and-conditions.module.scss';
import Heading from '../heading/heading';

const TermsAndConditions = ({ children }) => (
  <>
    <Heading>
      Terms & Conditions
    </Heading>
    <div className={Theme.Section}>
      {children}
    </div>
  </>
);

export default TermsAndConditions;