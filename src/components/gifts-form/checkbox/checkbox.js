import React from 'react'
import Styles from './checkbox.module.scss'

const Checkbox = (props) => {
  let { handleChange, checked } = props;
  return (
    <label className={Styles.Checkbox}>
      <input
      defaultChecked={checked}
      type="checkbox"
      onChange={e => handleChange(e)}
      />
      <span className={Styles.Checkbox_Facade}></span>
    </label>
  )
}

export default Checkbox;