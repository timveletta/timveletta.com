import React from "react"
import styled from "styled-components"
import { COLORS, FONTS } from "../utils/css-globals"
import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  padding: 1rem;

  h1 {
    text-align: center;
    align-self: end;
    font-size: 3rem;
    line-height: 1.5;
    font-family: ${FONTS.primary};
    color: ${COLORS.accent};
  }
  h3 {
    text-align: center;
    line-height: 1.5;
    font-family: ${FONTS.secondary};
    color: ${COLORS.primary};
  }

  h5 {
    text-align: center;
    margin: 0.5rem;
    font-family: ${FONTS.secondary};
    color: ${COLORS.muted};
    text-transform: uppercase;

    #tag {
      padding: 0.5rem;
    }
  }
  p {
    line-height: 2;
    font-family: ${FONTS.secondary};
    text-align: justify;

    h1 {
      font-size: 1.5rem;
      color: ${COLORS.primary};
    }
  }
`

const Project = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const project = props.data.markdownRemark
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={project.frontmatter.title} />
      <Navigation />
      <Container>
        <h1>{project.frontmatter.title}</h1>
        <h3>{project.frontmatter.description}</h3>
        <h5>
          {project.frontmatter.tags.map((t, index) => (
            <span key={t}>
              <span id="tag">{t}</span>
              {index !== project.frontmatter.tags.length - 1 ? " | " : ""}
            </span>
          ))}
        </h5>
        <p dangerouslySetInnerHTML={{ __html: project.html }} />
        {/* <h3>Tools</h3>
        {project.frontmatter.tools} */}
      </Container>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectByTitle($title: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      html
      frontmatter {
        title
        tags
        description
        tools
      }
    }
  }
`
