import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import css from '@styled-system/css'

import glyphs from './glyphs.json'

export const Icon = ({ name, size, color }) => {
  const glyph =
    typeof name === 'number'
      ? String.fromCharCode(name)
      : glyphs[name]
      ? String.fromCharCode(glyphs[name])
      : name

  return (
    <StyledI color={color} size={size}>
      {glyph}
    </StyledI>
  )
}

const StyledI = styled.i(({ color, size }) =>
  css({
    fontFamily: 'EtvasIcons',
    fontStyle: 'unset',
    fontWeight: 'normal',
    fontSize: size,
    lineHeight: size,
    color
  })
)

Icon.glyphs = glyphs

Icon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}
