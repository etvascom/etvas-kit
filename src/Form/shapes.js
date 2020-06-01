import PropTypes from 'prop-types'

export const fieldShape = {
  value: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  label: PropTypes.node
}
