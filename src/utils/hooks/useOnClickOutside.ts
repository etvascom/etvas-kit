import { RefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (
        !ref?.current ||
        !ref.current.contains ||
        ref.current.contains(event.target)
      ) {
        return
      }
      handler(event)
    }
    document.addEventListener('touchstart', listener)
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
