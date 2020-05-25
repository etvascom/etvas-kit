import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Box, Icon } from '@ivoryio/kogaio'

const MAX_STARS = 5

const Ratings = ({ stars, max, iconSize, ...props }) => {
  const icons = useMemo(() => {
    const icons = []
    for (let i = 0; i < max; i++) {
      i < stars
        ? icons.push('star')
        : (i >= stars || !stars) && icons.push('star_outline')
    }
    return icons
  }, [stars, max])

  return (
    <Box {...props}>
      {icons.map((iconName, idx) => (
        <Icon
          key={`rating-icon-${String(idx)}`}
          name={iconName}
          fontSize={iconSize}
        />
      ))}
    </Box>
  )
}

Ratings.propTypes = {
  stars: PropTypes.number,
  max: PropTypes.number,
  iconSize: PropTypes.string
}

Ratings.defaultProps = {
  max: MAX_STARS,
  iconSize: '1em'
}

export default Ratings
