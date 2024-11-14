import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { InputProps } from '../Input'
import { default as variants } from '../Input/Input.variants'
import { SubLabel } from '../Input/SubLabel'
import { Label } from '../Label'
import { Typography, typography } from '../Typography'

export interface PrefixSuffixInputProps extends InputProps {
  prefix?: string
  suffix?: string
  icRight?: string
  suffixSpace?: number
  prefixSpace?: number
}

export const PrefixSuffixInput = forwardRef<HTMLDivElement, PrefixSuffixInputProps>(
  (
    {
      prefix = 'https://',
      suffix = '',
      suffixSpace,
      prefixSpace,
      autoComplete,
      autoFocus = false,
      disabled,
      error,
      warning,
      icRight,
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
      showTooltip,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLDivElement>(null)

    const combinedRef = ref || inputRef
    const [isFocused, setFocused] = useState(false)
    const valueRef = useRef(value)

    const inputVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    const focusInput = () =>
      typeof combinedRef !== 'function' && combinedRef.current?.focus()

    const onInputFocus = () => {
      setFocused(true)
      const element =
        typeof combinedRef !== 'function' ? combinedRef.current : undefined
      replaceCaret(element)
    }

    const onInputBlur = () => {
      setFocused(false)
    }

    const wrapperStyle = useMemo(() => {
      const ws = {
        borderColor: 'inputBorderGray',
        backgroundColor: 'white',
        color: 'textInputActive'
      }
      if (disabled) {
        ws.backgroundColor = 'backgroundGray'
      } else {
        if (error) {
          ws.borderColor = 'error'
        }
        if (warning) {
          ws.borderColor = 'warning'
        }
      }
      if (tinted && !disabled && !error && !warning) {
        ws.borderColor = 'transparent'
      }

      if (isFocused && !disabled && !error && !warning) {
        ws.borderColor = 'brandLight'
      }
      return ws
    }, [disabled, error, tinted, warning, isFocused])

    const hasValue = useMemo(() => !!value, [value])

    useEffect(() => {
      const element =
        typeof combinedRef !== 'function' ? combinedRef.current : null
      if (!element) {
        return
      }
      if (element.innerText !== value) {
        valueRef.current = value
        element?.innerText && (element.innerText = value.toString())
        replaceCaret(element)
      }
    }, [value, ref])

    const handleInput = (event: any) => {
      const { innerText } = event.target
      const element =
        typeof combinedRef !== 'function' ? combinedRef.current : null
      element?.innerText && (element.innerText = innerText.replaceAll('\n', ''))
      replaceCaret(element)

      const evt = Object.assign({}, event, {
        target: {
          value: event.target.innerText
        }
      })
      onChange && onChange(evt)
    }

    const currentIcRight = useMemo(() => {
      if (loading) return 'loading'
      else if (error || warning) return 'alertCircle'
      else if (valid) return 'check'

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

    return (
      <Flex flexDirection='column' width={1} {...rest}>
        {!!label && (
          <Label
            label={label}
            inputId={id}
            showOptionalText={!required}
            optionalText={optionalText}
            showTooltip={showTooltip}
          />
        )}
        <Wrapper
          variant={variant}
          alignItems='center'
          width={1}
          onClick={focusInput}
          isValid={inputVariant === 'valid' || inputVariant === 'default'}
          {...wrapperStyle}
        >
          <Typography
            mr={!value ? prefixSpace : 0}
            color='textInputPlaceholder'
            variant='labelSmall'
          >
            {prefix}
          </Typography>
          <StyledInput
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            aria-disabled={readOnly || disabled}
            disabled={disabled}
            suffixSpace={value ? suffixSpace : 0}
            prefixSpace={value ? prefixSpace : 0}
            id={id}
            name={name}
            tabIndex={0}
            onInput={handleInput}
            ref={combinedRef}
            required={required}
            contentEditable={!disabled && 'plaintext-only'}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            suppressContentEditableWarning={true}
          >
            {valueRef.current}
          </StyledInput>
          <Suffix
            mr={!value ? suffixSpace : 0}
            color='textInputPlaceholder'
            variant='labelSmall'
          >
            {!hasValue && placeholder}
          </Suffix>
          <Suffix color='textInputPlaceholder' variant='labelSmall'>
            {suffix}
          </Suffix>
          <StatusIcon
            position='absolute'
            alignItems='center'
            justifyContent='center'
          >
            {currentIcRight ? (
              <Icon
                mr={5}
                size='small'
                name={currentIcRight}
                color={currentIcRightColor}
                spin={currentIcRight === 'loading'}
              />
            ) : null}
          </StatusIcon>
        </Wrapper>
        <SubLabel
          content={error || warning || subLabel}
          variant={inputVariant}
          preserveSpace={!noBottomSpace}
        />
      </Flex>
    )
  }
)

const Suffix = styled(Typography)`
  white-space: nowrap;
`

interface WrapperProps extends Pick<PrefixSuffixInputProps, 'variant'> {
  borderColor?: string
  backgroundColor?: string
  color?: string
  isValid: boolean
}

const Wrapper = styled(Flex)<WrapperProps>(
  css({
    position: 'relative',
    cursor: 'text',
    backgroundColor: 'white'
  }) as any,
  variant({ variants }),
  ({ borderColor, backgroundColor, color, isValid }: WrapperProps) =>
    css({
      borderColor,
      backgroundColor,
      color,
      ...(!isValid && {
        '&:hover': {
          borderColor,
          backgroundColor,
          color
        }
      })
    }) as any
)

const StyledInput = styled.div<any>(
  ({ disabled, suffixSpace, prefixSpace }: any) =>
    css({
      ...typography.labelSmall,
      color: disabled ? 'textInputPlaceholder' : 'textInputActive',
      marginRight: suffixSpace,
      marginLeft: prefixSpace,
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      padding: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minWidth: '1px',
      appearance: 'none'
    } as SystemStyleObject) as any
)

const StatusIcon = styled(Flex)(
  css({
    right: 0,
    top: 0,
    bottom: 0,
    width: '36px'
  }) as any
)

PrefixSuffixInput.displayName = 'PrefixSuffixInput'

const replaceCaret = (element?: HTMLDivElement | null) => {
  if (!element) {
    return
  }
  const target = document.createTextNode('')
  element.appendChild(target)
  const isTargetFocused = document.activeElement === element
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const sel = window.getSelection()
    if (sel !== null) {
      const range = document.createRange()
      range.setStart(target, target.nodeValue.length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
    if (element instanceof HTMLElement) element.focus()
  }
}
