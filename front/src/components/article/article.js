import React from 'react';
import Img from 'gatsby-image';
import styles from './article.module.scss';
import Content from '../content/content';

const Article = ({
  articleCategory,
  articleHeading,
  articleSubheading,
  articleAuthor,
  articleDate,
  articleCoverImage,
  articleCoverImage_alt,
  articleContent
}) => {
  return (
    <article className={styles.Article}>
      <div className={styles.Article_category}>
        {articleCategory}
      </div>
      <h1 className={styles.Article_heading}>
        {articleHeading}
      </h1>
      <h2 className={styles.Article_subheading}>
        {articleSubheading}
      </h2>
      <address className={styles.Article_author}>
        <span className={styles.Article_author_by}>By</span> <span className={styles.Article_author_name}>{articleAuthor}</span>
      </address>
      <time className={styles.Article_date}>
        {articleDate}
      </time>
      <div className={styles.Article_content}>
        <Img className={styles.Article_coverImage} fluid={articleCoverImage} backgroundColor={'#f9f9f9'} alt={articleCoverImage_alt}/>
        <Content>
          {articleContent}
        </Content>
      </div>
    </article>
  );
};

export default Article;