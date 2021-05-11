import React, { Component } from 'react'
import axios from 'axios'
import * as qs from 'query-string'

import ReferTheme from './refer.module.scss'

import { Link } from 'gatsby'

import Head from '../head/head'
import { Header } from '../header/header'
import Footer from '../footer/footer'
import Points from './points/points'
import SmallPrint from './small-print/small-print'
import Tooltip from './tooltip/tooltip'

import AppStoreLogo from './images/app-store-logo.png'
import GooglePlayStoreLogo from './images/google-play-store-logo.png'

class Refer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      formSubmitted: null,
      formSubmitAttempted: false,
      fields: {
        name: '',
        email: ''
      },
      errors: {
        name: '',
        email: ''
      }
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if(fields['name'] === '') {
      formIsValid = false
      errors['name'] = 'You must enter your full name';
    }

    if(fields['name'] !== '') {
      if(!fields['name'].match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
        formIsValid = false;
        errors['name'] = 'Your name shouldn\'t contain numbers';
      }
    }

    if(fields['email'] === '') {
      formIsValid = false;
      errors['email'] = 'You must enter an email address';
    }

    if(fields['email'] !== '') {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(fields['email'])) {
        formIsValid = false;
        errors['email'] = 'Please enter a valid email address';
      }
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  handleChange(field, event) {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    if(this.state.formSubmitAttempted === true) {
      this.handleValidation();
    }
    this.setState({fields});
  }

  handleSubmit(event) {
    event.preventDefault()

    if(this.handleValidation()) {
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
            formSubmitted: true
          })
        })
        .catch(err =>
          this.setState({
            formSubmitted: false
          })
        )
    }
    else {
      this.setState({
        formSubmitAttempted: true
      })
    }

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
                  <a className={ReferTheme.Badges_Badge} href="https://smart.link/e1zksqyenr6pj?site_id=beanstalksite" target="_blank" rel="noreferrer">
                    <img className={ReferTheme.Badges_Badge_Image} src={AppStoreLogo} alt="Apple App Store logo" width="135" height="40"/>
                  </a>
                  <a className={ReferTheme.Badges_Badge} href="https://smart.link/e1zksqyenr6pj?site_id=beanstalksite" target="_blank" rel="noreferrer">
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
                    You've been invited to join Beanstalk!<br/>
                    Join today and we will give you £5 when you open and save into an account.
                  </h1>
                  <div className={ReferTheme.SignUp_Subheading}>
                    <strong>2 minutes to open an account.</strong>
                    <p>Please enter your email to get started.</p>
                  </div>
                </header>

                <form name="refer" method="POST" noValidate data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => this.handleSubmit(event)}>
                  <div className={ReferTheme.Form_VisibleInputs}>
                    <div className={ReferTheme.Form_Input_Wrapper}>
                      <input 
                      className={ReferTheme.Form_Input} 
                      placeholder="Your email address" 
                      type="email" name="email" 
                      id="email" 
                      ref="email"
                      onChange={this.handleChange.bind(this, 'email')}
                      value={this.state.fields['email']}/>
                      {this.state.errors['email'] && <span className={ReferTheme.Form_Input_Error}></span>}
                      {this.state.errors['email'] && <Tooltip>{this.state.errors['email']}</Tooltip>}
                    </div>
                    <div className={ReferTheme.Form_Input_Wrapper}>
                      <input 
                      className={ReferTheme.Form_Input} 
                      placeholder="Your full name" 
                      type="text" 
                      name="name" 
                      id="name" 
                      ref="name"
                      onChange={this.handleChange.bind(this, 'name')}
                      value={this.state.fields['name']}/>
                      {this.state.errors['name'] && <span className={ReferTheme.Form_Input_Error}></span>}
                      {this.state.errors['name'] && <Tooltip>{this.state.errors['name']}</Tooltip>}
                    </div>
                  </div>
                  <input type="hidden" ref="bot-field" name="bot-field"/>
                  <input type="hidden" ref="form-name" name="form-name" value="refer"/>
                  <input type="hidden" ref="referID" name="referID" value={this.props.referID} id="referID"/>
                  <button className={ReferTheme.Form_Submit} type="submit">Get Started!</button>
                </form>

                <p className={ReferTheme.SignUp_NotaBene}>
                  <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.<br/> View referral T&Cs <Link to="https://beanstalkapp.co.uk/other-terms">here</Link>.
                </p>
              </>
            }
          </div>
        </div>



        <div className={ReferTheme.Content}>
          <h2 className={ReferTheme.Content_Heading}>
            The easiest way to build a nest egg for yourself, <br className={ReferTheme.Content_Heading_Break}/>your children or your grandchildren
          </h2>

          <Points/>

          <h2 className={ReferTheme.Content_Heading}>
            We are bringing child savings into the 21st Century. <br className={ReferTheme.Content_Heading_Break}/>Join the revolution in as little as 5 minutes.
          </h2>
        </div>


        <Footer/>
      </>
    )
  }
}

export default Refer;