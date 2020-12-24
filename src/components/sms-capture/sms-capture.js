import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Theme from './sms-capture.module.scss';

const SmsCapture = () => {

  const initialFormFields = {
    phoneNumber: ''
  }

  const [formFields, setFormFields] = useState(initialFormFields);

  const handleValidation = () => {
    let fields = formFields;
    let errors = {};
    let formIsValid = true;

    if(fields['phoneNumber'] === '') {
      formIsValid = false
      errors['phoneNumber'] = 'You must enter a phone number';
    }

    if(fields['phoneNumber'] !== '') {
      const phoneNumberRegEx = `^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$`
      if(!fields['phoneNumber'].match(phoneNumberRegEx)) {
        formIsValid = false;
        errors['phoneNumber'] = 'This is not a valid UK phone number';
      }
    }
  }

  const handleChange = (field, event) => {

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form method="POST" noValidate onSubmit={ event => handleSubmit(event)}>
      <input type="tel"/>
      <button type="submit">Text me the app</button>
    </form>
  );
};

export default SmsCapture;