import React, { FC } from 'react'

import styled from 'styled-components'
import { variant as variantBuilder } from 'styled-system'

import { Typography, TypographyProps } from '../Typography'
import { default as variants } from './SubLabel.variants'

interface Props extends Omit<TypographyProps, 'variant'> {
  preserveSpace?: boolean
  variant: string
  content?: any
}

export const SubLabel: FC<Props> = ({ variant, content, preserveSpace }) => (
  <Wrapper preserveSpace={preserveSpace} variant={variant} mt={1}>
    {content && <Span>{content}</Span>}
  </Wrapper>
)

const Wrapper = styled(Typography)<Omit<Props, 'content'>>`
  min-height: ${props => (props.preserveSpace ? '16px' : 0)};
  ${variantBuilder({ variants })}
`

const Span = styled.span`
  letter-spacing: inherit;
`
SubLabel.displayName = 'SubLabel'
