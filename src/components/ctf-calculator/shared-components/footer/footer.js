import React from 'react'
import Theme from './footer.module.scss'
import Callout from '../../../shared/callout/callout'

const Footer = () => {
  return (
    <>
      <div className={Theme.Callout}>
        <Callout/>
      </div>
      <div className={Theme.Smallprint}>
        * as of April ’21, Beanstalk users transferring in stocks & shares CTFs or JISAs have saved on average £180 in fees until the child is 18.
      </div>
    </>
  )
}

export default Footer;