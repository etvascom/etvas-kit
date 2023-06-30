import React, { FC } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'
import { Box } from '../Box'
import svg from './404.svg'

const StyledImg = styled.img({
  maxWidth: '80%'
})

interface NotFoundProps {
  children?: React.ReactNode
}

export const NotFound: FC<NotFoundProps> = ({ children }) => (
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

NotFound.propTypes = {
  children: PropTypes.node
}
