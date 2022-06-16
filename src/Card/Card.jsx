import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { variant, color, border, shadow, compose } from 'styled-system'
import { Box } from '../Box'

import variants from './Card.variants'
import styles from './Card.styles'
import { mergeDeep } from '../utils'

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
