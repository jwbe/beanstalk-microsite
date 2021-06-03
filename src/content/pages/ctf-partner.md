---
slug: ctf-calculator
canonical: 'https://beanstalkapp.co.uk/ctf-calculator'
priority: 0.9
plain: true
fullWidth: true
title: Child Trust Fund Calculator
description: Find out how much you could save by switching your child's CTF to Beanstalk with our CTF calculator. See what you could save in fees in minutes!
---

import SmsCapture from '../../components/sms-capture/sms-capture'
import CtfCalculator from '../../components/ctf-calculator/ctf-calculator'

<SmsCapture {...{
  embedded: true,
  mainCta: `Customers save on average £150+*`,
  paraOne: () => (<>Save on investment fees by transferring your child trust fund to Beanstalk. <strong>It just takes a minute to open an account.</strong></>),
  paraTwo: `The app helps your family work together to build a pot of money, giving your kids the best possible launch into adult life.`
}}/>

<CtfCalculator {...{
  smsCaptureFooter: true,
  embedded: true
}}/>