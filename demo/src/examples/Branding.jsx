import React, { useEffect, useState } from 'react'
import { brandingService, Flex, Button, Input, Typography, Box } from 'src'

export const BrandingExample = () => {
  const [showIframe, setShowIframe] = useState(false)
  const [cssVars, setCssVars] = useState(brandingService.cssVars)

  const handleColorChange = cssVar => ev => {
    brandingService.updateCssVars({
      [cssVar]: ev.target.value
    })
  }

  useEffect(() => {
    const handler = vars => setCssVars(brandingService.cssVars)
    brandingService.on('change', handler)
    return () => brandingService.removeListener('change', handler)
  }, [setCssVars])

  return (
    <Flex>
      <Box width={1 / 4}>
        <Typography variant='titleLarge'>Customize</Typography>
        <Input
          label='Brand color'
          onChange={handleColorChange('brand')}
          value={cssVars.brand}
        />

        <Input
          label='Accent color'
          onChange={handleColorChange('accent')}
          value={cssVars.accent}
        />

        <Input
          label='Text color'
          onChange={handleColorChange('text')}
          value={cssVars.text}
        />
        <Input
          label='Lighter text color'
          onChange={handleColorChange('lighterText')}
          value={cssVars.lighterText}
        />
      </Box>
      <Box width={3 / 4}>
        <Button
          onClick={() => setShowIframe(!showIframe)}
          title={showIframe ? 'Hide iframe' : 'Show iframe'}
        />
        {showIframe && (
          <iframe title='child' src='/' width='100%' height='300px' />
        )}
      </Box>
    </Flex>
  )
}
