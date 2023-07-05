import React, { useContext } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import styles from './Body.styles'
import { TableContext } from './base'

export const Body = props => {
  const { mode } = useContext(TableContext)

  return <StyledBody {...props} mode={mode} />
}

const StyledBody = styled.tbody(({ mode }) => css(styles[mode]))
