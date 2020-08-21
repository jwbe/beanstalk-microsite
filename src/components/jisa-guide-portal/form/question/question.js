import React from 'react'
import Styles from './question.module.scss'

const Question = () => (
  <div className={Styles.Question}>
    <label className={Styles.Checkbox}>
      <input 
      type="checkbox"
      name="optIn"
      id="optIn"
      ref="optIn"
      />
      <span className={Styles.Checkbox_Facade}></span>
      <div className={Styles.Copy}>I would like to receive information about Junior ISAs from Beanstalk</div>
    </label>
  </div>
)

export default Question