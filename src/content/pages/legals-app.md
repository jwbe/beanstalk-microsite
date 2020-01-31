---
slug: legals-app
heading: Legal documents
subheading: Probably T&Cs..
app: true
---

import Pods from '../../components/pods/pods'
import Pod from '../../components/pod/pod'
import BackButton from '../../components/back-button/back-button'

<BackButton link='/support-app'/>
<Pods>
  <Pod externalLink={'/docs/terms-and-conditions.pdf'} heading={'App/Site T&Cs'} description={'Web & App terms of access'} type={'app-terms'}/>
  <Pod link={'/key-investor-information-documents-app'} heading={'KIIDs'} description={'Key Investor Information Documents'} type={'isa-terms'}/>
  <Pod link={'/key-features-documents-app'} heading={'KFDs'} description={'Key Features Documents'} type={'key-facts'}/>
  <Pod link={'/data-privacy-and-cookies-app'} heading={'Privacy'} description={'Data privacy & cookies'} type={'privacy'}/>
</Pods>


