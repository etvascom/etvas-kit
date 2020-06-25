import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Touchable } from '@ivoryio/kogaio'

import { Icon } from '../Icon'

export const AppLayout = ({
  sidebarContent,
  headerContent,
  variant,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])

  return (
    <Container variant={variant}>
      <SidebarWrapper variant={variant}>
        <Header variant={variant}>{headerContent}</Header>
        <Menu variant={variant}>
          <BurgerButton variant={variant} onClick={toggle}>
            <Icon name='menu' color='white' size='24px' />
          </BurgerButton>
          {isOpen && <Shadow variant={variant} onClick={toggle} />}
          <ConditionalMenu variant={variant} isOpen={isOpen}>
            {sidebarContent}
          </ConditionalMenu>
          {isOpen && (
            <CloseButton onClick={toggle}>
              <Icon name='circleX' size='24px' color='white' />
            </CloseButton>
          )}
        </Menu>
      </SidebarWrapper>
      <ContentWrapper variant={variant}>{children}</ContentWrapper>
    </Container>
  )
}

const CloseButton = styled(Touchable)(
  css({
    position: 'fixed',
    width: '34px',
    height: '34px',
    left: 'calc(20vw - 17px)',
    top: '23px'
  })
)

const BurgerButton = styled(Touchable)(
  css({
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  variant({
    variants: {
      web: { display: 'none' },
      mobile: { display: 'block', backgroundColor: 'brand' }
    }
  })
)
const Shadow = styled.div(
  variant({
    variants: {
      web: { display: 'none' },
      mobile: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'whiteShadow'
      }
    }
  })
)

const Container = styled.div(
  css({
    display: 'flex',
    width: '100%',
    minHeight: '100vh'
  }),

  variant({
    variants: {
      web: {
        flexDirection: 'row'
      },
      mobile: {
        flexDirection: 'column'
      }
    }
  })
)

Container.displayName = 'Container'

const SidebarWrapper = styled.div(
  css({
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'stretch'
  }),
  variant({
    variants: {
      web: {
        flexDirection: 'column',
        width: '240px',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'lighterOutline',
        position: 'static'
      },
      mobile: {
        flexDirection: 'row-reverse',
        width: '100%',
        position: 'relative',
        zIndex: 'menu'
      }
    }
  })
)

SidebarWrapper.displayName = 'SidebarWrapper'

const Header = styled.div(
  css({}),
  variant({
    variants: {
      web: {
        height: '100px',
        background: 'white',
        flexGrow: 0,
        flexShrink: 0,
        padding: 6
      },
      mobile: {
        height: '58px',
        flexGrow: 1,
        flexShrink: 1,
        padding: 3
      }
    }
  })
)

Header.displayName = 'Header'

const Menu = styled.div(
  css({
    backgroundColor: 'brand',
    flexGrow: 1
  }),
  variant({
    variants: {
      web: {
        width: '100%',
        flexGrow: 1,
        flexShrink: 1
      },
      mobile: {
        width: '58px',
        flexGrow: 0,
        flexShring: 0
      }
    }
  })
)

Menu.displayName = 'Menu'

const ConditionalMenu = styled.div(({ isOpen }) =>
  variant({
    variants: {
      web: { display: 'block', width: 'unset', position: 'static', padding: 6 },
      mobile: {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        paddingTop: '80px',
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 4,
        top: 0,
        left: 0,
        bottom: 0,
        width: '40vw',
        backgroundColor: 'brand'
      }
    }
  })
)

const ContentWrapper = styled.div(
  css({
    flexGrow: 1
  }),
  variant({
    variants: {
      web: {
        paddingLeft: 16,
        paddingRight: 16,
        boxShadow: 'none'
      },
      mobile: {
        padding: 2,
        boxShadow: 'inset 0 .2rem  .2rem -.2rem rgba(0, 0 ,0, .25)'
      }
    }
  })
)

ContentWrapper.displayName = 'ContentWrapper'

AppLayout.propTypes = {
  sidebarContent: PropTypes.node,
  headerContent: PropTypes.node,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['mobile', 'web']),
    PropTypes.arrayOf(PropTypes.oneOf(['mobile', 'web'])),
    PropTypes.objectOf(PropTypes.oneOf(['mobile', 'web']))
  ]),
  children: PropTypes.node
}

AppLayout.defaultProps = {
  variant: ['mobile', null, 'web']
}

AppLayout.displayName = 'AppLayout'
