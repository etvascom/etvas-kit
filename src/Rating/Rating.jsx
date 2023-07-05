import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import { Icon } from '../Icon'

export const Rating = ({ rating, max, size, color }) => {
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

Rating.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  rating: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.string
}

Rating.defaultProps = {
  max: 5,
  rating: 0,
  size: 'small',
  color: 'accent'
}
