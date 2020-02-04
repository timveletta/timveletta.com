import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { COLORS, FONTS } from "../../utils/css-globals"

const Container = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 0.8fr auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: calc(100vw - 1rem);

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

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h5 {
    flex: 1 1 auto;
    font-family: ${FONTS.secondary};
    color: ${COLORS.muted};
    text-transform: uppercase;
    text-align: left;
    display: inline-flex;
  }
`

const TagsList = styled.div`
  flex: 1 1 auto;
  color: ${COLORS.muted};
  text-transform: uppercase;
  text-align: right !important;
  font-weight: 600;
  font-size: 0.83em;

  @media (max-width: 768px) {
    text-align: left !important;
  }
`

const BlogPostPreview = ({ title, slug, date, excerpt }) => (
  <Container style={{ margin: "1rem" }}>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <SubHeader>
      <h5>{date}</h5>
    </SubHeader>
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
  tags: PropTypes.arrayOf(PropTypes.string),
}

const BlogPost = ({ title, slug, date, content, tags }) => (
  <Container>
    {slug ? (
      <Link to={slug}>
        <h1>{title}</h1>
      </Link>
    ) : (
      <h1>{title}</h1>
    )}
    <SubHeader>
      <h5>{date}</h5>
      <TagsList>
        Tags:{" "}
        {tags &&
          tags.map((tag, index) => (
            <Link key={tag} to={`/tag/${tag}`}>
              {tag}
              {index === tags.length - 1 ? "" : ", "}
            </Link>
          ))}
      </TagsList>
    </SubHeader>
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </Container>
)

export default BlogPost

export { BlogPostPreview }
