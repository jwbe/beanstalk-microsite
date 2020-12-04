import React from 'react';
import Theme from './heading.module.scss';

const Heading = ({
  mainCta,
  secondaryCta,
  partner
}) => (
  <header className={Theme.Header}>
    <h1 className={Theme.MainCta}>{mainCta}</h1>

    <div className={Theme.SecondaryCta}>{secondaryCta}</div>

    <div className={Theme.Partner}>{partner}</div>
  </header>
);

export default Heading;