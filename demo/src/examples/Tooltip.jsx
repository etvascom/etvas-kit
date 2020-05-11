import React from 'react'

import { Flex } from '@ivoryio/kogaio'
import { Tooltip, Typography } from '../../../src'

const text = `This is an informational tooltip. It\`s purpose is to inform.\n This is an informational tooltip.`

const TooltipExamples = props => (
  <Flex>
    <Tooltip {...props}>
      <Typography variant='smallText'>{text}</Typography>
    </Tooltip>
  </Flex>
)

TooltipExamples.propTypes = {}

export default TooltipExamples
