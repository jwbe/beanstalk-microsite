import React from 'react'
import Theme from './tooltip.module.scss'

const Tooltip = ({ children }) => (
  <div className={Theme.Tooltip}>
    <div className={Theme.Tooltip_Tab_Wrapper}>
      <div className={Theme.Tooltip_Tab}></div>
    </div>
    <div className={Theme.Tooltip_Inner}>
      {children}
    </div>
  </div>
)

export default Tooltip;