import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

//require('details-polyfill');

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqs: allMarkdownRemark {
        group(field: frontmatter___category) {
          subheader: fieldValue
          edges {
            node {
              meta: frontmatter {
                heading
              }
              content: rawMarkdownBody
            }
          }
        }
      }
    }
  `);
  return (
    <>
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
                        {faq.node.meta.heading}
                      </summary>
                        <ReactMarkdown source={faq.node.content}/>
                    </details>
                  );
                })
              }
            </section>
          );
        })
      }
    </>
  );
};

export default Faqs;