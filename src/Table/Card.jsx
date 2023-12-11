import { useCallback, useState } from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import styles from './Card.styles'

export const Card = ({ leader, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen]
  )

  return (
    <StyledCardWrapper>
      <Flex justifyContent='space-between' p={2} onClick={handleToggle}>
        <Typography variant='labelButton' color='outline'>
          {leader ? leader.props.children : ''}
        </Typography>
        <Icon name={isOpen ? 'menuUp' : 'menuDown'} />
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

export const CardItem = ({ header, cell, vertical }) => (
  <Flex my={4} flexDirection={vertical ? 'column' : 'row'}>
    <Box width={1 / 3} pr={1}>
      <Typography truncate variant='labelSmallBold'>
        {header}
      </Typography>
    </Box>
    <Box width={2 / 3}>{cell}</Box>
  </Flex>
)

CardItem.propTypes = {
  header: PropTypes.node,
  cell: PropTypes.node,
  vertical: PropTypes.bool
}

Card.Item = CardItem
