import React, {
  ButtonHTMLAttributes,
  Children,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { SubLabel, SubLabelProps } from '../Input/SubLabel'
import { Label, LabelProps } from '../Label'
import { typography } from '../Typography'
import sizes from '../assets/sizes'
import { isEqual } from '../utils/isEqual'
import { Error } from '../utils/types'
import Heading from './Heading'
import Option, { OptionProps } from './Option'

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    Partial<Pick<LabelProps, 'label' | 'optionalText'>> {
  multiple?: boolean
  error?: Error
  value?: any
  id?: LabelProps['inputId']
  required?: LabelProps['showOptionalText']
  noBottomSpace?: SubLabelProps['preserveSpace']
  searchMaxResults?: number
  searchThreshold?: number
  onChange?: (value: any) => void
  valueRender?: ((value: any) => string) | string
  itemSelected?: (value: any, item: any) => boolean
  itemFilter?: (search: string, item: any) => boolean
  placeholder?: React.ReactNode
  searchPlaceholder?: string
  tinted?: boolean
  showTooltip?: boolean
}

interface DropdownSubComponents {
  Option: typeof Option
  Heading: typeof Heading
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> &
  DropdownSubComponents = ({
  disabled = false,
  multiple = false,
  error,
  label,
  optionalText,
  value = '',
  id,
  required = false,
  noBottomSpace,
  searchThreshold = 20,
  searchMaxResults = 30,
  placeholder = 'Please select an option',
  valueRender = defaultValueRender,
  itemSelected = defaultItemSelected,
  itemFilter = defaultItemFilter,
  onChange = defaultOnChange,
  searchPlaceholder = 'Type to search in #len items. Max 30 items shown.',
  tinted,
  children,
  showTooltip,
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const [isSwipe, setSwipe] = useState(false)
  const [search, setSearch] = useState('')
  const [currentKeyboardFocus, setCurrentKeyboardFocus] = useState(-1)

  const wrapper = useRef<HTMLDivElement>(null)
  const searchField = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    const clickOutside = (event: any) => {
      if (!wrapper.current?.contains(event.target)) {
        setCollapsed(true)
      }
    }
    const options: AddEventListenerOptions & EventListenerOptions = {
      passive: true
    }
    window.addEventListener('click', clickOutside, options)
    return () => {
      window.removeEventListener('click', clickOutside, options)
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
  const searchPh = useMemo(() => {
    const replaceWith = Array.isArray(children) ? children.length : '?'
    return searchPlaceholder.replace('#len', replaceWith.toString())
  }, [searchPlaceholder, children])

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

  const decide = (event: any) => {
    if (isSwipe) {
      event.preventDefault()
      event.stopPropagation()
    }
    setSwipe(false)
  }

  const onSelectItem = useCallback(
    (option: any) => {
      if (multiple) {
        const newValues = isEmpty ? [] : [...value]
        const idx = isObject(option)
          ? newValues.findIndex(value => value.id === option.id)
          : newValues.indexOf(option)

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

  const setSearchText = (event: any) => {
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
      .filter(child =>
        itemFilter(searchText, isValidElement(child) && child.props.value)
      )
      .slice(0, searchMaxResults)
  }, [hasSearch, searchText, children, itemFilter, searchMaxResults])

  const isItemSelected = (item: any) =>
    !isEmpty ? itemSelected(value, item) : false

  const dropdownBorderClr = useMemo(
    () =>
      !isCollapsed && !disabled && !error ? 'brandLight' : 'inputBorderGray',
    [disabled, error, isCollapsed]
  )

  const removeCurrentKeyboardFocus = useCallback(() => {
    setCurrentKeyboardFocus(-1)
  }, [])

  const handleKeyDown = (event: any) => {
    if (isCollapsed) {
      return
    }

    switch (event.code) {
      case 'Escape':
        event.preventDefault()
        setCollapsed(true)
        break

      case 'ArrowDown':
        event.preventDefault()
        setCurrentKeyboardFocus(hover =>
          Math.min(options.length - 1, Math.max(-1, hover + 1))
        )
        break

      case 'ArrowUp':
        event.preventDefault()
        setCurrentKeyboardFocus(hover =>
          Math.min(options.length - 1, Math.max(-1, hover - 1))
        )
        break

      case 'Enter':
        event.preventDefault()
        const currentOption = options[currentKeyboardFocus]

        if (!isValidElement(currentOption)) {
          break
        }

        if (currentKeyboardFocus !== -1 && !currentOption.props.disabled) {
          onSelectItem(currentOption.props.value)
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

    const optionIndex = options.findIndex(
      option => isValidElement(option) && isEqual(option.props.value, value)
    )

    setCurrentKeyboardFocus(optionIndex)
  }, [isCollapsed, options, value, multiple])

  return (
    <StyledFlex flexDirection='column' width={1} {...props}>
      {label && (
        <Label
          label={label}
          inputId={id}
          showOptionalText={!required}
          optionalText={optionalText}
          showTooltip={showTooltip}
        />
      )}
      <DropdownWrapper
        role='combobox'
        aria-disabled={disabled}
        aria-haspopup={!disabled}
        aria-expanded={!isCollapsed}
        onKeyDown={handleKeyDown}
        onMouseMove={removeCurrentKeyboardFocus}
        tabIndex={0}
        ref={wrapper}
        {...props}
      >
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
          id={id?.toString()}
          aria-controls={`drop-${cId}`}
          error={error}
          tinted={tinted}
          onClick={toggleDropdown}
        >
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
          borderClr={dropdownBorderClr}
        >
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
              isValidElement<OptionProps>(child)
                ? cloneElement(child, {
                    onSelectItem,
                    selected: isItemSelected(child.props.value),
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
  }) as any
)

interface TogglerProps
  extends Pick<DropdownProps, 'error' | 'disabled' | 'tinted'> {
  dataCollapsed: boolean
}

const Toggler = styled.button<TogglerProps>(
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
    '&:hover, &:focus': {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'brandLight'
    }
  } as SystemStyleObject) as any,
  ({ error }: TogglerProps) =>
    (error
      ? css({
          color: 'error',
          borderColor: 'error'
        })
      : null) as any,
  (({ disabled }: TogglerProps) =>
    disabled
      ? css({
          color: 'textInputDisabled',
          cursor: 'forbidden',
          pointerEvents: 'none',
          backgroundColor: 'backgroundGray'
        })
      : null) as any,
  ({ tinted, error, disabled }: TogglerProps) => ({
    backgroundColor: tinted && !(error || disabled) ? 'white' : '',
    borderColor: tinted && !(error || disabled) ? 'white' : ''
  }),
  (({ dataCollapsed }: TogglerProps) =>
    !dataCollapsed
      ? css({
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: 'brandLight'
        })
      : null) as any
)

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
  } as SystemStyleObject) as any
)

const DropdownWrapper = styled.div(
  css({
    display: 'block',
    position: 'relative',
    width: '100%',
    outline: 'none'
  } as SystemStyleObject) as any
)

interface DropdownListProps {
  collapsed: boolean
  borderClr: string
}

const DropdownList = styled.div<DropdownListProps>(
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
  } as SystemStyleObject) as any,
  ({ collapsed }: DropdownListProps) =>
    css({ display: collapsed ? 'none' : 'block' }) as any,
  ({ borderClr }: DropdownListProps) =>
    css({
      borderLeftColor: borderClr,
      borderRightColor: borderClr,
      borderBottomColor: borderClr
    }) as any
)

const ScrollingList = styled.div<any>(
  css({
    maxHeight: '172px',
    overflowX: 'hidden',
    overflowY: 'auto'
  }) as any
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
  } as SystemStyleObject) as any
)

const defaultItemFilter = (search: string, value: any) =>
  typeof value === 'string'
    ? value.toLocaleLowerCase().includes(search)
    : typeof value === 'object'
      ? Object.keys(value).some(
          key =>
            value[key] &&
            typeof value[key] === 'string' &&
            value[key].toLocaleLowerCase().includes(search)
        )
      : false

const defaultValueRender = (value: any) =>
  Array.isArray(value) ? value.join(', ') : value

const defaultItemSelected = (value: any, item: any) =>
  value ? (Array.isArray(value) ? value.includes(item) : value === item) : false

const defaultOnChange = () =>
  console.warn('Dropdown.onChange should be a function')

const isObject = (item: any) => {
  return typeof item === 'object' && !Array.isArray(item) && item !== null
}

Dropdown.Option = Option
Dropdown.Heading = Heading
