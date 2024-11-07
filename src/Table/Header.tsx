import { FC, PropsWithChildren, useContext } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Header.styles'
import { HeaderContext, TableContext } from './base'

export const Header: FC<PropsWithChildren> = props => {
  const tableContext = useContext(TableContext)
  const ctx = {}
  return (
    <HeaderContext.Provider value={ctx}>
      <StyledThead {...props} mode={tableContext.mode as Styles} />
    </HeaderContext.Provider>
  )
}

interface StyledTheadProps {
  mode: Styles
}

const StyledThead = styled.thead<StyledTheadProps>(
  ({ mode }) => css(styles[mode] as SystemStyleObject) as any
)

type Styles = keyof typeof styles
