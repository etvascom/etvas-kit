import styled from 'styled-components'
import { compose } from 'styled-system'
import css, { SystemStyleObject } from '@styled-system/css'

import { Box } from '../Box'
import styles from './Tooltip.style'

export const Tooltip = styled(Box)(compose(css(styles as SystemStyleObject)))

Tooltip.displayName = 'Tooltip'
