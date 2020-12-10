import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'
import colors from '../assets/colors'

const DropdownHeading = ({ children }) => <Heading>{children}</Heading>

const Heading = styled.div(
  css({
    ...typography.labelSmall,
    padding: 3,
    appearance: 'none',
    background: colors.transparent,
    color: colors.textLabelDefault,
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none'
  })
)

DropdownHeading.propTypes = {
  children: PropTypes.node
}

export default DropdownHeading
