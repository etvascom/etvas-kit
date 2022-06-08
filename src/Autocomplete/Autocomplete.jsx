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

import Option from '../Dropdown/Option'
import Heading from '../Dropdown/Heading'

import { Input } from '../Input'
import { Icon } from '../Icon'
import { Flex } from '../Flex'
import sizes from '../assets/sizes'

const Autocomplete = ({
  disabled,
  error,
  label,
  value,
  optionalText,
  id,
  searchMaxResults,
  placeholder,
  itemSelected,
  onChange,
  onSelectItemChange,
  handleInputChange,
  tinted,
  loading,
  children,
  ...props
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const wrapper = useRef()

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

  const onSelectItem = option => {
    if (onSelectItemChange) {
      onSelectItemChange(option)
    } else {
      onChange(null, option)
    }
    setTimeout(() => {
      setCollapsed(true)
    }, 60)
  }

  const handleOnChange = event => {
    onChange(event)
    handleInputChange && handleInputChange(event.target.value)
    isCollapsed && setCollapsed(false)
  }

  const options = useMemo(() => {
    if (!value) {
      return Children.toArray(children).slice(0, searchMaxResults)
    }
    return Children.toArray(children)
      .filter(child => child.props.value.indexOf(value.toLowerCase()) > -1)
      .slice(0, searchMaxResults)
  }, [value, children, searchMaxResults])

  const isItemSelected = item => (!value ? itemSelected(value, item) : false)
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
          collapsed={isCollapsed}
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
                    isValidElement(child)
                      ? cloneElement(child, {
                          onSelectItem,
                          isSelected: isItemSelected(child.props.value)
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
  css({ '&:focus-within': { label: { color: 'textInputFocused' } } })
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
  })
)

const ScrollingList = styled.div(
  css({
    maxHeight: '172px',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: 'white'
  })
)

Autocomplete.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  optionalText: PropTypes.node,
  searchMaxResults: PropTypes.number,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  itemSelected: PropTypes.func,
  onChange: PropTypes.func,
  onSelectItemChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  value: PropTypes.any,
  tinted: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

Autocomplete.defaultProps = {
  disabled: false,
  value: '',
  valueRender: v => (Array.isArray(v) ? v.join(', ') : v),
  itemSelected: (value, v) =>
    value ? (Array.isArray(value) ? value.includes(v) : value === v) : false,
  onChange: () => console.warn('Autocomplete.onChange should be a function'),
  placeholder: 'Please select an option',
  searchMaxResults: 30
}

Autocomplete.Option = Option
Autocomplete.Heading = Heading

export default Autocomplete
