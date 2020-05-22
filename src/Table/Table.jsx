import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import useResizeObserver from 'use-resize-observer'
import { typography } from 'styled-system'

import style from './Table.style'
import { TableContext } from './base'
import { Cell } from './Cell'
import { Row } from './Row'
import { Header } from './Header'

export const Table = ({ mode, breakpoint, ...props }) => {
  const [cells, setCells] = useState([])
  const { ref, width = 1 } = useResizeObserver()

  const actualMode = useMemo(() => {
    if (mode) {
      return mode
    }

    if (breakpoint) {
      return width < breakpoint ? 'mobile' : 'web'
    }

    return 'web'
  }, [mode, width, breakpoint])

  const ctx = useMemo(
    () => ({
      cells,
      mode: actualMode,
      setHeaderCell: (idx, content) => {
        if (!cells || cells[idx] !== content) {
          const newCells = [...cells]
          newCells[idx] = content
          setCells(newCells)
        }
      }
    }),
    [cells, setCells, actualMode]
  )

  return (
    <TableContext.Provider value={ctx}>
      <StyledTable {...props} ref={ref} />
    </TableContext.Provider>
  )
}

Table.propTypes = {
  breakpoint: PropTypes.number,
  mode: PropTypes.oneOf(['web', 'mobile'])
}

const TableBody = styled.tbody``

const StyledTable = styled.table(typography, css(style))

Table.Cell = Cell
Table.Row = Row
Table.Body = TableBody
Table.Header = Header
