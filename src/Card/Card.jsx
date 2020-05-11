import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Box } from '@ivoryio/kogaio'

import variants from './Card.variants'
import styles from './Card.styles'
import { mergeDeep } from '../utils'

export const Card = styled(Box)(css(styles), ({ theme }) =>
  variant({
    variants: mergeDeep({}, variants, theme.cards)
  })
)

Card.propTypes = {
  ...Box.propTypes,
  ...propTypes.variant
}

Card.displayName = 'Card'
