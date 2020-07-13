import React from 'react';
import ProgressTheme from './progress.module.scss';

const Progress = (currentStep) => {
  return (
    <div className={ProgressTheme.Progress}>
      <div className={ProgressTheme.Milestone}>
      </div>
    </div>
  )
}

export default Progress;