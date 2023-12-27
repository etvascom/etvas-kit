import React, { FC,PropsWithChildren,useContext } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Header.styles'
import { HeaderContext, TableContext } from './base'

export const Header:FC<PropsWithChildren> = props => {
  const tableContext = useContext(TableContext)
  const ctx = {}
  return (
    <HeaderContext.Provider value={ctx}>
      <StyledThead {...props} mode={tableContext.mode as keyof typeof styles} />
    </HeaderContext.Provider>
  )
}

interface StyledTheadProps {
  mode: keyof typeof styles
}

const StyledThead = styled.thead<StyledTheadProps>(({ mode }) => css(styles[mode] as SystemStyleObject))
