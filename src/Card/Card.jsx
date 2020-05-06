import React from 'react'
import PropTypes from 'prop-types'
import { Card as KogaioCard } from '@ivoryio/kogaio'

const Card = ({ children, ...props }) => (
  <KogaioCard {...props}>{children}</KogaioCard>
)

Card.propTypes = {
  children: PropTypes.node
}
Card.defaultProps = {
  children: null
}

Card.displayName = 'Card'
export default Card
