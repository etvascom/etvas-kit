import styled from 'styled-components'
import css from '@styled-system/css'
import { typography } from 'styled-system'

import { BodyCell, TableRow, HeaderCell } from './TableCell'
import style from './Table.style'

const Table = styled.table(typography, css(style))

const TableBody = styled.tbody``
const TableHeader = styled.thead``

Table.HeaderCell = HeaderCell
Table.BodyCell = BodyCell
Table.Row = TableRow
Table.Body = TableBody
Table.Header = TableHeader

export default Table
