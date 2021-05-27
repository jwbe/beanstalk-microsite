import React from 'react';
import Theme from './heading.module.scss';

const copy = {
  mainCta: 'Join Beanstalk',
  paraOne: 'The easiest way to save for children, Beanstalk helps families work together to save for their kids’ future.',
  paraTwo: () => (<><strong>The family app that invests in your kids.</strong></>)
}

const Header = (props) => {
  let { mainCta, paraOne, paraTwo } = props;
  return (
    <div className={Theme.Container}>
      <h1 className={Theme.MainCta}>
        { 
          mainCta
          ?
          mainCta
          :
          copy.mainCta
        }
      </h1>
      <p>
        { 
          paraOne
          ?
          typeof paraOne === 'function' ? paraOne() : paraOne
          :
          copy.paraOne
        }
      </p>
      <p>
        { 
          paraTwo
          ?
          typeof paraTwo === 'function' ? paraTwo() : paraTwo
          :
          typeof copy.paraTwo === 'function' ? copy.paraTwo() : copy.paraTwo
        }
      </p>
    </div>
  )
};

export default Header;