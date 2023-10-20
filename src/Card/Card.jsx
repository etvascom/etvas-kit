import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { border, color, compose, shadow, variant } from 'styled-system'

import { Box } from '../Box'
import { mergeDeep } from '../utils'
import styles from './Card.styles'
import variants from './Card.variants'

export const Card = styled(Box)(
  props => css(mergeDeep({}, styles, compose(color, border, shadow)(props))),
  ({ theme }) =>
    variant({
      variants: mergeDeep({}, variants, theme.cards)
    })
)

Card.propTypes = {
  ...Box.propTypes,
  ...propTypes.variant
}

Card.displayName = 'Card'
