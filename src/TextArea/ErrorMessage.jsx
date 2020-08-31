import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Typography } from '../Typography'

export const ErrorMessage = ({ error, preserveSpace }) => {
  if (error) {
    return (
      <Typography variant='textSmall' color='error'>
        {error}
      </Typography>
    )
  }

  if (preserveSpace) {
    return <Dummy />
  }

  return null
}

const Dummy = styled.div`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  height: 20px;
  opacity: 0;
  visibility: hidden;
`

ErrorMessage.propTypes = {
  error: PropTypes.node,
  preserveSpace: PropTypes.bool
}
