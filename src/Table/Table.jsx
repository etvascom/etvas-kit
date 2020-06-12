import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import useResizeObserver from 'use-resize-observer'

import styles from './Table.styles'
import { TableContext } from './base'
import { Cell } from './Cell'
import { Row } from './Row'
import { Body } from './Body'
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
      <Wrapper ref={ref}>
        <StyledTable {...props} mode={actualMode} />
      </Wrapper>
    </TableContext.Provider>
  )
}

Table.propTypes = {
  breakpoint: PropTypes.number,
  mode: PropTypes.oneOf(['web', 'mobile'])
}

const Wrapper = styled.div(css(styles.wrapper))

const StyledTable = styled.table(css(styles.default), ({ mode }) =>
  css(styles[mode])
)

Table.Cell = Cell
Table.Row = Row
Table.Body = Body
Table.Header = Header
