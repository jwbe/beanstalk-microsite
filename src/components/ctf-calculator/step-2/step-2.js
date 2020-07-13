import React, { Component } from 'react';
import { Link } from 'gatsby';

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null
    }
    return(
      <>
        <p>
          Cash CTFs don't charge fees but typically the interest rate on offer isn't sufficient to keep pace with inflation.
        </p>

        <p>
          Beanstalk offers a Stocks & Shares Junior ISA.  Many people chose Stocks & Shares over something.
        </p>


        <Link to=''>Open a Beanstalk account</Link>

        <p>
          *Capital at risk
        </p>
      </>
    )
  }
}

export default Step2;