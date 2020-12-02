import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';

import Theme from './form.module.scss';
import Tooltip from './tooltip/tooltip';
import SmallPrint from '../small-print/small-print';
import Confirmation from './confirmation/confirmation';

const Form = () => {

  const location = () => {
    let item = typeof window !== 'undefined' ? window.location.pathname.split('/') : null;
    let itemCount = item.length;
    item = item[itemCount - 1];
    return item;
  };

  const initialFormStatus = {
    formSubmitted: null,
    formSubmitAttempted: false,
    botField: ''
  };

  const initialFormFields = {
    name: '',
    email: ''
  };

  const initialFormErrors = {
    name: '',
    email: ''
  };

  const [formStatuses, setFormStatuses] = useState(initialFormStatus);
  const [formFields, setFormFields] = useState(initialFormFields);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleValidation = () => {
    let fields = formFields
    let errors = {};
    let formIsValid = true;

    if(fields['name'] === '') {
      formIsValid = false
      errors['name'] = 'You must enter your full name';
    }

    if(fields['name'] !== '') {
      if(!fields['name'].match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
        formIsValid = false;
        errors['name'] = 'Your name shouldn\'t contain numbers';
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

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatuses(formStatuses, {
      formSubmitted: true, formSubmitAttempted: true
    });

    if(handleValidation()) {
      const formData = {
        'bot-field': formFields.botField,
        name: formFields.name,
        email: formFields.email,
        partner: location(),
        'form-name': 'signup'
      }

      const axiosOptions = {
        url: location(),
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
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
        <Confirmation/>
        :
        <div className={Theme.Form_Wrapper}>
          <form className={Theme.Form} name="signup" method="POST" noValidate data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={ event => handleSubmit(event) }>
            <div className={Theme.Form_VisibleInputs}>
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
              <div className={Theme.Form_Input_Wrapper}>
                <input 
                className={Theme.Form_Input} 
                placeholder="Your full name" 
                type="text" 
                name="name" 
                id="name"
                onChange={event => handleChange('name', event)}
                value={formFields['name']}
                />
                {formErrors.name && <span className={Theme.Form_Input_Error}></span>}
                {formErrors.name && <Tooltip>{formErrors['name']}</Tooltip>}
              </div>
            </div>
            <input type="hidden" name="bot-field" onChange={ event => handleChange('bot-field', event)} value={formFields['bot-field']}/>
            <input type="hidden" name="form-name" value="signup"/>
            <input type="hidden" name="partner"/>
            <button className={Theme.Form_Submit} type="submit">Get Started</button>
          </form>

          <SmallPrint>
            <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.  <br/><strong>Capital at risk</strong>.
          </SmallPrint>
        </div>
      }

    </>
  );
}

export default Form;