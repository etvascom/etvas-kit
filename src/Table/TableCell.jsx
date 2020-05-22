import React from 'react'

import styled from 'styled-components'
import { space, color, border } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import css from '@styled-system/css'

import style from './TableCell.style'

export const HeaderCellStyle = styled.th(space)
export const BodyCellStyle = styled.td(space)

export const HeaderCell = props => <HeaderCellStyle px={2} py={3} {...props} />
export const BodyCell = props => <BodyCellStyle px={2} py={3} {...props} />

export const TableRow = styled.tr(css(style), border, color)

HeaderCell.propTypes = {
  ...propTypes.space
}

BodyCell.propTypes = {
  ...propTypes.space
}

TableRow.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  borderRadius: PropTypes.number
}
