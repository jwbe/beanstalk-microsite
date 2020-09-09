import React from 'react'
import styles from './press-logos.module.scss'

import TheTimesLogo from './images/the-times-logo.png'
import FinnExtraLogo from './images/finn-extra-logo.png'
import iNewsLogo from './images/inews-logo.png'
import TheMoneyPagesLogo from './images/the-money-pages-logo.png'

const PressLogos = () => (
  <div className={styles.Logos}>
    <a className={styles.Logo} href="https://www.thetimes.co.uk/article/the-saving-apps-that-give-parents-a-helping-hand-pcsms7r0r" target="_blank" rel="noopener">
      <img src={TheTimesLogo} alt='The Times logo'/>
    </a>
    <a className={styles.Logo} href="https://www.finextra.com/pressarticle/83509/beanstalk-launches-kids-savings-app" target="_blank" rel="noopener">
      <img src={FinnExtraLogo} alt='FinnExtra logo'/>
    </a>
    <a className={styles.Logo} href="" target="_blank" rel="noopener">
      <img src={iNewsLogo} alt='iNews logo'/>
    </a>
    <a className={styles.Logo} href="https://www.themoneypages.com/investments/top-childs-savings-two-minutes-new-app/" target="_blank" rel="noopener">
      <img src={TheMoneyPagesLogo} alt='The Money Pages logo'/>
    </a>
  </div>
)

export default PressLogos;