import { renderHook, act } from '@testing-library/react-hooks'
import { Observable, useObservable } from '..'

test('initial state', () => {
  const simpleObservable = new Observable<boolean>(true)
  const { result } = renderHook(() => useObservable(simpleObservable))
  expect(result.current.value).toEqual(true)
})

test('state change', () => {
  const simpleObservable = new Observable<boolean>(true)
  const { result } = renderHook(() => useObservable(simpleObservable))
  act(() => {
    simpleObservable.set(false)
  })
  expect(result.current.value).toEqual(false)
})
