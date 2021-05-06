import React from 'react';
import Theme from './header.module.scss'

const Header = () => {
  return (
    <div className={Theme.Container}>
      <div className={Theme.Headings}>
        <h1 className={Theme.Heading}>
          Send a child a gift &  we'll add £10 on top
        </h1>
        <h2 className={Theme.Subheading}>
          Give any child the gift of a pre-loaded Beanstalk account
        </h2>
      </div>

      <div className={Theme.Image}>

      </div>
    </div>
  )
}

export default Header;