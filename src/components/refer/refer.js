import React, { Component } from 'react'
import axios from 'axios'
import * as qs from 'query-string'

import ReferTheme from './refer.module.scss'

import Head from '../head/head'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import Points from './points/points'

import AppStoreLogo from './images/app-store-logo.png'
import GooglePlayStoreLogo from './images/google-play-store-logo.png'

class Refer extends Component {
  constructor(props) {
    super(props)
    this.state = { formSubmitted: null }
  }

  handleSubmit(event) {
    event.preventDefault()

    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          formSubmitted: 'true'
        })
      })
      .catch(err =>
        this.setState({
          formSubmitted: 'false'
        })
      )
  }

  render() {
    return (
      <>
        <Head title="You've been invited to join Beanstalk!"/>
        <Header/>
        <div className={ReferTheme.SignUp}>
          <div className={ReferTheme.SignUp_Inner}>
            {
              this.state.formSubmitted 
              ?
              <>
                <header className={ReferTheme.Header}>
                  <h1 className={ReferTheme.SignUp_Heading}>
                    Thank you.
                  </h1>
                  <div className={ReferTheme.SignUp_Subheading}>
                    <strong>Now just download the Beanstalk app and <br className={ReferTheme.SignUp_Subheading_Break}/>register with the same email you just gave us.</strong>
                    <p>It takes just a couple of minutes to open an account.</p>
                  </div>
                </header>
                <div className={ReferTheme.Badges}>
                  <a className={ReferTheme.Badges_Badge} href="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597" target="_blank" rel="noreferrer">
                    <img className={ReferTheme.Badges_Badge_Image} src={AppStoreLogo} alt="Apple App Store logo" width="135" height="40"/>
                  </a>
                  <a className={ReferTheme.Badges_Badge} href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank" rel="noreferrer">
                    <img className={ReferTheme.Badges_Badge_Image} src={GooglePlayStoreLogo} alt="Google Play Store logo" width="135" height="40"/>
                  </a>
                </div>
                <p className={ReferTheme.SignUp_NotaBene}>
                  <strong>Note:</strong> Your referral link will expire after 60 days.
                </p>
              </>
              :
              <>
                <header className={ReferTheme.Header}>
                  <h1 className={ReferTheme.SignUp_Heading}>
                    You've been invited to join Beanstalk!
                  </h1>
                  <div className={ReferTheme.SignUp_Subheading}>
                    <strong>2 minutes to open an account.</strong>
                    <p>Please enter your email to claim your prize</p>
                  </div>
                </header>

                <form 
                name="refer" 
                method="POST" 
                data-netlify="true" data-netlify-honeypot="bot-field" 
                onSubmit={event => this.handleSubmit(event)}>
                  <div className={ReferTheme.Form_VisibleInputs}>
                    <input className={ReferTheme.Form_Input} placeholder="Your email address" type="email" name="email" id="email" ref="email"/>
                    <input className={ReferTheme.Form_Input} placeholder="Your full name" type="text" name="name" id="name" ref="name"/>
                  </div>
                  <input type="hidden" ref="bot-field" name="bot-field"/>
                  <input type="hidden" ref="form-name" name="form-name" value="refer"/>
                  <input type="hidden" ref="referID" name="referID" value={this.props.referID} id="referID"/>
                  <button className={ReferTheme.Form_Submit} type="submit">Get Started!</button>
                </form>
                <p className={ReferTheme.SignUp_NotaBene}>
                  <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.
                </p>
              </>
            }
          </div>
        </div>

        <h2 className={ReferTheme.Content_Heading}>
          The easiest way to build a nest egg for yourself, <br className={ReferTheme.Content_Heading_Break}/>your children or your grandchildren
        </h2>

        <Points/>

        <Footer/>
      </>
    )
  }
}

export default Refer;