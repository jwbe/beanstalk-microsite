import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS } from '../../button/button'
import Theme from './post.module.scss'

import Wrapper from '../../wrapper/wrapper'
import { Main, LAYOUT_VARIANT } from  '../../main/main'

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
        <Button className={Theme.BackButton} link={`/blog`} 
          desktopColour={DESKTOP_COLOURS.WHITE}
          desktopSize={DESKTOP_SIZES.MEDIUM}
          desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
          >
          Back
        </Button>
        <article>
          <header className={Theme.Header}>
            { featuredImage ? (
              <Img className={Theme.FeaturedImage} fluid={ featuredImage }/>
            ) : null }
            <h2 className={Theme.Heading}>
              { title }
            </h2>
            <div className={Theme.Meta}>
              <address className={Theme.Author} rel="author">
                By <strong>{ author }</strong>
              </address>
              <time>
                { date }
              </time>
            </div>
          </header>
          <section className={Theme.Content}>
              <MDXProvider>
                <MDXRenderer>
                  { body }
                </MDXRenderer>
              </MDXProvider>
          </section>
        </article>
      </Main>
    </Wrapper>
  );
};

export default Post;
