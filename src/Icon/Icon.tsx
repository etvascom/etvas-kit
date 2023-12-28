import React, { FC, ReactSVGElement } from 'react'

import { default as DefaultIcon } from '@mdi/react'
import css from '@styled-system/css'
import type * as CSS from 'csstype'
import styled from 'styled-components'
import { OpacityProps, PositionProps, SpaceProps } from 'styled-system'

import animationSpeeds from '../assets/animationSpeeds'
import sizes from '../assets/sizes'
import glyphs from './glyphs'

const externalGlyphs: { [key: string]: string } = {}

const addIcon = (name: string, icon: string) => {
  if (externalGlyphs[name] && externalGlyphs[name] !== icon) {
    console.warn('* Warning: overwriting injected icon', name)
  }
  externalGlyphs[name] = icon
}

export const addIcons = (icons: { [key: string]: string }) => {
  Object.keys(icons).forEach(key => addIcon(key, icons[key]))
}

const validate = (name: string) => {
  if (/^[acglmqstvz][ 0-9.]+/gi.test(name)) {
    return name
  }

  return 'M0 0L24 0L24 24 L0 24Z'
}

interface Props
  extends React.HTMLAttributes<ReactSVGElement>,
    OpacityProps,
    PositionProps,
    SpaceProps {
  name: string
  size?: string | number
  color?: string
  rotate?: number
  spin?: boolean
  cursor?: CSS.Property.Cursor // TODO: this should already be included in React.HTMLAttributes<ReactSVGElement>
  pointerEvents?: CSS.Property.PointerEvents // TODO: this should already be included in React.HTMLAttributes<ReactSVGElement>
}

interface IconSubComponents {
  glyphs: typeof glyphs
  externalGlyphs: typeof externalGlyphs
}

export const Icon: FC<Props> & IconSubComponents = ({
  name,
  size = 'small',
  color,
  rotate,
  spin,
  ...props
}) => (
  <BaseIcon
    path={
      externalGlyphs[name] ||
      glyphs[name as keyof typeof glyphs] ||
      validate(name)
    }
    size={sizes[size as keyof typeof sizes] ?? size}
    color={color}
    spin={spin}
    rotate={rotate}
    {...props}
  />
)

const BaseIcon = styled(DefaultIcon)(({ spin, color }) =>
  css({
    animation: spin
      ? `rotation ${animationSpeeds.rotation} infinite linear`
      : '',
    fill: color
  })
)

Icon.glyphs = glyphs
Icon.externalGlyphs = externalGlyphs
