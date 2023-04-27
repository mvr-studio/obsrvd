import Observable from './'
import { vi } from 'vitest'

test('Subscriber callback gets called', () => {
  const callback = vi.fn()
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.subscribe(callback)
  simpleObservable.set(false)
  expect(callback).toHaveBeenCalled()
})

test('Subscriber callback gets called with the new value', () => {
  const callback = vi.fn()
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.subscribe(callback)
  simpleObservable.set(false)
  expect(callback).toHaveBeenCalledWith(false)
})

test('Subscriber callback does not get called with the old value', () => {
  const callback = vi.fn()
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.subscribe(callback)
  simpleObservable.set(true)
  expect(callback).not.toHaveBeenCalled()
})

test('Subscriber callback does not get called after unsubscribe', () => {
  const callback = vi.fn()
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.subscribe(callback)
  simpleObservable.unsubscribe(callback)
  simpleObservable.set(false)
  expect(callback).not.toHaveBeenCalled()
})

test('The value of observable gets changed', () => {
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.set(false)
  expect(simpleObservable.get()).toEqual(false)
})

test('The same subscriber isnt added twice', () => {
  const callback = vi.fn()
  const simpleObservable = new Observable<boolean>(true)
  simpleObservable.subscribe(callback)
  simpleObservable.subscribe(callback)
  simpleObservable.set(false)
  expect(callback).toHaveBeenCalledTimes(1)
})
