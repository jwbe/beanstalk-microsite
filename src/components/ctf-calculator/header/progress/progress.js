import React from 'react';
import ProgressTheme from './progress.module.scss';

const Progress = ({props}) => {
  let { currentStep, goToStep } = props;
  switch (currentStep) {
    case 1:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive} ${ProgressTheme.Progress_Milestone___HandlerAttached}`} onClick={() => {goToStep(3)}}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive}`}>
          </div>
        </div>
      )
    case 2:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited} ${ProgressTheme.Progress_Milestone___HandlerAttached}`} onClick={() => {goToStep(1)}}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
        </div>
      )
    case 3:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited} ${ProgressTheme.Progress_Milestone___HandlerAttached}`} onClick={() => {goToStep(1)}}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Inactive}`} onClick={() => {goToStep(3)}}>
          </div>
        </div>
      )
    case 4:
      return (
        <div className={ProgressTheme.Progress}>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited} ${ProgressTheme.Progress_Milestone___HandlerAttached}`} onClick={() => {goToStep(1)}}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Visited} ${ProgressTheme.Progress_Milestone___HandlerAttached}`} onClick={() => {goToStep(3)}}>
          </div>
          <div className={`${ProgressTheme.Progress_Milestone} ${ProgressTheme.Progress_Milestone___Active}`}>
          </div>
        </div>
      )
    default:
      return null;
  }
}

export default Progress;