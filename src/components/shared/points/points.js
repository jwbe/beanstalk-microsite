import React from 'react'

import Theme from './points.module.scss'

import PadlockIcon from './images/padlock-icon.svg'
import PiggybankIcon from './images/piggybank-icon.svg'
import FamilyIcon from './images/family-icon.svg'
import CoinInHandIcon from './images/coin-in-hand-icon.svg'

const Points = () => (
  <div className={Theme.Points}>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={FamilyIcon} alt="Family icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          All accounts in one place
        </h3>
        <p className={Theme.Point_Description}>
          See everyone you are saving for, how much they have and your contributions all within seconds
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={PiggybankIcon} alt="Piggybank icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Start small 
        </h3>
        <p className={Theme.Point_Description}>
          No contributions needed to open an account
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={CoinInHandIcon} alt="Coin-in-hand icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Many ways to save
        </h3>
        <p className={Theme.Point_Description}>
          Round ups, free money back on your shopping, easy top-ups
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={FamilyIcon} alt="Family icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Link family and friends
        </h3>
        <p className={Theme.Point_Description}>
          Boost your kid's savings with multiple people contributing
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={PadlockIcon} alt="Padlock icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Safe and secure
        </h3>
        <p className={Theme.Point_Description}>
          Beanstalk is FCA regulated and your money and investments are held under FCA client money and custody rules by our authorised investment platform provider
        </p>
      </div>
    </div>
  </div>
)

export default Points;