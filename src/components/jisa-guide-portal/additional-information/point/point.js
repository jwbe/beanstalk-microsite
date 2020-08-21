import React from 'react'
import Styles from './point.module.scss'

const Point = ({
  children
}) => (
  <div className={Styles.List}>
    <div className={Styles.Bullet}>
    </div>
    <div className={Styles.Item}>
      {children}
    </div>
  </div>
)

export default Point