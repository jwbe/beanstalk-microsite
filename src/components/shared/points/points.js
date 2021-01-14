import React from 'react'
import { Link } from 'gatsby'

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
          All your children on one app
        </h3>
        <p className={Theme.Point_Description}>
          Open accounts for all your kids, check how much they have within seconds all in one app
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
          With no minimum or regular contribution required, you or anyone you invite can contribute whenever you want whether it is £10 or £1000.
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={CoinInHandIcon} alt="Coin-in-hand icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Lots of easy ways to save
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
          The whole family can help save for your children
        </h3>
        <p className={Theme.Point_Description}>
          Invite friends and family and they can contribute to your kids’ JISAs through their own
        </p>
      </div>
    </div>
    <div className={Theme.Point}>
      <div className={Theme.Point_Icon_Wrapper}>
        <img className={Theme.Point_Icon} src={PadlockIcon} alt="Padlock icon"/>
      </div>
      <div className={Theme.Point_Content}>
        <h3 className={Theme.Point_Heading}>
          Reimagining child savings and investing
        </h3>
        <p className={Theme.Point_Description}>
          Beanstalk offers stocks & shares Junior ISAs and adult ISAs so any returns are tax free.
          Choose from two low cost investment funds in the proportion you choose.
          At 0.5% our fee is one of the lowest meaning more saved for your kids. <Link to="/designed-to-grow">Learn more</Link>
        </p>
      </div>
    </div>
  </div>
)

export default Points;