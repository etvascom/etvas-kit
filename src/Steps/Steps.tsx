import { FC, PropsWithChildren, ReactNode, useCallback } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Typography } from '../Typography'

interface StepsProps {
  steps: ReactNode[]
  active: number
  isDisabled?: boolean
  onChange?: (id: number) => void
}

export const Steps: FC<StepsProps> = ({
  steps,
  active,
  isDisabled,
  onChange
}) => {
  const isActiveItem = (i: number): boolean => active === i + 1
  return (
    <Flex flexDirection='column'>
      {steps.map((content, i) => (
        <Item
          key={i}
          id={i + 1}
          isFirst={i === 0}
          isLast={i === steps.length - 1}
          isActive={isActiveItem(i)}
          isDisabled={!isActiveItem(i) && !!isDisabled}
          onClick={onChange}>
          {content}
        </Item>
      ))}
    </Flex>
  )
}

interface ItemProps {
  id: number
  isActive: boolean
  isFirst: boolean
  isLast: boolean
  isDisabled: boolean
  onClick?: (id: number) => void
}

const Item: FC<PropsWithChildren<ItemProps>> = ({
  id,
  isActive,
  isFirst,
  isLast,
  isDisabled,
  children,
  onClick
}) => {
  const handleClick = useCallback(() => onClick && onClick(id), [onClick, id])

  return (
    <ItemContainer
      alignItems='center'
      isDisabled={isDisabled}
      onClick={handleClick}>
      <Vline isFirst={isFirst} isLast={isLast} />
      <Chip color={isActive ? 'accent' : 'outline'}>
        <Typography variant='labelButton' color='white'>
          {id}
        </Typography>
      </Chip>
      <Typography
        ml={6}
        variant='titleSmall'
        color={isActive ? 'accent' : 'lighterText'}>
        {children}
      </Typography>
    </ItemContainer>
  )
}

const ItemContainer = styled(Flex)<Pick<ItemProps, 'isDisabled'>>(
  ({ isDisabled }) =>
    css({
      position: 'relative',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      paddingBottom: 6,
      '&:last-child': {
        paddingBottom: 0
      }
    })
)

const Vline = styled.div<Pick<ItemProps, 'isFirst' | 'isLast'>>(
  ({ isFirst, isLast }) =>
    css({
      width: '1px',
      position: 'absolute',
      left: '12px',
      bottom: isLast ? '50%' : 0,
      top: isFirst ? '50%' : 0,
      backgroundColor: 'outline'
    })
)

const Chip = styled.div(({ color }) =>
  css({
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    flexShrink: 0,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    position: 'relative'
  })
)
