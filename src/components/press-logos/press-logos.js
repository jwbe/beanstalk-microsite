import React from 'react'
import styles from './press-logos.module.scss'

import TheSunLogo from './images/the-sun-logo.svg'
import TheTimesLogo from './images/the-times-logo.png'
import FinnExtraLogo from './images/finn-extra-logo.png'
import iNewsLogo from './images/inews-logo.png'
import TheMoneyPagesLogo from './images/the-money-pages-logo.png'
import DailyMailLogo from './images/daily-mail-logo.png'
import altFiLogo from './images/altfi-logo.svg'

const PressLogos = props => {

  const { links, secondRow } = props

  return (
    <>
      {
        links === true ?
         <div className={styles.Logos}>
           <a className={styles.Logo} href="https://www.thetimes.co.uk/article/the-saving-apps-that-give-parents-a-helping-hand-pcsms7r0r" target="_blank" rel="noopener">
             <img src={TheTimesLogo} alt='The Times logo'/>
           </a>
           <a className={styles.Logo} href="https://www.dailymail.co.uk/money/saving/article-9369737/Watch-childrens-savings-grow-Junior-Isas-generous.html" target="_blank" rel="noopener">
             <img src={DailyMailLogo} alt='Daily Mail logo'/>
           </a>
           <a className={styles.Logo} href="https://inews.co.uk/inews-lifestyle/money/child-trust-fund-junior-isa-find-account-hmrc-653002" target="_blank" rel="noopener">
             <img src={iNewsLogo} alt='iNews logo'/>
           </a>
           <a className={styles.Logo} href="https://www.themoneypages.com/investments/top-childs-savings-two-minutes-new-app/" target="_blank" rel="noopener">
             <img src={TheMoneyPagesLogo} alt='The Money Pages logo'/>
           </a>
         </div>
         :
         <div className={styles.Logos}>
           <div className={styles.Logo}>
             <img src={TheTimesLogo} alt='The Times logo'/>
           </div>
           <div className={styles.Logo} href="https://www.dailymail.co.uk/money/saving/article-9369737/Watch-childrens-savings-grow-Junior-Isas-generous.html" target="_blank" rel="noopener">
             <img src={DailyMailLogo} alt='Daily Mail logo'/>
           </div>
           <div className={styles.Logo}>
             <img src={iNewsLogo} alt='iNews logo'/>
           </div>
           <div className={styles.Logo}>
             <img src={TheMoneyPagesLogo} alt='The Money Pages logo'/>
           </div>
         </div>
      }
      {
        secondRow === true &&
        <div className={styles.Logos}>
          <a className={styles.Logo} href="https://www.thesun.co.uk/money/14426242/junior-cash-isa-saving-thousands" target="_blank" rel="noopener">
            <img src={TheSunLogo} alt='The Sun logo'/>
          </a>
          <a className={styles.Logo} href="https://www.finextra.com/pressarticle/83509/beanstalk-launches-kids-savings-app" target="_blank" rel="noopener">
            <img src={FinnExtraLogo} alt='FinnExtra logo'/>
          </a>
          <a className={styles.Logo} href="https://www.altfi.com/article/6885_new-child-friendly-savings-and-investment-app-beanstalk-breaks-onto-the-scene" target="_blank" rel="noopener">
            <img src={altFiLogo} alt='Alt Fi logo'/>
          </a>
        </div>
      }
    </>
  )

}

export default PressLogos;