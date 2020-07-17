import React from 'react';
import Head from '../components/head/head';
import { Header } from '../components/header/header';
import { Main, LAYOUT_VARIANT } from  '../components/main/main';
import Footer from '../components/footer/footer';
import Wrapper from '../components/wrapper/wrapper';

const Layout = ({
  children
}) => {
  return (
    <>
      <Wrapper>
        <Head title='Page not found'/>
        <Header/>
        <Main layoutVariant={LAYOUT_VARIANT.PLAIN_PAGE}>
          {children}
        </Main>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout;

