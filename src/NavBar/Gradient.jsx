import React, { useMemo, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@ivoryio/kogaio'
import styled from 'styled-components'
import css from '@styled-system/css'
import { NavBar } from './NavBar'
export const Gradient = ({ left, right, isActive, children }) => {
  return (
    // <Container>
    <Container isActive={color} content={content} />
    // </Container>
  )
}

const Container = styled(NavBar)`
  content: '';
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #fbfdff 0%,
    rgba(251, 253, 255, 0.75) 50.52%,
    rgba(251, 253, 255, 0.35) 100%
  );

  width: 48px;
  height: 30px;
`

Gradient.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node
}
