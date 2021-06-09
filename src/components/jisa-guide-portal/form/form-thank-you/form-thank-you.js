import React from 'react'
import Theme from './form-thank-you.module.scss'
import Header from '../header/header'

const ThankYou = () => {
  return (
    <>
      <Header {...{
        heading: 'Thank you',
        cta: 'You can download your guide by clicking the button below'
      }}/>
      <div className={Theme.Submit_Wrapper}>
        <a className={Theme.Submit} href="/docs/beanstalks-guide-to-jisas.pdf" target="_blank" rel="noopener noreferrer">Download guide now</a>
      </div>
    </>
  );
}

export default ThankYou;