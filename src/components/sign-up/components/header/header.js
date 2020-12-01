import React from 'react';
import Theme from './header.module.scss';
import InPartnershipCallout from './in-partnership-callout/in-partnership-callout';
import Heading from './heading/heading';
import Form from './form/form'
import Container from '../container/container';
import Iphone from '../iphone/iphone';
import DecorativeSectionJoin from '../decorative-section-join/decorative-section-join';

const Header = () => (
  <> 
    <div className={Theme.Cut_Mask}>
      <div className={Theme.Cut_Overlay}></div>
      <Container>
        <div className={Theme.Header}>
          <div className={Theme.Section}>
            <div className={Theme.Iphone}>
              <Iphone/>
            </div>
            <Heading/>
            <div className={`${Theme.Cut} ${Theme.Cut__Primary}`}>
            </div>
          </div>
          <div className={Theme.Section}>
            <InPartnershipCallout/>
            <Form/>
            <DecorativeSectionJoin flipped/>
            <div className={`${Theme.Cut} ${Theme.Cut__White}`}>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </>
);

export default Header;