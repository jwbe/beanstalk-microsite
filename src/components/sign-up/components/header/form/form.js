import React from 'react';
import Theme from './form.module.scss';
import Tooltip from './tooltip/tooltip';
import SmallPrint from '../small-print/small-print';

import Confirmation from './confirmation/confirmation';

const Form = () => {
  return (
    <>
      <div className={Theme.Form_Wrapper}>
        <form className={Theme.Form} name="refer" method="POST" noValidate data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => this.handleSubmit(event)}>
          <div className={Theme.Form_VisibleInputs}>
            <div className={Theme.Form_Input_Wrapper}>
              <input 
              className={Theme.Form_Input} 
              placeholder="Your email address" 
              type="email" name="email" 
              id="email"/>
            </div>
            <div className={Theme.Form_Input_Wrapper}>
              <input 
              className={Theme.Form_Input} 
              placeholder="Your full name" 
              type="text" 
              name="name" 
              id="name"/>
            </div>
          </div>
          <input type="hidden" name="bot-field"/>
          <input type="hidden" name="form-name"/>
          <input type="hidden" name="partnerName"/>
          <button className={Theme.Form_Submit} type="submit">Get Started</button>
        </form>

        <SmallPrint>
          <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.  <br/><strong>Capital at risk</strong>.
        </SmallPrint>
      </div>

      <Confirmation/>
    </>
  );
}

export default Form;