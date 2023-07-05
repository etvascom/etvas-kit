import css from '@styled-system/css'
import styled from 'styled-components'

import { Box } from '../Box'
import styles from './Tooltip.style'

export const Tooltip = styled(Box)(css(styles))

Tooltip.displayName = 'Tooltip'
