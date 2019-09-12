import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import H2 from '../custom-html-tags/h2/h2';
import styles from './faqs.module.scss';

if (typeof window !== 'undefined') {
  require('details-polyfill');
}

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqs: allMdx(filter: {fields: {collection: {eq: "faqs"}}}) {
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
            <section className={styles.Faq_section} key={faqs.subheader}>
              <H2>
                {faqs.subheader}
              </H2>
              {
                faqs.edges.map((faq) => {
                  return (
                    <details className={styles.Faq_details} key={faq.node.id}>
                      <summary className={styles.Faq_summary}>
                        {faq.node.meta.heading}
                      </summary>
                      <div className={styles.Faq_content}>
                        <MDXRenderer>{faq.node.content}</MDXRenderer>
                      </div>
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