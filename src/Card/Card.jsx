import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import {
  border,
  compose,
  shadow,
  flexbox,
  layout,
  position,
  space,
  variant
} from 'styled-system'
import PropTypes from 'prop-types'
import variants from './Card.variants'
import styles from './Card.styles'
import { mergeDeep } from '../utils'

export const Card = styled.div(
  css(styles),
  compose(border, shadow, flexbox, layout, position, space),
  ({ theme }) =>
    variant({
      variants: mergeDeep({}, variants, theme.cards)
    })
)

Card.propTypes = {
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.shadow,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.variant,
  children: PropTypes.node
}

Card.defaultProps = {}
Card.displayName = 'Card'

/** @component */
