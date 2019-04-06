import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { COLORS, FONTS } from "../../utils/css-globals"

const Container = styled.button`
  cursor: pointer;
  font-family: ${FONTS.secondary};
  min-width: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border: 1px solid ${COLORS.primary};
  outline: none;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-sizing: border-box;
  font-weight: bold;
  &:hover {
    background: ${COLORS.accent};
  }
  &:disabled {
    opacity: 0.5;
  }
`

const Button = props => (
  <Link to={props.to}>
    <Container {...props}>{props.name}</Container>
  </Link>
)

const SecondaryContainer = styled(Container)`
  border: 1px solid ${COLORS.accent};
  background: transparent;
  color: ${COLORS.accent};
  font-size: 0.8rem;

  &:hover {
    background: ${COLORS.primary};
  }
`

const ButtonSecondary = props => (
  <Link to={props.to}>
    <SecondaryContainer {...props}>{props.name}</SecondaryContainer>
  </Link>
)

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
}

Button.defaultProps = {
  type: "button",
}

export default Button
export { ButtonSecondary }