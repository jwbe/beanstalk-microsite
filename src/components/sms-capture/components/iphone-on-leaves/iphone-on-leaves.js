import React from 'react';
import Theme from './iphone-on-leaves.module.scss';
import Iphone from '../../../shared/iphone/iphone';

const IphoneOnLeaves = () => (
  <div className={Theme.Container}>
    <div className={Theme.Iphone}>
      <Iphone/>
    </div>
  </div>
);

export default IphoneOnLeaves;