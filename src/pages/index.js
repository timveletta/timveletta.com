import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectDisplay from "../components/project-display"
import BlogPostDisplay from "../components/blog-post-display"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "../components/header"
import AboutMe from "../components/about-me"

import { COLORS, FONTS } from "../utils/css-globals"

const Section = styled.div`
  text-align: center;

  padding: 4rem 0.5rem 6rem 0.5rem;

  h1 {
    font-family: ${FONTS.primary};
    margin-bottom: 2rem;
  }

  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

    > div {
      flex: 1 1 320px;
      min-height: 320px;
    }
  }
`

const Projects = styled(Section)`
  background-color: ${COLORS.accent};
`

const BlogPosts = styled(Section)`
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};
  justify-content: center;
`

const About = styled(Section)`
  background-color: ${COLORS.secondary};
  color: ${COLORS.primary};
`

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Header />
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <About>
          <div>
            <AboutMe />
          </div>
        </About>
        <Projects>
          <h1>Projects</h1>
          <div>
            <ProjectDisplay name="Project 1" />
            <ProjectDisplay name="Project 1" />
            <ProjectDisplay name="Project 1" />
          </div>
        </Projects>
        <BlogPosts>
          <h1>Recent Blog Posts</h1>
          <div>
            {posts.map(({ node }) => (
              <BlogPostDisplay
                key={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            ))}
          </div>
          <Button to="/blog" name="View All Posts" />
        </BlogPosts>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
