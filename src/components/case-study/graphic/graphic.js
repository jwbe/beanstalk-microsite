import React from 'react'
import Theme from './graphic.module.scss'

const Graphic = (props) => {
  let { src } = props;
  return <img src={src}/>;
}

export default Graphic;