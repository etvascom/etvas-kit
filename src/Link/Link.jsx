import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'

const styles = {
  textDecoration: 'inherit',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'inherit'
}

export const Link = ({ component: Component, ...props }) => (
  <Typography variant='labelButton' color='accent'>
    <Component {...props} style={styles} />
  </Typography>
)

Link.propTypes = {
  component: PropTypes.elementType
}
