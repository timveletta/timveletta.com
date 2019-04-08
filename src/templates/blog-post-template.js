import React from "react"
import { Link, graphql } from "gatsby"
import BlogPost from "../components/blog-post"
import styled from "styled-components"
import { COLORS, FONTS } from "../utils/css-globals"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const FurtherPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding-bottom: 2rem;

  a {
    text-decoration: none;
    align-self: end;
    font-family: ${FONTS.secondary};
    color: ${COLORS.accent};
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <Navigation />
        <Container>
          <BlogPost
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            content={post.html}
          />
          <FurtherPosts>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </FurtherPosts>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
