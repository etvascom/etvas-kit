import styled from 'styled-components'
import { space, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

export const HeaderCell = styled.th(space)
export const BodyCell = styled.td(space)
export const TableRow = styled.tr(
  color,
  ({ borderRadius }) => `
      & > td:first-child, th:first-child {
        border-top-left-radius: ${borderRadius}px;
        border-bottom-left-radius: ${borderRadius}px;
      }
      & > td:last-child, th:last-child {
        border-top-right-radius: ${borderRadius}px;
        border-bottom-right-radius: ${borderRadius}px;
      }
`
)

HeaderCell.propTypes = {
  ...propTypes.space
}

BodyCell.propTypes = {
  ...propTypes.space
}

TableRow.propTypes = {
  ...propTypes.color,
  borderRadius: PropTypes.number
}
