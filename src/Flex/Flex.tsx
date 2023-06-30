import styled from 'styled-components'
import { FlexboxProps, flexbox } from 'styled-system'
import { Box } from '../Box'

interface FlexProps extends FlexboxProps {}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`
