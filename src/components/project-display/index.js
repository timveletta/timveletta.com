import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { ButtonSecondary } from "../button"
import { COLORS, COLORS_RGB, FONTS } from "../../utils/css-globals"

const Container = styled.div`
  display: grid;
  margin: 0.5rem;
  max-width: 400px;

  :hover #details {
    visibility: visible;
  }

  #details {
    visibility: hidden;
    z-index: 1;
    display: grid;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    background-color: rgba(${COLORS_RGB.primary}, 0.8);
    align-content: center;

    h2 {
      font-family: ${FONTS.primary};
      color: ${COLORS.secondary};
    }
    h5 {
      font-family: ${FONTS.secondary};
      color: ${COLORS.accent};
      text-transform: uppercase;

      #tag {
        padding: 0.5rem;
      }
    }
  }

  .gatsby-image-wrapper {
    grid-column: 1 / 1;
    grid-row: 1/1;
    display: block;
    max-width: 400px;
    width: auto;
    height: auto;
  }
`

const ProjectDisplay = ({ name, tags, slug, image }) => (
  <Container>
    <Image fluid={image} width="400" height="400" alt={name} />
    <div id="details">
      <h2>{name}</h2>
      <h5>
        {tags.map((t, index) => (
          <span>
            <span id="tag">{t}</span>
            {index !== tags.length - 1 ? " | " : ""}
          </span>
        ))}
      </h5>
      {slug && <ButtonSecondary name="View Project" to={slug} />}
    </div>
  </Container>
)

ProjectDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

ProjectDisplay.defaultProps = {
  tags: ["None"],
}

export default ProjectDisplay
