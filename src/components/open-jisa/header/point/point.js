import React from 'react';
import Theme from './point.module.scss';

const Point = (props) => {
  let { children } = props;
  return (
    <>
      <div className={Theme.Container}>
        <div className={Theme.Icon}>
        </div>
        <div className={Theme.Content}>
          { children }
        </div>
      </div>
    </>
  );
}

export default Point;