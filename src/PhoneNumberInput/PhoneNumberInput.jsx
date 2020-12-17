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
import euStates from './european-union-states'
import worldStates from './world-states'
import { md } from '../utils'
import styles from './PhoneNumberInput.styles'
import sizes from '../assets/sizes'
import 'flag-icon-css/css/flag-icon.css'

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

  const [displayValue, setDisplayValue] = useState(value)

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

  const icStateIsNotIconToggle = () => type !== 'password' || error || loading

  const [country, setCountry] = useState(euStates[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggleOpenDropdown = () => setDropdownOpen(dropdownOpen => !dropdownOpen)
  const handleSelectCountry = (country) => () => {
    setDropdownOpen(false)
    setCountry(country)
  }
  useEffect(() => {
    const country = worldStates.find(state => value.startsWith(state.prefix))
    if (country) {
      setCountry(country)
      setDisplayValue(value.slice(country.prefix.length))
    } else {
      setDisplayValue(value)
    }
  }, [value])
  return (
    <Flex flexDirection='column' hasLabel={label} width={1} {...rest}>
      {label ? (
        <Typography
          as='label'
          htmlFor={id}
          variant='inputLabel'
          width='fit-content'
        >
          {label} {required ? '*' : ''}
        </Typography>
      ) : null}
      <Flex alignItems='center' position='relative' width='100%'>
        <StyledPhoneNumberDiv>
          <Flex onClick={handleToggleOpenDropdown}>
            <Space mr={2}>
              <span className={`flag-icon flag-icon-${country.code.toLowerCase()}`}/>
            </Space>
            <Typography
              variant='labelSmall'
              mr={1}
            >
              ({country.prefix})
            </Typography>
          </Flex>
          <StyledPhoneNumberInput
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            ariaDisabled={readOnly || disabled}
            error={error}
            hasLabel={label}
            id={id}
            name={name}
            onChange={onChange}
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
        </StyledPhoneNumberDiv>
        <Flex
          pointerEvents='auto'
          position='absolute'
          right={2}
        >
          {icStateIsNotIconToggle() && currentIcRight && (
            <Icon
              mr={5}
              size='small'
              name={currentIcRight}
              color={currentIcRightColor}
              rotate={currentIcRight === 'loading'}
            />
          )
          }
        </Flex>
        {dropdownOpen && <StyledDropdown dropdownSize={dropdownSize} dropUp={dropUp}>
          {displayItems(euStates, 'eu-states', handleSelectCountry)}
          <StyledSeparator/>
          {displayItems(worldStates, 'world-states', handleSelectCountry)}
        </StyledDropdown>
        }
      </Flex>
      <SubLabel
        content={error || warning || subLabel}
        variant={inputVariant}
        preserveSpace={!noBottomSpace}
      />
    </Flex>
  )
})
const displayItems = (states, label, onClick) =>
  states.map((state) =>
    <StyledDropdownItem
      key={`${label}-${state.code}`}
      onClick={onClick(state)}
    >
      <Space mr={2}>
        <span className={`flag-icon flag-icon-${state.code.toLowerCase()}`}/>
      </Space>
      <PrefixTitle>
        {state.prefix} {state.name}
      </PrefixTitle>
    </StyledDropdownItem>
  )

const StyledPhoneNumberDiv = styled.div(
  css(
    styles.phoneNumberDiv
  ),
  variant({ variants })
)
const StyledPhoneNumberInput = styled.input(
  css(
    styles.phoneNumberInput
  )
)

const calcDropdownHeight = (height, size) => `${parseInt(height, 10) * size}px`

const StyledDropdown = styled(Flex)(
  css(
    styles.dropdown
  ),
  ({ dropUp }) => dropUp ?
    css({
      top: 'auto',
      bottom: 10,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      boxShadow: '0px -1px -3px rgba(8, 8, 8, 0.08), 0px -1px -2px rgba(8, 8, 8, 0.16)'
    }) :
    css({
      bottom: 'auto',
      top: 10,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
      boxShadow: '0px 1px 3px rgba(8, 8, 8, 0.08), 0px 1px 2px rgba(8, 8, 8, 0.16)'
    })
  ,
  ({ theme, dropdownSize }) =>
    css({
      height: `${calcDropdownHeight(sizes.dropdownItemHeightMobile, dropdownSize)}`,
      ...md(theme)({
        height: `${calcDropdownHeight(sizes.dropdownItemHeight, dropdownSize)}`
      })
    })
)
const StyledDropdownItem = styled(Flex)(
  css(
    styles.dropdownItem
  ),
  ({ theme }) => css({
    ...md(theme)({
      minHeight: sizes.dropdownItemHeight
    })
  })
)
const PrefixTitle = styled.div(
  css(
    styles.prefixTitle
  )
)
const StyledSeparator = styled.div(
  css(
    styles.separator
  )
)
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

