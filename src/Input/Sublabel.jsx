import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { Box } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

export const Sublabel = ({ className, content, type }) => (
  <Wrapper className={className}>
    <Box mr={1}>
      <Icon
        color={type === 'error' ? 'error' : 'success'}
        fontSize={0}
        name={type === 'error' ? 'error_outline' : 'check_circle_outline'}
      />
    </Box>
    <Typography color={type === 'error' ? 'error' : 'success'} fontSize={0}>
      {content}
    </Typography>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  justify-content: flex-end;
  width: 100%;
`

Sublabel.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['error', 'valid'])
}
Sublabel.displayName = 'Sublabel'
