import React from 'react'
import { Header } from '../components/header/header'
import Footer from '../components/footer/footer'
import Wrapper from '../components/wrapper/wrapper'
import { Main, LAYOUT_VARIANT } from '../components/main/main'
import BlogPosts from '../components/blog/posts/posts'

const BlogPage = () => (
  <>
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