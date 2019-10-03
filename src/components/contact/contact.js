import React from 'react';
import styles from './contact.module.scss';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS } from '../button/button';

const submit = () => {
  console.log('submit');
};

const Contact = () => {
  return (
    <div>
      <form className={styles.ContactForm} method="post" action="https://formspree.io/email@domain.tld">
        <label>
          <textarea className={styles.ContactForm_input} type="email" row="8" cols="20" name="_replyto" resize="false" placeholder="Write your message here and click submit below to send"></textarea>
        </label>
        <Button clickHandle={submit} className={styles.ContactForm_button} 
          desktopColour={DESKTOP_COLOURS.WHITE}
          desktopBackground={DESKTOP_BACKGROUNDS.PRIMARY}
          desktopSize={DESKTOP_SIZES.LARGE}
          >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;