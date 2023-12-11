import { cloneElement, useContext, useMemo } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card } from './Card'
import styles from './Row.styles'
import { HeaderContext, TableContext } from './base'

export const Row = ({ children }) => {
  const headerCtx = useContext(HeaderContext)
  const { mode, cells, verticalBreakpointDisplay } = useContext(TableContext)

  const type = useMemo(() => (headerCtx ? 'header' : 'body'), [headerCtx])

  if (type === 'body' && mode === 'mobile') {
    let leader
    const remainingCells = []

    children.forEach((c, idx) => {
      if (c.props.leader) {
        leader = c
        return
      }

      remainingCells.push({
        cell: cloneElement(c, { type: 'body' }),
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
    <StyledTr mode={mode}>
      {Array.from(children).map((child, idx) =>
        cloneElement(child, { idx, key: idx, type })
      )}
    </StyledTr>
  )
}

const PseudoRow = styled.tr(css(styles.pseudoTr))

const StyledTr = styled.tr(({ mode }) => css(styles[mode]))

Row.propTypes = {
  children: PropTypes.node
}

Row.displayName = 'Row'
