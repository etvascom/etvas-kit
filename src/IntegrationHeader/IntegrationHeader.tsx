import { FC, ReactNode } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Typography } from '../Typography'

interface IntegrationHeaderProps {
  title: ReactNode
  providerPrefix: ReactNode
  providerName: ReactNode
  url: string
}

export const IntegrationHeader: FC<IntegrationHeaderProps> = ({
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
