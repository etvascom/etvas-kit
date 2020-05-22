import React from 'react'

import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { color, flexbox, layout } from 'styled-system'

import style from './Modal.style'

import { Box } from '@ivoryio/kogaio'

const StyledModalContent = styled(Box)(
  css(style.content),
  layout,
  color,
  flexbox
)

export const ModalContent = ({
  children,
  onClick,
  isCloseButton,
  ...props
}) => (
  <StyledModalContent {...props}>
    {isCloseButton && (
      <CloseModalIcon onClick={onClick}>&times;</CloseModalIcon>
    )}
    {children}
  </StyledModalContent>
)

const CloseModalIcon = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  right: 25px;
  top: 25px;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  color: #000000;
`

ModalContent.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.color,
  children: PropTypes.node
}
