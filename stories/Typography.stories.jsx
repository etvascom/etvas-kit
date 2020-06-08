import React from 'react'
import { Typography, Table } from '../src'

const { Row, Header, Body, Cell } = Table

export default {
  title: 'Demo/Typography',
  component: Typography
}

export const Variants = () => {
  const variants = [
    'textSmall',
    'textLarge',
    'titleLargest',
    'textLarge',
    'titleSmall',
    'labelLarge',
    'labelSmall',
    'labelSmallBold',
    'labelButton'
  ]

  return (
    <Table breakpoint={400}>
      <Header>
        <Row>
          <Cell>Variant</Cell>
          <Cell>Sample</Cell>
        </Row>
      </Header>
      <Body>
        {variants.map(variant => (
          <Row key={variant}>
            <Cell>{variant}</Cell>
            <Cell>
              <Typography variant={variant}>
                The quick brown fox jumps over the lazy dog.
              </Typography>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}
