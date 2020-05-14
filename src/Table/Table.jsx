import React from 'react'
import styled from 'styled-components'
import { grid } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import css from '@styled-system/css'

import { Box } from '@ivoryio/kogaio'
import style from './Table.style'

export const TableContext = React.createContext({})

const StyledTable = styled(Box)(css(style), grid)

export const Table = ({ children, gridTemplate, ...props }) => (
  <TableContext.Provider value={gridTemplate}>
    <StyledTable {...props}>{children}</StyledTable>
  </TableContext.Provider>
)

Table.propTypes = {
  ...propTypes.grid,
  ...Box.propTypes,
  gridTemplate: PropTypes.string.isRequired,
  children: PropTypes.node
}

Table.displayName = 'Table'
