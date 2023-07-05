import React from 'react'

import { Card, Flex, Table, Typography } from '../src'

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
      <Typography variant='textLarge' truncate={false}>
        Some very long text that has a false truncate prop and will not get
        truncated
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

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

export const NoStyling = () => (
  <Card width='100%' p={2} m={1} fontFamily='"Helvetica Now"'>
    {weights.map(weight => (
      <>
        <b style={{ color: 'gray' }}>FONT WEIGHT: {weight}</b>
        <p style={{ fontWeight: weight }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </>
    ))}
  </Card>
)

const customFonts = ['Arial', 'Times', 'Times New Roman']

export const CustomFontTypography = () => {
  const themeWithCustomFonts = customFonts.map(font => ({
    fonts: { primary: font }
  }))

  return (
    <>
      {themeWithCustomFonts.map(customTheme => (
        <Card mb={4}>
          <Typography theme={customTheme} variant='title24Light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            suscipit inventore molestias mollitia quaerat, dolore, consectetur
            dolorem, voluptatum reprehenderit eveniet consequuntur dicta hic
            soluta aliquid at ad impedit quod aliquam.
          </Typography>
        </Card>
      ))}
    </>
  )
}
