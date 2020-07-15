import React from 'react';
import ProgressTheme from './progress.module.scss';

const Progress = ({ currentStep }) => {
  switch (currentStep.currentStep) {
    case 1:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive}`}>
          </div>
        </div>
      )
      break;
    case 2:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
        </div>
      )
      break;
    case 3:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive}`}>
          </div>
        </div>
      )
      break;
    case 4:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
        </div>
      )
      break;
    default:
      return null;
  }
}

export default Progress;