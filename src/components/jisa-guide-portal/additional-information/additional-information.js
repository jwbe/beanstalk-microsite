import React from 'react'
import Header from './header/header'
import Point from './point/point'
import Styles from './additional-information.module.scss'

const AdditionalInformation = () => (
  <>
    <Header/>
    <Point>
      How Junior ISAs work
    </Point>
    <Point>
      How parents, grandparents and friends can contribute up to the JISA allowance of £9,000 in 2020/21
    </Point>
    <Point>
      The tax advantage of Junior ISAs
    </Point>
    <Point>
      The types of Junior ISAs: cash JISAs and stocks & shares JISAs
    </Point>
    <Point>
      Transferring Child Trust Funds (CTFs) into Junior ISAs
    </Point>
    <p className={Styles.Disclaimer}>
      The introduction is designed to help you understand the basics of what Junior ISAs are and how they work but is not personal advice on what you should do in your specific circumstances.
    </p>
    <p className={Styles.SmallPrint}>
      AS WITH ANY INVESTMENT THE VALUE CAN GO DOWN AS WELL UP. PAST PERFORMANCE IS NO INDICATOR OF FUTURE PERFORMANCE. THE TAX TREATMENT OF ISAS DEPENDS ON YOUR INDIVIDUAL CIRCUMSTANCES AND MAY BE SUBJECT TO CHANGE IN THE FUTURE.
    </p>
  </>
)

export default AdditionalInformation