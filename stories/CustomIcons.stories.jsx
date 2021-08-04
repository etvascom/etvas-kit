import React from 'react'
import { addIcons, Icon, Card } from '../src'
import { mdiAbugidaThai, mdiAbjadArabic, mdiAbjadHebrew } from '@mdi/js'

export default {
  title: 'Demo/CustomIcons',
  component: Icon
}

addIcons({ mdiAbugidaThai, mdiAbjadArabic })

export const Default = () => (
  <>
    <Card p={4} m={4}>
      <Icon name='mdiAbugidaThai' />
    </Card>
    <Icon name='mdiAbjadArabic' />
    <Icon name={mdiAbjadHebrew} />
    <Icon name='mdiSomethingNotExistent' />
  </>
)
