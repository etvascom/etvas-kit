import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

export const Row = ({ children }) => {
  return (
    <tr>
      {Array.from(children).map((child, idx) =>
        cloneElement(child, { idx, key: idx })
      )}
    </tr>
  )
}

Row.propTypes = {
  children: PropTypes.node
}

Row.displayName = 'Row'
