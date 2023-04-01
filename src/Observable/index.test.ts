import Observable from './'

test('Subscriber callback gets called', () => {
  const callback = jest.fn()
  const SimpleObservable = new Observable<boolean>(true)
  SimpleObservable.subscribe(callback)
  SimpleObservable.set(false)
  expect(callback).toHaveBeenCalled()
})

test('Subscriber callback gets called with the new value', () => {
  const callback = jest.fn()
  const SimpleObservable = new Observable<boolean>(true)
  SimpleObservable.subscribe(callback)
  SimpleObservable.set(false)
  expect(callback).toHaveBeenCalledWith(false)
})

test('Subscriber callback does not get called with the old value', () => {
  const callback = jest.fn()
  const SimpleObservable = new Observable<boolean>(true)
  SimpleObservable.subscribe(callback)
  SimpleObservable.set(true)
  expect(callback).not.toHaveBeenCalled()
})

test('Subscriber callback does not get called after unsubscribe', () => {
  const callback = jest.fn()
  const SimpleObservable = new Observable<boolean>(true)
  SimpleObservable.subscribe(callback)
  SimpleObservable.unsubscribe(callback)
  SimpleObservable.set(false)
  expect(callback).not.toHaveBeenCalled()
})

test('The value of observable gets changed', () => {
  const SimpleObservable = new Observable<boolean>(true)
  SimpleObservable.set(false)
  expect(SimpleObservable.get()).toEqual(false)
})
