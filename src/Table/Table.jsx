import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import styles from './Table.style'
import { Box } from '@ivoryio/kogaio'

export const TableContext = React.createContext({})

const StyledTable = styled(Box)(css(styles), ({ gridRowGap }) => ({
  gridRowGap
}))

export const Table = ({ children, gridTemplate, ...props }) => (
  <TableContext.Provider value={gridTemplate}>
    <StyledTable {...props}>{children}</StyledTable>
  </TableContext.Provider>
)

Table.propTypes = {
  ...Box.propTypes,
  gridTemplate: PropTypes.string.isRequired,
  children: PropTypes.node,
  gridRowGap: PropTypes.string
}

Table.displayName = 'Table'
