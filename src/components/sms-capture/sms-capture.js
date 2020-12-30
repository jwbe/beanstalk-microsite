import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tooltip from './tooltip/tooltip';
import Theme from './sms-capture.module.scss';

const AUTH_ID = 'MAODI4MZNJNTM5YTK2MT';
const AUTH_TOKEN = 'YjBlODkxYmQ0YjliMTAxYmFlMDI4MTU5ZjFiMjE4';

const SmsCapture = () => {

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

    const axiosOptions = {
      method: "post",
      url: `https://api.plivo.com/v1/Account/${AUTH_ID}/Message/`,
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      },
      src: "+447753356426",
      dst: formFields.phoneNumber,
      text: "Localhost test send",
      auth: {
        username: AUTH_ID,
        password: AUTH_TOKEN
      }
    }

    axios(axiosOptions)
      .then(response => {
        setFormStatuses({
          ...formStatuses,
          formSubmitted: true
        });
        console.log(axiosOptions, ' then')
      })
      .catch(err => {
        setFormStatuses({
          ...formStatuses,
          formSubmitted: false
        });
        console.log(axiosOptions, ' not then')
      })


    if(handleValidation()) {

    }

    else {
      setFormStatuses({
        ...formStatuses,
        formSubmitAttempted: true
      })
    }

  }

  return (
    <>
      {
        formStatuses.formSubmitted
        ?
        <p>
          Link to app will be texted to your number.
        </p>
        :
        <form method="POST" name="sms-capture" noValidate onSubmit={ event => handleSubmit(event)}>
          <input 
          type="tel"
          placeholder="Your UK telephone number"
          name="phoneNumber"
          id="phoneNumber"
          onChange={event => handleChange('phoneNumber', event)}
          value={formFields['phoneNumber']}
          />
          { formErrors.phoneNumber && <span className={Theme.Form_Input_Error}></span> }
          { formErrors.phoneNumber && <Tooltip>{formErrors['phoneNumber']}</Tooltip> }
          <button type="submit">Text me the app</button>
        </form>
      }
    </>
  );
};

export default SmsCapture;