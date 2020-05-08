import React from 'react'

import { Flex } from '@ivoryio/kogaio'
import { Tooltip } from '../../../src'

const TooltipExamples = props => (
  <Flex>
    <Tooltip
      arrow={{ alignment: 'center', direction: 'bottom' }}
      variant='footer'
      {...props}
    />
  </Flex>
)

TooltipExamples.propTypes = {}

export default TooltipExamples
