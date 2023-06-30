import { RefObject, useEffect } from 'react'

type Handler = (e: Event) => void

export const useOnClickOutside = (
  ref: RefObject<any>,
  handler: Handler
): void => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref?.current || ref.current.contains(e.target)) {
        return
      }
      handler(e)
    }
    document.addEventListener('touchstart', listener)
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
