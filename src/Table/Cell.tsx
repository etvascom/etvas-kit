import React, { FC, PropsWithChildren, useContext, useEffect } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Cell.styles'
import { TableContext } from './base'

export interface Props {
  leader?: boolean
  idx?: number
  type?: 'header' | 'body'
}

export const Cell: FC<PropsWithChildren<Props>> = ({
  idx,
  type = 'header',
  children,
  leader = false
}) => {
  const { mode, setHeaderCell } = useContext(TableContext)

  useEffect(() => {
    if (type === 'header' && idx !== undefined) {
      setHeaderCell(idx, children)
    }
  }, [idx, children, setHeaderCell, type])

  if (type === 'body' && mode === 'mobile') {
    return <StyledDiv />
  }

  return (
    <StyledTd type={type} leader={leader} mode={mode as Styles}>
      {children}
    </StyledTd>
  )
}

const StyledDiv = styled.div(
  css(styles.shared as SystemStyleObject),
  css(styles.mobile)
)

interface StyledTdProps {
  type: Styles
  mode: Styles
  leader: boolean
}

const StyledTd = styled.td<StyledTdProps>(
  css(styles.shared as SystemStyleObject),
  ({ type }) => css(styles[type] as SystemStyleObject),
  ({ mode }) => css(styles[mode] as SystemStyleObject),
  ({ leader }) => (leader ? css(styles.leader as SystemStyleObject) : {})
)

Cell.displayName = 'Cell'

type Styles = keyof typeof styles
