import React from 'react'
import { Table, HeaderCell, BodyCell, Typography } from '../../../src'

const TableExample = () => (
  <Table gridRowGap='10px' p={4} gridTemplate='1fr 2fr 1fr 1fr'>
    <HeaderCell px={2} py={3}>
      <Typography variant='textSmall'>The</Typography>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown</Typography>
      <span></span>
    </HeaderCell>
    <BodyCell backgroundColor='red' px={2} py={3}>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown fox</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
    </BodyCell>
    <BodyCell px={2} py={3}>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown fox</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
    </BodyCell>
    <BodyCell backgroundColor='yellowgreen' px={2} py={3}>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown fox</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
    </BodyCell>
    <BodyCell backgroundColor='royalblue' px={2} py={3}>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown fox</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
    </BodyCell>
    <BodyCell px={2} py={3}>
      <Typography variant='textSmall'>The quick</Typography>
      <Typography variant='textSmall'>The quick brown fox</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
      <Typography variant='textSmall'>The quick brown f</Typography>
    </BodyCell>
  </Table>
)

export default TableExample
