import type * as CSS from 'csstype'
import styled from 'styled-components'
import { FlexboxProps, flexbox } from 'styled-system'

import { Box, BoxProps } from '../Box'

interface Props extends FlexboxProps, BoxProps {
  pointerEvents?: CSS.Property.PointerEvents
}

export const Flex = styled(Box)<Props>`
  display: flex;
  ${flexbox}
`
