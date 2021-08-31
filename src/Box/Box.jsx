import styled from 'styled-components'
import {
  background,
  border,
  compose,
  shadow,
  color,
  colorStyle,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { pointerEvents, visibility } from '../utils/customProps'

export const Box = styled.div`
  ${compose(
    background,
    border,
    color,
    colorStyle,
    layout,
    pointerEvents,
    position,
    shadow,
    space,
    typography,
    visibility
  )};
`

Box.propTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.compose,
  ...propTypes.shadow,
  ...propTypes.color,
  ...propTypes.colorStyle,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}
