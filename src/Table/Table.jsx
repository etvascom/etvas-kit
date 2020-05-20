import styled from 'styled-components'

import { typography } from 'styled-system'

import { BodyCell, TableRow, HeaderCell } from './TableCell'

const Table = styled.table(
  typography,
  ({ borderSpacing }) => `
  border-spacing : ${borderSpacing};
  width: 100%;
  border-collapse: separate;
`
)

const TableBody = styled.tbody``
const TableHeader = styled.thead``

Table.HeaderCell = HeaderCell
Table.BodyCell = BodyCell
Table.TableRow = TableRow
Table.TableBody = TableBody
Table.TableHeader = TableHeader

export default Table
