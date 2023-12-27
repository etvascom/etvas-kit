import { default as useNativeResizeObserver } from 'use-resize-observer'
import { default as usePolyfilledResizeObserver } from 'use-resize-observer/polyfilled'

const useResizeObserver = (...args: any[]) => {
  const resizeObserverHook =
    window && window.ResizeObserver
      ? useNativeResizeObserver
      : usePolyfilledResizeObserver

  return resizeObserverHook(...args)
}

export default useResizeObserver
