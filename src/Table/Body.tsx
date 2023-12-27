import React, {FC, useContext } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Body.styles'
import { TableContext } from './base'

export const Body: FC<any> = props => {
  const { mode } = useContext(TableContext)

  return <StyledBody {...props} mode={mode as keyof typeof styles} />
}

interface StyledBodyProps {
  mode: keyof typeof styles
}

const StyledBody = styled.tbody<StyledBodyProps>(({ mode }) => css(styles[mode] as SystemStyleObject))
