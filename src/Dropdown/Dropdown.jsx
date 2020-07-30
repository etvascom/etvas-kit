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

import { typography } from '../Typography'
import Option from './Option'
import Heading from './Heading'

const Dropdown = ({
  disabled,
  multiple,
  error,
  value,
  placeholder,
  valueRender,
  valueSelected,
  valueFilter,
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
    () => Array.isArray(children) && children.length > 40,
    [children]
  )

  const searchText = useMemo(() => search.trim().toLowerCase(), [search])
  const searchPh = useMemo(
    () => searchPlaceholder.replace('{len}', children ? children.length : '?'),
    [searchPlaceholder, children]
  )

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
    onChange(option)
    if (!multiple) {
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
      return Children.toArray(children).slice(0, 30)
    }
    return Children.toArray(children)
      .filter(child => valueFilter(searchText, child.props.value))
      .slice(0, 30)
  }, [hasSearch, searchText, children, valueFilter])

  return (
    <DropdownWrapper
      ref={wrapper}
      disabled={disabled}
      collapsed={isCollapsed}
      error={error}
      {...props}>
      <StyledIndicator
        onClick={toggleDropdown}
        collapsed={isCollapsed}
        disabled={disabled}
      />
      <Toggler
        collapsed={isCollapsed}
        disabled={disabled}
        isEmpty={isEmpty}
        onClick={toggleDropdown}>
        {!isEmpty ? valueRender(value) : placeholder}
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
            type='search'
            onChange={setSearchText}
          />
        ) : null}
        <ScrollingList>
          {options.map(child =>
            isValidElement(child)
              ? cloneElement(child, {
                  onSelectItem,
                  isSelected: multiple
                    ? value?.some(val => valueSelected(val, child.props.value))
                    : valueSelected(value, child.props.value)
                })
              : null
          )}
        </ScrollingList>
      </DropdownList>
    </DropdownWrapper>
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
    background: 'transparent',
    border: 'none',
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
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
          cursor: 'forbidden',
          pointerEvents: 'none'
        })
      : null,
  ({ isEmpty }) =>
    css({
      color: isEmpty ? '#757575' : 'text'
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
    borderBottomColor: 'brand',
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
    maxHeight: '10rem',
    overflowX: 'hidden',
    overflowY: 'auto'
  })
)

// const SearchInputPanel = styled.div(
//   css({
//     padding: 4,
//     borderBottom: '1px solid',
//     borderBottomColor: 'outline'
//   })
// )

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
  value: PropTypes.any,
  onChange: PropTypes.func,
  valueRender: PropTypes.func,
  valueSelected: PropTypes.func,
  valueFilter: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  searchPlaceholder: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
}

Dropdown.defaultProps = {
  disabled: false,
  multiple: false,
  valueRender: v => v,
  valueSelected: (value, v) =>
    value ? (Array.isArray(value) ? value.includes(v) : value === v) : false,
  valueFilter: (search, v) =>
    typeof v === 'string'
      ? v.toLowerCase().includes(search)
      : typeof v === 'object'
      ? Object.keys(v).some(
          key =>
            v[key] &&
            typeof v[key] === 'string' &&
            v[key].toLowerCase().includes(search)
        )
      : false,
  onChange: () => console.warn('Dropdown.onChange should be a function'),
  placeholder: 'Please select an option',
  searchPlaceholder: 'Type to search in {len} items. Max 30 items shown.'
}

Dropdown.Option = Option
Dropdown.Heading = Heading

export default Dropdown
