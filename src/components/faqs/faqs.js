import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import H2 from '../custom-html-tags/h2/h2';
import styles from './faqs.module.scss';
import _ from 'underscore';

if (typeof window !== 'undefined') {
  require('details-polyfill');
}

const categoryOrder = ['About Beanstalk','The Beanstalk Account','Investing with Beanstalk','Saving together','Round ups','KidStart','Direct debit and investment timing','Help'];

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqs: allMdx(filter: {fields: {collection: {eq: "faqs"}}}, sort: {fields: frontmatter___order, order: ASC}) {
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
  var sorted = _.sortBy(data.allFaqs.group, function(obj){ 
    return _.indexOf(categoryOrder, obj.subheader);
  });
  return (
    <>
      {
        sorted.map((faqs) => {
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

