import React from 'react'

import { TextSkeleton } from '../src'

export default {
  title: 'Demo/Skeletons/Text',
  component: TextSkeleton
}

export const Default = () => <TextSkeleton />

export const MultipleLines = () => <TextSkeleton lines={3} />

export const Justify = () => (
  <>
    <TextSkeleton lines={3} justify='last' mb={8} />
    <TextSkeleton lines={3} justify='equal' mb={8} />
    <TextSkeleton lines={3} justify='random' mb={8} />
  </>
)
