import React, { forwardRef } from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, flexbox } from 'styled-system'

import { Box } from '../Box'
import style from './Modal.style'

export const ModalContent = forwardRef(
  ({ children, onClose, ...props }, ref) => (
    <StyledModalContent ref={ref} {...props}>
      {onClose && <CloseIcon onClick={onClose}>&times;</CloseIcon>}
      {children}
    </StyledModalContent>
  )
)

const StyledModalContent = styled(Box)(compose(flexbox), css(style.content))
const CloseIcon = styled.button(css(style.closeButton))

ModalContent.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  children: PropTypes.node,
  onClose: PropTypes.func
}
