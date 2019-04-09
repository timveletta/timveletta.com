import React from "react"
import styled from "styled-components"
import { COLORS, FONTS } from "../../utils/css-globals"
import MeImg from "../../../content/assets/me.jpg"

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  h3 {
    color: ${COLORS.primary};
    font-family: ${FONTS.primary};
    /* font-size: 1.5rem; */
    line-height: 1.5;
    text-align: justify;
    margin: 1rem;
  }

  img {
    border-radius: 50%;
    display: block;
    max-width: 400px;
    max-height: 400px;
    width: auto;
    height: auto;
  }

  p {
    grid-column: 2/2;
    font-family: ${FONTS.secondary};
    font-size: 1.1rem;
    line-height: 1.5;
    text-align: left;
  }
`

const AboutMe = () => (
  <Container>
    <img src={MeImg} width="400" height="400" alt="Me" />
    <h3>
      I'm a full-stack software developer based in Perth, Australia with a firm
      interest in seeing ideas from conceptualisation through to delivery. I am
      passionate about user experience, simplicity and will happily mould my
      skillset to the task at hand.
    </h3>
  </Container>
)

export default AboutMe
