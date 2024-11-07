import { FC } from 'react'

import styled from 'styled-components'
import { variant as variantBuilder } from 'styled-system'

import { Typography, TypographyProps } from '../Typography'
import { VariantProp } from '../utils/types'
import { default as variants } from './SubLabel.variants'

type VariantKey = keyof typeof variants

export interface SubLabelProps extends Omit<TypographyProps, 'variant'> {
  preserveSpace?: boolean
  variant: VariantProp<VariantKey>
  content?: any
}

export const SubLabel: FC<SubLabelProps> = ({
  variant,
  content,
  preserveSpace
}) => (
  <Wrapper preserveSpace={preserveSpace} variant={variant} mt={1}>
    {content && <Span>{content}</Span>}
  </Wrapper>
)

const Wrapper = styled(Typography)<Omit<SubLabelProps, 'content'>>`
  min-height: ${props => (props.preserveSpace ? '16px' : 0)};
  ${variantBuilder({ variants })}
`

const Span = styled.span`
  letter-spacing: inherit;
`

SubLabel.displayName = 'SubLabel'
