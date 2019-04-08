import React from "react"
import styled from "styled-components"

import "./layout.css"
import Footer from "../footer"

const Container = styled.div``

const Layout = ({ children }) => (
  <Container>
    <main>{children}</main>
    <Footer />
  </Container>
)

export default Layout
