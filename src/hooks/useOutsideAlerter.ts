import { useEffect, useRef } from 'react'

const useOutsideAlerter = (cb: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: any) {
      const { target } = event
      if (ref.current && !ref.current.contains(target)) {
        cb()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cb, ref])

  return ref
}

export default useOutsideAlerter
