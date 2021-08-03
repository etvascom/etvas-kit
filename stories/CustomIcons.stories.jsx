import React from 'react'
import { addIcons, Icon } from '../src'
import { mdiAbugidaThai, mdiAbjadArabic, mdiAbjadHebrew } from '@mdi/js'

export default {
  title: 'Demo/CustomIcons',
  component: Icon
}

addIcons({ mdiAbugidaThai, mdiAbjadArabic })

export const Default = () => (
  <>
    <Icon name='mdiAbugidaThai' />
    <Icon name='mdiAbjadArabic' />
    <Icon face={mdiAbjadHebrew} />
  </>
)
