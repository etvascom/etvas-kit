import React, { cloneElement } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Icon } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

const style = {
  color: 'inherit',
  textDecoration: 'inherit',
  font: 'inherit',
  textTransform: 'inherit'
}

export const NavBack = ({ link }) => (
  <StyledFlex alignItems='center' height='80px'>
    <Icon name='arrow_back' color='outline' mr={2} fontSize={3} />
    <Typography as='span' variant='labelSmall' color='outline'>
      {cloneElement(link, { style })}
    </Typography>
  </StyledFlex>
)

const StyledFlex = styled(Flex)(css({ display: ['none', 'flex'] }))

NavBack.propTypes = {
  link: PropTypes.node.isRequired
}
