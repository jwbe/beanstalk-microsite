import React from 'react'
import TooltipTheme from './tooltip.module.scss'

const Tooltip = ({children}) => (
  <div className={TooltipTheme.Tooltip}>
    <div className={TooltipTheme.Tooltip_Tab_Wrapper}>
      <div className={TooltipTheme.Tooltip_Tab}></div>
    </div>
    <div className={TooltipTheme.Tooltip_Inner}>
      {children}
    </div>
  </div>
)

export default Tooltip;