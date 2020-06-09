import React, { useCallback, useMemo, useState } from 'react'

import { EmbededAppParent } from '../embededApp'
import { Flex, Box } from '@ivoryio/kogaio'
import { Typography, Button, Card } from '../../../../src'

const demos = {
  embededApp: {
    name: 'Embeded apps',
    Component: EmbededAppParent
  }
}

export const Root = () => {
  const [currentDemo, setCurrentDemo] = useState()
  const handleLoadDemo = useCallback(demo => () => setCurrentDemo(demo), [
    setCurrentDemo
  ])
  const Component = useMemo(
    () => (currentDemo ? demos[currentDemo].Component : null),
    [currentDemo]
  )

  return (
    <Flex flexDirection='column' p={10}>
      <Typography variant='titleLarge'>Iframe demos</Typography>
      <Typography variant='textLarge'>Select a demo:</Typography>
      {Object.keys(demos).map(demo => (
        <Button
          key={demo}
          disabled={demo === currentDemo}
          onClick={handleLoadDemo(demo)}
          variant='outline'>
          {demos[demo].name}
        </Button>
      ))}
      <Box mt={10}>
        <Card p={5}>{currentDemo ? <Component /> : 'No demo selected'}</Card>
      </Box>
    </Flex>
  )
}
