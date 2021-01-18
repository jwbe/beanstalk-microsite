import React from 'react';
import Footer from '../components/footer/footer';

const Layout = (props) => {
  return (
    <>
      { props.children }
      <Footer isKidStartFamily/>
    </>
  );
};

export default Layout;