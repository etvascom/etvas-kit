import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import css from '@styled-system/css'

import glyphs from './glyphs.js'
import animationSpeeds from '../assets/animationSpeeds'
import { default as DefaultIcon } from '@mdi/react'
import sizes from '../assets/sizes'

const externalGlyphs = {}

const addIcon = (name, icon) => {
  if (externalGlyphs[name] && externalGlyphs[name] !== icon) {
    console.warn('* Warning: overwriting injected icon', name)
  }
  externalGlyphs[name] = icon
}

export const addIcons = icons => {
  Object.keys(icons).forEach(key => addIcon(key, icons[key]))
}

const validate = name => {
  if (/^[acglmqstvz][ 0-9.]+/gi.test(name)) {
    return name
  }

  return 'M0 0L24 0L24 24 L0 24Z'
}

export const Icon = ({ name, size, color, rotate, ...props }) => (
  <BaseIcon
    path={externalGlyphs[name] || glyphs[name] || validate(name)}
    size={sizes[size] ?? size}
    svgColor={color}
    spin={rotate}
    {...props}
  />
)

const BaseIcon = styled(DefaultIcon)(({ svgColor, spin }) =>
  css({
    color: svgColor,
    animation: spin
      ? `rotation ${animationSpeeds.rotation} infinite linear`
      : ''
  })
)

Icon.glyphs = glyphs
Icon.externalGlyphs = externalGlyphs

Icon.propTypes = {
  name: PropTypes.string,
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

Icon.defaultProps = {
  size: 'small'
}
