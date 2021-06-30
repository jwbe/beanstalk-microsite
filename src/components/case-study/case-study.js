import React from 'react'
import classNames from 'classnames/bind'

import Theme from './case-study.module.scss'

const CaseStudy = props => {

  let { background, layout, children } = props;

  const cx = classNames.bind(Theme);

  const className = cx({
    CaseStudy: true,
    LeftToRight: layout === `leftToRight`,
    RightToLeft: layout === `rightToLeft`,
    WhiteBackground: background === `white`,
    PrimaryBackground: background === `primary`,
    SecondaryBackground: background === `secondary`
  });
  
  return (
    <div className={className}>
      { children }
    </div>
  )
}

export default CaseStudy;