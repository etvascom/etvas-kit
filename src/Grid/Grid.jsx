import React, { createContext, useContext } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../Box'
import styles from './Grid.styles'

export const GridContext = createContext()

const Container = styled(Box)(styles.container)
const Item = styled(Box)(styles.item)
const Placeholder = styled.div(styles.placeholder)

export const GridItem = ({ children, span = 1, ...props }) => {
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

GridItem.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number
}

GridItem.defaultProps = {
  span: 1
}

GridItem.displayName = 'Grid.Item'

export const Grid = ({ children, cols, hspace, vspace }) => (
  <GridContext.Provider value={{ cols, hspace, vspace }}>
    <Container>{children}</Container>
  </GridContext.Provider>
)

Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number.isRequired,
  hspace: PropTypes.string,
  vspace: PropTypes.string
}

Grid.defaultProps = {
  hspace: '1rem',
  vspace: '1rem'
}

Grid.displayName = 'Grid'

Grid.Item = GridItem
