import React from 'react';
//import { graphql } from 'gatsby';

const Layout = (props) => {
  return (
    <>
      <main>
        {
          props.children
        }
      </main>
    </>
  );
};

export default Layout;