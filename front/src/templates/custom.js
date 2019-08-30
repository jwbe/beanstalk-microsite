import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export const query = graphql`
  query {
    header: strapiHeader(page: {eq: "faqs"}) {
      heading
      subheading
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header heading="Heading" subheading="Subheading"/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;