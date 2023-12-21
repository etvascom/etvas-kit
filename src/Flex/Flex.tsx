import { FlexboxProps } from 'styled-system'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

import { Box } from '../Box'

interface Props extends FlexboxProps {
}

export const Flex = styled(Box)<Props>`
  display: flex;
  ${flexbox}
`
