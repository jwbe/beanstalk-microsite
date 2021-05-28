import React from 'react'
import Styles from './header.module.scss'
import Badges from '../../../shared/badges-new/badges'

const Header = () => (
  <>
    <h2 className={Styles.Header}>
      Junior ISAs can be a great way to save for your children and grandchildren
    </h2>
    <div className={Styles.Badges}>
      <Badges {...{
        AppStoreLink: 'https://smart.link/nayw9a5wruuts?site_id=iosjg',
        GooglePlayLink: 'https://smart.link/i0x4v7cw1rb98?site_id=andrjg'
      }}/>
    </div>
    <h3 className={Styles.Subheader}>
      Request your free guide to learn about:
    </h3>
  </>
)

export default Header



