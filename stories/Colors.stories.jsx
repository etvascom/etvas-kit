import React from 'react'
import { Flex, Box, Chip } from '../src'

import { shading, hex2hsv } from '../src/colorUtilities'

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
  '#0040E3',
  '#d6e6ff',
  '#330000',
  '#B22222',
  '#b8860b',
  '#fffaf0',
  '#ff8c00',
  '#008b8b'
]

const variations = {
  Lightest: 80,
  Lighter: 50,
  Light: 20,
  zero: 0,
  Dark: -20,
  Darker: -30
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

  // variants.forEach(base =>
  //   Object.keys(variations).forEach(name => {
  //     const amount = variations[name]
  //     console.warn({
  //       base,
  //       hsl: hex2hsv(base),
  //       amount,
  //       shading: shading(base, amount)
  //     })
  //   })
  // )

  variants.forEach(base => {
    console.warn(`HSV: ${base}`, hex2hsv(base))
  })

  return (
    <Box>
      {processed.map(colors => (
        <Flex key={colors.base} my={2}>
          <Chip color={colors.base}>BASE {colors.base}</Chip>
          {Object.keys(variations).map(colorName => (
            <Chip key={colorName} color={colors[colorName]}>
              {colorName} ({variations[colorName]}%) {colors[colorName]}
            </Chip>
          ))}
        </Flex>
      ))}
    </Box>
  )
}

export default {
  title: 'Guides/Colors'
}

export const Default = () => <Layout />
