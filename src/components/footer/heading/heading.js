import React from 'react';
import Theme from './heading.module.scss';

const Heading = ({
  children
}) => {
  return (
    <h3 className={Theme.Heading}>
      { children }
    </h3>
  )
}

export default Heading