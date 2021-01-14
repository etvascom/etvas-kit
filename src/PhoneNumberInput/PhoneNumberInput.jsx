import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { Typography } from '../Typography'
import { Flex, Space } from '@ivoryio/kogaio'
import { Icon } from '../Icon'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Input } from '../Input'
import { default as variants } from '../Input/Input.variants'
import { SubLabel } from '../Input/SubLabel'
import { prefixLengthOrderedStates, statesEu, statesWorld } from './world-states'
import { md } from '../utils'
import styles from './PhoneNumberInput.styles'
import sizes from '../assets/sizes'
import 'flag-icon-css/css/flag-icon.css'
import { RADII, SHADOWS } from '../assets/core'

const PhoneNumberInput = forwardRef((props, ref) => {
  const {
    dropdownSize,
    dropUp,
    international,
    pattern,
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
    placeholder,
    readOnly,
    required,
    type,
    valid,
    value,
    variant,
    subLabel,
    loading,
    ...rest
  } = props
  const inputRef = useRef()
  const wrapperRef = useRef()

  const [country, setCountry] = useState(statesEu[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onClickOutside = event => {
      if (wrapperRef.current.contains(event.target)) {
        return
      }
      setDropdownOpen(false)
    }

    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

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
  }, [loading, error, warning, valid])

  const currentIcRightColor = useMemo(() => {
    if (loading) return 'brand'
    else if (disabled) return 'inputBorderGray'
    else if (error) return 'error'
    else if (warning) return 'warning'
    else if (valid) return 'success'

    return 'inputIcon'
  }, [loading, error, warning, valid, disabled])

  const displayValue = useMemo(() => {
    const normalizedValue = value.replace(/[\s]+/g)
    const found = prefixLengthOrderedStates.find(
      ({ prefix }) => normalizedValue.indexOf(prefix) === 0
    )
    if (found) {
      const activeCountry = statesWorld.find(({ code }) => code === found.code)
      setCountry(activeCountry)
      return normalizedValue.substr(found.prefix.length)
    }
    return value
  }, [value])

  const icStateIsNotIconToggle = () => type !== 'password' || error || loading

  const handleToggleOpenDropdown = () =>
    setDropdownOpen(dropdownOpen => !dropdownOpen)
  const handleSelectCountry = country => () => {
    setDropdownOpen(false)
    setCountry(country)
    onCountryNumberChange(country)
  }

  const onCountryNumberChange = country => {
    const value = `${country.prefix}${displayValue}`
    const event = { target: { value } }
    onChange(event)
  }
  const onNumberChange = event => {
    event.target.value = `${country.prefix}${event.target.value}`
    onChange(event)
  }
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
        <StyledPhoneNumberWrapper variant={inputVariant}>
          <PrefixDropdownTrigger
            ref={wrapperRef}
            onClick={handleToggleOpenDropdown}>
            <Space mr={2}>
              <span
                className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
              />
              <Typography variant='labelSmall'>({country.prefix})</Typography>
            </Space>
          </PrefixDropdownTrigger>
          <StyledPhoneNumberInput
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            ariaDisabled={readOnly || disabled}
            error={error}
            hasLabel={label}
            id={id}
            name={name}
            onChange={onNumberChange}
            placeholder={readOnly ? '' : placeholder}
            readOnly={readOnly}
            ref={ref || inputRef}
            required={required}
            type={type}
            value={displayValue}
            variant={inputVariant}
            pattern={pattern}
            {...rest}
          />
        </StyledPhoneNumberWrapper>
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
        {dropdownOpen && (
          <StyledDropdown dropdownSize={dropdownSize} dropUp={dropUp}>
            {displayItems(statesEu, 'eu-states', handleSelectCountry, country)}
            <Flex alignItems={'center'} width={'100%'} minHeight={'1em'}>
              <StyledLine/>
            </Flex>
            {displayItems(statesWorld, 'world-states', handleSelectCountry, country)}
          </StyledDropdown>
        )}
      </Flex>
      <SubLabel
        content={error || warning || subLabel}
        variant={inputVariant}
        preserveSpace={!noBottomSpace}
      />
    </Flex>
  )
})
const displayItems = (states, label, onClick, country) =>
  states.map(state => (
    <StyledDropdownItem
      key={`${label}-${state.code}`}
      isSelected={state.code === country.code}
      onClick={onClick(state)}
    >
      <Space mr={2}>
        <span className={`flag-icon flag-icon-${state.code.toLowerCase()}`}/>
      </Space>
      <PrefixTitle>
        {state.prefix} {state.name}
      </PrefixTitle>
    </StyledDropdownItem>
  ))

const StyledPhoneNumberWrapper = styled.div(
  css(styles.phoneNumberWrapper),
  variant({ variants })
)
const PrefixDropdownTrigger = styled.div(css(styles.dropdownTrigger))
const StyledPhoneNumberInput = styled.input(
  css(styles.phoneNumberInput),
  variant({ variants })
)

const calcDropdownHeight = (height, size) => `${parseInt(height, 10) * size}px`

const StyledDropdown = styled(Flex)(
  css(styles.dropdown),
  ({ dropUp }) =>
    dropUp
      ? css({
        top: 'auto',
        bottom: 10,
        borderTopLeftRadius: RADII[8],
        borderTopRightRadius: RADII[8],
        boxShadow: SHADOWS.phoneNumberInputUp
      })
      : css({
        bottom: 'auto',
        top: 10,
        borderBottomRightRadius: RADII[8],
        borderBottomLeftRadius: RADII[8],
        boxShadow: SHADOWS.phoneNumberInputDown
      }),
  ({ theme, dropdownSize }) =>
    css({
      height: `${calcDropdownHeight(
        sizes.dropdownItemHeightMobile,
        dropdownSize
      )}`,
      ...md(theme)({
        height: `${calcDropdownHeight(sizes.dropdownItemHeight, dropdownSize)}`
      })
    })
)
const StyledDropdownItem = styled(Flex)(css(styles.dropdownItem), ({ theme, isSelected }) =>
  css({
    backgroundColor: isSelected ? 'brand' : 'backgroundLightGray',
    ':hover': {
      backgroundColor: isSelected ? 'brand' : 'brandLighter'
    },
    color: isSelected ? 'white' : 'text',
    ...md(theme)({
      minHeight: sizes.dropdownItemHeight
    })
  })
)
const PrefixTitle = styled.div(css(styles.prefixTitle))
const StyledLine = styled.div(css(styles.line))

const { icLeft, icRight, passwordView, ...rest } = Input.propTypes
PhoneNumberInput.propTypes = {
  ...rest,
  dropdownSize: PropTypes.number,
  dropUp: PropTypes.bool,
  international: PropTypes.bool,
  pattern: PropTypes.string
}
PhoneNumberInput.defaultProps = {
  ...Input.defaultProps,
  type: 'tel',
  dropdownSize: 8,
  dropUp: false
}
PhoneNumberInput.displayName = 'PhoneNumberInput'

export default PhoneNumberInput
