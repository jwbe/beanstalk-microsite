import React from 'react'
import Styles from './checkbox.module.scss'

const Checkbox = (props) => {
  let { updateRoundUpPurchases, checked } = props;
  return (
    <label className={Styles.Checkbox}>
      <input
      defaultChecked={checked}
      type="checkbox"
      onChange={e => updateRoundUpPurchases(e)}
      />
      <span className={Styles.Checkbox_Facade}></span>
    </label>
  )
}

export default Checkbox;