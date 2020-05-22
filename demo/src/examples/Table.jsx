import React from 'react'
import { Table, Typography } from '../../../src'

const { Row, Cell, Body, Header } = Table

export const TableExample = () => (
  <Table textAlign='center'>
    <Header>
      <Row>
        <Cell>One</Cell>
        <Cell>Two</Cell>
        <Cell></Cell>
      </Row>
    </Header>
    <Body>
      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>

      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>

      <Row>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>
            The quick browsaa greger grgerfn f
          </Typography>
        </Cell>
        <Cell>
          <Typography variant='textSmall'>The quick brown f</Typography>
        </Cell>
      </Row>
    </Body>
  </Table>
)
