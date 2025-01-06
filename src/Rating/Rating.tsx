import { FC, useMemo } from 'react'

import { ColorProps } from 'styled-system'

import { Icon, IconProps } from '../Icon'

interface RatingProps extends ColorProps, Pick<IconProps, 'size'> {
  rating?: number
  max?: number
  color?: string
}

export const Rating: FC<RatingProps> = ({
  rating = 0,
  max = 5,
  size = 'small',
  color = 'accent'
}) => {
  const icons = useMemo(() => {
    const icons = []
    for (let i = 0; i < max; i++) {
      i < rating
        ? icons.push('star')
        : (i >= rating || !rating) && icons.push('starOutline')
    }
    return icons
  }, [rating, max])

  return (
    <>
      {icons.map((iconName, idx) => (
        <Icon
          key={`rating-icon-${String(idx)}`}
          name={iconName}
          color={color}
          size={size}
        />
      ))}
    </>
  )
}
