import React, { Children, FC, cloneElement, useCallback } from 'react'
import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'

interface StyledChildrenProps extends SpaceProps {
  className?: string
  children: React.ReactNode
}

const StyledChildren: FC<StyledChildrenProps> = ({
  children,
  className,
  ...rest
}) => {
  const classnames = useCallback(
    (...args: (string | undefined)[]) => args.join(' '),
    []
  )
  const getClassName = useCallback(
    (el: React.ReactElement): string => (el.props && el.props.className) || '',
    []
  )

  const spacedChildren = Children.toArray(children).map((child: any) =>
    cloneElement(child, {
      className: classnames(getClassName(child), className),
      ...rest
    })
  )

  return <>{spacedChildren}</>
}

export const Space = styled(StyledChildren)`
  ${space};
`
