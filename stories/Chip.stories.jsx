import React from 'react'
import { Chip } from '../src'

export default {
  title: 'Demo/Chip',
  component: Chip
}

export const Default = () => <Chip>Hello</Chip>
export const Colored = () => <Chip color='accent'>Hello</Chip>
export const Rounded = () => <Chip isRounded>Hello</Chip>
