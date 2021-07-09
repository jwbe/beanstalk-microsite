import React from 'react'
import Theme from './press-logos.module.scss'

import THE_TIMES_LOGO from './images/the-times-logo.png'
import DAILY_MAIL_LOGO from './images/daily-mail-logo.png'
import THE_MONEY_PAGES_LOGO from './images/the-money-pages-logo.png'
import THE_I_LOGO from './images/i-logo.png'
import ALT_FI_LOGO from './images/alt-fi-logo.png'
import FINEXTRA_LOGO from './images/finextra-logo.png'
import THE_SUN_LOGO from './images/the-sun-logo.png'

const PressLogos = () => {

  return (
    <div {...{
      className: Theme.Container
    }}>
      <div {...{
        className: Theme.Row
      }}>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 104,
            className: Theme.Logo,
            src: THE_TIMES_LOGO,
            alt: `The Times`
          }}/>
        </div>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 103,
            className: Theme.Logo,
            src: DAILY_MAIL_LOGO,
            alt: `Daily Mail`
          }}/>
        </div>
      </div>
      <div {...{
        className: Theme.Row
      }}>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 84,
            className: Theme.Logo,
            src: THE_MONEY_PAGES_LOGO,
            alt: `The Money Pages`
          }}/>
        </div>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 40,
            className: Theme.Logo,
            src: THE_I_LOGO,
            alt: `The i`
          }}/>
        </div>
      </div>
      <div {...{
        className: Theme.Row
      }}>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 40,
            className: Theme.Logo,
            src: ALT_FI_LOGO,
            alt: `AltFi`
          }}/>
        </div>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 80,
            className: Theme.Logo,
            src: FINEXTRA_LOGO,
            alt: `Finextra`
          }}/>
        </div>
      </div>
      <div {...{
        className: Theme.Row
      }}>
        <div {...{
          className: Theme.Cell
        }}>
          <img {...{
            width: 75,
            className: Theme.Logo,
            src: THE_SUN_LOGO,
            alt: `The Sun`
          }}/>
        </div>
      </div>
    </div>
  )
}

export default PressLogos