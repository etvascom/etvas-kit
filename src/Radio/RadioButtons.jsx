import PropTypes from 'prop-types'

import { Typography } from '../'
import { Flex } from '../Flex'
import RadioButton from './RadioButton'

const RadioButtons = ({
  name,
  label,
  value,
  options,
  onChange,
  noWrap,
  ...props
}) => {
  const _handleOptionChange = option => {
    onChange(option.value)
  }

  return (
    <>
      {label && (
        <Typography as='label' variant='labelSmall'>
          {label}
        </Typography>
      )}
      <Flex flexDirection={noWrap ? 'column' : 'row'} {...props}>
        {options.map(opt => (
          <RadioButton
            key={opt.value}
            value={opt.value}
            checked={opt.value === value}
            label={opt.label}
            disabled={opt.disabled}
            onChange={() => _handleOptionChange(opt)}
          />
        ))}
      </Flex>
    </>
  )
}

RadioButtons.propTypes = {
  label: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
  noWrap: PropTypes.bool
}

RadioButtons.defaultProps = {
  noWrap: false
}

RadioButtons.displayName = 'RadioButtons'

export default RadioButtons
