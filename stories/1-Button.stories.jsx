import React from 'react'
import { Button, Table } from '../src'

const { Row, Header, Body, Cell } = Table

export default {
  title: 'Demo/Button',
  component: Button
}

export const Variants = () => {
  const variants = ['primary', 'outline', 'outlineAlt', 'link', 'linkSecondary']

  return (
    <Table breakpoint={400}>
      <Header>
        <Row>
          <Cell>Variant</Cell>
          <Cell>Normal</Cell>
          <Cell>Disabled</Cell>
          <Cell>Loading</Cell>
          <Cell>Disabled & Loading</Cell>
        </Row>
      </Header>
      <Body>
        {variants.map(variant => (
          <Row key={variant}>
            <Cell leader>{variant}</Cell>
            <Cell>
              <Button variant={variant}>Hello Button</Button>
            </Cell>
            <Cell>
              <Button disabled variant={variant}>
                Hello Button
              </Button>
            </Cell>
            <Cell>
              <Button loading variant={variant}>
                Hello Button
              </Button>
            </Cell>
            <Cell>
              <Button disabled loading variant={variant}>
                Hello Button
              </Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}
