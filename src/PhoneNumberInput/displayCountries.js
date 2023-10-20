import React from 'react'

import css from '@styled-system/css'
import 'flag-icon-css/css/flag-icon.css'
import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Space } from '../Space'
import sizes from '../assets/sizes'
import { md } from '../utils'
import styles from './PhoneNumberInput.styles'

export const displayCountries = ({
  orderedStates,
  handleSelectCountry,
  country,
  itemFilter,
  search,
  areFlagsLoaded
}) =>
  orderedStates
    .filter(state => itemFilter(search, state.name))
    .map(state => (
      <StyledDropdownItem
        key={state.code}
        isSelected={state.code === country.code}
        className={
          state.code === country.code
            ? 'dropdown-country-prefix-item-selected'
            : ''
        }
        onClick={handleSelectCountry(state)}>
        <Space mr={2}>
          {areFlagsLoaded ? (
            <span
              className={`flag-icon flag-icon-${state.code.toLowerCase()}`}
            />
          ) : (
            <Box width='20px' />
          )}
        </Space>
        <PrefixTitle>
          {state.prefix} {state.name}
        </PrefixTitle>
      </StyledDropdownItem>
    ))

const StyledDropdownItem = styled(Flex)(
  css(styles.dropdownItem),
  ({ theme, isSelected }) =>
    css({
      backgroundColor: isSelected ? 'brand' : 'backgroundLightGray',
      ':hover': {
        backgroundColor: isSelected ? 'brand' : 'brandLighter'
      },
      color: isSelected ? 'white' : 'black',
      ...md(theme)({
        minHeight: sizes.dropdownItemHeight
      })
    })
)
const PrefixTitle = styled.div(css(styles.prefixTitle))
