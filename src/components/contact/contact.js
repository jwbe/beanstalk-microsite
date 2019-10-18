import React from 'react';
import styles from './contact.module.scss';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS } from '../button/button';

const Contact = () => {
  return (
    <form className={styles.ContactForm} name='Contact us' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' action='/thank-you-for-contacting-us'>
      <input type='hidden' name='bot-field'/>
      <input type='hidden' name='form-name' value='Contact us'/>
      <textarea className={styles.ContactForm_input} type="email" row="8" cols="20" name="_replyto" resize="false" placeholder="Write your message here and click submit below to send"></textarea>
      <Button submit type='submit' className={styles.ContactForm_button} 
        desktopColour={DESKTOP_COLOURS.WHITE}
        desktopBackground={DESKTOP_BACKGROUNDS.PRIMARY}
        mobileSize={DESKTOP_SIZES.LARGE}
        >
        Submit
      </Button>
    </form>
  );
}

export default Contact;