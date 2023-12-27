import React, { FC, createContext, useEffect, useMemo, useState } from 'react'

import { BrandingService, brandingService as defaultBrandingService } from './BrandingService'

interface BrandingContext {
  cssVars: any
  brandingService: BrandingService
}
export const BrandingContext = createContext<BrandingContext | null>(null)

interface Props {
  brandingService?: BrandingService
  children: React.ReactNode
}

export const BrandingProvider: FC<Props> = ({ brandingService = defaultBrandingService, children }) => {
  const [cssVars, setCssVars] = useState(brandingService.cssVars)

  useEffect(() => {
    const handler = () => setCssVars(brandingService.cssVars)
    brandingService.on('change', handler)
    brandingService.init()

    return () => {
      brandingService.removeListener('change', handler)
    }
  }, [setCssVars, brandingService])

  const ctx = useMemo(
    () => ({ cssVars, brandingService }),
    [cssVars, brandingService]
  )

  return (
    <BrandingContext.Provider value={ctx}>{children}</BrandingContext.Provider>
  )
}
