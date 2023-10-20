import React from 'react'

import { Rating } from '../src'

export default {
  title: 'Demo/Rating',
  component: Rating
}

export const SimpleRating = () => <Rating rating={3} />
export const CustomColor = () => <Rating rating={3} color='brand' />
export const CustomSize = () => <Rating rating={3} size='150%' />
