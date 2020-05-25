import React from 'react'
import { Table, Rating } from '../src'

const { Row, Header, Body, Cell } = Table

export default {
  title: 'Demo/Rating',
  component: Rating
}

export const Ratings = () => (
  <Table breakpoint={400}>
    <Header>
      <Row>
        <Cell>Props</Cell>
        <Cell>Result</Cell>
      </Row>
    </Header>
    <Body>
      <Row>
        <Cell leader>Color</Cell>
        <Cell>
          <Rating color='red' stars={5} />
        </Cell>
      </Row>
      <Row>
        <Cell leader>Font Size</Cell>
        <Cell>
          <Rating fontSize={3} />
        </Cell>
      </Row>
    </Body>
  </Table>
)
