import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

if (typeof window !== 'undefined') {
  require('details-polyfill');
}

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqs: allMdx {
        group(field: frontmatter___category) {
          subheader: fieldValue
          edges {
            node {
              id
              meta: frontmatter {
                heading
              }
              content: body
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
            <section key={faqs.subheader}>
              <h2>
                {faqs.subheader}
              </h2>
              {
                faqs.edges.map((faq) => {
                  return (
                    <details key={faq.node.id}>
                      <summary>
                        {faq.node.meta.heading}
                      </summary>
                      <MDXRenderer>{faq.node.content}</MDXRenderer>
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