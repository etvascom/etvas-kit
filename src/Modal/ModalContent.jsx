import React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { color, flexbox } from 'styled-system'

import style from './Modal.style'

import { Box } from '@ivoryio/kogaio'

const StyledModalContent = styled(Box)(css(style.content), color, flexbox)

export const ModalContent = ({ children, ...props }) => (
  <StyledModalContent {...props}>{children}</StyledModalContent>
)

ModalContent.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.color,
  children: PropTypes.node
}

ModalContent.displayName = 'Modal'
