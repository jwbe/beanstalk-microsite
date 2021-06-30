import React from 'react'
import Theme from './graphic.module.scss'

const Graphic = props => {
  const { src } = props;
  return <img className={Theme.Image} src={src}/>;
}

export default Graphic;