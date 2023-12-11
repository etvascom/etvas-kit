import PropTypes from 'prop-types'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export const Label = ({
  label,
  inputId,
  showOptionalText,
  optionalText,
  showTooltip
}) => {
  const tooltipIconId = `${inputId}-icon`
  return (
    <Flex mb={1} alignItems='center'>
      <Typography
        as='label'
        htmlFor={inputId}
        variant='base12Bold'
        color='baseMetal'
        width='fit-content'
      >
        {label}
      </Typography>
      {inputId && showTooltip && (
        <Flex ml={1} alignItems='center' id={tooltipIconId}>
          <Icon
            name='information'
            color='baseMetal'
            size='small'
            opacity='.5'
            cursor='pointer'
          />
        </Flex>
      )}
      {showOptionalText && optionalText && (
        <Typography
          ml={1}
          as='label'
          htmlFor={inputId}
          variant='base12Bold'
          color='baseGray'
          width='fit-content'
        >
          - {optionalText}
        </Typography>
      )}
    </Flex>
  )
}

Label.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.node,
  showOptionalText: PropTypes.bool,
  optionalText: PropTypes.node,
  showTooltip: PropTypes.bool
}

Label.defaultProps = {
  optionalText: 'Optional'
}
