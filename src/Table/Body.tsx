import React, { FC, useContext } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Body.styles'
import { TableContext } from './base'

interface Props {
  mode: Styles
}

export const Body: FC<Props> = props => {
  const { mode } = useContext(TableContext)

  return <StyledBody {...props} mode={mode as Styles} />
}

const StyledBody = styled.tbody<Props>(({ mode }) =>
  css(styles[mode] as SystemStyleObject)
)

type Styles = keyof typeof styles
