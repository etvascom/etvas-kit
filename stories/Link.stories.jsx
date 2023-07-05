import React from 'react'

import { Link } from '../src'

export default {
  title: 'Demo/Link',
  component: Link
}

export const TextLink = () => (
  <Link component='a' href='https://google.com' target='_blank'>
    Text link
  </Link>
)

export const ButtonLink = () => (
  <Link
    component='a'
    variant='button'
    href='https://google.com'
    target='_blank'>
    Button Link
  </Link>
)
