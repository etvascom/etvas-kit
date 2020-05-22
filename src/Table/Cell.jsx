import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { TableContext, HeaderContext } from './base'
import style from './Cell.style'

export const Cell = ({ idx, children, mobileHeader }) => {
  const { cells, setHeaderCell } = useContext(TableContext)
  const headerCtx = useContext(HeaderContext)

  useEffect(() => {
    if (headerCtx) {
      setHeaderCell(idx, children)
    }
  }, [idx, children, setHeaderCell, headerCtx])

  const headerContent = cells && cells[idx]

  return (
    <StyledTd>
      {headerCtx ? null : headerContent}
      {children}
    </StyledTd>
  )
}

const StyledTd = styled.td(css(style))

Cell.propTypes = {
  mobileHeader: PropTypes.bool,
  idx: PropTypes.number,
  children: PropTypes.node
}

Cell.displayName = 'Cell'
