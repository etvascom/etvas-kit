import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'

import { Footer } from './Footer'
import { Icon } from '../Icon'

export const AppLayout = ({
  sidebarContent,
  sidebarFooterContent,
  headerContent,
  footerContent,
  footerTooltip,
  footerBgImage,
  variant,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])

  return (
    <Container id='page-container'>
      <SidebarToggler isOpen={isOpen} variant={variant} onClick={toggle}>
        <Icon name={isOpen ? 'circleX' : 'menu'} color='white' size='24px' />
      </SidebarToggler>
      <Header variant={variant} id='header' isOpen={isOpen}>
        {headerContent}
      </Header>
      <Sidebar id='sidebar' isOpen={isOpen} variant={variant}>
        <Menu id='sidebar-menu'>{sidebarContent}</Menu>
        <SidebarFooter id='sidebar-footer'>
          {sidebarFooterContent}
        </SidebarFooter>
      </Sidebar>
      {isOpen ? (
        <Shadow id='sidebar-shadow' variant={variant} onClick={toggle} />
      ) : null}
      <LayoutPage id='layout-page' variant={variant}>
        <LayoutBody id='layout-body' variant={variant}>
          {children}
        </LayoutBody>
        <FooterWrapper>
          {footerContent ? (
            footerContent
          ) : (
            <Footer id='layout-footer' bgImage={footerBgImage}>
              {footerTooltip}
            </Footer>
          )}
        </FooterWrapper>
      </LayoutPage>
    </Container>
  )
}

const SIDEBAR_WIDTH = '240px'
const TOPBAR_SIZE = '58px'
const LOGO_HEIGHT = '100px'
const FOOTER_HEIGHT = '300px'
const SIDEBAR_FOOTER_HEIGHT = '80px'
const TRANSITION = 'all 250ms ease-in-out'

const Container = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
`
const Header = styled.div(
  css({
    position: 'fixed',
    top: 0,
    background: 'white'
  }),
  variant({
    variants: {
      mobile: {
        height: TOPBAR_SIZE,
        width: '100%',
        left: TOPBAR_SIZE,
        padding: '12px'
      },
      web: {
        display: 'block',
        padding: '24px',
        left: 0,
        width: SIDEBAR_WIDTH,
        height: LOGO_HEIGHT
      }
    }
  })
)
const SidebarToggler = styled.button(
  css({
    backgroundColor: 'brand',
    border: 'none',
    outline: 'none',
    transition: TRANSITION,
    zIndex: '100',
    top: 0,
    position: 'fixed'
  }),
  ({ isOpen }) =>
    variant({
      variants: {
        mobile: {
          width: isOpen ? SIDEBAR_WIDTH : TOPBAR_SIZE,
          height: TOPBAR_SIZE
        },
        web: { display: 'none' }
      }
    })
)

const Shadow = styled.div(
  variant({
    variants: {
      web: { display: 'none' },
      mobile: {
        zIndex: '9',
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

const Sidebar = styled.div(
  css({
    backgroundColor: 'brand',
    width: SIDEBAR_WIDTH,
    position: 'fixed',
    bottom: 0,
    zIndex: '10',
    background: 'brand',
    transition: TRANSITION
  }),
  ({ isOpen }) =>
    variant({
      variants: {
        mobile: { top: TOPBAR_SIZE, left: isOpen ? 0 : `-${SIDEBAR_WIDTH}` },
        web: { top: LOGO_HEIGHT, left: 0 }
      }
    })
)
const Menu = styled.div(
  css({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: SIDEBAR_FOOTER_HEIGHT,
    overflowY: 'auto'
  })
)

const SidebarFooter = styled.div(
  css({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SIDEBAR_FOOTER_HEIGHT
  })
)

const LayoutPage = styled.div(
  css({
    display: 'block',
    minHeight: '100vh',
    paddingBottom: FOOTER_HEIGHT,
    position: 'relative'
  }),
  variant({
    variants: {
      mobile: { marginTop: TOPBAR_SIZE },
      web: { marginTop: 0, marginLeft: SIDEBAR_WIDTH }
    }
  })
)
const LayoutBody = styled.div(
  css({
    width: '100%'
  }),
  variant({
    variants: {
      mobile: { paddingLeft: '8px', paddingRight: '8px' },
      web: { paddingLeft: '64px', paddingRight: '64px', maxWidth: '1200px' }
    }
  })
)

const FooterWrapper = styled.div(
  css({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: FOOTER_HEIGHT
  })
)

AppLayout.propTypes = {
  sidebarContent: PropTypes.node,
  sidebarFooterContent: PropTypes.node,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
  footerTooltip: PropTypes.node,
  footerBgImage: PropTypes.node,
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
