import React from 'react';
import Theme from './heading.module.scss';

const Heading = () => (
  <header className={Theme.Header}>
    <h1 className={Theme.MainCta}>Join Beanstalk</h1>

    <div className={Theme.SecondaryCta}>and get a 30 Day Trial<br/> & up to 35% Off</div>

    <div className={Theme.Partner}>from Reading Eggs</div>
  </header>
);

export default Heading;