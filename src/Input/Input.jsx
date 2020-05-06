import React from 'react'
import PropTypes from 'prop-types'
import { Input as KogaioInput } from '@ivoryio/kogaio'

const Input = props => <KogaioInput {...props} />

Input.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icLeft: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func,
  passwordView: PropTypes.oneOf(['peek', 'toggle']),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
}

Input.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  passwordView: 'toggle',
  placeholder: 'Search',
  type: 'text',
  value: '',
  variant: 'default'
}

Input.displayName = 'Input'
export default Input
