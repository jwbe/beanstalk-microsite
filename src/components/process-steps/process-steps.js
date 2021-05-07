import React from 'react';
import Theme from './process-steps.module.scss';
import Step from './step/step';
import Arrow from './arrow/arrow';

const initialData = [
  {
    id: 0,
    thumbnail: require('./images/1.png'),
    copy: "Enter your details on this page",
  },
  {
    id: 1,
    thumbnail: require('./images/2.png'),
    copy: "Download and register on the app with the same details"
  },
  {
    id: 2,
    thumbnail: require('./images/3.png'),
    copy: "As part of the 1 minute sign up process invite your grandchild's parents"
  },
  {
    id: 3,
    thumbnail: require('./images/4.png'),
    copy: "They can join the app and open a JISA that you can contribute to"
  }
]

const BuildSteps = (props) => {
  let { data } = props;
  return (
    data.map((step, index) => (
      <React.Fragment
        key={step.id}>
        <Step
          {...{
          thumbnail: step.thumbnail,
          copy: step.copy
        }}/>
        {
          index < data.length - 1 && <Arrow/>
        }
      </React.Fragment>
    ))
  )
}

const ProcessSteps = (props) => {
  let { processSteps } = props ? props : []; 
  const data = Object.values([...initialData, ...processSteps].reduce((result, {
    id,
    ...rest
  }) => {
    result[id] = {
      ...(result[id] || {}),
      id,
      ...rest
    };
    return result;
  }, {}));
  return (
    <>
      <h2 className={Theme.Heading}>
        How to save for your grandchildren with Beanstalk
      </h2>
      <div className={Theme.Container}>
        <BuildSteps {...{ data }}/>
      </div>
    </>
  )
}

export default ProcessSteps;