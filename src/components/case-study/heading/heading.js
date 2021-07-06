import React from 'react'
import Theme from './heading.module.scss'
import classNames from 'classnames/bind'



const Heading = props => {
  const { children, onlyMobile, noMobile } = props;

  const cx = classNames.bind(Theme);

  const className = cx({
    Heading,
    onlyMobile: onlyMobile,
    noMobile: noMobile
  });

  return <h2 className={className}>{ children }</h2>
}

export default Heading;