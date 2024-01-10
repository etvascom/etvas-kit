import css from '@styled-system/css'
import styled from 'styled-components'
import { border, color, compose, shadow, variant } from 'styled-system'

import { Box, BoxProps } from '../Box'
import { mergeDeep } from '../utils'
import styles from './Card.styles'
import variants from './Card.variants'

type VariantKey = keyof typeof variants

export interface CardProps extends BoxProps {
  variant?: VariantKey | VariantKey[] | object
}

export const Card = styled(Box)<CardProps>(
  props => css(mergeDeep({}, styles, compose(color, border, shadow)(props))) as any,
  ({ theme }) =>
    variant({
      variants: mergeDeep({}, variants, theme.cards)
    })
)

Card.defaultProps = {
  variant: 'content'
}

Card.displayName = 'Card'
