import { default as usePolyfilledResizeObserver } from 'use-resize-observer/polyfilled'
import { default as useNativeResizeObserver } from 'use-resize-observer'

const useResizeObserver = (
  ...args: Parameters<typeof useNativeResizeObserver>
) => {
  const resizeObserverHook =
    window && window.ResizeObserver
      ? useNativeResizeObserver
      : usePolyfilledResizeObserver

  return resizeObserverHook(...args)
}

export default useResizeObserver
