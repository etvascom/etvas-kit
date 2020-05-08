import React, { useState, useMemo, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { BrandingService, brandingService } from './BrandingService'

export const BrandingContext = createContext()

export const BrandingProvider = ({ brandingService, children }) => {
  const [cssVars, setCssVars] = useState(brandingService.cssVars)

  useEffect(() => {
    const handler = () => setCssVars(brandingService.cssVars)
    brandingService.on('change', handler)
    brandingService.init()
    return () => brandingService.removeListener('change', handler)
  }, [setCssVars, brandingService])

  const ctx = useMemo(() => ({ cssVars, brandingService }), [
    cssVars,
    brandingService
  ])

  return (
    <BrandingContext.Provider value={{ ctx }}>
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
