import { ElementType, FC, ReactNode } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { Flex, FlexProps } from '../Flex'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

interface NavItemProps extends FlexProps {
  icon: string
  label: ReactNode
  isActive: boolean
  as?: ElementType
  onClick?: () => void
}

export const NavItem: FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  as,
  onClick,
  ...props
}) => (
  <Container as={as} onClick={onClick} {...props}>
    <Icon name={icon} color={isActive ? 'accent' : 'outline'} size='small' />
    <Typography
      variant='labelButton'
      truncate
      color={isActive ? 'accent' : 'outline'}
      ml={2}>
      {label}
    </Typography>
  </Container>
)

const Container = styled(Flex)(
  css({
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'flex-start'
  })
)
