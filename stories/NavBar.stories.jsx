import React from 'react'
import { action } from '@storybook/addon-actions'
import { NavBar } from '../src'

export default {
  title: 'Demo/NavBar',
  component: NavBar
}

export const SimpleNavBar = () => (
  <NavBar>
    <NavBar.Item icon='eye' label='Overview' onClick={action('overview')} />
    <NavBar.Item
      icon='alertOctagon'
      label='Alerts'
      isActive
      onClick={action('alert')}
    />
    <NavBar.Item icon='rocket' label='Space' onClick={action('space')} />
  </NavBar>
)
