import React from 'react';
import Img from 'gatsby-image';
import Theme from './post.module.scss';

import Content from '../../content/content';

const Post = ({
  title,
  date,
  description,
  featuredImage,
  body
}) => {
  return (
    <article>
      <header>
        {featuredImage ? (
          <Img fluid={featuredImage}/>
        ) : null}
        {title}
        {date}
      </header>

      <Content>
        { body }
      </Content>
    </article>
  );
};

export default Post;
