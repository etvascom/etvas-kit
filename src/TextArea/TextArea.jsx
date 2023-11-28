import React, { forwardRef, useMemo, useRef } from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Flex } from '../Flex'
import { SubLabel } from '../Input/SubLabel'
import { Label } from '../Label'
import { typography } from '../Typography'
import { default as variants } from './TextArea.variants'

export const TextArea = forwardRef(
  (
    {
      autoComplete,
      autoFocus,
      disabled,
      error,
      id,
      label,
      optionalText,
      name,
      onChange,
      placeholder,
      readOnly,
      required,
      valid,
      value,
      variant,
      allowResize,
      noBottomSpace,
      cols,
      rows,
      maxLength,
      loading,
      warning,
      textAreaProps,
      tinted,
      showTooltip,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef()

    const textAreaVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    return (
      <Flex flexDirection='column' hasLabel={label} width={1} {...rest}>
        {!!label && (
          <Label
            label={label}
            inputId={id}
            showOptionalText={!required}
            optionalText={optionalText}
            showTooltip={showTooltip}
          />
        )}
        <Flex alignItems='center' position='relative' width='100%'>
          <StyledTextArea
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            disabled={readOnly || disabled}
            error={error}
            hasLabel={label}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={readOnly ? '' : placeholder}
            readOnly={readOnly}
            ref={ref || textAreaRef}
            required={required}
            value={value}
            variant={textAreaVariant}
            allowResize={allowResize}
            maxLength={maxLength}
            cols={cols}
            rows={rows}
            tinted={tinted}
            {...textAreaProps}
          />
        </Flex>

        <SubLabel
          variant='error'
          content={error}
          preserveSpace={!noBottomSpace}
        />
      </Flex>
    )
  }
)

const StyledTextArea = styled.textarea(
  css({
    ...typography.labelSmall
  }),
  variant({ variants }),
  ({ tinted, error, warn, disabled }) => ({
    backgroundColor: tinted && !(error || warn || disabled) && 'white',
    borderColor: tinted && !(error || warn || disabled) && 'white'
  })
)

TextArea.propTypes = {
  ...propTypes.inputStyle,
  allowResize: PropTypes.bool,
  maxLength: PropTypes.number,
  cols: PropTypes.number,
  rows: PropTypes.number,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.node,
  optionalText: PropTypes.node,
  name: PropTypes.string,
  tinted: PropTypes.bool,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  noBottomSpace: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  showTooltip: PropTypes.bool,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

TextArea.defaultProps = {
  autoFocus: false,
  rows: 5,
  allowResize: true,
  noBottomSpace: false,
  readOnly: false,
  value: '',
  variant: 'default',
  tinted: false
}

TextArea.displayName = 'TextArea'
/** @component */
