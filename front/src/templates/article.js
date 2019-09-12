import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header/header';
import { Main, LAYOUT_VARIANT } from  '../components/main/main';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
        slug
        coverImage {
          childImageSharp {
            fluid(maxWidth: 640, maxHeight: 360, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverImage_alt
        date(formatString: "Do MMMM YYYY")
        category
        author
      }
      content: body
    }
  }
`;

export default class Layout extends Component {
  state = {
    showMobileMenu: false
  };

  toggleMobileMenu = (event) => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
    event.preventDefault();
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <Header handler={this.toggleMobileMenu} state={{ ...this.state }}/>

        <Main layoutVariant={LAYOUT_VARIANT.ARTICLE}>
          <Article 
            articleCategory={data.page.meta.category} 
            articleHeading={data.page.meta.heading} 
            articleSubheading={data.page.meta.subheading} 
            articleAuthor={data.page.meta.author} 
            articleDate={data.page.meta.date}
            articleCoverImage={data.page.meta.coverImage.childImageSharp.fluid}
            articleCoverImage_alt={data.page.meta.coverImage_alt}
            articleContent={data.page.content}
            />
        </Main>
        <Footer/>
      </>
    );
  }
};