import React, { FC } from 'react'
import { PropsWithChildren } from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import { typography } from '../Typography'

const DropdownHeading: FC<PropsWithChildren> = ({ children }) => (
  <Heading>{children}</Heading>
)

const Heading = styled.div(
  css({
    ...typography.labelSmall,
    padding: 3,
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'textLabelDefault',
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none'
  }) as any
)

export default DropdownHeading
