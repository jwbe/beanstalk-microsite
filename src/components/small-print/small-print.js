import React from 'react';
import Theme from './small-print.module.scss';

const SmallPrint = ({
  children
}) => (
  <section className={Theme.Container}>
    { children }
  </section>
);

export default SmallPrint;