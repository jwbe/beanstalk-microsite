import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';
import Select from 'react-select';
import GiftSummary from './gift-summary/gift-summary';
import Theme from './gifter.module.scss';
import Tooltip from './tooltip/tooltip';
import Section from './section/section';
import Button from './cta-button/cta-button';

const Gifts = () => {
  const initialFormFields = {
    childsName: '',
    parentsFirstName: '',
    parentsLastName: '',
    parentsPhoneNumber: '',
    parentsEmailAddress: '',
    giftAmount: '',
    giftMessage: '',
    sendersFirstName: '',
    sendersLastName: '',
    sendersEmailAddress: '',
    sendersRelationshipToChild: ''
  }

  const initialFormErrors = {
    childsName: '',
    parentsFirstName: '',
    parentsLastName: '',
    parentsPhoneNumber: '',
    parentsEmailAddress: '',
    giftAmount: '',
    giftMessage: '',
    sendersFirstName: '',
    sendersLastName: '',
    sendersEmailAddress: '',
    sendersRelationshipToChild: ''
  }

  const initialFormStatus = {
    formSubmitted: null,
    formSubmitAttempted: false,
    botfield: ''
  }

  const location = () => {
    let item = typeof window !== 'undefined' ? window.location.pathname.split('/') : null;
    let itemCount = item.length;
    item = item[itemCount - 1];
    return item;
  };

  const [formStatuses, setFormStatuses] = useState(initialFormStatus);
  const [formFields, setFormFields] = useState(initialFormFields);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const NAME_VALIDATION_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const NO_ALPHA_REGEX = /^[0-9]*$/;
  const PHONE_VALIDATION_REGEX = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  const EMAIL_VALIDATION_REGEX = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleValidation = () => {
    let fields = formFields
    let errors = {};
    let formIsValid = true;

    if(fields['childsName'] === '') {
      formIsValid = false
      errors['childsName'] = `You must enter the child's name`;
    }

    if(fields['childsName'] !== '') {
      if(!fields['childsName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['childsName'] = `The child's name shouldn't contain numbers`;
      }
    }

    if(fields['parentsFirstName'] === '') {
      formIsValid = false
      errors['parentsFirstName'] = `You must enter the parent's name`;
    }

    if(fields['parentsFirstName'] !== '') {
      if(!fields['parentsFirstName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['parentsFirstName'] = `The parent's name shouldn't contain numbers`;
      }
    }

    if(fields['parentsLastName'] === '') {
      formIsValid = false
      errors['parentsLastName'] = `You must enter the parent's name`;
    }

    if(fields['parentsLastName'] !== '') {
      if(!fields['parentsLastName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['parentsLastName'] = `The parent's name shouldn't contain numbers`;
      }
    }

    if(fields['parentsPhoneNumber'] === '') {
      formIsValid = false
      errors['parentsPhoneNumber'] = 'You must enter a phone number';
    }

    if(fields['parentsPhoneNumber'] !== '') {
      if(!fields['parentsPhoneNumber'].match(PHONE_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['parentsPhoneNumber'] = 'This is not a valid UK phone number';
      }
    }

    if(fields['parentsEmailAddress'] === '') {
      formIsValid = false;
      errors['parentsEmailAddress'] = `You must enter the parent's email address`;
    }

    if(fields['parentsEmailAddress'] !== '') {
      if (!EMAIL_VALIDATION_REGEX.test(fields['parentsEmailAddress'])) {
        formIsValid = false;
        errors['parentsEmailAddress'] = 'Please enter a valid email address';
      }
    }

    if(fields['giftAmount'] === '') {
      formIsValid = false
      errors['giftAmount'] = `You must enter a gift amount`;
    }

    if(fields['giftAmount'] !== '') {
      if(!fields['giftAmount'].match(NO_ALPHA_REGEX)) {
        formIsValid = false;
        errors['giftAmount'] = `The amount should contain numbers only`;
      }
    }

    if(fields['giftMessage'] === '') {
      formIsValid = false
      errors['giftMessage'] = `Gift message must not be empty`;
    }

    if(fields['sendersFirstName'] === '') {
      formIsValid = false
      errors['sendersFirstName'] = `You must enter your first name`;
    }

    if(fields['sendersFirstName'] !== '') {
      if(!fields['sendersFirstName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['sendersFirstName'] = `Your name shouldn't contain numbers`;
      }
    }

    if(fields['sendersLastName'] === '') {
      formIsValid = false
      errors['sendersLastName'] = `You must enter your last name`;
    }

    if(fields['sendersLastName'] !== '') {
      if(!fields['sendersLastName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['sendersLastName'] = `Your name shouldn't contain numbers`;
      }
    }

    if(fields['sendersEmailAddress'] === '') {
      formIsValid = false;
      errors['sendersEmailAddress'] = `You must enter your email address`;
    }

    if(fields['sendersEmailAddress'] !== '') {
      if (!EMAIL_VALIDATION_REGEX.test(fields['sendersEmailAddress'])) {
        formIsValid = false;
        errors['sendersEmailAddress'] = 'Please enter a valid email address';
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

    if(handleValidation()) {
      const formData = {
        childsName: formFields.childsName,
        parentsFirstName: formFields.parentsFirstName,
        parentsLastName: formFields.parentsLastName,
        parentsPhoneNumber: formFields.parentsPhoneNumber,
        parentsEmailAddress: formFields.parentsEmailAddress,
        giftAmount: formFields.giftAmount,
        giftMessage: formFields.giftMessage,
        sendersFirstName: formFields.sendersFirstName,
        sendersLastName: formFields.sendersLastName,
        sendersEmailAddress: formFields.sendersEmailAddress,
        sendersRelationshipToChild: formFields.sendersRelationshipToChild,
        'form-name': 'gifts',
        'bot-field': formFields.botField,
      }

      const axiosOptions = {
        url: location(),
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(formData),
      }

      axios(axiosOptions)
        .then(response => {
          setFormStatuses({
            ...formStatuses,
            formSubmitted: true
          });
          console.log(axiosOptions);
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

  const selectStyles = {
    control: (styles, { state, base, isDisabled, isFocused, isSelected }) => ({
      ...base,
      ...styles,
      paddingRight: '0.875rem',
      paddingLeft: '1rem',
      height: '3rem',
      boxShadow: isFocused ? '0 0 0.125rem 0 rgba(50, 182, 122, 0.3), 0 0.0625rem 0.25rem 0 rgba(50, 182, 122, 0.3), 0 0.5rem 1rem 0 rgba(50, 182, 122, 0.3)' : null,
      borderColor: isFocused ? '#32b67a' : null,
      "&:hover": {
        borderColor: isFocused ? '#32b67a' : null
      },
      border: isDisabled
        ? 'none'
        : isSelected
        ? '#ff0000'
        : '#00ff00'
    }),
    indicatorSeparator: () => null,
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: '0'
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#8e8e95',
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      color: isDisabled
        ? '#32b67a'
        : isSelected
        ? '#8e8e95'
        : '#8e8e95'
    }),
    input: (styles) => ({
      ...styles,
      color: '#8e8e95'
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: '0'
    })
  }

  const SELECT_OPTIONS = [
    {
      value: 'auntOrUncle', label: 'Aunt / Uncle'
    },
    {
      value: 'godparent', label: 'Godparent'
    },
    {
      value: 'grandparent', label: 'Grandparent'
    },
    {
      value: 'other', label: 'Other'
    }
  ]

  return (
    <>
      <h2 className={Theme.Heading}>
       Gift a child
      </h2>
      {
        formStatuses.formSubmitted
        ?
        <p className={Theme.SubmittedCopy}>Your gift has been sent</p>
        :
        <div className={Theme.Container}>
          <div className={Theme.Cell}>
            <form className={Theme.Form} name='gifts' method='POST' noValidate data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={ event => handleSubmit(event) }>
              <Section
              heading={`Child's name`}
              legend={`Who would you like to send a gift to today?`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='childsName'
                  name='childsName'
                  type='text'
                  value={formFields['childsName']}
                  onChange={event => handleChange('childsName', event)}
                  placeholder="Child's name"/>
                  {formErrors.childsName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.childsName && (<Tooltip>{formErrors['childsName']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Parent's details`}
              legend={`We need these to contact the parent and let them know about the gift.`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='parentsFirstName'
                  name='parentsFirstName'
                  type='text'
                  value={formFields['parentsFirstName']}
                  onChange={event => handleChange('parentsFirstName', event)}
                  placeholder='First name'/>
                  {formErrors.parentsFirstName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.parentsFirstName && (<Tooltip>{formErrors['parentsFirstName']}</Tooltip>)}
                </div>

                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='parentsLastName'
                  name='parentsLastName'
                  type='text'
                  value={formFields['parentsLastName']}
                  onChange={event => handleChange('parentsLastName', event)}
                  placeholder='Last name'/>
                  {formErrors.parentsLastName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.parentsLastName && (<Tooltip>{formErrors['parentsLastName']}</Tooltip>)}
                </div>

                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='parentsPhoneNumber'
                  name='parentsPhoneNumber'
                  type='number'
                  value={formFields['parentsPhoneNumber']}
                  onChange={event => handleChange('parentsPhoneNumber', event)}
                  placeholder='Phone number'/>
                  {formErrors.parentsPhoneNumber && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.parentsPhoneNumber && (<Tooltip>{formErrors['parentsPhoneNumber']}</Tooltip>)}
                </div>

                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='parentsEmailAddress'
                  name='parentsEmailAddress'
                  type='text'
                  value={formFields['parentsEmailAddress']}
                  onChange={event => handleChange('parentsEmailAddress', event)}
                  placeholder='Email address'/>
                  {formErrors.parentsEmailAddress && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.parentsEmailAddress && (<Tooltip>{formErrors['parentsEmailAddress']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Gift amount`}
              legend={`Please enter the amount you'd like to gift`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <span className={Theme.Form_Input_Currency}>£</span>
                  <input
                  className={`${Theme.Form_Input} ${Theme.Form_Input___Amount}`} 
                  id='giftAmount'
                  name='giftAmount'
                  type='number'
                  value={formFields['giftAmount']}
                  onChange={event => handleChange('giftAmount', event)}
                  />
                  {formErrors.giftAmount && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.giftAmount && (<Tooltip>{formErrors['giftAmount']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Message`}
              legend={`With Beanstalk you can leave a message with your contribution.`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='giftMessage'
                  name='giftMessage'
                  placeholder='Write your message here'
                  type='text'
                  value={formFields['giftMessage']}
                  onChange={event => handleChange('giftMessage', event)}
                  />
                  {formErrors.giftMessage && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.giftMessage && (<Tooltip>{formErrors['giftMessage']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Your details`}
              legend={`With need your details`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='sendersFirstName'
                  name='sendersFirstName'
                  type='text'
                  value={formFields['sendersFirstName']}
                  onChange={event => handleChange('sendersFirstName', event)}
                  placeholder='First name'/>
                  {formErrors.sendersFirstName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.sendersFirstName && (<Tooltip>{formErrors['sendersFirstName']}</Tooltip>)}
                </div>

                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='sendersLastName'
                  name='sendersLastName'
                  type='text' 
                  value={formFields['sendersLastName']}
                  onChange={event => handleChange('sendersLastName', event)}
                  placeholder='Last name'/>
                  {formErrors.sendersLastName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.sendersLastName && (<Tooltip>{formErrors['sendersLastName']}</Tooltip>)}
                </div>

                <div className={Theme.Form_Input_Wrapper}>
                  <input 
                  className={Theme.Form_Input} 
                  id='sendersEmailAddress'
                  name='sendersEmailAddress'
                  type='text' 
                  value={formFields['sendersEmailAddress']}
                  onChange={event => handleChange('sendersEmailAddress', event)}
                  placeholder='Email address'/>
                  {formErrors.sendersEmailAddress && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.sendersEmailAddress && (<Tooltip>{formErrors['sendersEmailAddress']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Your details`}
              >
                <div className={Theme.Form_Input_Wrapper}>
                  <input
                  className={Theme.Form_Input} 
                  id='childsName'
                  name='childsName'
                  type='text'
                  value={formFields['childsName']}
                  onChange={event => handleChange('childsName', event)}
                  placeholder='Childs name'/>
                  {formErrors.childsName && (<span className={Theme.Form_Input_Error}></span>)}
                  {formErrors.childsName && (<Tooltip>{formErrors['childsName']}</Tooltip>)}
                </div>
              </Section>

              <Section
              heading={`Relationship to child`}
              >
                <Select
                className={Theme.ProviderSelect}
                styles={selectStyles}
                placeholder={`Type or scroll to search providers`}
                onChange={(option, event) => {
                  let fields = formFields;
                  let value = '';
                  if(event.action !== 'clear') {
                    value = option.value;
                    fields['sendersRelationshipToChild'] = value;
                    return setFormFields({ ...fields});
                  }
                }}
                options={SELECT_OPTIONS}/>
                {formErrors.sendersRelationshipToChild && (<span className={Theme.Form_Input_Error}></span>)}
                {formErrors.sendersRelationshipToChild && (<Tooltip>{formErrors['sendersRelationshipToChild']}</Tooltip>)}
              </Section>
              <input type='hidden' name='bot-field' onChange={ event => handleChange('bot-field', event)} value={formFields['bot-field']}/>
              <input type='hidden' name='form-name' value='gifts'/>
              <Button/>
            </form>
          </div>
          <div className={Theme.Cell}>
            <GiftSummary {...{ giftAmount: formFields.giftAmount , giftMessage: formFields.giftMessage }}/>
          </div>
        </div>
      }
    </>
  )
}

export default Gifts;