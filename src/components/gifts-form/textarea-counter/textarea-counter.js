import React from 'react';
import Theme from './textarea-counter.module.scss';

const TextareaCounter = (props) => {
  let { textareaInput } = props;
  let count = textareaInput === undefined ? 0 : textareaInput.length;
  return (
    <div className={Theme.Container}>{ 150 - count } character{ 150 - count !== 1 && 's' } left</div>
  )
}

export default TextareaCounter;