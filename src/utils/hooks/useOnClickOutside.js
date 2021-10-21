import { useEffect } from 'react'

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
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
