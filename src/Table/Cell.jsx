import React, { useContext, useEffect } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles from './Cell.styles'
import { TableContext } from './base'

export const Cell = ({ idx, type, children, leader }) => {
  const { mode, setHeaderCell } = useContext(TableContext)

  useEffect(() => {
    if (type === 'header') {
      setHeaderCell(idx, children)
    }
  }, [idx, children, setHeaderCell, type])

  const Wrapper = type === 'body' && mode === 'mobile' ? StyledDiv : StyledTd

  return (
    <Wrapper type={type} leader={leader} mode={mode}>
      {children}
    </Wrapper>
  )
}

const StyledDiv = styled.div(css(styles.shared), css(styles.mobile))

const StyledTd = styled.td(
  css(styles.shared),
  ({ type }) => css(styles[type]),
  ({ mode }) => css(styles[mode]),
  ({ leader }) => (leader ? css(styles.leader) : {})
)

Cell.propTypes = {
  leader: PropTypes.bool,
  idx: PropTypes.number,
  type: PropTypes.oneOf(['header', 'body']),
  children: PropTypes.node
}

Cell.displayName = 'Cell'
