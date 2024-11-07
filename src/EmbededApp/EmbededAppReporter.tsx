import { FC, PropsWithChildren, useEffect, useRef } from 'react'

import styled from 'styled-components'

import { InterCom } from '../providers'
import { useResizeObserver } from '../utils/hooks'

export const EmbededAppReporter: FC<Required<PropsWithChildren>> = ({
  children
}) => {
  const intercom = useRef(new InterCom('etvas.embededApp'))

  const { ref } = useResizeObserver({
    onResize({ width, height }: { width: number; height: number }) {
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
