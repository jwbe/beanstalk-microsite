import React, { Component } from 'react';
import axios from 'axios';
import * as qs from 'query-string';
import { Router, Location } from '@reach/router';
import Head from '../head/head';
import { Header, HEADER_VARIANT } from '../header/header';
import Footer from '../footer/footer';
import ReferTheme from './refer.module.scss';

class Refer extends Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
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
        this.domRef.current.reset()
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
        <div className={ReferTheme.Container}>
          <div className={ReferTheme.SignUp}>
            <div className={ReferTheme.SignUp_Inner}>
              {
                this.state.formSubmitted ? <p>Form submitted</p>
                :
                <>
                  <header className={ReferTheme.Header}>
                    <h1 className={ReferTheme.SignUp_Heading}>
                      You've been invited to join Beanstalk!
                    </h1>
                    <div className={ReferTheme.SignUp_Subheading}>
                      <strong>2 minutes to open an account.</strong>
                      <p>Please enter your email to claim your prize.</p>
                    </div>
                  </header>

                  <form 
                  ref={this.domRef} 
                  name="refer" 
                  method="POST" 
                  data-netlify="true" data-netlify-honeypot="bot-field" 
                  onSubmit={event => this.handleSubmit(event)}
                  >
                    <div className={ReferTheme.Form_VisibleInputs}>
                      <input className={ReferTheme.Form_Input} placeholder="Your email address" type="email" name="email" id="email" ref="email"/>
                      <input className={ReferTheme.Form_Input} placeholder="Your full name" type="text" name="name" id="name" ref="name"/>
                    </div>
                    <input type="hidden" name='bot-field'/>
                    <input type="hidden" ref="form-name" name="form-name" value="refer"/>
                    <input type="hidden" ref="referID" name="referID" value={this.props.referID} id="referID"/>
                    <button className={ReferTheme.Form_Submit} type="submit">Get Started!</button>
                  </form>
                  <p className={ReferTheme.SignUp_NB}>
                    <strong>Note:</strong> We will only use your email to remind you to register and to record whether you have registered.
                  </p>
                </>
              }
            </div>
          </div>
        </div>

        <div className={ReferTheme.Content}>
          <h2 className={ReferTheme.Content_Heading}>
            The easiest way to build a nest egg for yourself, <br className={ReferTheme.Content_Heading_Break}/>your children or your grandchildren
          </h2>
          <div className={ReferTheme.Points}>
            <div className={ReferTheme.Point}>
              <div className={ReferTheme.Point_Icon_Wrapper}>
                <div className={ReferTheme.Point_Icon}></div>
              </div>
              <div className={ReferTheme.Point_Content}>
                <h3 className={ReferTheme.Point_Heading}>
                  All accounts in one place
                </h3>
                <p className={ReferTheme.Point_Description}>
                  See everyone you are saving for, how much they have and your contributions all within seconds
                </p>
              </div>
            </div>
            <div className={ReferTheme.Point}>
              <div className={ReferTheme.Point_Icon_Wrapper}>
                <div className={ReferTheme.Point_Icon}></div>
              </div>
              <div className={ReferTheme.Point_Content}>
                <h3 className={ReferTheme.Point_Heading}>
                  Start small 
                </h3>
                <p className={ReferTheme.Point_Description}>
                  No contributions needed to open an account
                </p>
              </div>
            </div>
            <div className={ReferTheme.Point}>
              <div className={ReferTheme.Point_Icon_Wrapper}>
                <div className={ReferTheme.Point_Icon}></div>
              </div>
              <div className={ReferTheme.Point_Content}>
                <h3 className={ReferTheme.Point_Heading}>
                  Many ways to save
                </h3>
                <p className={ReferTheme.Point_Description}>
                  Round ups, free money back on your shopping, easy top ups
                </p>
              </div>
            </div>
            <div className={ReferTheme.Point}>
              <div className={ReferTheme.Point_Icon_Wrapper}>
                <div className={ReferTheme.Point_Icon}></div>
              </div>
              <div className={ReferTheme.Point_Content}>
                <h3 className={ReferTheme.Point_Heading}>
                  Link family and friends
                </h3>
                <p className={ReferTheme.Point_Description}>
                  Boost your kids savings with multiple people contributing
                </p>
              </div>
            </div>
            <div className={ReferTheme.Point}>
              <div className={ReferTheme.Point_Icon_Wrapper}>
                <div className={ReferTheme.Point_Icon}></div>
              </div>
              <div className={ReferTheme.Point_Content}>
                <h3 className={ReferTheme.Point_Heading}>
                  Safe and secure
                </h3>
                <p className={ReferTheme.Point_Description}>
                  Beanstalk is FCA regulated and your money and investments are held under FCA client money and custody rules by our authorised investment platform provider
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </>
    )
  }
}

export default Refer;