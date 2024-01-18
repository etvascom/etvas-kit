import React, { FC, PropsWithChildren, useMemo, useState } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import { useResizeObserver } from '../utils/hooks'
import { Body } from './Body'
import { Cell } from './Cell'
import { Header } from './Header'
import { Row } from './Row'
import styles from './Table.styles'
import { TableContext } from './base'

interface Props {
  mode?: 'web' | 'mobile'
  breakpoint?: number
  verticalBreakpointDisplay?: boolean
}

interface TableSubComponents {
  Cell: typeof Cell
  Row: typeof Row
  Body: typeof Body
  Header: typeof Header
}

export const Table: FC<PropsWithChildren<Props>> & TableSubComponents = ({
  mode,
  breakpoint,
  verticalBreakpointDisplay = false,
  ...props
}) => {
  const [cells, setCells] = useState<any[]>([])
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
      setHeaderCell: (idx: number, content: any) => {
        if (!cells || cells[idx] !== content) {
          const newCells: any[] = [...cells]
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

const Wrapper = styled.div(css(styles.wrapper) as any)

interface StyledTableProps {
  mode: Styles
}

const StyledTable = styled.table<StyledTableProps>(
  css(styles.default as SystemStyleObject) as any,
  ({ mode }) => css(styles[mode] as SystemStyleObject) as any
)

Table.Cell = Cell
Table.Row = Row
Table.Body = Body
Table.Header = Header

interface Size {
  width?: number
  height?: number
}

const useResizeObserverRaf = () => {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined
  })
  const onResize = (size: Size) => requestAnimationFrame(() => setSize(size))
  const { ref } = useResizeObserver({ onResize })
  return { ref, ...size }
}

type Styles = keyof typeof styles
