import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Articles = () => {
  const data = useStaticQuery(graphql`
    query {
      allArticles: allMdx(filter: {fields: {collection: {eq: "articles"}}}) {
        edges {
          node {
            id
            meta: frontmatter {
              category
              slug
              heading
            }
          }
        }
      }
    }
  `);
  return (
    <>
      {
        data.allArticles.edges.map((article) => {
          return (
            <Link to={`/articles/${article.node.meta.slug}`} key={article.node.id}>
              <article>
                <h2>
                  {article.node.meta.heading}
                </h2>
                <address>
                  {article.node.meta.author}
                </address>
                <div>
                  {article.node.meta.category}
                </div>
              </article>
            </Link>
          );
        })
      }
    </>
  );
};

export default Articles;