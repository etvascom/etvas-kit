import React, { useCallback } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

export const Steps = ({ steps, active, onChange }) => (
  <Flex flexDirection='column'>
    {steps.map((content, i) => (
      <Item
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        id={i + 1}
        isFirst={i === 0}
        isLast={i === steps.length - 1}
        isActive={active === i + 1}
        onClick={onChange}>
        {content}
      </Item>
    ))}
  </Flex>
)

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.node).isRequired,
  active: PropTypes.number,
  onChange: PropTypes.func
}

const Item = ({ id, isActive, isFirst, isLast, children, onClick }) => {
  const handleClick = useCallback(() => onClick && onClick(id), [onClick, id])

  return (
    <ItemContainer alignItems='center' onClick={handleClick}>
      <Vline isFirst={isFirst} isLast={isLast} />
      <Chip isRounded color={isActive ? 'accent' : 'outline'}>
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

const ItemContainer = styled(Flex)(
  css({
    position: 'relative',
    cursor: 'pointer',
    paddingBottom: 6,
    '&:last-child': {
      paddingBottom: 0
    }
  })
)

const Vline = styled.div(({ isFirst, isLast }) =>
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

Item.propTypes = {
  id: PropTypes.number,
  isActive: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
}
