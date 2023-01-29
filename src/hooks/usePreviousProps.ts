import { useRef, useEffect } from 'react'

export default function usePreviousProps (value: any) {
  const ref = useRef()
  useEffect(() => {
    console.log('before ref update, VALUE IS', value, 'ref is ', ref.current)
    ref.current = value
  }, [value])
  return ref.current
}
