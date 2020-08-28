import React, { Component } from 'react'
import axios from 'axios'
import * as qs from 'query-string'

import Styles from './form.module.scss'
import QuestionStyles from './question/question.module.scss'
import Tooltip from './tooltip/tooltip'
import Question from './question/question'
import Header from './header/header'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      formSubmitted: null,
      formSubmitAttempted: false,
      fields: {
        name: '',
        email: '',
        optIn: false
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

  handleCheck(event) {
    let checkboxField = this.state.fields.optIn;
    if (event.target.checked) {
      checkboxField = { optIn: true };
      this.setState(checkboxField)
    }
    else {
      checkboxField = { optIn: false };
      this.setState(checkboxField)
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    if(this.handleValidation()) {
      const formData = {}
      Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

      const axiosOptions = {
        url: this.props.location,
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
        {
          this.state.formSubmitted
          ?
          <>
            <Header
              heading='Thank you'
              cta='You can download your guide by clicking the button below'
            />
            <div className={Styles.Submit_Wrapper}>
              <a className={Styles.Submit} href="/docs/beanstalks-guide-to-jisas.pdf" target="_blank" rel="noopener noreferrer">Download guide now</a>
            </div>
          </>
          :
          <>
            <Header
              heading='Introduction to Junior ISAs'
              subheading='Download your free guide now'
              cta='Please complete your details to request your copy'
            />
            <form name="jisa-guide" method="POST" noValidate data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={event => this.handleSubmit(event)}>
              <div className={Styles.VisibleInputs}>
                <div className={Styles.Input_Wrapper}>
                  <input 
                  className={Styles.Input} 
                  placeholder="Your email address" 
                  type="email" name="email" 
                  id="email" 
                  ref="email"
                  onChange={this.handleChange.bind(this, 'email')}
                  value={this.state.fields['email']}/>
                  {this.state.errors['email'] && <span className={Styles.Input_Error}></span>}
                  {this.state.errors['email'] && <Tooltip>{this.state.errors['email']}</Tooltip>}
                </div>
                <div className={Styles.Input_Wrapper}>
                  <input 
                  className={Styles.Input} 
                  placeholder="Your full name" 
                  type="text" 
                  name="name" 
                  id="name" 
                  ref="name"
                  onChange={this.handleChange.bind(this, 'name')}
                  value={this.state.fields['name']}/>
                  {this.state.errors['name'] && <span className={Styles.Input_Error}></span>}
                  {this.state.errors['name'] && <Tooltip>{this.state.errors['name']}</Tooltip>}
                </div>
              </div>
              <div className={QuestionStyles.Question}>
                <label className={QuestionStyles.Checkbox}>
                  <input 
                  type="checkbox"
                  name="optIn"
                  id="optIn"
                  ref="optIn"
                  onChange={this.handleCheck.bind(this)}
                  value={this.state.fields['optIn']}
                  />
                  <span className={QuestionStyles.Checkbox_Facade}></span>
                  <div className={QuestionStyles.Copy}>I would like to receive information about Junior ISAs from Beanstalk</div>
                </label>
              </div>
              <input type="hidden" ref="bot-field" name="bot-field"/>
              <input type="hidden" ref="form-name" name="form-name" value="jisa-guide"/>
              <button className={Styles.Submit} type="submit">Request guide</button>
            </form>
          </>
        }
      </>
    )
  }
}

export default Form