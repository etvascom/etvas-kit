import React from 'react'
import { Link } from '../src'

export default {
  title: 'Demo/Link'
}

const LinkComponent = props => <a {...props} />

export const SimpleForm = () => (
  <Link component={LinkComponent} href='https://google.com' target='_blank'>
    Google
  </Link>
)
