import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'

const styles = {
  textDecoration: 'inherit',
  color: 'accent',
  font: 'inherit',
  lineHeight: 'inherit'
}

export const Link = ({ component, variant, ...props }) => {
  const Component = useMemo(
    () =>
      styled(component)(
        css({
          ...styles,
          ...(variant === 'button' ? typography.labelButton : {})
        })
      ),
    [variant, component]
  )

  return <Component {...props} />
}

Link.propTypes = {
  component: PropTypes.elementType,
  variant: PropTypes.oneOf(['text', 'button'])
}

Link.defaultProps = {
  variant: 'text',
  component: 'a'
}
