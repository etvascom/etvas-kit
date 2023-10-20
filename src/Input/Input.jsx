import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import { themeGet as themed } from '@styled-system/theme-get'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Label } from '../Label'
import { typography } from '../Typography'
import { default as variants } from './Input.variants'
import { PasswordToggler } from './PasswordToggler'
import { SubLabel } from './SubLabel'

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
      onIcRightClick,
      id,
      label,
      optionalText,
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
      else if (inputType === 'search')
        return value ? 'close' : icRight || 'magnify'
      else if (valid || !icRight) return 'check'

      return icRight
    }, [loading, error, warning, valid, icRight, inputType, value])

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

    const handleIcRightClick = () => {
      if (onIcRightClick) {
        return onIcRightClick()
      }

      if (!inputType === 'search') {
        return
      }

      if (value) {
        return onChange({ target: { value: '' } })
      }

      const currentRef = ref || inputRef
      currentRef.current.focus()
    }

    return (
      <StyledFlex flexDirection='column' width={1} {...rest}>
        {!!label && (
          <Label
            label={label}
            inputId={id}
            showOptionalText={!required}
            optionalText={optionalText}
          />
        )}
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
                  onClick={handleIcRightClick}
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
    borderColor: tinted && !(error || warn || disabled) && 'white',
    '::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none'
    }
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
  optionalText: PropTypes.node,
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
  onIcRightClick: PropTypes.func,
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
  showValidationCheck: false
}

Input.displayName = 'Input'
/** @component */
