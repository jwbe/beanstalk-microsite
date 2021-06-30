import React from 'react'
import Theme from './heading.module.scss'

const Heading = props => {
  const { children } = props;
  return <h2 className={Theme.Heading}>{ children }</h2>
}

export default Heading;