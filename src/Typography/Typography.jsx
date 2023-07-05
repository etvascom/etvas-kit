import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  colorStyle,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant
} from 'styled-system'

import variants from './variants'

const Typography = styled.div(
  css({
    color: 'text'
  }),
  compose(
    color,
    colorStyle,
    layout,
    space,
    textStyle,
    typography,
    variant({
      variants
    })
  ),
  ({ truncate }) =>
    typeof truncate === 'boolean'
      ? truncate &&
        css({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        })
      : truncate &&
        css({
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': `${truncate}`
        })
)

Typography.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.textStyle,
  ...propTypes.typography,
  ...propTypes.variant,
  as: PropTypes.string,
  children: PropTypes.node,
  truncate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.string)
  ])
}

Typography.defaultProps = {
  as: 'div',
  variant: 'default'
}

Typography.displayName = 'Typography'

export default Typography
