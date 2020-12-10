import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import css from '@styled-system/css'

import glyphs from './glyphs.js'
import animationSpeeds from '../assets/animationSpeeds'
import { default as BaseIcon } from '@mdi/react'

export const Icon = ({ name, size, color, rotate, ...props }) => {
  let glyph
  if (typeof name === 'number') {
    glyph = String.fromCharCode(name)
  } else if (typeof name === 'string') {
    if (typeof glyphs[name] === 'number') {
      glyph = String.fromCharCode(glyphs[name])
    } else if (typeof glyphs[name] === 'string') {
      return <BaseIcon
        path={glyphs[name]}
        size={size}
        color={color}
        spin={rotate}
        {...props}
      />
    }
  }
  console.warn("You are using old icons!")
  return (
    <StyledI color={color} size={size} rotate={rotate} {...props}>
      {glyph}
    </StyledI>
  )
}

const StyledI = styled.i(({ color, size, rotate }) =>
  css({
    fontFamily: 'EtvasIcons',
    fontStyle: 'unset',
    fontWeight: 'normal',
    fontSize: size,
    lineHeight: size,
    color,
    animation: rotate
      ? `rotation ${animationSpeeds.rotation} infinite linear`
      : ''
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
  ]),
  rotate: PropTypes.bool
}
