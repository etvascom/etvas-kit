import React, {
  Children,
  FC,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useCallback
} from 'react'

import styled from 'styled-components'
import { SpaceProps as StyledSpaceProps, space } from 'styled-system'

export interface SpaceProps extends StyledSpaceProps {
  className?: string
}

const StyledChildren: FC<PropsWithChildren<SpaceProps>> = ({
  children,
  className,
  ...rest
}) => {
  const classnames = useCallback((...args: string[]) => args.join(' '), [])
  const getClassName = useCallback(
    (el: ReactElement) => (el.props && el.props.className) || '',
    []
  )

  const spacedChildren = Children.toArray(children).map(child =>
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
