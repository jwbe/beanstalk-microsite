import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';
import Select from 'react-select';
import GiftSummary from './gift-summary/gift-summary';
import Checkbox from './checkbox/checkbox';
import Tooltip from './tooltip/tooltip';
import Section from './section/section';
import Button from './cta-button/cta-button';
import Theme from './gifter.module.scss';
import IsFormError from './is-form-error/is-form-error';
import Header from './header/header';
import TextareaCounter from './textarea-counter/textarea-counter';

const Gifts = () => {
  const initialFormFields = {
    childsName: '',
    parentsName: '',
    parentsEmailAddress: '',
    giftAmount: '',
    giftMessage: '',
    sendersName: '',
    sendersEmailAddress: '',
    sendersRelationshipToChild: '',
    termsAccepted: false
  }

  const initialFormErrors = {
    childsName: '',
    parentsName: '',
    parentsEmailAddress: '',
    giftAmount: '',
    giftMessage: '',
    sendersName: '',
    sendersEmailAddress: '',
    sendersRelationshipToChild: '',
    termsAccepted: ''
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

    if(fields['parentsName'] === '') {
      formIsValid = false
      errors['parentsName'] = `You must enter the parent's name`;
    }

    if(fields['parentsName'] !== '') {
      if(!fields['parentsName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['parentsName'] = `The parent's name shouldn't contain numbers`;
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

    if(fields['sendersName'] === '') {
      formIsValid = false
      errors['sendersName'] = `You must enter your name`;
    }

    if(fields['sendersName'] !== '') {
      if(!fields['sendersName'].match(NAME_VALIDATION_REGEX)) {
        formIsValid = false;
        errors['sendersName'] = `Your name shouldn't contain numbers`;
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
    fields[field] = event.target.value ? event.target.value : event.target.checked;
    if(formStatuses.formSubmitAttempted === true) {
      handleValidation();
    }
    console.log(fields)
    setFormFields({ ...fields});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(handleValidation()) {
      const formData = {
        childsName: formFields.childsName,
        parentsName: formFields.parentsFirstName,
        parentsEmailAddress: formFields.parentsEmailAddress,
        giftAmount: formFields.giftAmount,
        giftMessage: formFields.giftMessage,
        sendersName: formFields.sendersFirstName,
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
      {
        formStatuses.formSubmitted
        ?
        <p className={Theme.SubmittedCopy}>Your gift has been sent</p>
        :
        <>
          <Header/>
          <div className={Theme.Container}>
            <div className={Theme.Cell}>
              <form className={Theme.Form} name='gifts' method='POST' noValidate data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={ event => handleSubmit(event) }>
                <Section {...{
                  heading: `Child's name`,
                  legend: `Who would you like to send a gift to today?`
                }}
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

                <Section {...{
                  heading: `Parent's details`,
                  legend: `We need these to contact the parent and let them know about the gift.`
                }}
                >
                  <div className={Theme.Form_Input_Wrapper}>
                    <input
                    className={Theme.Form_Input} 
                    id='parentsName'
                    name='parentsName'
                    type='text'
                    value={formFields['parentsName']}
                    onChange={event => handleChange('parentsName', event)}
                    placeholder={`Parent's name`}/>
                    {formErrors.parentsFirstName && (<span className={Theme.Form_Input_Error}></span>)}
                    {formErrors.parentsFirstName && (<Tooltip>{formErrors['parentsName']}</Tooltip>)}
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

                <Section {...{
                  heading: `Gift amount`,
                  legend: `Please enter the amount you'd like to gift`
                }}
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

                <Section {...{
                  heading: `Message`,
                  legend: `With Beanstalk you can leave a message with your contribution`
                }}
                >
                  <div className={`${Theme.Form_Input_Wrapper} ${Theme.Form_Input_Wrapper___Textarea}`}>
                    <textarea
                    className={`${Theme.Form_Input} ${Theme.Form_Input___Message}`} 
                    id='giftMessage'
                    name='giftMessage'
                    placeholder='Write your message here'
                    type='text'
                    value={formFields['giftMessage']}
                    onChange={event => handleChange('giftMessage', event)}
                    rows='4'
                    maxlength='150'
                    >
                    </textarea>
                    {formErrors.giftMessage && (<span className={Theme.Form_Input_Error}></span>)}
                    {formErrors.giftMessage && (<Tooltip>{formErrors['giftMessage']}</Tooltip>)}
                  </div>
                  <TextareaCounter {...{
                    textareaInput: formFields.giftMessage
                  }}/>
                </Section>

                <Section {...{
                  heading: `Your details`,
                  legend: () => (<>We need your details <span className={Theme.DetailsAsterix}>*</span></>)
                }}
                >
                  <div className={Theme.Form_Input_Wrapper}>
                    <input
                    className={Theme.Form_Input} 
                    id='sendersName'
                    name='sendersName'
                    type='text'
                    value={formFields['sendersName']}
                    onChange={event => handleChange('sendersName', event)}
                    placeholder='Your name'/>
                    {formErrors.sendersFirstName && (<span className={Theme.Form_Input_Error}></span>)}
                    {formErrors.sendersFirstName && (<Tooltip>{formErrors['sendersName']}</Tooltip>)}
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

                  <div className={Theme.Notice}>
                    * If you are a Beanstalk user enter the email you've registered on the app with
                  </div>
                </Section>

                <Section {...{
                  heading: `Relationship to child`
                }}
                >
                  <Select
                  className={Theme.ProviderSelect}
                  styles={selectStyles}
                  placeholder={`Select an option`}
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

                  <div className={Theme.CheckboxAndLabel}>
                    <Checkbox {...{ handleChange: event => handleChange('termsAccepted', event), checked: formFields['termsAccepted'] }}/>
                    <div className={Theme.CheckboxLabel}>
                      I agree that this data will be used to send a gift to the child
                    </div>
                  </div>
                </Section>
                <input type='hidden' name='bot-field' onChange={ event => handleChange('bot-field', event)} value={formFields['bot-field']}/>
                <input type='hidden' name='form-name' value='gifts'/>
                <Button/>

                <IsFormError {...{
                  formErrors: formErrors
                }}/>
              </form>
            </div>
            <div className={Theme.Cell}>
              <GiftSummary {...{ 
                giftAmount: formFields.giftAmount,
                giftMessage: formFields.giftMessage 
              }}/>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Gifts;