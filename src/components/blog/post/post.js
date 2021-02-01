import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Theme from './post.module.scss'

import Wrapper from '../../wrapper/wrapper'
import { Main, LAYOUT_VARIANT } from  '../../main/main'
import Content from '../../content/content'

const Post = ({
  title,
  date,
  description,
  author,
  featuredImage,
  body
}) => {
  return (
    <Wrapper>
      <Main layoutVariant={LAYOUT_VARIANT.ARTICLE}>
        <Link to={`/blog`}>Back</Link>
        <article>
          <header>
            { title }
            { featuredImage ? (
              <Img fluid={ featuredImage }/>
            ) : null }
            { author }
            { date }
          </header>

          <Content>
            { body }
          </Content>
        </article>
      </Main>
    </Wrapper>
  );
};

export default Post;
