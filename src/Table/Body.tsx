import { FC, PropsWithChildren, useContext } from 'react'

import css, { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'

import styles from './Body.styles'
import { TableContext } from './base'

interface Props {
  mode: Styles
}

export const Body: FC<PropsWithChildren<Props>> = ({
  mode = 'web',
  ...props
}) => {
  const { mode: contextMode } = useContext(TableContext)

  return <StyledBody {...props} mode={(contextMode as Styles) || mode} />
}

const StyledBody = styled.tbody<Props>(
  ({ mode }) => css(styles[mode] as SystemStyleObject) as any
)

type Styles = keyof typeof styles
