import React from 'react';
import Layout from '../templates/404';
import H2 from '../components/custom-html-tags/h2/h2';

const NotFound = () => {
  return (
    <Layout>
    <>
      <H2>
        Page not found
      </H2>
      <p>
        We can't find the page you're looking for!
      </p>
    </>
    </Layout>
  );
}

export default NotFound;