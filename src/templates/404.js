import React from 'react';
import Head from '../components/head/head';
import { Header } from '../components/header/header';
import { Main } from  '../components/main/main';
import Content from '../components/content/content';
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
        <Main>
          {children}
        </Main>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout;

