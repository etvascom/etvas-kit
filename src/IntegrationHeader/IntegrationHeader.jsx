import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '../Flex'
import { Typography } from '../Typography'

export const IntegrationHeader = ({
  title,
  providerPrefix,
  providerName,
  url
}) => (
  <Flex
    width='100%'
    justifyContent='space-between'
    alignItems='flex-start'
    flexDirection={['column', 'row']}
    mb={[6, 8]}>
    <Typography variant='titleLarge'>{title}</Typography>
    <Typography variant='textSmall' color='outline' mt={[4, 0]}>
      {providerPrefix}{' '}
      <StyledA href={url} target='_blank' rel='noopener noreferrer'>
        {providerName}
      </StyledA>
    </Typography>
  </Flex>
)

const StyledA = styled.a(
  css({
    textDecoration: 'underline',
    textDecorationColor: 'outline',
    color: 'inherit',
    font: 'inherit'
  })
)

IntegrationHeader.propTypes = {
  title: PropTypes.node,
  providerPrefix: PropTypes.node,
  providerName: PropTypes.node,
  url: PropTypes.string
}
