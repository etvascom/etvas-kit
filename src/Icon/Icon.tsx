import React, { FC } from 'react'

import styled from 'styled-components'
import css from '@styled-system/css'

import glyphs from './glyphs'
import animationSpeeds from '../assets/animationSpeeds'
import { default as DefaultIcon } from '@mdi/react'
import sizes from '../assets/sizes'
import { compose } from 'styled-system'

const externalGlyphs: Record<string, string> = {}

const addIcon = (name: string, icon: string): void => {
  if (externalGlyphs[name] && externalGlyphs[name] !== icon) {
    console.warn('* Warning: overwriting injected icon', name)
  }
  externalGlyphs[name] = icon
}

export const addIcons = (icons: string[]): void => {
  Object.keys(icons).forEach(key => addIcon(key, icons[key as any]))
}

const validate = (name: string): string => {
  if (/^[acglmqstvz][ 0-9.]+/gi.test(name)) {
    return name
  }

  return 'M0 0L24 0L24 24 L0 24Z'
}

interface IconProps {
  name: string
  size?: string | number | string[] | number[] | Record<string, string | number>
  color?: string | string[] | Record<string, string>
  rotate?: number
  spin?: boolean
}

interface IconProperties {
  glyphs: Record<string, string>
  externalGlyphs: Record<string, string>
}

export const Icon: FC<IconProps> & IconProperties = ({
  name,
  size = 'small',
  color,
  rotate,
  spin,
  ...props
}) => (
  <BaseIcon
    path={externalGlyphs[name] || glyphs[name] || validate(name)}
    size={sizes[size as keyof typeof sizes] ?? size}
    color={color}
    spin={spin}
    rotate={rotate}
    {...props}
  />
)

type BaseIconProps = Omit<IconProps, 'name'>

const BaseIcon = styled(DefaultIcon)<BaseIconProps>(
  compose(({ spin, color }) =>
    css({
      animation: spin
        ? `rotation ${animationSpeeds.rotation} infinite linear`
        : '',
      fill: color
    })
  )
)

Icon.glyphs = glyphs
Icon.externalGlyphs = externalGlyphs
