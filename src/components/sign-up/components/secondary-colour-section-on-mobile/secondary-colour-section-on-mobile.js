import React from 'react';
import Theme from './secondary-colour-section-on-mobile.module.scss';
import DecorativeSectionJoin from '../decorative-section-join/decorative-section-join';

const SecondaryColourSectionOnMobile = ({ children }) => (
  <div className={Theme.Section}>
    <DecorativeSectionJoin/>
    {children}
    <div className={Theme.Footer}>
      <div className={Theme.Curve}>
        <div className={`${Theme.Shape} ${Theme.Shape___Left}`}></div>
        <div className={`${Theme.Shape} ${Theme.Shape___Middle}`}></div>
        <div className={`${Theme.Shape} ${Theme.Shape___Right}`}></div>
      </div>
      <div className={Theme.Curve_Bottom}>
        <div className={Theme.Graphic}></div>
      </div>
    </div>
  </div>
)

export default SecondaryColourSectionOnMobile;