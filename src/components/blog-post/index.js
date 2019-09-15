import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { COLORS, FONTS } from "../../utils/css-globals"

const Container = styled.div`
  display: grid;
  grid-template-rows: 8rem 2rem auto;
  margin: 1rem;

  a {
    text-decoration: none;
    align-self: end;
    color: ${COLORS.accent};
  }

  h1 {
    margin: 0;
    text-align: left;
    align-self: end;
    line-height: 1.5;
    font-family: ${FONTS.primary};
    color: ${COLORS.accent};
  }
  h5 {
    margin: 0.5rem;
    font-family: ${FONTS.secondary};
    color: ${COLORS.muted};
    text-transform: uppercase;
    text-align: left;
  }
  div {
    line-height: 2;
    font-family: ${FONTS.secondary};
    text-align: justify;

    h1 {
      font-size: 1.5rem;
      color: ${COLORS.primary};
    }
  }
`

const BlogPostPreview = ({ title, slug, date, excerpt }) => (
  <Container>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <h5>{date}</h5>
    <div
      dangerouslySetInnerHTML={{
        __html: excerpt,
      }}
    />
    <div style={{ textAlign: "right" }}>
      <Link to={slug}>Read More</Link>
    </div>
  </Container>
)

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}

const BlogPost = ({ title, slug, date, content }) => (
  <Container>
    {slug ? (
      <Link to={slug}>
        <h1>{title}</h1>
      </Link>
    ) : (
      <h1>{title}</h1>
    )}
    <h5>{date}</h5>
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </Container>
)

export default BlogPost

export { BlogPostPreview }
