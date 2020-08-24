import React, { Component  } from 'react'
import { Location } from '@reach/router'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import Styles from './jisa-guide-portal.module.scss'

import Form from './form/form'
import AdditionalInformation from './additional-information/additional-information'

class JisaGuidePortal extends Component {
  render() {
    return (
      <Location>
        {({ location }) => (
          <>
            <Header/>
            <div className={Styles.Container}>
              <section className={`${Styles.Section} ${Styles.Section___First}`}>
                <div className={Styles.Section_Inner}>
                  <Form location={location.pathname}/>
                </div>
              </section>
              <section className={`${Styles.Section} ${Styles.Section___Second}`}>
                <div className={Styles.Section_Inner}>
                  <AdditionalInformation/>
                </div>
              </section>
            </div>
            <p className={Styles.SmallPrint}>
              AS WITH ANY INVESTMENT THE VALUE CAN GO DOWN AS WELL UP. PAST PERFORMANCE IS NO INDICATOR OF FUTURE PERFORMANCE.<br className={Styles.SmallPrint_Break}/> THE TAX TREATMENT OF ISAS DEPENDS ON YOUR INDIVIDUAL CIRCUMSTANCES AND MAY BE SUBJECT TO CHANGE IN THE FUTURE.
            </p>
            <Footer/>
          </>
        )}
      </Location>
    )
  }
}

export default JisaGuidePortal;