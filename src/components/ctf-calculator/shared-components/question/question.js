import React from 'react';
import QuestionTheme from './question.module.scss';

const Question = ({
  number,
  children
}) => {
  return (
    <div className={QuestionTheme.Question}>
      <div className={QuestionTheme.Question_Roundel}>
        {number}
      </div>
      <div className={QuestionTheme.Question_Body}>
        {children}
      </div>
    </div>
  )
}

export default Question;