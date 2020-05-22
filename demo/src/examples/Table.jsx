import React from 'react'
import { Table, Typography } from '../../../src'

const { Row, HeaderCell, BodyCell, Body, Header } = Table

const TableExample = () => (
  <Table textAlign='center'>
    <Header>
      <Row bg='white'>
        <HeaderCell>
          <Typography variant='labelButton' color='tableText'>
            The
          </Typography>
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
        <BodyCell></BodyCell>
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
      <Row bg='red'>
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
    </Body>
  </Table>
)

export default TableExample
