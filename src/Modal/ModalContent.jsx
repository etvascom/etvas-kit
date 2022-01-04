import React from 'react'

import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { compose, color, flexbox, layout, border } from 'styled-system'

import style from './Modal.style'

import { Box } from '../Box'

const StyledModalContent = styled(Box)(
  compose(layout, color, flexbox, border),
  css(style.content)
)

export const ModalContent = ({ children, onClose, ...props }) => (
  <StyledModalContent {...props}>
    {onClose && <CloseIcon onClick={onClose}>&times;</CloseIcon>}
    {children}
  </StyledModalContent>
)

const CloseIcon = styled.button(
  css({
    position: 'absolute',
    border: 'none',
    background: 'transparent',
    right: 4,
    top: 4,
    fontSize: '24px',
    cursor: 'pointer',
    outline: 'none',
    color: 'black'
  })
)

ModalContent.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  children: PropTypes.node,
  onClose: PropTypes.func
}
