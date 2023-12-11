import { useMemo, useState } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useResizeObserver } from '../utils/hooks'
import { Body } from './Body'
import { Cell } from './Cell'
import { Header } from './Header'
import { Row } from './Row'
import styles from './Table.styles'
import { TableContext } from './base'

const useResizeObserverRaf = () => {
  const [size, setSize] = useState({ width: undefined, height: undefined })
  const onResize = size => requestAnimationFrame(() => setSize(size))
  const { ref } = useResizeObserver({ onResize })
  return { ref, ...size }
}

export const Table = ({
  mode,
  breakpoint,
  verticalBreakpointDisplay,
  ...props
}) => {
  const [cells, setCells] = useState([])
  const { ref, width = 1 } = useResizeObserverRaf()

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
      verticalBreakpointDisplay,
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
  mode: PropTypes.oneOf(['web', 'mobile']),
  verticalBreakpointDisplay: PropTypes.bool
}

const Wrapper = styled.div(css(styles.wrapper))

const StyledTable = styled.table(css(styles.default), ({ mode }) =>
  css(styles[mode])
)

Table.Cell = Cell
Table.Row = Row
Table.Body = Body
Table.Header = Header
