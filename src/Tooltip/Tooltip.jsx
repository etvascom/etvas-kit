import styled from 'styled-components'
import css from '@styled-system/css'

import { Box } from '@ivoryio/kogaio'
import styles from './Tooltip.style'

const Tooltip = styled(Box)(css(styles))

Tooltip.displayName = 'Tooltip'

export default Tooltip
