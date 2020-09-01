import React, { forwardRef, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { Typography, typography } from '../Typography'
import { Flex } from '@ivoryio/kogaio'

import { ErrorMessage } from './ErrorMessage'

export const TextArea = forwardRef(
  (
    {
      autoComplete,
      autoFocus,
      disabled,
      error,
      id,
      label,
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
      textAreaProps,
      ...rest
    },
    ref
  ) => {
    const textAreaRef = useRef()

    const textAreaVariant = useMemo(() => {
      if (disabled) return 'disabled'
      else if (error) return 'error'
      else if (valid) return 'valid'
      return variant
    }, [disabled, error, valid, variant])

    return (
      <Flex flexDirection='column' hasLabel={label} width={1} {...rest}>
        {label ? (
          <Typography
            as='label'
            htmlFor={id}
            variant='inputLabel'
            width='fit-content'>
            {label} {required ? '*' : ''}
          </Typography>
        ) : null}
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
            {...textAreaProps}
          />
        </Flex>
        <ErrorMessage error={error} preserveSpace={!noBottomSpace} />
      </Flex>
    )
  }
)

const StyledTextArea = styled.textarea(
  css({
    ...typography.labelSmall,
    display: 'block',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
    outline: 'none',
    color: 'text',
    padding: 3,
    ':hover, :focus': {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }),
  ({ allowResize }) =>
    !allowResize &&
    css({
      resize: 'none'
    }),
  ({ error }) =>
    error
      ? css({
          color: 'error',
          borderColor: 'error'
        })
      : null,
  ({ disabled }) =>
    disabled
      ? css({
          opacity: 0.5
        })
      : null
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
  name: PropTypes.string,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  noBottomSpace: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
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
  variant: 'default'
}

TextArea.displayName = 'TextArea'
/** @component */
