import React from 'react'
import { Flex, Card, Typography, Table } from '../src'

const { Row, Header, Body, Cell } = Table

export default {
  title: 'Demo/Typography',
  component: Typography
}

export const Variants = () => {
  const variants = [
    'textSmallest',
    'textSmall',
    'textLarge',
    'titleSmall',
    'labelLarge',
    'titleLarge',
    'titleLargest',
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

export const Truncated = () => (
  <Flex>
    <Card width='250px' height='100px' p={2} m={1}>
      <Typography variant='textLarge' truncate>
        Some very long text that gets truncated
      </Typography>
    </Card>
    <Card width='250px' height='100px' p={2} m={1}>
      <Typography variant='textLarge' truncate={2}>
        Some very long text that gets truncated to the number of lines that is
        specified
      </Typography>
    </Card>
  </Flex>
)

export const ResponsiveVariant = () => (
  <Card width='350px' p={2} m={1}>
    <Typography variant={['labelButton', 'textSmall', 'titleLargest']}>
      Typography that changes variant across device sizes
    </Typography>
  </Card>
)

export const NoStyling = () => (
  <Card width='350px' p={2} m={1} fontFamily='"Helvetica Now"'>
    <p style={{ fontWeight: 100 }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontWeight: 400 }}>
      The quick brown fox jumps over the lazy dog.
    </p>
    <p style={{ fontWeight: 800 }}>
      The quick brown fox jumps over the lazy dog.
    </p>
  </Card>
)
