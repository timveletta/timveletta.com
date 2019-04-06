import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ButtonSecondary } from "../button"
import { COLORS, COLORS_RGB, FONTS } from "../../utils/css-globals"

const Container = styled.div`
  display: grid;
  margin: 0.5rem;

  :hover div {
    visibility: visible;
  }

  div {
    visibility: hidden;

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
    }
  }

  > img {
    grid-column: 1 / 1;
    grid-row: 1/1;
  }
  /* width: 100%;
  height: 100%; */
  /* 
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center; */
`

const ProjectDisplay = ({ name }) => (
  <Container>
    <img src="https://via.placeholder.com/400" width="100%" height="100%" />
    <div>
      <h2>{name}</h2>
      <h5>Tags</h5>
      <ButtonSecondary name="View Project" />
    </div>
  </Container>
)

ProjectDisplay.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ProjectDisplay
