import React, {
  forwardRef,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
  useEffect
} from 'react'
import { Typography, typography } from '../Typography'
import { Space } from '../Space'
import { Icon } from '../Icon'
import { Flex } from '../Flex'
import { Label } from '../Label'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Input } from '../Input'
import { default as variants } from '../Input/Input.variants'
import { SubLabel } from '../Input/SubLabel'
import { prefixLengthOrderedStates, orderedStates } from './world-states'
import { themed } from '../utils'
import styles from './PhoneNumberInput.styles'
import sizes from '../assets/sizes'
import 'flag-icon-css/css/flag-icon.css'
import { RADII, SHADOWS } from '../assets/core'
import { trimStartingZero } from './trimStartingZero'
import { displayCountries } from './displayCountries'

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
    optionalText,
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
    tinted,
    searchPlaceholder,
    itemFilter,
    ...rest
  } = props
  const inputRef = useRef()
  const searchRef = useRef()
  const wrapperRef = useRef()
  const [search, setSearch] = useState('')
  const [areFlagsLoaded, setFlagsLoaded] = useState(false)

  const [country, setCountry] = useState(orderedStates[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [cursorPosition, setCursorPosition] = useState(0)
  const [
    cursorPositionChangedToggler,
    setCursorPositionChangedToggler
  ] = useState(false)

  useEffect(() => {
    const flagsTimeout = setTimeout(() => {
      dropdownOpen && setFlagsLoaded(true)
    }, 400)
    return () => clearTimeout(flagsTimeout)
  }, [dropdownOpen])

  useLayoutEffect(() => {
    const onClickOutside = event => {
      if (
        (wrapperRef.current && wrapperRef.current.contains(event.target)) ||
        (searchRef.current && searchRef.current.contains(event.target))
      ) {
        return
      }
      setDropdownOpen(false)
    }

    window.addEventListener('click', onClickOutside)
    return () => window.removeEventListener('click', onClickOutside)
  }, [])

  useLayoutEffect(() => {
    if (ref) {
      ref.current.selectionStart = ref.current.selectionEnd = cursorPosition
    } else {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = cursorPosition
    }
  }, [value, ref, inputRef, cursorPosition, cursorPositionChangedToggler])

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
    else if (valid) return 'check'

    return null
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
    const normalizedValue = value.replace(/[\s]+/g, '')
    const found = prefixLengthOrderedStates.find(
      ({ prefix }) => normalizedValue.indexOf(prefix) === 0
    )
    if (found) {
      const activeCountry = orderedStates.find(
        ({ code }) => code === found.code
      )
      setCountry(activeCountry)
      return normalizedValue.substr(found.prefix.length)
    }

    return value
  }, [value])

  useLayoutEffect(() => {
    if (dropdownOpen) {
      const el = document.getElementsByClassName(
        'dropdown-country-prefix-item-selected'
      )
      if (el && el.length > 0) {
        el[0].scrollIntoView({ behavior: 'auto', block: 'center' })
      }
    }
  }, [dropdownOpen])

  const icStateIsNotIconToggle = () => type !== 'password' || error || loading

  const handleToggleOpenDropdown = () => {
    setDropdownOpen(dropdownOpen => !dropdownOpen)
  }
  const setSearchText = event => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (dropdownOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [dropdownOpen])

  const handleSelectCountry = country => () => {
    setDropdownOpen(false)
    setCountry(country)
    onCountryNumberChange(country)
  }

  const onCursorPositionChanged = () => {
    setCursorPositionChangedToggler(!cursorPositionChangedToggler)
  }

  const onCountryNumberChange = country => {
    const value = `${country.prefix}${trimStartingZero(displayValue)}`
    const event = { target: { value } }
    onChange(event)
  }

  const onNumberChange = event => {
    if (event.target.value.startsWith('0')) {
      setCursorPosition(0)
    } else {
      setCursorPosition(event.target.selectionStart)
    }

    onCursorPositionChanged()

    event.target.value = `${country.prefix}${trimStartingZero(
      event.target.value
    )}`

    onChange(event)
  }

  const searchId = useMemo(
    () => `search-${Math.floor(1000000 * Math.random())}`,
    []
  )

  return (
    <StyledFlex flexDirection='column' hasLabel={label} width={1} {...rest}>
      {!!label && (
        <Label
          label={label}
          inputId={id}
          showOptionalText={!required}
          optionalText={optionalText}
        />
      )}
      <Flex alignItems='center' position='relative' width='100%'>
        <StyledPhoneNumberWrapper
          tinted={tinted}
          error={error}
          disabled={disabled}
          variant={inputVariant}>
          <PrefixDropdownTrigger
            ref={wrapperRef}
            onClick={handleToggleOpenDropdown}>
            <Space mr={3}>
              <span
                className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
              />
            </Space>
            <Typography variant='labelSmall'>({country.prefix})</Typography>
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
            disabled={disabled}
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
              spin={currentIcRight === 'loading'}
            />
          )}
        </Flex>
        {dropdownOpen && (
          <StyledDropdownWrapper dropUp={dropUp}>
            <SearchInput
              ref={searchRef}
              placeholder={searchPlaceholder}
              id={searchId}
              value={search}
              type='search'
              role='searchbox'
              autoComplete='off'
              onChange={setSearchText}
            />
            <StyledDropdown dropdownSize={dropdownSize}>
              {displayCountries({
                orderedStates,
                handleSelectCountry,
                country,
                itemFilter,
                search,
                areFlagsLoaded
              })}
            </StyledDropdown>
          </StyledDropdownWrapper>
        )}
      </Flex>
      <SubLabel
        content={error || warning || subLabel}
        variant={inputVariant}
        preserveSpace={!noBottomSpace}
      />
    </StyledFlex>
  )
})

const SearchInput = styled.input(
  css({
    ...typography.base14Light,
    appearance: 'none',
    padding: 3,
    display: 'block',
    width: '100%',
    background: 'white',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid',
    borderBottomColor: 'inputBorderGray',
    borderBottomStyle: 'solid',
    borderRadius: 0
  })
)

const StyledPhoneNumberWrapper = styled.div(
  css(styles.phoneNumberWrapper),
  variant({ variants }),
  ({ tinted, error, disabled }) => ({
    backgroundColor: tinted && !(error || disabled) && 'white',
    borderColor: tinted && !(error || disabled) && 'white'
  })
)
const PrefixDropdownTrigger = styled.div(css(styles.dropdownTrigger))
const StyledPhoneNumberInput = styled.input(
  css(styles.phoneNumberInput),
  variant({ variants }),
  `border: none;`
)

const calcDropdownHeight = (height, size) => `${parseInt(height, 10) * size}px`

const StyledDropdown = styled(Flex)(({ theme, dropdownSize }) =>
  css({
    overflowY: 'scroll',
    flexDirection: 'column',
    width: '100%',
    maxHeight: `${calcDropdownHeight(
      sizes.dropdownItemHeightMobile,
      dropdownSize
    )}`
  })
)

const StyledDropdownWrapper = styled(Flex)(css(styles.dropdown), ({ dropUp }) =>
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
      })
)

const StyledFlex = styled(Flex)`
  &:focus-within {
    label {
      color: ${themed('colors.textInputFocused')};
    }
  }
`

const { icLeft, icRight, passwordView, ...rest } = Input.propTypes
PhoneNumberInput.propTypes = {
  ...rest,
  dropdownSize: PropTypes.number,
  dropUp: PropTypes.bool,
  international: PropTypes.bool,
  pattern: PropTypes.string,
  itemFilter: PropTypes.func,
  searchPlaceholder: PropTypes.string
}

PhoneNumberInput.defaultProps = {
  ...Input.defaultProps,
  type: 'tel',
  dropdownSize: 5,
  dropUp: false,
  searchPlaceholder: 'Search country',
  itemFilter: (search, v) =>
    typeof v === 'string'
      ? v.toLocaleLowerCase().includes(search)
      : typeof v === 'object'
      ? Object.keys(v).some(
          key =>
            v[key] &&
            typeof v[key] === 'string' &&
            v[key].toLocaleLowerCase().includes(search)
        )
      : false
}
PhoneNumberInput.displayName = 'PhoneNumberInput'

export default PhoneNumberInput
