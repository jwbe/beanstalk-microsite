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
            <Footer/>
          </>
        )}
      </Location>
    )
  }
}

export default JisaGuidePortal;