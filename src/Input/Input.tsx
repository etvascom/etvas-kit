import React, {
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { compose, space, variant } from 'styled-system'

import { Flex, FlexProps } from '../Flex'
import { Icon } from '../Icon'
import { Label } from '../Label'
import { typography } from '../Typography'
import { Error, VariantProp, Warning } from '../utils/types'
import { default as variants } from './Input.variants'
import { PasswordToggler } from './PasswordToggler'
import { SubLabel } from './SubLabel'

type VariantKey = keyof typeof variants

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'color' | 'height' | 'size' | 'width'
    >,
    FlexProps {
  error?: Error
  warning?: Warning
  icLeft?: string
  icRight?: string
  onIcRightClick?: () => void
  label?: React.ReactNode
  optionalText?: React.ReactNode
  noBottomSpace?: boolean
  passwordView?: 'peek' | 'toggle'
  placeholderTextColor?: string
  valid?: boolean | string
  variant?: VariantProp<VariantKey>
  subLabel?: string
  loading?: boolean
  tinted?: boolean
  showValidationCheck?: boolean
  onInputClick?: () => void
  extension?: React.ReactNode
  showTooltip?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete,
      autoFocus = false,
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
      noBottomSpace = false,
      onChange,
      passwordView = 'peek',
      placeholder,
      readOnly = false,
      required,
      type = 'text',
      valid,
      value = '',
      variant = 'default',
      subLabel,
      loading,
      tinted = false,
      showValidationCheck = false,
      onInputClick,
      extension,
      showTooltip,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
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
      (event: any) => {
        const currentRef = ref || inputRef
        if (
          typeof currentRef !== 'function' &&
          document.activeElement !== currentRef.current
        ) {
          currentRef.current?.focus()
        }
        if (inputType.includes('password')) {
          setInputType('text')
        } else {
          resetInputType()
        }
        if (event) {
          event.preventDefault()
        }
      },
      [inputType, ref, inputRef, resetInputType]
    )

    const icStateIsNotIconToggle = () => type !== 'password' || error || loading

    const handleIcRightClick = () => {
      if (onIcRightClick) {
        return onIcRightClick()
      }

      if (inputType !== 'search') {
        return
      }

      if (value && onChange) {
        return onChange({ target: { value: '' } } as any)
      }

      const currentRef = ref || inputRef
      typeof currentRef !== 'function' && currentRef.current?.focus()
    }

    const shouldShowPasswordToggler =
      !icStateIsNotIconToggle() || !currentIcRight
    const shouldShowRightIcon =
      currentIcRight && (currentIcRight !== 'check' || showValidationCheck)

    const getInputPaddingRight= () => {
      if (shouldShowPasswordToggler) {
        return 6
      }
      if(type === 'search') {
        return 10
      }
      if (shouldShowRightIcon) {
        return 12
      }
      return 2
    }

    return (
      <StyledFlex flexDirection='column' width={1} minHeight={40} {...rest}>
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
          <StyledInput
            pr={getInputPaddingRight()}
            tinted={tinted}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            aria-disabled={readOnly || disabled}
            disabled={disabled}
            error={error}
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
              tabIndex={-1}
            />
          ) : null}
          <Flex pointerEvents='auto' position='absolute' right={2}>
            {shouldShowPasswordToggler ? (
              <PasswordToggler
                error={!!error}
                inputType={inputType}
                onDrag={resetInputType}
                tabIndex={-1}
                onToggle={togglePassword}
                viewOption={passwordView}
              />
            ) : shouldShowRightIcon ? (
              <Icon
                mr={5}
                size='small'
                name={currentIcRight}
                color={currentIcRightColor}
                spin={currentIcRight === 'loading'}
                onClick={handleIcRightClick}
              />
            ) : null}
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
      color: ${({ theme }) => theme.colors.textInputFocused};
    }
  }
`
const StyledInput = styled.input<InputProps>(
  css(typography.labelSmall as SystemStyleObject) as any,
  compose(space, variant({ variants })),
  ({ tinted, error, warning, disabled }: InputProps) => ({
    backgroundColor: tinted && !(error || warning || disabled) ? 'white' : '',
    borderColor: tinted && !(error || warning || disabled) ? 'white' : '',
    '&::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none'
    }
  })
)

Input.displayName = 'Input'
