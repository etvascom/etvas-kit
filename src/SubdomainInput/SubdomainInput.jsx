import React, { useState, forwardRef, useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Typography, typography } from '../Typography'
import { Flex } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { SubLabel } from '../Input/SubLabel'
import { default as variants } from '../Input/Input.variants'

const replaceCaret = el => {
  const target = document.createTextNode('')
  el.appendChild(target)
  const isTargetFocused = document.activeElement === el
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const sel = window.getSelection()
    if (sel !== null) {
      const range = document.createRange()
      range.setStart(target, target.nodeValue.length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
    if (el instanceof HTMLElement) el.focus()
  }
}

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
    const [isFocused, setFocused] = useState(false)
    const valueRef = useRef(value)

    const inputVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    const focusInput = () => (ref || inputRef).current.focus()

    const onInputFocus = e => {
      setFocused(true)
      const el = (ref || inputRef).current
      replaceCaret(el)
    }

    const onInputBlur = e => {
      setFocused(false)
    }

    const wrapperStyle = useMemo(() => {
      const ws = {
        brd: 'inputBorderGray',
        bg: 'white',
        fg: 'textInputActive'
      }
      if (disabled) {
        ws.bg = 'backgroundGray'
      } else {
        if (error) {
          ws.brd = 'error'
        }
        if (warning) {
          ws.brd = 'warning'
        }
      }
      if (tinted && !disabled && !error && !warning) {
        ws.brd = 'transparent'
      }

      if (isFocused && !disabled && !error && !warning) {
        ws.brd = 'brandLight'
      }
      return ws
    }, [disabled, error, tinted, warning, isFocused])

    const hasValue = useMemo(() => !!value, [value])

    useEffect(() => {
      const el = (ref || inputRef).current
      if (!el) {
        return
      }
      if (el.innerText !== value) {
        valueRef.current = value
        el.innerText = value
        replaceCaret(el)
      }
    }, [value, ref])

    const handleInput = event => {
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
      return 'check'
    }, [loading, error, warning, valid])

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
        {label ? (
          <Typography
            as='label'
            htmlFor={id}
            variant='inputLabel'
            width='fit-content'>
            {label}
          </Typography>
        ) : null}
        <Wrapper
          alignItems='center'
          width={1}
          onClick={focusInput}
          variant={variant}
          isValid={inputVariant === 'valid' || inputVariant === 'default'}
          {...wrapperStyle}>
          <Typography color='textInputPlaceholder' variant='labelSmall'>
            {prefix}
          </Typography>
          <StyledInput
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            ariaDisabled={readOnly || disabled}
            id={id}
            name={name}
            tabIndex='0'
            onInput={handleInput}
            ref={ref || inputRef}
            required={required}
            contentEditable={!disabled && 'plaintext-only'}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            suppressContentEditableWarning={true}>
            {valueRef.current}
          </StyledInput>
          <Suffix color='textInputPlaceholder' variant='labelSmall'>
            {!hasValue && placeholder}
            {suffix}
          </Suffix>
          <StatusIcon
            position='absolute'
            alignItems='center'
            justifyContent='center'>
            {currentIcRight ? (
              <Icon
                mr={5}
                size='small'
                name={currentIcRight}
                color={currentIcRightColor}
                rotate={currentIcRight === 'loading'}
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

const Wrapper = styled(Flex)(
  css({
    position: 'relative',
    cursor: 'text',
    backgroundColor: 'white'
  }),
  variant({ variants }),
  ({ brd, bg, fg, isValid }) =>
    css({
      borderColor: brd,
      backgroundColor: bg,
      color: fg,
      ...(!isValid && {
        ':hover': {
          borderColor: brd,
          backgroundColor: bg,
          color: fg
        }
      })
    })
)

const StyledInput = styled.div(
  css({
    ...typography.labelSmall,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    padding: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    minWidth: '1px',
    appearance: 'none'
  })
)

const StatusIcon = styled(Flex)(
  css({
    right: 0,
    top: 0,
    bottom: 0,
    width: '36px'
  })
)

SubdomainInput.propTypes = {
  ...Input.propTypes,
  prefix: PropTypes.string,
  suffix: PropTypes.string
}

SubdomainInput.defaultProps = {
  ...Input.defaultProps,
  variant: 'default',
  prefix: 'https://',
  suffix: ''
}

SubdomainInput.displayName = 'SubdomainInput'
