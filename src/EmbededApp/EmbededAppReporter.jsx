import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { InterCom } from '../providers'
import { useResizeObserver } from '../utils/hooks'

export const EmbededAppReporter = ({ children }) => {
  const intercom = useRef(new InterCom('etvas.embededApp'))

  const { ref } = useResizeObserver({
    onResize({ width, height }) {
      intercom.current.response('size', { width, height: height })
    }
  })

  useEffect(() => {
    const instance = intercom.current
    return () => instance.response('size', { width: 0, height: 0 })
  }, [intercom])

  return (
    <Wrapper ref={ref} data-ref='EmbededAppReporter'>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: auto;
`

EmbededAppReporter.propTypes = {
  children: PropTypes.node.isRequired
}
