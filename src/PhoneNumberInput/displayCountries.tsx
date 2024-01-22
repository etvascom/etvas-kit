import React from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import 'flag-icon-css/css/flag-icon.css'
import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Space } from '../Space'
import sizes from '../assets/sizes'
import { md } from '../utils'
import styles from './PhoneNumberInput.styles'
import { State } from './world-states'

interface Props {
  orderedStates: State[]
  handleSelectCountry: (state: State) => () => void
  country: State
  itemFilter: (search: string, v: any) => boolean
  search: string
  areFlagsLoaded: boolean
}

export const displayCountries = ({
  orderedStates,
  handleSelectCountry,
  country,
  itemFilter,
  search,
  areFlagsLoaded
}: Props) =>
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
        onClick={handleSelectCountry(state)}
      >
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

interface StyledDropdownItemProps {
  isSelected: boolean
}

const StyledDropdownItem = styled(Flex)<StyledDropdownItemProps>(
  css(styles.dropdownItem as SystemStyleObject) as any,
  ({ theme, isSelected }) =>
    css({
      backgroundColor: isSelected ? 'brand' : 'backgroundLightGray',
      '&:hover': {
        backgroundColor: isSelected ? 'brand' : 'brandLighter'
      },
      color: isSelected ? 'white' : 'black',
      ...md(theme)([
        {
          minHeight: sizes.dropdownItemHeight
        }
      ])
    }) as any
)
const PrefixTitle = styled.div(
  css(styles.prefixTitle as SystemStyleObject) as any
)
