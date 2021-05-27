---
slug: case-studies
canonical: 'https://beanstalkapp.co.uk/case-studies'
heading: Success Stories
subheading: What our members have to say
---
import CaseStudy from '../../../components/case-study/case-study';
import Graphic from '../../../components/case-study/graphic/graphic';
import Heading from '../../../components/case-study/heading/heading';
import Subheading from '../../../components/case-study/subheading/subheading';
import Body from '../../../components/case-study/body/body';

import imgVeliAghdiran from './veli-aghdiran.jpg';
import imgChrisHillAndFamily from './chris-hill-and-family.jpg';
import imgNickTammy from './nick-tammy.jpg';
import imgOzlemGiray from './ozlem-giray.jpg';
import imgRichardWhite from './richard-white.jpg';

<CaseStudy {...{ 
  background: 'white', 
}}>
  <Graphic {...{
    src: imgVeliAghdiran
  }}/>
</CaseStudy>

<CaseStudy {...{ 
  background: 'primary', 
}}>
  <Graphic {...{
    src: imgRichardWhite
  }}/>

</CaseStudy>

<CaseStudy {...{ 
  background: 'white'
}}>
  <Graphic {...{
    src: imgOzlemGiray
  }}/>

</CaseStudy>

<CaseStudy {...{ 
  background: 'secondary'
}}>
  <Graphic {...{
    src: imgChrisHillAndFamily
  }}/>

</CaseStudy>

<CaseStudy {...{ 
  background: 'white'
}}>
  <Graphic {...{
    src: imgNickTammy
  }}/>

</CaseStudy>