import React from 'react'

import { Flex, Box, Icon } from '@ivoryio/kogaio'

import { Checkbox, Typography } from '../../../src'

const CheckboxExample = () => (
  <Flex>
    <Box>
      <Checkbox id='check' icon='&times;'>
        <Typography ml={4}>Ana are mere</Typography>
      </Checkbox>
    </Box>
    {/* For icons I recommend a font size of 14px */}
    <Box ml={4}>
      <Checkbox id='cc' icon={<Icon fontSize='15px' name='exit_to_app' />}>
        <Typography ml={4}>Ana are mere</Typography>
      </Checkbox>
    </Box>
  </Flex>
)

export default CheckboxExample
