import React from 'react'

import styled from 'styled-components'

import { NavBack } from '../../../src'

const Link = styled.a``

const NavBackExample = () => (
  <NavBack
    component={<Link />}
    href='https://www.google.com'
    textContent='Access Google'
  />
)

export default NavBackExample
