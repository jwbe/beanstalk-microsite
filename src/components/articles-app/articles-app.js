import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './articles.module.scss';

const ArticlesApp = () => {
  const data = useStaticQuery(graphql`
    query {
      allArticles: allMdx(filter: {fields: {collection: {eq: "articles"}}, frontmatter: {app: {eq: true}}}) {
        edges {
          node {
            id
            meta: frontmatter {
              slug
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                  }
                }
              }
              category
              heading
              author
            }
          }
        }
      }
    }
  `);
  return (
    <section className={styles.Articles}>
      {
        data.allArticles.edges.map((article) => {
          const imageData = article.node.meta.coverImage.childImageSharp.fluid.src;
          const podBackground = {
            backgroundImage: `url(${imageData})`
          }
          return (
            <>
              <div className={styles.Articles_pod_wrapper} key={article.node.id}>
                <article className={styles.Articles_pod} style={podBackground}>
                  <Link className={styles.Articles_pod_link} to={`/articles/${article.node.meta.slug}`}></Link>
                  <div className={styles.Articles_pod_content}>
                    <h2 className={styles.Articles_pod_heading}>
                      {article.node.meta.heading}
                    </h2>
                    <address className={styles.Articles_pod_author}>
                      <span className={styles.Articles_pod_author_by}>by </span><span className={styles.Articles_pod_author_name}>{article.node.meta.author}</span>
                    </address>
                    <div className={styles.Articles_pod_category}>
                      {article.node.meta.category}
                    </div>
                  </div>
                </article>
              </div>
            </>
          );
        })
      }
    </section>
  );
};

export default ArticlesApp;