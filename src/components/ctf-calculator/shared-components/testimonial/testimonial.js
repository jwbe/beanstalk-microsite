import React from 'react';
import Theme from './testimonial.module.scss';

const Testimonial = () => (
  <div className={Theme.Container}>
    <div className={Theme.Thumbnail}></div>
    <div className={Theme.Content}>
      <p>
        I saved £100 per year by moving my daughter's CTF
      </p>
      <span className={Theme.Author}>
        Mrs E, London
      </span>
    </div>
  </div>
);

export default Testimonial;