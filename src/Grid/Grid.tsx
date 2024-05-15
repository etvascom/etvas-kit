import React, { FC, PropsWithChildren, createContext, useContext } from 'react'

import styled from 'styled-components'

import { Box } from '../Box'
import styles from './Grid.styles'

export const GridContext = createContext<GridProps>({
  cols: 1,
  hspace: '1rem',
  vspace: '1rem'
})

const Container = styled(Box)(styles.container)
const Item = styled(Box)<GridProps & GridItemProps & { theme: any }>(
  styles.item as any
)
const Placeholder = styled.div(styles.placeholder)

export interface GridItemProps {
  span?: number
}

export const GridItem: FC<PropsWithChildren<GridItemProps>> = ({
  children,
  span = 1,
  ...props
}) => {
  const grid = useContext(GridContext)

  const extraItems = []
  for (let i = 1; i < span; i++) {
    extraItems.push(<Placeholder key={i} />)
  }

  return (
    <>
      <Item span={span} {...props} {...grid}>
        {children}
      </Item>
      {extraItems}
    </>
  )
}

GridItem.displayName = 'Grid.Item'

export interface GridProps {
  cols: number
  hspace?: string
  vspace?: string
}

interface GridSubComponents {
  Item: typeof GridItem
}

export const Grid: FC<PropsWithChildren<GridProps>> & GridSubComponents = ({
  children,
  cols,
  hspace = '1rem',
  vspace = '1rem'
}) => (
  <GridContext.Provider value={{ cols, hspace, vspace }}>
    <Container>{children}</Container>
  </GridContext.Provider>
)

Grid.displayName = 'Grid'

Grid.Item = GridItem
