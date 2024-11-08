import { FC } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'
import { border, color, compose, shadow, variant } from 'styled-system'

import { Box, BoxProps } from '../Box'
import { mergeDeep } from '../utils'
import { VariantProp } from '../utils/types'
import styles from './Card.styles'
import variants from './Card.variants'

type VariantKey = keyof typeof variants

export interface CardProps extends BoxProps {
  variant?: VariantProp<VariantKey>
}

export const Card: FC<CardProps> = ({
  variant = 'content',
  ...props
}: CardProps) => <CardWrapper variant={variant} {...props} />

const CardWrapper = styled(Box)<CardProps>(
  props =>
    css(mergeDeep({}, styles, compose(color, border, shadow)(props))) as any,
  ({ theme }) =>
    variant({
      variants: mergeDeep({}, variants, theme.cards)
    })
)

Card.displayName = 'Card'