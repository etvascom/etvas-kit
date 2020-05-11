import React from 'react'
import { Flex, Box } from '@ivoryio/kogaio'
import { Button } from '../../../src'

const ButtonExamples = props => (
  <Flex {...props}>
    <Box mr={3}>
      <Flex flexDirection='column'>
        <Button title='Primary' variant='primary' />
        <Box mt={2}>
          <Button disabled title='Primary disabled' variant='primary' />
        </Box>
      </Flex>
    </Box>
    <Box mx={3}>
      <Flex flexDirection='column'>
        <Button title='Outline' variant='outline' />
        <Box mt={2}>
          <Button disabled title='Outline disabled' variant='outline' />
        </Box>
      </Flex>
    </Box>
    <Box mx={3}>
      <Flex flexDirection='column'>
        <Button title='Outline alt' variant='outlineAlt' />
        <Box mt={2}>
          <Button disabled title='Outline alt disabled' variant='outlineAlt' />
        </Box>
      </Flex>
    </Box>
    <Box mx={3}>
      <Flex flexDirection='column'>
        <Button title='Link' variant='link' />
        <Button
          disabled
          onClick={() => {}}
          title='Link disabled'
          variant='link'
        />

        <Box mt={2}>
          <Button title='Link secondary' variant='linkSecondary' />
          <Button
            title='Link secondary disabled'
            variant='linkSecondary'
            disabled
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)

export default ButtonExamples
