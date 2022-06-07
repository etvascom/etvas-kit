import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { variant } from 'styled-system'

import { themeGet as themed } from '@styled-system/theme-get'
import { Icon } from '../Icon'
import { Flex } from '../Flex'
import { Typography, typography } from '../Typography'

import { PasswordToggler } from './PasswordToggler'
import { default as variants } from './Input.variants'
import { SubLabel } from './SubLabel'
import { Box } from '../Box'

export const Input = forwardRef(
  (
    {
      autoComplete,
      autoFocus,
      disabled,
      error,
      warning,
      icLeft,
      icRight,
      id,
      label,
      notRequiredText,
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
      showValidationCheck,
      onInputClick,
      extension,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef()
    const [inputType, setInputType] = useState(type)

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
      else if (valid || !icRight) return 'check'

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

    const resetInputType = useCallback(() => setInputType(type), [type])

    const togglePassword = useCallback(
      ev => {
        const elRef = ref || inputRef
        if (document.activeElement !== elRef.current) elRef.current.focus()
        if (inputType.includes('password')) {
          setInputType('text')
        } else {
          resetInputType()
        }
        if (ev) {
          ev.preventDefault()
        }
      },
      [inputType, ref, inputRef, resetInputType]
    )

    const icStateIsNotIconToggle = () => type !== 'password' || error || loading

    return (
      <StyledFlex flexDirection='column' width={1} {...rest}>
        {label ? (
          <Box>
            <Typography
              as='label'
              htmlFor={id}
              variant='base12Bold'
              color='baseMetal'
              width='fit-content'>
              {label}
            </Typography>
            {!required && notRequiredText && (
              <Typography
                ml={1}
                as='label'
                htmlFor={id}
                variant='base12Bold'
                color='formsLabel'
                width='fit-content'>
                - {notRequiredText}
              </Typography>
            )}
          </Box>
        ) : null}
        <Flex alignItems='center' position='relative' width='100%'>
          <StyledInput
            tinted={tinted}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            ariaDisabled={readOnly || disabled}
            disabled={disabled}
            error={error}
            hasLabel={label}
            hasIcLeft={icLeft}
            hasIcRight={icRight}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={readOnly ? '' : placeholder}
            readOnly={readOnly}
            ref={ref || inputRef}
            required={required}
            type={inputType}
            value={value}
            variant={inputVariant}
            onClick={onInputClick}
            {...rest}
          />
          {extension}
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
            {icStateIsNotIconToggle() && currentIcRight ? (
              currentIcRight === 'check' && !showValidationCheck ? null : (
                <Icon
                  mr={5}
                  size='small'
                  name={currentIcRight}
                  color={currentIcRightColor}
                  spin={currentIcRight === 'loading'}
                />
              )
            ) : (
              <PasswordToggler
                error={!!error}
                inputType={inputType}
                onDrag={resetInputType}
                tabIndex='-1'
                onToggle={togglePassword}
                viewOption={passwordView}
              />
            )}
          </Flex>
        </Flex>
        <SubLabel
          content={error || warning || subLabel}
          variant={inputVariant}
          preserveSpace={!noBottomSpace}
        />
      </StyledFlex>
    )
  }
)

const StyledFlex = styled(Flex)`
  &:focus-within {
    label {
      color: ${themed('colors.textInputFocused')};
    }
  }
`

const StyledInput = styled.input(
  css({
    ...typography.labelSmall
  }),
  variant({ variants }),
  ({ tinted, error, warn, disabled }) => ({
    backgroundColor: tinted && !(error || warn || disabled) && 'white',
    borderColor: tinted && !(error || warn || disabled) && 'white'
  })
)

Input.propTypes = {
  ...propTypes.inputStyle,
  tinted: PropTypes.bool,
  loading: PropTypes.bool,
  subLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  warning: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  icLeft: PropTypes.string,
  icRight: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.node,
  notRequiredText: PropTypes.node,
  name: PropTypes.string,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func,
  passwordView: PropTypes.oneOf(['peek', 'toggle']),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  onInputClick: PropTypes.func,
  extension: PropTypes.node
}

Input.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  passwordView: 'peek',
  readOnly: false,
  type: 'text',
  value: '',
  tinted: false,
  variant: 'default',
  showValidationCheck: false,
  notRequiredText: 'Optional'
}

Input.displayName = 'Input'
/** @component */
