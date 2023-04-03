import { useEffect, useState } from 'react'
import { TObservable } from '../Observable'

const useObservable = <T,>(observable: TObservable<T>) => {
  const [value, setValue] = useState<any>(observable.get())

  useEffect(() => {
    observable.subscribe(setValue)
    return () => {
      observable.unsubscribe(setValue)
    }
  }, [])

  return { value }
}

export default useObservable
