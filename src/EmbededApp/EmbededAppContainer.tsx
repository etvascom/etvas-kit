import React, {
  FC,
  IframeHTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { useForeignModalShadow } from '../Modal'
import { InterCom } from '../providers'

interface Props extends IframeHTMLAttributes<HTMLIFrameElement> {
  defaultHeight?: string | Array<string> | object
}

export const EmbededAppContainer: FC<Props> = ({ defaultHeight, ...props }) => {
  const intercom = useRef(new InterCom('etvas.embededApp'))
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [iframeRef, shadowElement] = useForeignModalShadow()

  useEffect(() => {
    intercom.current.onResponse('size', setSize)
    const instance = intercom.current

    return () => instance.offResponse('size', setSize)
  }, [setSize, intercom])

  let frameHeight = defaultHeight
  let overflow = 'auto'

  if (size.height) {
    overflow = 'hidden'
    frameHeight = `${size.height}px`
  }

  return (
    <>
      {shadowElement}
      <StyledIframe
        {...props}
        ref={iframeRef}
        height={frameHeight}
        overflow={overflow}
      />
    </>
  )
}

interface StyledIframeProps {
  height?: Props['defaultHeight']
  overflow: string
}

const StyledIframe = styled.iframe<StyledIframeProps>(({ height, overflow }) =>
  css({
    position: 'relative',
    width: '100%',
    display: 'block',
    border: 'none',
    overflow,
    height
  })
)
