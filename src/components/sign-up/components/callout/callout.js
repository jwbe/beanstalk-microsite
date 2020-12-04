import React from 'react';
import Theme from './callout.module.scss';

const Callout = () => (
  <aside className={Theme.Callout}>
    <p className={Theme.Callout_Inner}>
      We are bringing child savings into the 21st Century. <br className={Theme.Callout_LineBreak}/>Join the revolution in as little as 5 minutes.
    </p>
  </aside>
)

export default Callout
