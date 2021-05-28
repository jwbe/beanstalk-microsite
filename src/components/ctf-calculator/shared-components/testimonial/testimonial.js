import React from 'react';
import Theme from './testimonial.module.scss';

const Testimonial = () => (
  <div className={Theme.Container}>
    <div className={Theme.Thumbnail}></div>
    <div className={Theme.Content}>
      <p>
        "I now feel comfortable that my children's Junior ISA money is in place where fees are low"
      </p>
      <span className={Theme.Author}>
        Lynn Beattie aka Mrs MummyPenny, Personal Finance Expert
      </span>
    </div>
  </div>
);

export default Testimonial;