import React from 'react'
import Layout from '../templates/homepage'
import Head from '../components/head/head';

const NotFound = () => {
  return (
    <Layout>
      <>
        <Head title='Page not found'/>
        <h2>
          Page not found
        </h2>
        <p>
          We can't find the page you're looking for!
        </p>
      </>
    </Layout>
  );
}

export default NotFound;