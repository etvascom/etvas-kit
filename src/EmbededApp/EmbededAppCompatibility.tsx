import { FC, PropsWithChildren, useMemo } from 'react'

import { NotCompatible } from '../ErrorPages'

export const EmbededAppCompatibility: FC<PropsWithChildren> = ({
  children
}) => {
  const incompatibleFeature = useMemo(
    () =>
      compatibilityFeaturesDefinitions
        .map(f => f(window))
        .find(f => !f.isCompatible),
    []
  )

  if (incompatibleFeature) {
    return (
      <NotCompatible
        feature={{ name: incompatibleFeature.name as 'sessionStorage' }}
      />
    )
  }

  return children
}

/*
  The minimum list of required features that the
  app needs in order to function properly
*/
const compatibilityFeaturesDefinitions = [
  (global: typeof window) => ({
    name: 'sessionStorage',
    isCompatible: (global => {
      try {
        const testKey = '_test_'
        global.sessionStorage.setItem(testKey, testKey)
        global.sessionStorage.removeItem(testKey)
        return true
      } catch (err) {
        return false
      }
    })(global)
  })
]
