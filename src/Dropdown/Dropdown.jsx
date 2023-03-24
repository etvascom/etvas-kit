import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
  useMemo
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex } from '../Flex'
import { Label } from '../Label'
import { typography } from '../Typography'
import { Icon } from '../Icon'
import Option from './Option'
import Heading from './Heading'
import sizes from '../assets/sizes'
import { SubLabel } from '../Input/SubLabel'
import { isEqual } from '../utils/isEqual'

const Dropdown = ({
  disabled,
  multiple,
  error,
  label,
  optionalText,
  value,
  id,
  required,
  noBottomSpace,
  searchThreshold,
  searchMaxResults,
  placeholder,
  valueRender,
  itemSelected,
  itemFilter,
  searchPlaceholder,
  onChange,
  tinted,
  children,
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const [isSwipe, setSwipe] = useState(false)
  const [search, setSearch] = useState('')
  const [currentKeyboardFocus, setCurrentKeyboardFocus] = useState(-1)

  const wrapper = useRef()
  const searchField = useRef()

  useLayoutEffect(() => {
    const clickOutside = event => {
      if (!wrapper.current.contains(event.target)) {
        setCollapsed(true)
      }
    }
    window.addEventListener('click', clickOutside, { passive: true })
    return () => {
      window.removeEventListener('click', clickOutside, { passive: true })
    }
  }, [])

  const isEmpty = useMemo(
    () =>
      multiple ? value.length === 0 : typeof value !== 'boolean' && !value,
    [value, multiple]
  )

  const hasSearch = useMemo(
    () => Array.isArray(children) && children.length > searchThreshold,
    [children, searchThreshold]
  )

  const searchText = useMemo(
    () => (search ? search.trim().toLocaleLowerCase() : ''),
    [search]
  )
  const searchPh = useMemo(
    () => searchPlaceholder.replace('#len', children ? children.length : '?'),
    [searchPlaceholder, children]
  )

  const cId = useMemo(
    () => id || `dd-${Math.floor(1000000 * Math.random())}`,
    [id]
  )

  const searchId = useMemo(
    () => `search-${Math.floor(1000000 * Math.random())}`,
    []
  )

  const displayValue = useMemo(() => {
    if (typeof value !== 'boolean' && !value) {
      return ''
    }
    if (typeof valueRender === 'string') {
      return valueRender
    }
    return valueRender(value)
  }, [value, valueRender])

  const toggleDropdown = () => {
    if (disabled) {
      return false
    }
    const shouldFocusOnSearch = hasSearch && isCollapsed
    setCollapsed(!isCollapsed)
    if (shouldFocusOnSearch) {
      setTimeout(() => {
        if (searchField.current) {
          searchField.current.focus()
        }
      }, 10)
    }
  }

  const clicked = () => {
    setSwipe(false)
  }

  const inhibit = () => {
    setSwipe(true)
  }

  const decide = event => {
    if (isSwipe) {
      event.preventDefault()
      event.stopPropagation()
    }
    setSwipe(false)
  }

  const onSelectItem = useCallback(
    option => {
      if (multiple) {
        const newValues = isEmpty ? [] : [...value]
        const idx = newValues.indexOf(option)
        if (idx >= 0) {
          newValues.splice(idx, 1)
        } else {
          newValues.push(option)
        }
        onChange(newValues)
      } else {
        onChange(option)
        setTimeout(() => {
          setCollapsed(true)
        }, 60)
      }
    },
    [isEmpty, multiple, onChange, value]
  )

  const setSearchText = event => {
    setSearch(event.target.value)
  }

  const options = useMemo(() => {
    if (!hasSearch) {
      return Children.toArray(children)
    }

    if (!searchText) {
      return Children.toArray(children).slice(0, searchMaxResults)
    }
    return Children.toArray(children)
      .filter(child => itemFilter(searchText, child.props.value))
      .slice(0, searchMaxResults)
  }, [hasSearch, searchText, children, itemFilter, searchMaxResults])

  const isItemSelected = item => (!isEmpty ? itemSelected(value, item) : false)

  const dropdownBorderClr = useMemo(
    () =>
      !isCollapsed && !disabled && !error ? 'brandLight' : 'inputBorderGray',
    [disabled, error, isCollapsed]
  )

  const removeCurrentKeyboardFocus = useCallback(() => {
    setCurrentKeyboardFocus(-1)
  }, [])

  const handleKeyDown = e => {
    if (isCollapsed) {
      return
    }

    switch (e.code) {
      case 'Escape':
        e.preventDefault()
        setCollapsed(true)
        break

      case 'ArrowDown':
        e.preventDefault()
        setCurrentKeyboardFocus(hover =>
          Math.min(options.length - 1, Math.max(-1, hover + 1))
        )
        break

      case 'ArrowUp':
        e.preventDefault()
        setCurrentKeyboardFocus(hover =>
          Math.min(options.length - 1, Math.max(-1, hover - 1))
        )
        break

      case 'Enter':
        e.preventDefault()
        if (
          currentKeyboardFocus !== -1 &&
          !options[currentKeyboardFocus].props.disabled
        ) {
          onSelectItem(options[currentKeyboardFocus].props.value)
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    if (isCollapsed) {
      setCurrentKeyboardFocus(-1)
      return
    }

    if (multiple) {
      return
    }

    const optionIndex = options.findIndex(option =>
      isEqual(option.props.value, value)
    )

    setCurrentKeyboardFocus(optionIndex)
  }, [isCollapsed, options, value, multiple])

  return (
    <StyledFlex flexDirection='column' hasLabel={label} width={1} {...props}>
      {label && (
        <Label
          label={label}
          inputId={id}
          showOptionalText={!required}
          optionalText={optionalText}
        />
      )}
      <DropdownWrapper
        role='combobox'
        aria-disabled={disabled}
        aria-haspopup={!disabled}
        aria-expanded={!isCollapsed}
        onKeyDown={handleKeyDown}
        onMouseMove={removeCurrentKeyboardFocus}
        tabIndex='0'
        ref={wrapper}
        error={error}
        {...props}>
        <StyledIndicator
          size='small'
          color='inputIcon'
          onClick={toggleDropdown}
          aria-expanded={!isCollapsed}
          aria-disabled={disabled}
          name='menuDown'
        />
        <Toggler
          dataCollapsed={isCollapsed}
          disabled={disabled}
          type='button'
          role='switch'
          aria-controls={`drop-${cId}`}
          error={error}
          tinted={tinted}
          onClick={toggleDropdown}>
          {isEmpty ? placeholder : displayValue}
        </Toggler>
        <DropdownList
          collapsed={isCollapsed}
          onMouseDown={clicked}
          onMouseMove={inhibit}
          onMouseUp={decide}
          onTouchStart={clicked}
          onTouchMove={inhibit}
          onTouchEnd={decide}
          borderClr={dropdownBorderClr}>
          {hasSearch ? (
            <SearchInput
              ref={searchField}
              placeholder={searchPh}
              id={searchId}
              type='search'
              role='searchbox'
              autoComplete='off'
              onChange={setSearchText}
            />
          ) : null}
          <ScrollingList aria-labelledby={cId} role='menu' id={`drop-${cId}`}>
            {options.map((child, idx) =>
              isValidElement(child)
                ? cloneElement(child, {
                    onSelectItem,
                    isSelected: isItemSelected(child.props.value),
                    hasKeyboardFocus: currentKeyboardFocus === idx,
                    hasCheckbox: multiple
                  })
                : null
            )}
          </ScrollingList>
        </DropdownList>
      </DropdownWrapper>
      <SubLabel
        variant='error'
        content={error}
        preserveSpace={!noBottomSpace}
      />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)(
  css({
    '&:focus-within > div > label': {
      color: 'textInputFocused'
    }
  })
)

const Toggler = styled.button(
  css({
    ...typography.labelSmall,
    appearance: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    paddingY: 2,
    paddingLeft: 2,
    paddingRight: 9,
    display: 'block',
    width: '100%',
    backgroundColor: 'backgroundLightGray',
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'inputBorderGray',
    borderRadius: 3,
    height: sizes.inputHeight,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'textInputActive',
    ':hover, :focus': {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'brandLight'
    }
  }),
  ({ error }) =>
    error
      ? css({
          color: 'error',
          borderColor: 'error'
        })
      : null,
  ({ disabled }) =>
    disabled
      ? css({
          color: 'textInputDisabled',
          cursor: 'forbidden',
          pointerEvents: 'none',
          backgroundColor: 'backgroundGray'
        })
      : null,
  ({ tinted, error, disabled }) => ({
    backgroundColor: tinted && !(error || disabled) && 'white',
    borderColor: tinted && !(error || disabled) && 'white'
  }),
  ({ dataCollapsed }) =>
    !dataCollapsed
      ? css({
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: 'brandLight'
        })
      : null
)

Toggler.propTypes = {
  collapsed: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  onClick: PropTypes.func
}

const StyledIndicator = styled(Icon)(
  css({
    display: 'block',
    appearance: 'none',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: 0,
    width: 0,
    height: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '1em',
    outline: 'none',
    transition: 'all .2s ease-in-out',
    '&[aria-expanded="true"]': {
      transform: 'rotate(-180deg)'
    },
    '&[aria-disabled="true"]': {
      opacity: 0.5
    }
  })
)

const DropdownWrapper = styled.div(
  css({
    display: 'block',
    position: 'relative',
    width: '100%',
    outline: 'none'
  })
)

const DropdownList = styled.div(
  css({
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: '1',
    appearance: 'none',
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: '-3px',
    borderStyle: 'solid',
    borderColor: 'inputBorderGray',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    color: 'text',
    paddingBottom: 3,
    boxShadow: 'etvasCard'
  }),
  ({ collapsed }) => css({ display: collapsed ? 'none' : 'block' }),
  ({ borderClr }) =>
    css({
      borderLeftColor: borderClr,
      borderRightColor: borderClr,
      borderBottomColor: borderClr
    })
)

DropdownList.propTypes = {
  collapsed: PropTypes.bool,
  borderClr: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func
}

const ScrollingList = styled.div(
  css({
    maxHeight: '172px',
    overflowX: 'hidden',
    overflowY: 'auto'
  })
)

const SearchInput = styled.input(
  css({
    ...typography.labelSmall,
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

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  optionalText: PropTypes.node,
  id: PropTypes.string,
  required: PropTypes.bool,
  noBottomSpace: PropTypes.bool,
  searchMaxResults: PropTypes.number,
  searchThreshold: PropTypes.number,
  value: PropTypes.any,
  onChange: PropTypes.func,
  valueRender: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  itemSelected: PropTypes.func,
  itemFilter: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  searchPlaceholder: PropTypes.string,
  tinted: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

Dropdown.defaultProps = {
  disabled: false,
  multiple: false,
  required: false,
  value: '',
  valueRender: v => (Array.isArray(v) ? v.join(', ') : v),
  itemSelected: (value, v) =>
    value ? (Array.isArray(value) ? value.includes(v) : value === v) : false,
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
      : false,
  onChange: () => console.warn('Dropdown.onChange should be a function'),
  placeholder: 'Please select an option',
  searchPlaceholder: 'Type to search in #len items. Max 30 items shown.',
  searchMaxResults: 30,
  searchThreshold: 20
}

Dropdown.Option = Option
Dropdown.Heading = Heading

export default Dropdown
