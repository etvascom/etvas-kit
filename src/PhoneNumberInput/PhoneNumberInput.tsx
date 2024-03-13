import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import 'flag-icon-css/css/flag-icon.css'
import styled from 'styled-components'
import { compose, space, variant } from 'styled-system'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { InputProps } from '../Input'
import { default as variants } from '../Input/Input.variants'
import { SubLabel } from '../Input/SubLabel'
import { Label } from '../Label'
import { Space } from '../Space'
import { Typography, typography } from '../Typography'
import { RADII, SHADOWS } from '../assets/core'
import sizes from '../assets/sizes'
import { themed } from '../utils'
import styles from './PhoneNumberInput.styles'
import { displayCountries } from './displayCountries'
import { trimStartingZero } from './trimStartingZero'
import { State, orderedStates, prefixLengthOrderedStates } from './world-states'

interface Props extends InputProps {
  dropdownSize?: number
  dropUp?: boolean
  international?: boolean
  pattern?: string
  itemFilter?: (search: string, name: string) => boolean
  searchPlaceholder?: string
}

const PhoneNumberInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    dropdownSize = 5,
    dropUp = false,
    international,
    pattern,
    autoComplete,
    autoFocus = false,
    disabled,
    error,
    warning,
    id,
    label,
    optionalText,
    name,
    noBottomSpace = false,
    onChange,
    placeholder,
    readOnly = false,
    required,
    type = 'tel',
    valid,
    value = '',
    variant = 'default',
    subLabel,
    loading,
    tinted = false,
    showValidationCheck = false,
    searchPlaceholder = 'Search country',
    itemFilter = defaultItemFilter,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState('')
  const [areFlagsLoaded, setFlagsLoaded] = useState(false)

  const [country, setCountry] = useState<State>(orderedStates[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [cursorPosition, setCursorPosition] = useState(0)
  const [cursorPositionChangedToggler, setCursorPositionChangedToggler] =
    useState(false)

  useEffect(() => {
    const flagsTimeout = setTimeout(() => {
      dropdownOpen && setFlagsLoaded(true)
    }, 400)
    return () => clearTimeout(flagsTimeout)
  }, [dropdownOpen])

  useLayoutEffect(() => {
    const onClickOutside = (event: any) => {
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
      typeof ref !== 'function' &&
        (ref.current!.selectionStart = ref.current!.selectionEnd =
          cursorPosition)
    } else {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        cursorPosition
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

  const displayValue = useMemo(() => {
    const normalizedValue = value ? value.toString().replace(/[\s]+/g, '') : ''
    const found = prefixLengthOrderedStates.find(
      ({ prefix }) => normalizedValue.indexOf(prefix) === 0
    )
    if (found) {
      const activeCountry = orderedStates.find(
        ({ code }) => code === found.code
      )
      activeCountry && setCountry(activeCountry)
      return normalizedValue.slice(found.prefix.length)
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
  const setSearchText = (event: any) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (dropdownOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [dropdownOpen])

  const handleSelectCountry = (country: State) => () => {
    setDropdownOpen(false)
    setCountry(country)
    onCountryNumberChange(country)
  }

  const onCursorPositionChanged = () => {
    setCursorPositionChangedToggler(!cursorPositionChangedToggler)
  }

  const onCountryNumberChange = (country: State) => {
    const value = `${country.prefix}${trimStartingZero(displayValue?.toString() || '')}`
    const event = { target: { value } }
    onChange && onChange(event as any)
  }

  const onNumberChange = (event: any) => {
    if (event.target.value.startsWith('0')) {
      setCursorPosition(0)
    } else {
      setCursorPosition(event.target.selectionStart)
    }

    onCursorPositionChanged()

    event.target.value = `${country.prefix}${trimStartingZero(
      event.target.value
    )}`

    onChange && onChange(event as any)
  }

  const searchId = useMemo(
    () => `search-${Math.floor(1000000 * Math.random())}`,
    []
  )

  const shouldShowIconRight =
    icStateIsNotIconToggle() &&
    currentIcRight &&
    (currentIcRight !== 'check' || showValidationCheck)

  const inputPaddingRight = shouldShowIconRight ? 12 : 2

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
            pr={inputPaddingRight}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            aria-disabled={readOnly || disabled}
            error={error}
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
          {shouldShowIconRight && (
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
  }) as any
)

type StyledPhoneNumberWrapperProps = Pick<
  Props,
  'tinted' | 'error' | 'disabled' | 'variant'
>

const StyledPhoneNumberWrapper = styled.div<StyledPhoneNumberWrapperProps>(
  css(styles.phoneNumberWrapper as SystemStyleObject) as any,
  variant({ variants }),
  ({ tinted, error, disabled }: StyledPhoneNumberWrapperProps) => ({
    backgroundColor: tinted && !(error || disabled) ? 'white' : '',
    borderColor: tinted && !(error || disabled) ? 'white' : ''
  })
)
const PrefixDropdownTrigger = styled.div(css(styles.dropdownTrigger) as any)

const StyledPhoneNumberInput = styled.input<Props>(
  compose(space, variant({ variants })),
  css(styles.phoneNumberInput as SystemStyleObject) as any
)

const calcDropdownHeight = (height: string, size: number = 1) =>
  `${parseInt(height, 10) * size}px`

type StyledDropdownProps = Pick<Props, 'dropdownSize'>

const StyledDropdown = styled(Flex)<StyledDropdownProps>(
  ({ dropdownSize }: StyledDropdownProps) =>
    css({
      overflowY: 'scroll',
      flexDirection: 'column',
      width: '100%',
      maxHeight: `${calcDropdownHeight(
        sizes.dropdownItemHeightMobile,
        dropdownSize
      )}`
    }) as any
)

interface StyledDropdownWrapperProps {
  dropUp: boolean
}

const StyledDropdownWrapper = styled(Flex)<StyledDropdownWrapperProps>(
  css(styles.dropdown as SystemStyleObject) as any,
  ({ dropUp }: StyledDropdownWrapperProps) =>
    dropUp
      ? css({
          top: 'auto',
          bottom: 10,
          borderTopLeftRadius: RADII[8],
          borderTopRightRadius: RADII[8],
          boxShadow: SHADOWS.phoneNumberInputUp
        })
      : (css({
          bottom: 'auto',
          top: 10,
          borderBottomRightRadius: RADII[8],
          borderBottomLeftRadius: RADII[8],
          boxShadow: SHADOWS.phoneNumberInputDown
        }) as any)
)

const StyledFlex = styled(Flex)`
  &:focus-within {
    label {
      color: ${themed('colors.textInputFocused')};
    }
  }
`

const defaultItemFilter = (search: string, v: any) =>
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

export default PhoneNumberInput
