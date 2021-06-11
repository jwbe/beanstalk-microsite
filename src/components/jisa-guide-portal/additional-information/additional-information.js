import React from 'react'
import Header from './header/header'
import Point from './point/point'
import Styles from './additional-information.module.scss'

const AdditionalInformation = (props) => {

  let { points, heading, subheading } = props;

  const BuildPoints = (props) => {
    const { points } = props;
    return (
      <div>
        {
          (points).map((item, index) => {
            return (
              <Point {...{
                key: index
              }}>
                { item }
              </Point>
            )
          })
        }
      </div>
    );
  };

  return (
    <>
      <Header {
        ...{
          heading: heading,
          subheading: subheading
        }
      }/>
      <BuildPoints points={ points }/>
      <p className={Styles.Disclaimer}>
        The introduction is designed to help you understand the basics of what Junior ISAs are and how they work but is not personal advice on what you should do in your specific circumstances.
      </p>
    </>
  )
}

export default AdditionalInformation