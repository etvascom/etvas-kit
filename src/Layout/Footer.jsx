import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { Flex } from '@ivoryio/kogaio'

const Content = styled.div(({ bgImage }) =>
  css({
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top center',
    height: '300px',
    width: '100%',
    position: 'relative'
  })
)

const IconWrapper = styled.div({
  cursor: 'pointer'
})

const StyledTooltip = styled(Tooltip)(({ visible }) =>
  css({
    display: ['flex', null, visible ? 'flex' : 'none']
  })
)

export const Footer = ({ bgImage, children }) => {
  const [tooltip, setTooltip] = useState(false)

  const show = useCallback(() => setTooltip(true), [setTooltip])
  const hide = useCallback(() => setTooltip(false), [setTooltip])

  return (
    <Content bgImage={bgImage}>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-end'
        height='100%'
        pb='100px'>
        <StyledTooltip visible={tooltip} mb={2}>
          {children}
        </StyledTooltip>
        <IconWrapper
          onMouseOver={show}
          onMouseOut={hide}
          onBlur={hide}
          onFocus={show}>
          <Icon name='heart' color='white' size='36px' />
        </IconWrapper>
      </Flex>
    </Content>
  )
}

Footer.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.node
}
