import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../components/header/header'
import Footer from '../components/footer/footer'
import Wrapper from '../components/wrapper/wrapper'
import { Main, LAYOUT_VARIANT } from '../components/main/main'
import BlogPosts from '../components/blog/posts/posts'

const BlogPage = () => (
  <>
    <Helmet>
      <title>{`News about Beanstalk`}</title>
      <meta name="google-play-app" content="app-id=uk.co.beanstalkapp" />
      <meta name="description" content="Beanstalk is an app-based JISA that helps families build a pot of money for their children's futures. Making saving and investing accessible for all." />
      <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png"/>
      <link rel="canonical" href="https://beanstalkapp.co.uk/blog" />
    </Helmet>
    <Header/>
    <Wrapper>
      <Main layoutVariant={LAYOUT_VARIANT.ARTICLE}>
        <BlogPosts/>
      </Main>
    </Wrapper>
    <Footer/>
  </>
)

export default BlogPage;