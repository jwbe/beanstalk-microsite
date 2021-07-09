import React from 'react'
import classNames from 'classnames/bind'

import Theme from './get-app-button.module.scss'

const GetApp = props => {


  const { type, children } = props;

  const cx = classNames.bind(Theme);

  const className = cx({
    Button: true,
    Primary: type === `primary`,
  });


  return (
    <div {...{
      className: Theme.Centre
    }}>
     <a {...{
       className: className,
       href: `https://smart.link/e1zksqyenr6pj?site_id=ppcctf`
     }}>
       { children }
     </a>
    </div>
  )
}

export default GetApp