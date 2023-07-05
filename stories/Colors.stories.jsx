import React from 'react'

import { Box, Chip, Flex } from '../src'
import { shading } from '../src/utils'

const variants = [
  '#000000',
  '#ffffff',
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#00ffff',
  '#ff00ff',
  '#c0c0c0',
  '#808080',
  '#800000',
  '#808000',
  '#008000',
  '#800080',
  '#008080',
  '#000080',
  '#d6e6ff',
  '#330000',
  '#B22222',
  '#b8860b',
  '#fffaf0',
  '#ff8c00',
  '#008b8b',
  '#0040E3'
]

const variations = {
  Lightest: 70,
  Lighter: 45,
  Light: 20,
  zero: 0,
  Dark: -33,
  Darker: -66
}

const Layout = () => {
  const processed = variants.map(base =>
    Object.keys(variations).reduce(
      (branding, colorName) => ({
        ...branding,
        [colorName]: shading(base, variations[colorName])
      }),
      { base }
    )
  )

  return (
    <Box>
      {processed.map(colors => (
        <Flex key={colors.base} my={2}>
          <Chip color={colors.base}>BASE {colors.base}</Chip>
          {Object.keys(variations).map(colorName => (
            <Chip key={colorName} color={colors[colorName]}>
              {colorName} {colors[colorName]}
            </Chip>
          ))}
        </Flex>
      ))}

      <Flex>
        <Chip color='#0040E3'>REF #0040E3</Chip>
        <Chip color='#F5F7FD'>Lightest #F5F7FD</Chip>
        <Chip color='#E6EEFF'>Lighter #E6EEFF</Chip>
        <Chip color='#5585FF'>Light#5585FF</Chip>
        <Chip color='#0040E3'>ZERO #0040E3</Chip>
        <Chip color='#002B99'>Dark #002B99</Chip>
        <Chip color='#00154D'>Darkest #00154D</Chip>
      </Flex>
    </Box>
  )
}

export default {
  title: 'Guides/Colors'
}

export const Default = () => <Layout />
