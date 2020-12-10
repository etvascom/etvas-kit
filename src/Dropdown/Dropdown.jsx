import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
  useLayoutEffect,
  useRef,
  useMemo
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@ivoryio/kogaio'

import { Typography, typography } from '../Typography'
import { ErrorMessage } from '../Input'
import Option from './Option'
import Heading from './Heading'
import colors from '../assets/colors'
import { RADII } from '../assets/core'

const Dropdown = ({
  disabled,
  multiple,
  error,
  label,
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
  children,
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const [isSwipe, setSwipe] = useState(false)
  const [search, setSearch] = useState('')

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
    () => (value ? (multiple ? value.length === 0 : !value) : true),
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

  const cId = useMemo(() => id || `dd-${Math.floor(1000000 * Math.random())}`, [
    id
  ])

  const displayValue = useMemo(() => {
    if (!value) {
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

  const onSelectItem = option => {
    if (multiple) {
      const old = isEmpty ? [] : [...value]
      const idx = old.indexOf(option)
      if (idx >= 0) {
        old.splice(idx, 1)
      } else {
        old.push(option)
      }
      onChange(old)
    } else {
      onChange(option)
      setTimeout(() => {
        setCollapsed(true)
      }, 60)
    }
  }

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

  return (
    <Flex flexDirection='column' hasLabel={label} width={1} {...props}>
      {label ? (
        <Typography
          as='label'
          htmlFor={cId}
          variant='inputLabel'
          width='fit-content'>
          {label} {required ? '*' : ''}
        </Typography>
      ) : null}
      <DropdownWrapper
        role='combobox'
        aria-disabled={disabled}
        aria-haspopup={!disabled}
        aria-expanded={!isCollapsed}
        ref={wrapper}
        disabled={disabled}
        collapsed={isCollapsed}
        error={error}
        {...props}>
        <StyledIndicator
          type='button'
          role='display'
          onClick={toggleDropdown}
          collapsed={isCollapsed}
          disabled={disabled}
        />
        <Toggler
          collapsed={isCollapsed}
          disabled={disabled}
          isEmpty={isEmpty}
          type='button'
          role='switch'
          aria-controls={`drop-${cId}`}
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
          onTouchEnd={decide}>
          {hasSearch ? (
            <SearchInput
              ref={searchField}
              placeholder={searchPh}
              id={`search-${cId}`}
              type='search'
              role='searchbox'
              autocomplete='false'
              onChange={setSearchText}
            />
          ) : null}
          <ScrollingList aria-labelledby={cId} role='menu' id={`drop-${cId}`}>
            {options.map(child =>
              isValidElement(child)
                ? cloneElement(child, {
                    onSelectItem,
                    isSelected: isItemSelected(child.props.value)
                  })
                : null
            )}
          </ScrollingList>
        </DropdownList>
      </DropdownWrapper>
      <ErrorMessage error={error} preserveSpace={!noBottomSpace} />
    </Flex>
  )
}

const Toggler = styled.button(
  css({
    ...typography.labelSmall,
    appearance: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    padding: 3,
    display: 'block',
    width: '100%',
    background: colors.backgroundLightGray,
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.inputGray,
    borderRadius: RADII[3],
    color: colors.textInputActive,
    ':hover, :focus': {
      borderWidth: 1,
      borderStyle: 'solid'
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
          opacity: 0.5,
          color: colors.textInputDisabled,
          cursor: 'forbidden',
          pointerEvents: 'none'
        })
      : null,
  ({ isEmpty }) =>
    css({
      color: isEmpty ? colors.textInputPlaceholder : colors.textInputActive
    }),
  ({ collapsed }) =>
    !collapsed
      ? css({
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        })
      : null
)

const StyledIndicator = styled.button(
  css({
    display: 'block',
    appearance: 'none',
    margin: 0,
    padding: 0,
    background: 'transparent',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0 5px 8px 5px',
    borderColor: 'transparent transparent #303a45 transparent',
    borderBottomColor: colors.inputIcon,
    position: 'absolute',
    right: '1em',
    top: '50%',
    marginTop: '-5px',
    outline: 'none',
    transition: 'all .2s ease-in-out'
  }),
  ({ collapsed }) =>
    css({
      transform: collapsed ? 'rotate(180deg)' : 'rotate(360deg)'
    }),
  ({ disabled }) => (disabled ? css({ opacity: 0.5 }) : null)
)

const DropdownWrapper = styled.div(
  css({
    display: 'block',
    position: 'relative',
    width: '100%'
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
    background: 'white',
    borderWidth: 1,
    marginTop: '-3px',
    borderStyle: 'solid',
    borderColor: 'outline',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    color: 'text',
    paddingBottom: 3,
    boxShadow: 'etvasCard'
  }),
  ({ collapsed }) => css({ display: collapsed ? 'none' : 'block' })
)

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
    borderBottomColor: 'outline',
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
  children: PropTypes.arrayOf(PropTypes.element)
}

Dropdown.defaultProps = {
  disabled: false,
  multiple: false,
  required: false,
  value: '',
  valueRender: v => v,
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
