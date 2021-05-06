import React from 'react';
import Theme from './section.module.scss';

const Section = (props) => {
  const { heading, legend, children } = props;
  
  return (
    <>
      <section className={Theme.Container}>
        <header className={Theme.Header}>
          <p className={Theme.Legend}>
            { typeof legend === 'function' ? legend() : legend }
          </p>
          <h3 className={Theme.Heading}>
            { heading }
          </h3>
        </header>
        { children }
      </section>
    </>
  )
}

export default Section;