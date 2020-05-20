import React from 'react'
import { Table, Typography } from '../../../src'

const { TableRow, HeaderCell, BodyCell, TableBody, TableHeader } = Table

const TableExample = () => (
  <Table textAlign='center' borderSpacing='0 16px'>
    <TableHeader>
      <TableRow>
        <HeaderCell>
          <Typography variant='textSmall'>The</Typography>
        </HeaderCell>
        <HeaderCell>
          <Typography variant='textSmall'>The</Typography>
        </HeaderCell>
        <HeaderCell>
          <Typography variant='textSmall'>The</Typography>
        </HeaderCell>
        <HeaderCell>
          <Typography variant='textSmall'>The</Typography>
        </HeaderCell>
        <HeaderCell></HeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
      </TableRow>
      <TableRow>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
      </TableRow>
      <TableRow bg='blue'>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
      </TableRow>
      <TableRow borderRadius={20} bg='red'>
        <BodyCell py={10}>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
        <BodyCell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </BodyCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExample
