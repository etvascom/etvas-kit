import React, { useContext } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Box } from '@ivoryio/kogaio'
import styles from './TableCell.style'
import { TableContext } from './Table'

const HeaderCellStyle = styled(Box)(
  css(styles.header),
  ({ gridTemplate, ...props }) => ({
    gridAutoColumns: gridTemplate,
    ...props
  })
)

const BodyCellStyle = styled(Box)(
  css(styles.body),
  ({ gridTemplate, ...props }) => ({
    gridAutoColumns: gridTemplate,
    ...props
  })
)

export const HeaderCell = ({ children, ...props }) => {
  const gridTemplate = useContext(TableContext)
  return (
    <HeaderCellStyle {...props} gridTemplate={gridTemplate}>
      {children}
    </HeaderCellStyle>
  )
}

export const BodyCell = ({ children, ...props }) => {
  const gridTemplate = useContext(TableContext)
  return (
    <BodyCellStyle {...props} gridTemplate={gridTemplate}>
      {children}
    </BodyCellStyle>
  )
}

HeaderCell.propTypes = {
  children: PropTypes.node
}

BodyCell.propTypes = {
  children: PropTypes.node
}
