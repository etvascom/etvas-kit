import React, { useContext, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { border, color } from 'styled-system'
import css from '@styled-system/css'

import style from './Table.style'
import { HeaderContext } from './base'

export const TableRow = styled.tr(css(style), border, color)

export const Header = props => {
  const ctx = {}

  return (
    <HeaderContext.Provider value={ctx}>
      <thead {...props} />
    </HeaderContext.Provider>
  )
}
