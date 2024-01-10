import styled from 'styled-components'
import { FlexboxProps, flexbox } from 'styled-system'

import { Box, BoxProps } from '../Box'

interface Props extends FlexboxProps, BoxProps {}

export const Flex = styled(Box)<Props>`
  display: flex;
  ${flexbox}
`
