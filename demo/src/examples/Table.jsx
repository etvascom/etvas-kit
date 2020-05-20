import React from 'react'
import { Table, Typography } from '../../../src'

const { Row, HeaderCell, BodyCell, Body, Header } = Table

const TableExample = () => (
  <Table textAlign='center'>
    <Header>
      <Row>
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
      </Row>
    </Header>
    <Body>
      <Row>
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
      </Row>
      <Row>
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
      </Row>
      <Row bg='blue'>
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
      </Row>
      <Row borderRadius={20} bg='red'>
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
      </Row>
    </Body>
  </Table>
)

export default TableExample
