import React from 'react'
import Styles from './header.module.scss'
import Badges from '../../../shared/badges-new/badges'

const Header = (props) => {
  const { heading, subheading } = props;
  return (
    <>
      <h2 className={Styles.Header}>
        { heading }
      </h2>
      <div className={Styles.Badges}>
        <Badges {...{
          AppStoreLink: 'https://smart.link/i0x4v7cw1rb98?site_id=andrjglg',
          GooglePlayLink: 'https://smart.link/nayw9a5wruuts?site_id=iosjglg'
        }}/>
      </div>
      <h3 className={Styles.Subheader}>
        { subheading }
      </h3>
    </>
  )
}

export default Header



