import React from 'react';
import Theme from './social.module.scss';

import Heading from '../heading/heading';

const Social = () => (
  <>
    <Heading>
      Follow Beanstalk
    </Heading>
    <div className={Theme.Icons}>
      <a className={`${Theme.Icon} ${Theme.Instagram}`} href="https://www.instagram.com/thebeanstalkapp/" target="_blank" rel="noreferrer">
      </a>
      <a className={`${Theme.Icon} ${Theme.Facebook}`} href="https://www.facebook.com/TheBeanstalkApp/" target="_blank" rel="noreferrer">
      </a>
      <a className={`${Theme.Icon} ${Theme.Twitter}`} href="https://twitter.com/TheBeanstalkApp" target="_blank" rel="noreferrer">
      </a>
      <a className={`${Theme.Icon} ${Theme.LinkedIn}`} href="https://www.linkedin.com/company/the-beanstalk-app" target="_blank" rel="noreferrer">
      </a>
    </div>
  </>
);

export default Social;