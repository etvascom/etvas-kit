import React, {
  Children,
  FC,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useCallback
} from 'react'

import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'

interface Props extends SpaceProps {
  className?: string
}

const StyledChildren: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...rest
}) => {
  const classnames = useCallback((...args: string[]) => args.join(' '), [])
  const getClassName = useCallback(
    (el: ReactElement) => (el.props && el.props.className) || '',
    []
  )

  const spacedChildren = Children.map(children, child =>
    cloneElement(child as ReactElement, {
      className: classnames(
        getClassName(child as ReactElement),
        className as string
      ),
      ...rest
    })
  )
  return <>{spacedChildren}</>
}

export const Space = styled(StyledChildren)`
  ${space};
`
