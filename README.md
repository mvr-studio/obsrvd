# Obsrvd

Dead simple Observable.

## Installation

```sh
yarn add @mvr-studio/obsrvd
```

## Observable

```tsx
import { Observable } from '@mvr-studio/obsrvd'

const simpleObserver = new Observable<boolean>(false)

const Component = () => {
  const [simpleState, setSimpleState] = useState<boolean>(simpleObserver.get())

  const handleOnClick = () => {
    return simpleObserver.set(true)
  }

  useEffect(() => {
    simpleObserver.subscribe(setSimpleState)
    return () => {
      simpleObserver.unsubscribe(setSimpleState)
    }
  }, [])
}
```

## useObservable

```tsx
import { Observable, useObservable } from '@mvr-studio/obsrvd'

const simpleObserver = new Observable<boolean>(false)

const Component = () => {
  const { value } = useObservable(simpleObserver)
  // Now, when `simpleObserver` gets set outside the component, `value` will be up to date.
}
```
