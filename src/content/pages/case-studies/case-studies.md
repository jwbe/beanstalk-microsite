---
slug: case-studies
canonical: 'https://beanstalkapp.co.uk/case-studies'
heading: Success Stories
subheading: What our members and the press have to say
---

import { TestimonialPod, TestimonialPods } from '../../../components/testimonial-pod/testimonial-pod'
import PressLogos from '../../../components/press-logos/press-logos'
import Badges from '../../../components/shared/badges-new/badges'

import CaseStudy from '../../../components/case-study/case-study';
import Media from '../../../components/case-study/media/media';
import Heading from '../../../components/case-study/heading/heading';
import Subheading from '../../../components/case-study/subheading/subheading';
import Body from '../../../components/case-study/body/body';

import imgVeliAghdiran from './veli-aghdiran.jpg';
import imgChrisHillAndFamily from './chris-hill-and-family.jpg';
import imgNickTammy from './nick-tammy.jpg';
import imgOzlemGiray from './ozlem-giray.jpg';
import imgRichardWhite from './richard-white.jpg';

<CaseStudy {...{
  background: 'white'
}}>
  <Heading onlyMobile>
    "I feel so much better that I'm paying 1% less in fees"
  </Heading>
  <Media {...{
    type: 'video',
    src: 'https://www.instagram.com/tv/CON8YD4AVr8/embed'
  }}/>
  <Body>
    <Heading noMobile>
      "I feel so much better that I'm paying 1% less in fees"
    </Heading>
    <Subheading>
      Lynn Beattie, Personal Finance Expert, founder Mrs Mummypenny and Mum of three
    </Subheading>
    <p>
      Mrs MummyPenny shares her thoughts on why she switched her children’s CTFs to Beanstalk.
    </p>
  </Body> 
</CaseStudy>

<CaseStudy {...{
  layout: 'rightToLeft',
  background: 'primary'
}}>
  <Heading onlyMobile>
    "They really put family and most importantly your child at the heart of all that they do"
  </Heading>
  <Media {...{
    type: 'video',
    src: 'https://www.instagram.com/tv/CQihcmhDfdP/embed'
  }}/>
  <Body>
    <Heading noMobile>
      "They really put family and most importantly your child at the heart of all that they do"
    </Heading>
    <Subheading>
      Emmanuel Esuquo, Finance Expert, founder of The Eman Effect and Dad of four
    </Subheading>
    <p>
      Emmanuel shares his thoughts on why you should consider an investment product like Beanstalk to save for your children.
    </p>
  </Body> 
</CaseStudy>

<CaseStudy {...{
  layout: 'centred',
  background: 'white'
}}>
  <h3>Get Beanstalk</h3>
  <Badges/>
</CaseStudy>

<CaseStudy {...{
  background: 'secondary'
}}>
  <Media {...{
    src: imgVeliAghdiran
  }}/>
  <Body>
    <Heading>
      "When I buy a coffee or go shopping, I'm saving for my child's future"
    </Heading>
    <Subheading>
      Veli, Dad to Carmen
    </Subheading>
    <p>
      "I looked at setting up a savings account for my daughter, Carmen, when she was born, but it always seemed too complicated, with too many choices to make, I had no idea if I was doing the right thing or not.
    </p>
    <p>
      I've found Beanstalk to be very straight-forward, I just downloaded the app and in two minutes it was all set-up. It's so simple that the grandparents can quickly and easily contribute. The KidStart savings and round up functions mean that our shopping is adding to her savings, and even buying a coffee or sandwich can top up the account."
    </p>
  </Body> 
</CaseStudy>

<CaseStudy {...{
  layout: 'rightToLeft',
  background: 'white', 
}}>
  <Media {...{
    src: imgRichardWhite
  }}/>
  <Body>
    <Heading>
      "Saving for the children’s JISA is a real family effort"
    </Heading>
    <Subheading>
      Richard, Marketing Consultant and Dad to Merryn and Noah
    </Subheading>
    <p>"We initially opened a stocks and shares Junior ISA because our two children had inherited some money from their grandma and it was important that it was put away for their future.</p>
    <p>Where Beanstalk has made a real difference is that rather than this being a one-off payment, when their other grandparents said they wanted to start putting away some money each month for all their grandchildren, all we had to do was simply invite them from the Beanstalk app and they had all the information they needed. This simplicity and flexibility make a real difference."</p>
  </Body>
</CaseStudy>

<CaseStudy {...{ 
  background: 'primary'
}}>
  <Media {...{
    src: imgOzlemGiray
  }}/>
  <Body>
    <Heading>
      "It was easy to transfer my son’s CTF to a Junior ISA"
    </Heading>
    <Subheading>
      Ozlem, Maths Teacher and Mum to Arda
    </Subheading>
    <p>"My son had a Child Trust Fund which was being charged 1.5% per year. We found it difficult to stay on top of what was going on with his account. I had already saved £200 by using KidStart and, when they launched their Beanstalk Junior ISA, I looked into how much we could be saving on fees.</p>
    <p>It was easy to transfer Arda’s CTF and I love the fact that we can keep track of his account through the app."</p>
  </Body>
</CaseStudy>


## Here's what people say about us

<TestimonialPods>
  <TestimonialPod {...{
    author: 'jo4nn3H'
  }}>
    I can’t believe how easy this is to use! A great app easy to navigate around. If I was to ask for one thing it would be to see how much has been paid in each week/month from D/D S/O and round ups. My Girls love to see how their JISA’s are growing. I would definitely recommend this app.
  </TestimonialPod>

  <TestimonialPod {...{
    author: 'Kay Duncan'
  }}>
    Wonderful personal service from Cem and the team. Could not recommended highly enough. Great to see your little one's nest egg grow. So many ways to save a little or a lot!
  </TestimonialPod>

  <TestimonialPod {...{
    author: 'Elizabeth Novak'
  }}>
    Really easy to use and set up. Grandparents can save to the same account. Seems like a good way to save for my child.
  </TestimonialPod>
</TestimonialPods>

## Here's what the press say about us

<PressLogos secondRow links/>