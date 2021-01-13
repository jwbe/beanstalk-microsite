import React from 'react';
import Theme from './sms-capture.module.scss';

import Iphone from '../shared/iphone/iphone';

import IphoneOnLeaves from './components/iphone-on-leaves/iphone-on-leaves';

import Container from '../shared/container/container';
import Heading from './components/heading/heading'
import Form from './components/form/form';
import Badges from './components/badges/badges';
import Stars from './components/stars/stars';
import DecorativeSectionJoin from '../shared/decorative-section-join/decorative-section-join';


const SmsCapture = () => {
  return (
    <>
      <div className={`${Theme.Cut_Mask} ${Theme.Background}`}>
        <div className={Theme.Cut_Overlay}></div>
        <div className={Theme.Container}>
          <Container>
            <div className={Theme.Container_Inner}>
              <div className={Theme.Column}>
                <div className={Theme.Iphone}>
                  <Iphone/>
                </div>
              </div>
              <div className={Theme.Column}>
                <Heading/>
                <Form/>
                <Badges/>
                <Stars/>
              </div>
            </div>
          </Container>
          <div className={Theme.DecorativeSectionJoin}>
            <DecorativeSectionJoin flipped/>
          </div>
        </div>
      </div>
      <IphoneOnLeaves/>
    </>
  );
};

export default SmsCapture;