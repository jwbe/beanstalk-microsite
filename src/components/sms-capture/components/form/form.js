import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tooltip from './tooltip/tooltip';
import Theme from './form.module.scss';
import base64 from 'base-64';
import phone from 'phone';

const PLIVO = {
  SENDER_ID: 'Beanstalk'
}

const TEXT_CONFIRMATION = 'A link to the app has been texted to your number.'

const Form = () => {

  const initialFormStatus = {
    formSubmitted: null,
    formSubmitAttempted: false,
    botField: ''
  }

  const initialFormFields = {
    phoneNumber: ''
  }

  const initialFormErrors = {
    phoneNumber: ''
  }

  const [formStatuses, setFormStatuses] = useState(initialFormStatus);
  const [formFields, setFormFields] = useState(initialFormFields);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleValidation = () => {
    let fields = formFields;
    let errors = {};
    let formIsValid = true;

    if(fields['phoneNumber'] === '') {
      formIsValid = false
      errors['phoneNumber'] = 'You must enter a phone number';
    }

    if(fields['phoneNumber'] !== '') {
      const phoneNumberRegEx = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
      if(!fields['phoneNumber'].match(phoneNumberRegEx)) {
        formIsValid = false;
        errors['phoneNumber'] = 'This is not a valid UK phone number';
      }
    }

    setFormErrors({ ...errors });

    return formIsValid;
  }

  const handleChange = (field, event) => {
    let fields = formFields;
    fields[field] = event.target.value;

    if(formStatuses.formSubmitAttempted === true) {
      handleValidation();
    }
    setFormFields({ ...fields });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatuses(formStatuses, {
      formSubmitted: true, formSubmitAttempted: true
    });

    if(handleValidation()) {
      fetch("/.netlify/functions/auth-fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${base64.encode(`${process.env.GATSBY_PLIVO_AUTH_ID}:${process.env.GATSBY_PLIVO_AUTH_TOKEN}`)}`
        },
        body: JSON.stringify({
          src: PLIVO.SENDER_ID,
          dst: phone(formFields.phoneNumber, 'GB')[0],
          text: process.env.GATSBY_PLIVO_MESSAGE
        })
      })
        .then(response => {
          setFormStatuses({
            ...formStatuses,
            formSubmitted: true
          });
        })
        .catch(err => {
          setFormStatuses({
            ...formStatuses,
            formSubmitted: false
          });
        })
    }

    else {
      setFormStatuses({
        ...formStatuses,
        formSubmitAttempted: true
      })
    }

  }

  return (
    <div className={Theme.Container}>
      {
        formStatuses.formSubmitted
        ?
        <div className={Theme.Confirmation}>
          { TEXT_CONFIRMATION }
        </div>
        :
        <form className={Theme.Form} method="POST" name="sms-capture" noValidate onSubmit={ event => handleSubmit(event)}>
          <div className={Theme.InputAndButtonWrapper}>
            <div className={Theme.Input_Wrapper}>
              <div className={Theme.Input_UnionFlagIcon}></div>
              <input 
              className={Theme.Input}
              type="tel"
              placeholder="07500 123456"
              name="phoneNumber"
              id="phoneNumber"
              onChange={event => handleChange('phoneNumber', event)}
              value={formFields['phoneNumber']}
              />
              <div className={Theme.Input_PhoneIcon}></div>
              { formErrors.phoneNumber && <span className={Theme.Input_Error}></span> }
              { formErrors.phoneNumber && <Tooltip>{formErrors['phoneNumber']}</Tooltip> }
            </div>
            <button 
              className={Theme.Submit}
              type="submit">Text me the app</button>
          </div>
        </form>
      }
    </div>
  );
};

export default Form; 