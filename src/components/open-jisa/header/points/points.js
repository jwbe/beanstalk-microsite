import React from 'react';
import Theme from './points.module.scss';

const Points = (props) => {
  let { children } = props;

  return (
    <div className={Theme.Points}>
      { children }
    </div>
  );
}

export default Points;