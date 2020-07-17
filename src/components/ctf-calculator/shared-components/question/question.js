import React from 'react';
import QuestionTheme from './question.module.scss';

const Question = ({
  number,
  children,
  topsFlushOnMobile
}) => {
  return (
    <div className={`${QuestionTheme.Question} ${topsFlushOnMobile ? QuestionTheme.Question___topsFlushOnMobile : ''}`}>
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