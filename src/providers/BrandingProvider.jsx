import React, { useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { BrandingService, brandingService } from './BrandingService'

export const BrandingContext = createContext()

export const BrandingProvider = ({ brandingService, children }) => {
  useEffect(() => brandingService.init(), [brandingService])

  return (
    <BrandingContext.Provider value={{ brandingService }}>
      {children}
    </BrandingContext.Provider>
  )
}

BrandingProvider.propTypes = {
  children: PropTypes.node,
  brandingService: PropTypes.instanceOf(BrandingService)
}

BrandingProvider.defaultProps = {
  brandingService
}
