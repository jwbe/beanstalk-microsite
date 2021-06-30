import React from 'react'
import Theme from './subheading.module.scss'

const Subheading = props => {
  const { children } = props;
  return <h3 className={Theme.Heading}>{ children }</h3>
}

export default Subheading;