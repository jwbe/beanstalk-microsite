import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styles from './article.module.scss';
import Content from '../content/content';
import { Button, DESKTOP_COLOURS, DESKTOP_BORDERS, DESKTOP_SIZES, TABLET_COLOURS, DESKTOP_BACKGROUNDS } from '../button/button';
import buttonStyles from '../button/button.module.scss';

const Article = ({
  articleCategory,
  articleHeading,
  articleSubheading,
  articleAuthor,
  articleDate,
  articleCoverImage,
  articleCoverImage_alt,
  articleContent,
  articleNext,
  articlePrevious
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
      <div className={styles.Article_nav}>
        {
          articlePrevious
          ?
          <Button link={`articles/${articlePrevious}`} 
            desktopColour={DESKTOP_COLOURS.WHITE}
            desktopSize={DESKTOP_SIZES.LARGE}
            desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
            >
            Previous
          </Button>
          :
          <div className={`${buttonStyles.Button} ${styles.Article_disabledButton} ${buttonStyles.desktop___Large}`}>
            Previous
          </div>
        }
        {
          articleNext
          ?
          <Button link={`articles/${articleNext}`} 
            desktopColour={DESKTOP_COLOURS.WHITE}
            desktopSize={DESKTOP_SIZES.LARGE}
            desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
            >
            Next
          </Button>
          :
          <div className={`${buttonStyles.Button} ${styles.Article_disabledButton} ${buttonStyles.desktop___Large}`}>
            Next
          </div>
        }
      </div>
    </article>
  );
};

export default Article;