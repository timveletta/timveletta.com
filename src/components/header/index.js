import React from "react"
import styled from "styled-components"

const Container = styled.header`
  display: grid;
  align-items: center;
  height: 100vh;

  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

const SocialLinks = styled.div`
  text-align: center;
`

const Header = () => (
  <Container>
    <div>
      <h1>Tim Veletta</h1>
      <h2>I enjoy developing websites, games and cloud based applications.</h2>
      <SocialLinks>Gitlab | Twitter | Instagram | Email</SocialLinks>
    </div>
  </Container>
)

export default Header
