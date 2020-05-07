import React from 'react'
import PropTypes from 'prop-types'

import { Dropdown as KogaioDropdown } from '@ivoryio/kogaio'

const Dropdown = ({ children, ...props }) => (
  <KogaioDropdown {...props}>{children}</KogaioDropdown>
)
Dropdown.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  multiple: PropTypes.bool,
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  renderListFooter: PropTypes.func,
  renderListHeader: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.number,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
}

Dropdown.defaultProps = {
  autoFocus: false,
  children: [],
  disabled: false,
  multiple: false,
  onChange: () => console.warn('* Dropdown expects an onChange function'),
  placeholder: 'Select an option',
  readOnly: false,
  required: false,
  size: 5,
  value: '',
  variant: 'default'
}

Dropdown.displayName = 'Dropdown'
Dropdown.Option = KogaioDropdown.Option
export default Dropdown
