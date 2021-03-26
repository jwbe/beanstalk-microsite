import React from 'react';
import Theme from './popper.module.scss';

const Popper = (props) => {
  let { heading, children, onClick } = props;

  return (
    <div className={Theme.Container} onClick={onClick}>
      <div className={Theme.Inner}>
        <header>
          { heading }
        </header>
        <p>
          { children }
        </p>
      </div>
    </div>
  )
}

export default Popper;