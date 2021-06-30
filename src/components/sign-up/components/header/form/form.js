import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';

import Theme from './form.module.scss';
import Tooltip from './tooltip/tooltip';
import SmallPrint from '../small-print/small-print';
import Confirmation from './confirmation/confirmation';

import addKidStartUser from '../../../../addKidStartUser/addKidStartUser';

const Form = ({
  whitelabelId = 208,
  formSmallPrint
}) => {

  const location = () => {
    let item = typeof window !== 'undefined' ? window.location.pathname.split('/') : null;
    let itemCount = item.length;
    item = item[itemCount - 1];
    return item;
  };

  const initialFormStatus = {
    formSubmitted: false,
    formSubmitAttempted: false,
    botField: '',
    formWaiting: false,
    responseStatus: {}
  };

  const initialFormFields = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const initialFormErrors = {
    firstName: '',
    lastName: '',
    email: ''
  };


  const [formStatuses, setFormStatuses] = useState(initialFormStatus);
  const [formFields, setFormFields] = useState(initialFormFields);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleValidation = () => {
    let nameRegex = `^[^0-9]+$`;
    let fields = formFields
    let errors = {};
    let formIsValid = true;


    if(fields['firstName'] === '') {
      formIsValid = false
      errors['firstName'] = 'You must enter your first name';
    }

    if(fields['lastName'] === '') {
      formIsValid = false
      errors['lastName'] = 'You must enter your last name';
    }

    if(fields['firstName'] !== '') {
      if(!fields['firstName'].match(nameRegex)) {
        formIsValid = false;
        errors['firstName'] = 'Your name shouldn\'t contain numbers';
      }
    }

    if(fields['lastName'] !== '') {
      if(!fields['lastName'].match(nameRegex)) {
        formIsValid = false;
        errors['lastName'] = 'Your name shouldn\'t contain numbers';
      }
    }

    if(fields['email'] === '') {
      formIsValid = false;
      errors['email'] = 'You must enter an email address';
    }

    if(fields['email'] !== '') {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(fields['email'])) {
        formIsValid = false;
        errors['email'] = 'Please enter a valid email address';
      }
    }

    console.log(errors, ' errors');

    setFormErrors({ ...errors });

    return formIsValid;
  }

  const handleChange = (field, event) => {
    let fields = formFields;
    fields[field] = event.target.value;
    if(formStatuses.formSubmitAttempted === true) {
      handleValidation();
    }
    setFormFields({ ...fields});
  }

  const spinningWheel = () => {
    setFormStatuses({
      ...formStatuses,
      formWaiting: true
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatuses(formStatuses, {
      formSubmitted: true, formSubmitAttempted: true
    });

    if(handleValidation()) {
      const formData = {
        firstName: formFields.firstName,
        email: formFields.email
      }

      spinningWheel();

      addKidStartUser({ 
        firstName: formFields.firstName, 
        lastName: formFields.lastName, 
        email: formFields.email, 
        whitelabelId: whitelabelId
      })
      .then(response => {
        console.log(response);
        setFormStatuses({
          ...formStatuses,
          formWaiting: false,
          formSubmitted: true,
          responseStatus: response['soap:Envelope']['soap:Body'].AddUserAccountResponse.AddUserAccountResult.WebServiceResult ? response['soap:Envelope']['soap:Body'].AddUserAccountResponse.AddUserAccountResult.WebServiceResult : response
        });
      })
      .catch(err => {
        setFormStatuses({
          ...formStatuses,
          formSubmitted: false,
          responseStatus: err
        });
      })
    }
    else {
      setFormStatuses({
        ...formStatuses,
        formSubmitAttempted: true
      });
    }

  }

  return (
    <>
      {
        formStatuses.formSubmitted
        ?
        <>
          <Confirmation {...{
            responseStatus: formStatuses.responseStatus
          }}/>
        </>
        :
          <>
            <form className={Theme.Form} name="signup" method="POST" noValidate onSubmit={ event => handleSubmit(event) }>
              <div className={Theme.Form_VisibleInputs}>
                <div className={Theme.Form_VisibleInputs_Inner}>
                  <div className={Theme.Form_Input_Wrapper}>
                    <input 
                    className={Theme.Form_Input} 
                    placeholder="Your email address" 
                    type="email" 
                    name="email" 
                    id="email"
                    onChange={event => handleChange('email', event)}
                    value={formFields['email']}
                    />
                    {formErrors.email && (<span className={Theme.Form_Input_Error}></span>)}
                    {formErrors.email && (<Tooltip>{formErrors['email']}</Tooltip>)}
                  </div>
                  <div className={Theme.Form_ShowHorizontalInputsOnDesktopAndTablet}>
                    <div className={Theme.Form_Input_Wrapper}>
                      <input 
                      className={Theme.Form_Input} 
                      placeholder="First name" 
                      type="text" 
                      name="firstName" 
                      id="firstName"
                      onChange={event => handleChange('firstName', event)}
                      value={formFields['firstName']}
                      />
                      {formErrors.firstName && <span className={Theme.Form_Input_Error}></span>}
                      {formErrors.firstName && <Tooltip>{formErrors['firstName']}</Tooltip>}
                    </div>
                    <div className={Theme.Form_Input_Wrapper}>
                      <input 
                      className={Theme.Form_Input} 
                      placeholder="Last name" 
                      type="text" 
                      name="lastName" 
                      id="lastName"
                      onChange={event => handleChange('lastName', event)}
                      value={formFields['lastName']}
                      />
                      {formErrors.lastName && <span className={Theme.Form_Input_Error}></span>}
                      {formErrors.lastName && <Tooltip>{formErrors['lastName']}</Tooltip>}
                    </div>
                  </div>
                </div>
              </div>

              {
                formStatuses.formWaiting === false ?
                <button className={Theme.Form_Submit} type="submit">Get Started</button>
                :
                <div className={Theme.Form_Loading}></div>
              }


            </form>

            <SmallPrint>
              {formSmallPrint}
            </SmallPrint>
          </>

      }

    </>
  );
}

export default Form;