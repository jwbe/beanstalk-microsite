import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
//import Head from '../components/head';
//import Header from '../components/header';
require('details-polyfill');

const FaqsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiFaq {
        group(field: category) {
          fieldValue
          edges {
            node {
              title
              content
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      {
        data.allStrapiFaq.group.map((faqs) => {
          return (
            <section>
              <h2>
                {faqs.fieldValue}
              </h2>
              {
                faqs.edges.map((faq) => {
                  return (
                    <details>
                      <summary>
                        {faq.node.title}
                      </summary>
                      <p>
                        {faq.node.content}
                      </p>
                    </details>
                  );
                })
              }
            </section>
          );
        })
      }
    </Layout>
  );
};

export default FaqsPage;