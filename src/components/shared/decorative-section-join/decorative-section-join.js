import React from 'react';
import Theme from './decorative-section-join.module.scss';



const DecorativeSectionJoin = ({ flipped })  => {
  const completedClass = flipped === true ? Theme.Wrapper__vFlipped : ''
  return (
    <div className={`${Theme.Wrapper} ${completedClass}`}>
      <div className={Theme.Inner}>

      </div>
    </div>
  ); 
}



export default DecorativeSectionJoin;