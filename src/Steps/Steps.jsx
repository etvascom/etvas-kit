import React, { useCallback } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

import { Flex } from '@ivoryio/kogaio'
import { Typography } from '../Typography'

export const Steps = ({ steps, active, onChange }) => (
  <Flex flexDirection='column' position='relative'>
    <Vline />
    {steps.map((content, i) => (
      <Item key={i} id={i + 1} isActive={active === i + 1} onClick={onChange}>
        {content}
      </Item>
    ))}
  </Flex>
)

const Vline = styled.div(
  css({
    width: '1px',
    position: 'absolute',
    left: '12px',
    bottom: '12px',
    top: '12px',
    backgroundColor: 'outline'
  })
)

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.node).isRequired,
  active: PropTypes.number,
  onChange: PropTypes.func
}

const Item = ({ id, isActive, children, onClick }) => {
  const handleClick = useCallback(() => onClick && onClick(id), [onClick, id])

  return (
    <Container alignItems='center' onClick={handleClick}>
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
    </Container>
  )
}

const Container = styled(Flex)(
  css({
    marginBottom: 6,
    '&:last-child': {
      marginBottom: 0
    }
  })
)

const Chip = styled.div(({ color }) =>
  css({
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    position: 'relative'
  })
)

Item.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
}
