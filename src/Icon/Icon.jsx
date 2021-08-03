import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import css from '@styled-system/css'

import glyphs from './glyphs.js'
import animationSpeeds from '../assets/animationSpeeds'
import { default as DefaultIcon } from '@mdi/react'
import sizes from '../assets/sizes'

let currentGlyphs = { ...glyphs }

export const addIcon = (name, icon) => {
  if (currentGlyphs[name]) {
    console.warn(`Warning: existing icon ${name} is overwritten`)
  }

  currentGlyphs[name] = icon
}

export const addIcons = icons => {
  Object.keys(icons).forEach(key => addIcon(key, icons[key]))
}

export const Icon = ({ name, size, color, rotate, face, ...props }) => {
  const [glyph, isOldVersion] = useMemo(() => {
    if (typeof name === 'number') {
      return [String.fromCharCode(name), true]
    }

    if (typeof name === 'string' && typeof currentGlyphs[name] === 'number') {
      return [String.fromCharCode(currentGlyphs[name]), true]
    }

    return [name, false]
  }, [name])

  const path = useMemo(() => {
    if (face) return face
    return currentGlyphs[name]
  }, [name, face])

  if (!isOldVersion) {
    return (
      <BaseIcon
        path={path}
        size={sizes[size] ?? size}
        svgColor={color}
        spin={rotate}
        {...props}
      />
    )
  }

  console.warn('You are using the old version of icons', glyph)

  return (
    <StyledI color={color} size={size} rotate={rotate} {...props}>
      {glyph || 'undefined'}
    </StyledI>
  )
}

const BaseIcon = styled(DefaultIcon)(({ svgColor }) =>
  css({
    color: svgColor
  })
)

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
  rotate: PropTypes.bool,
  face: PropTypes.string
}

Icon.defaultProps = {
  size: 'small'
}
