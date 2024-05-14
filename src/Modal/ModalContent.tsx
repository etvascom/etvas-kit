import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  forwardRef
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'
import { compose, flexbox } from 'styled-system'

import { Box, BoxProps } from '../Box'
import style from './Modal.style'

interface ModalContentProps extends BoxProps {
  onClose: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export const ModalContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ModalContentProps>
>(({ children, onClose, ...props }, ref) => (
  <StyledModalContent ref={ref} {...props}>
    {onClose && <CloseIcon onClick={onClose}>&times;</CloseIcon>}
    {children}
  </StyledModalContent>
))

const StyledModalContent = styled(Box)(
  compose(flexbox),
  css(style.content as any)
)
const CloseIcon = styled.button(css(style.closeButton as any))
