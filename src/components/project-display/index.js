import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  > div {
    background-image: url();
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  width: 100%;
  height: 100%;
  /* 
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center; */
`

const ProjectDisplay = ({ name }) => (
  <Container>
    <img src="https://via.placeholder.com/400" width="100%" height="100%" />
    {/* <h2>{name}</h2>
      <h4>Tags</h4> */}
    {/* <button>View More</button> */}
  </Container>
)

ProjectDisplay.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ProjectDisplay
