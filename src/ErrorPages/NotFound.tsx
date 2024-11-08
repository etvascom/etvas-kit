import { FC } from 'react'
import { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import svg from './404.svg'

const StyledImg = styled.img({
  maxWidth: '80%'
})

export const NotFound: FC<PropsWithChildren> = ({ children }) => (
  <Flex
    width='100%'
    height='100%'
    alignItems='center'
    flexDirection='column'
    justifyContent='center'>
    <StyledImg src={svg} />
    {children ? <Box mt={[8, 15]}>{children}</Box> : null}
  </Flex>
)
