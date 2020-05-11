import styled from 'styled-components'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import { Box } from '@ivoryio/kogaio'
import styles from './Tooltip.style'

const Tooltip = styled(Box)(css(styles))

Tooltip.propTypes = {
  ...Box.propTypes,
  ...propTypes.variant
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
