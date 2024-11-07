import styled from 'styled-components'
import { FlexboxProps, flexbox } from 'styled-system'

import { Box, BoxProps } from '../Box'

export interface FlexProps extends BoxProps {}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`
