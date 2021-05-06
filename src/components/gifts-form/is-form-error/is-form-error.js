import React from 'react';
import Theme from './is-form-error.module.scss';

const IsFormError = (props) => {
  const ERROR_STRING = 'There are a few errors in the form above. Correct them and try again. :)'
  let { formErrors } = props;
  let isFormError = false;

  for (let property in formErrors) {
    if (formErrors[property]) {
      isFormError = true;
    }
  }

  return (
    isFormError && (
      <div className={Theme.Container}>
        <div className={Theme.Inner}>
          {
            ERROR_STRING
          }
        </div>
      </div>
    )
  )
}

export default IsFormError;