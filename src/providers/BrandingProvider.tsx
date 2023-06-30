import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  FC,
  ReactNode
} from 'react'
import {
  BrandingService,
  brandingService as defaultBrandingService
} from './BrandingService'

export const BrandingContext = createContext<any>(null)

interface BrandingProviderProps {
  brandingService?: BrandingService
  children: ReactNode
}

export const BrandingProvider: FC<BrandingProviderProps> = ({
  brandingService = defaultBrandingService,
  children
}) => {
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
