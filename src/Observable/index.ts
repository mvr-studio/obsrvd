type Observer<T> = (data: T) => void
type Subscriber<T> = Observer<T>

class Observable<T> {
  observers: Set<Observer<T>>
  value: any

  constructor(value: T) {
    this.observers = new Set()
    this.value = value
  }

  subscribe(subscriber: Subscriber<T>) {
    this.observers.add(subscriber)
  }

  unsubscribe(subscriber: Subscriber<T>) {
    this.observers.delete(subscriber)
  }

  get(): T {
    return this.value
  }

  set(value: T): void {
    if (this.value === value) return
    this.value = value

    for (const observer of this.observers) {
      observer(this.value)
    }
  }
}

export type TObservable<T> = InstanceType<typeof Observable<T>>

export default Observable
