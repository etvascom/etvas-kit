import React, { useContext } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { color, border, grid } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Box } from '@ivoryio/kogaio'
import styles from './TableCell.style'
import { TableContext } from './Table'

const HeaderCellStyle = styled(Box)(css(styles.header), color, border, grid)

const BodyCellStyle = styled(Box)(css(styles.body), color, border, grid)

export const HeaderCell = ({ children, ...props }) => {
  const gridTemplateColumns = useContext(TableContext)
  return (
    <HeaderCellStyle {...props} gridTemplateColumns={gridTemplateColumns}>
      {children}
    </HeaderCellStyle>
  )
}

export const BodyCell = ({ children, ...props }) => {
  const gridTemplateColumns = useContext(TableContext)
  return (
    <BodyCellStyle {...props} gridTemplateColumns={gridTemplateColumns}>
      {children}
    </BodyCellStyle>
  )
}

HeaderCell.propTypes = {
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.grid,
  children: PropTypes.node
}

BodyCell.propTypes = {
  ...propTypes.color,
  ...propTypes.border,
  children: PropTypes.node
}
