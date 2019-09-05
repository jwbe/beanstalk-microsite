import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
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
        <Header heading={data.page.meta.heading} subheading={data.page.meta.subheading} handler={this.toggleMobileMenu} state={{ ...this.state }}/>
        <main>
          <MDXRenderer>{data.page.content}</MDXRenderer>
        </main>
        <Footer/>
      </>
    );
  }
};