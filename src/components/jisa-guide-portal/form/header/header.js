import React from 'react'
import Styles from './header.module.scss'

const Header = (
  props
) => (
  <>
    <header className={Styles.Header}>
      <div className={Styles.Headings}>
        {
          props.heading &&
          <h2 className={Styles.Heading}>
            {props.heading}
          </h2>
        }
        {
          props.subheading &&
          <h3 className={Styles.Subheading}>
            {props.subheading}
          </h3>
        }
        {
          props.cta &&
          <p className={Styles.Cta}>
            {props.cta}
          </p>
        }
      </div>
      <div className={Styles.FrontPageMagazine}>
        <div className={Styles.FrontPageMagazine_Inner}>
        </div>
      </div>
    </header>
  </>
)

export default Header