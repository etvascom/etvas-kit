import React, { FC, PropsWithChildren, useCallback, useState } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import styles from './Card.styles'

interface Props {
  leader?: React.ReactElement
}
interface CardSubComponents {
  Item: typeof CardItem
}

export const Card: FC<PropsWithChildren<Props>> & CardSubComponents = ({ leader, children }) => {
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

const StyledContent = styled(Box)(css(styles.content))

const StyledCardWrapper = styled.td(css(styles.card))

interface CardItemProps {
  header: React.ReactNode
  cell: React.ReactNode
  vertical?: boolean
}

export const CardItem: FC<CardItemProps> = ({ header, cell, vertical }) => (
  <Flex my={4} flexDirection={vertical ? 'column' : 'row'}>
    <Box width={1 / 3} pr={1}>
      <Typography truncate variant='labelSmallBold'>
        {header}
      </Typography>
    </Box>
    <Box width={2 / 3}>{cell}</Box>
  </Flex>
)

Card.Item = CardItem
