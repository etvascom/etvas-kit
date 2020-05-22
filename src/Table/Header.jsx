import React, { useContext } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import styles from './Header.styles'
import { HeaderContext, TableContext } from './base'

export const Header = props => {
  const { mode } = useContext(TableContext)
  const ctx = {}

  return (
    <HeaderContext.Provider value={ctx}>
      <StyledThead {...props} mode={mode} />
    </HeaderContext.Provider>
  )
}

const StyledThead = styled.thead(({ mode }) => css(styles[mode]))
