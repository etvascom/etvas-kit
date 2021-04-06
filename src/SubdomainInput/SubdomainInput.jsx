import React, { forwardRef, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Icon } from '../Icon'
import { Typography, typography } from '../Typography'
import { Flex } from '@ivoryio/kogaio'

import { default as variants } from '../Input/Input.variants'
import { Input } from '../Input'
import { SubLabel } from '../Input/SubLabel'
import theme from '../assets/theme'

export const SubdomainInput = forwardRef(
  (
    {
      prefix,
      suffix,
      autoComplete,
      autoFocus,
      disabled,
      error,
      warning,
      icLeft,
      icRight,
      id,
      label,
      name,
      noBottomSpace,
      onChange,
      passwordView,
      placeholder,
      readOnly,
      required,
      type,
      valid,
      value,
      variant,
      subLabel,
      loading,
      tinted,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef()
    const inputVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    const currentIcRight = useMemo(() => {
      if (loading) return 'loading'
      else if (error || warning) return 'alertCircle'
      else if (valid || !icRight) return 'checkMark'

      return icRight
    }, [loading, error, warning, valid, icRight])

    const currentIcRightColor = useMemo(() => {
      if (loading) return 'brand'
      else if (disabled) return 'inputBorderGray'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'success'

      return 'inputIcon'
    }, [loading, error, warning, valid, disabled])

    const icStateIsNotIconToggle = () => type !== 'password' || error || loading

    const getTextWidth = (text, font) => {
      const canvas =
        getTextWidth.canvas ||
        (getTextWidth.canvas = document.createElement('canvas'))
      const context = canvas.getContext('2d')
      context.font = font
      const metrics = context.measureText(text)
      return metrics.width
    }

    const inputWidth = Math.ceil(
      getTextWidth(
        value || placeholder,
        `${theme.fontSizes[1]} ${theme.fonts.primary}`
      )
    )
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
          <StyledInputWrapper
            warning={warning}
            error={error}
            disabled={disabled}
            tinted={tinted}
            hasLabel={label}
            hasIcLeft={icLeft}
            hasIcRight={icRight}
            variant={inputVariant}
            {...rest}>
            <Typography color='formsPlaceholder' variant='labelSmall'>
              {prefix}
            </Typography>
            <StyledInput
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              ariaDisabled={readOnly || disabled}
              id={id}
              name={name}
              onChange={onChange}
              placeholder={readOnly ? '' : placeholder}
              placeholderColor={value === '' ? 'formsPlaceholder' : 'text'}
              readOnly={readOnly}
              ref={ref || inputRef}
              required={required}
              width={inputWidth}
              type={type}
              value={value}
            />
            <Typography color='formsPlaceholder' variant='labelSmall'>
              {suffix}
            </Typography>
          </StyledInputWrapper>
          {icLeft ? (
            <Icon
              size='small'
              left={2}
              name={icLeft}
              pointerEvents='none'
              position='absolute'
              tabIndex='-1'
            />
          ) : null}
          <Flex pointerEvents='auto' position='absolute' right={2}>
            {icStateIsNotIconToggle() && currentIcRight && (
              <Icon
                mr={5}
                size='small'
                name={currentIcRight}
                color={currentIcRightColor}
                rotate={currentIcRight === 'loading'}
              />
            )}
          </Flex>
        </Flex>
        <SubLabel
          content={error || warning || subLabel}
          variant={inputVariant}
          preserveSpace={!noBottomSpace}
        />
      </Flex>
    )
  }
)

const StyledInputWrapper = styled(Flex)(
  css({
    ...typography.labelSmall,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  }),
  variant({ variants }),
  ({ tinted, error, warn, disabled }) => ({
    backgroundColor: tinted && !(error || warn || disabled) && 'white',
    borderColor: tinted && !(error || warn || disabled) && 'white'
  })
)

const StyledInput = styled.input(
  css({
    ...typography.labelSmall,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    padding: 0
  }),
  ({ placeholderColor }) =>
    css({
      '::placeholder': {
        color: placeholderColor
      }
    }),
  ({ width }) =>
    css({
      width
    })
)

const { icLeft, passwordView, ...rest } = Input.propTypes
SubdomainInput.propTypes = {
  ...rest,
  prefix: PropTypes.string,
  suffix: PropTypes.string
}

SubdomainInput.defaultProps = {
  ...Input.defaultProps,
  variant: 'default',
  prefix: 'https://',
  suffix: '',
  placeholder: 'subdomain'
}

SubdomainInput.displayName = 'SubdomainInput'
/** @component */
