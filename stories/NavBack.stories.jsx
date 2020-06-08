import React from 'react'
import { NavBack } from '../src'

export default {
  title: 'Demo/NavBack',
  component: NavBack
}

export const SimpleNavBack = () => <NavBack link={<a href='/'>Back</a>} />
