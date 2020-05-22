import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box, Icon } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

import styles from './Card.styles'

export const Card = ({ leader, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => setIsOpen(!isOpen), [
    isOpen,
    setIsOpen
  ])

  return (
    <StyledCardWrapper>
      <Flex justifyContent='space-between' p={2} onClick={handleToggle}>
        {leader || <span />}
        <Icon name={isOpen ? 'expand_less' : 'expand_more'} />
      </Flex>
      {isOpen && <StyledContent px={4}>{children}</StyledContent>}
    </StyledCardWrapper>
  )
}

Card.propTypes = {
  leader: PropTypes.node,
  children: PropTypes.node
}

const StyledContent = styled(Box)(css(styles.content))

const StyledCardWrapper = styled.td(css(styles.card))

export const CardItem = ({ header, cell }) => {
  return (
    <Flex my={4}>
      <Box width={1 / 3}>
        <Typography variant='labelSmallBold'>{header}</Typography>
      </Box>
      <Box width={2 / 3}>{cell}</Box>
    </Flex>
  )
}

CardItem.propTypes = {
  header: PropTypes.node,
  cell: PropTypes.node
}

Card.Item = CardItem
