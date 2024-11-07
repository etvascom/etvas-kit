import {
  Children,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
  useContext,
  useMemo
} from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card } from './Card'
import { Props as CellProps } from './Cell'
import styles from './Row.styles'
import { HeaderContext, TableContext } from './base'

interface Row {
  cell: ReactNode
  header: ReactNode
}

export const Row: FC<PropsWithChildren> = ({ children }) => {
  const headerCtx = useContext(HeaderContext)
  const { mode, cells, verticalBreakpointDisplay } = useContext(TableContext)

  const type = useMemo(() => (headerCtx ? 'header' : 'body'), [headerCtx])

  const childArray = Children.toArray(children) as ReactElement<CellProps>[]

  if (type === 'body' && mode === 'mobile') {
    let leader
    const remainingCells = [] as Row[]

    childArray.forEach((child, idx) => {
      if (child.props.leader) {
        leader = child
        return
      }

      remainingCells.push({
        cell: cloneElement(child, { type: 'body' }),
        header: cells[idx]
      })
    })

    return (
      <PseudoRow>
        <Card leader={leader}>
          {remainingCells.map(({ cell, header }, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card.Item
              key={idx}
              header={header}
              cell={cell}
              vertical={verticalBreakpointDisplay}
            />
          ))}
        </Card>
      </PseudoRow>
    )
  }

  return (
    <StyledTr mode={mode as Styles}>
      {childArray.map((child, idx) =>
        cloneElement(child, { idx, key: idx, type })
      )}
    </StyledTr>
  )
}

const PseudoRow = styled.tr(css(styles.pseudoTr) as any)

interface StyledTrProps {
  mode: Styles
}

const StyledTr = styled.tr<StyledTrProps>(
  ({ mode }) => css(styles[mode] as SystemStyleObject) as any
)

Row.propTypes = {
  children: PropTypes.node
}

Row.displayName = 'Row'

type Styles = keyof typeof styles
