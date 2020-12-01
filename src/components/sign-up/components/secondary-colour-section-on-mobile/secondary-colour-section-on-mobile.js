import React from 'react';
import Theme from './secondary-colour-section-on-mobile.module.scss';
import FooterShapeTop from './images/footer-curve.svg';
import DecorativeSectionJoin from '../decorative-section-join/decorative-section-join';

const SecondaryColourSectionOnMobile = ({ children }) => (
  <div className={Theme.Section}>
    <DecorativeSectionJoin/>
    {children}
    <div className={Theme.Footer}>
      <div className={Theme.Footer_Shape}>
        {/*<img className={Theme.Footer_Shape_Top} src={FooterShapeTop}/>*/}
      </div>
      <div className={Theme.Footer_Graphic}></div>
    </div>
  </div>
)

export default SecondaryColourSectionOnMobile;