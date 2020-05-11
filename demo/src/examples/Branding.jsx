import React, { useEffect, useContext, useState } from 'react'
import {
  Flex,
  BrandingContext,
  Button,
  Input,
  Typography,
  Box
} from '../../../src'

export const BrandingExample = () => {
  const [showIframe, setShowIframe] = useState(false)
  const { brandingService } = useContext(BrandingContext)
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
  }, [setCssVars, brandingService])

  if (!cssVars) {
    return null
  }

  return (
    <Flex>
      <Box width={1 / 4}>
        <Typography variant='titleLarge'>Customize</Typography>
        <Input
          label='Brand color'
          onChange={handleColorChange('brandColor')}
          value={cssVars.brandColor}
        />

        <Input
          label='Accent color'
          onChange={handleColorChange('accentColor')}
          value={cssVars.accentColor}
        />

        <Input
          label='Text color'
          onChange={handleColorChange('textColor')}
          value={cssVars.textColor}
        />
        <Input
          label='Lighter text color'
          onChange={handleColorChange('lighterTextColor')}
          value={cssVars.lighterTextColor}
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
