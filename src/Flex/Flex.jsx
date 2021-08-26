import styled from 'styled-components'
import { flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import Box from './Box'

export const Flex = styled(Box)`
  display: flex;
  ${flexbox}
`

Flex.propTypes = {
  ...propTypes.flexbox
}
