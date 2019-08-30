import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
//import Head from '../components/head';
require('details-polyfill');

const FaqsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqs: allStrapiFaq {
        group(field: category) {
          subheader: fieldValue
          edges {
            node {
              heading
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
        data.allFaqs.group.map((faqs) => {
          return (
            <section>
              <h2>
                {faqs.subheader}
              </h2>
              {
                faqs.edges.map((faq) => {
                  return (
                    <details>
                      <summary>
                        {faq.node.heading}
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