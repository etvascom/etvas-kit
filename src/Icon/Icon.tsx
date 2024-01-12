import React, { FC, SVGAttributes } from 'react'

import { default as DefaultIcon } from '@mdi/react'
import styled from 'styled-components'
import { OpacityProps, PositionProps, SpaceProps } from 'styled-system'

import animationSpeeds from '../assets/animationSpeeds'
import sizes from '../assets/sizes'
import glyphs from './glyphs'

const externalGlyphs: Record<string, string> = {}

const addIcon = (name: string, icon: string) => {
  if (externalGlyphs[name] && externalGlyphs[name] !== icon) {
    console.warn('* Warning: overwriting injected icon', name)
  }
  externalGlyphs[name] = icon
}

export const addIcons = (icons: Record<string, string>) => {
  Object.keys(icons).forEach(key => addIcon(key, icons[key]))
}

const validate = (name: string) => {
  if (/^[acglmqstvz][ 0-9.]+/gi.test(name)) {
    return name
  }

  return 'M0 0L24 0L24 24 L0 24Z'
}

export interface IconProps
  extends Omit<SVGAttributes<SVGElement>, 'opacity'>,
    OpacityProps,
    PositionProps,
    SpaceProps {
  name: string
  size?: 'small' | 'medium' | 'large'
  spin?: boolean
  rotate?: number
}

interface IconSubComponents {
  glyphs: typeof glyphs
  externalGlyphs: typeof externalGlyphs
}

export const Icon: FC<IconProps> & IconSubComponents = ({
  name,
  size = 'small',
  color,
  rotate,
  spin,
  ...props
}) => (
  <BaseIcon
    path={externalGlyphs[name] || glyphs[name as keyof typeof glyphs] || validate(name)}
    size={sizes[size] ?? size}
    color={color}
    spin={spin}
    rotate={rotate}
    {...props}
  />
)

const BaseIcon = styled(DefaultIcon)`
  animation: ${({ spin }) =>
    spin ? `rotation ${animationSpeeds.rotation} infinite linear` : ''};
  fill: ${({ color }) => color};
`

Icon.glyphs = glyphs
Icon.externalGlyphs = externalGlyphs
