import React from 'react';
import Theme from './process-steps.module.scss';
import Step from './step/step';
import Arrow from './arrow/arrow';


import IMAGE_ONE from './images/1.png';
import IMAGE_TWO from './images/2.png';
import IMAGE_THREE from './images/3.png';
import IMAGE_FOUR from './images/4.png';

const ProcessSteps = () => {

  return (
    <>
      <h2 className={Theme.Heading}>
        How to save for your grandchildren with Beanstalk
      </h2>
      <div className={Theme.Container}>
        <Step {...{ 
          thumbnail: IMAGE_ONE, 
          copy: "Enter your details on this page"
        }}/>

        <Arrow/>

        <Step {...{ 
          thumbnail: IMAGE_TWO, 
          copy: "Download and register on the app with the same details"
        }}/>

        <Arrow/>

        <Step {...{ 
          thumbnail: IMAGE_THREE, 
          copy: "As part of the sign up process invite your grandchild's parents"
        }}/>

        <Arrow/>

        <Step {...{ 
          thumbnail: IMAGE_FOUR, 
          copy: "They can join the app and open a JISA that you can contribute to"
        }}/>
      </div>
    </>
  )
}

export default ProcessSteps;