import css from '@styled-system/css'
import styled from 'styled-components'
import { border, color, compose, shadow, variant } from 'styled-system'

import { Box, BoxProps } from '../Box'
import { mergeDeep } from '../utils'
import styles from './Card.styles'
import variants from './Card.variants'
import { PropsWithChildren } from 'react'

type VariantKey = keyof typeof variants

interface Props extends BoxProps {
  variant?: VariantKey | VariantKey[] | object
}

export const Card = styled(Box)<PropsWithChildren<Props>>(
  props => css(mergeDeep({}, styles, compose(color, border, shadow)(props))),
  ({ theme }) =>
    variant({
      variants: mergeDeep({}, variants, theme.cards)
    })
)
Card.defaultProps = {
  variant: 'content'
}


Card.displayName = 'Card'
