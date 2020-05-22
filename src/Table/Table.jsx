import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { typography } from 'styled-system'

import style from './Table.style'
import { TableContext } from './base'
import { Cell } from './Cell'
import { Row } from './Row'
import { Header } from './Header'

export const Table = ({ breakpoint, ...props }) => {
  const [cells, setCells] = useState([])

  const ctx = useMemo(
    () => ({
      cells,
      setHeaderCell: (idx, content) => {
        if (!cells || cells[idx] !== content) {
          const newCells = [...cells]
          newCells[idx] = content
          setCells(newCells)
        }
      }
    }),
    [cells, setCells]
  )

  return (
    <TableContext.Provider value={ctx}>
      <StyledTable {...props} />
    </TableContext.Provider>
  )
}

const TableBody = styled.tbody``

const StyledTable = styled.table(typography, css(style))

Table.Cell = Cell
Table.Row = Row
Table.Body = TableBody
Table.Header = Header
