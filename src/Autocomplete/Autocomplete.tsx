import {
  ReactNode,
  Children,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import Heading from '../Dropdown/Heading'
import Option, { OptionProps } from '../Dropdown/Option'
import { Flex, FlexProps } from '../Flex'
import { Icon } from '../Icon'
import { Input } from '../Input'
import sizes from '../assets/sizes'
import { Error } from '../utils/types'

export interface AutocompleteProps
  extends FlexProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'color' | 'height' | 'size' | 'width'
    > {
  label?: ReactNode
  error?: Error
  optionalText?: ReactNode
  loading?: boolean
  tinted?: boolean
  searchMaxResults?: number
  value: any
  itemSelected: (value: any, item: any) => boolean
  onSelectItemChange?: (item: any) => void
  handleInputChange?: (value: string) => void
}

interface AutocompleteSubComponents {
  Option: typeof Option
  Heading: typeof Heading
}

const Autocomplete: FC<PropsWithChildren<AutocompleteProps>> &
  AutocompleteSubComponents = ({
  disabled = false,
  error,
  label,
  value = '',
  optionalText,
  id,
  searchMaxResults = 30,
  placeholder = 'Please select an option',
  itemSelected = defaultItemSelected,
  onChange,
  onSelectItemChange,
  handleInputChange,
  tinted,
  loading,
  children,
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const wrapper = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const clickOutside = (event: any) => {
      if (!wrapper?.current?.contains(event.target)) {
        setCollapsed(true)
      }
    }
    window.addEventListener('click', clickOutside, { passive: true })
    return () => {
      window.removeEventListener('click', clickOutside)
    }
  }, [])

  const onSelectItem = (option: any) => {
    if (onSelectItemChange) {
      onSelectItemChange(option)
    } else {
      onChange && onChange({ target: { value: option } } as any)
    }
    setTimeout(() => {
      setCollapsed(true)
    }, 60)
  }

  const handleOnChange = (event: any) => {
    onChange && onChange(event)
    handleInputChange && handleInputChange(event.target.value)
    isCollapsed && setCollapsed(false)
  }

  const options = useMemo(() => {
    if (!value) {
      return Children.toArray(children).slice(0, searchMaxResults)
    }
    const childArray = Children.toArray(
      children
    ) as ReactElement<OptionProps>[]
    return childArray
      .filter(child => child.props.value.indexOf(value.toLowerCase()) > -1)
      .slice(0, searchMaxResults)
  }, [value, children, searchMaxResults])

  const isItemSelected = (item: any) =>
    !value ? itemSelected(value, item) : false
  const handleInputClick = () => !value && setCollapsed(prev => !prev)

  return (
    <StyledFlex flexDirection='column' width={1} {...props}>
      <Flex
        aria-disabled={disabled}
        aria-haspopup={!disabled}
        aria-expanded={!isCollapsed}
        ref={wrapper}
        alignItems='center'
        position='relative'
        width='100%'>
        <Input
          error={error}
          placeholder={placeholder}
          id={`search-${id}`}
          type='search'
          label={label}
          optionalText={optionalText}
          role='searchbox'
          disabled={disabled}
          autoComplete='off'
          onChange={handleOnChange}
          value={value}
          tinted={tinted}
          onInputClick={handleInputClick}
          extension={
            !isCollapsed && (
              <ListWrapper>
                <ScrollingList
                  aria-labelledby={id}
                  role='menu'
                  id={`drop-${id}`}>
                  {options.map(child =>
                    isValidElement<OptionProps>(child)
                      ? cloneElement(child, {
                          onSelectItem,
                          selected: isItemSelected(child.props.value)
                        })
                      : null
                  )}
                </ScrollingList>
              </ListWrapper>
            )
          }
          {...props}
        />
        <Flex pointerEvents='auto' position='absolute' right={2}>
          {loading && !error && (
            <Icon color='brand' size='medium' name='loading' spin={true} />
          )}
        </Flex>
      </Flex>
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

const ListWrapper = styled.div(
  css({
    position: 'absolute',
    left: 0,
    right: 0,
    top: sizes.inputHeight,
    zIndex: '1',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftColor: 'inputBorderGray',
    borderRightColor: 'inputBorderGray',
    borderBottomColor: 'inputBorderGray',
    borderTop: 0
  } as SystemStyleObject) as any
)

const ScrollingList = styled.div(
  css({
    maxHeight: '172px',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: 'white'
  }) as any
)

const defaultItemSelected = (value: any, item: any) =>
  value ? (Array.isArray(value) ? value.includes(item) : value === item) : false

Autocomplete.Option = Option
Autocomplete.Heading = Heading

export default Autocomplete
