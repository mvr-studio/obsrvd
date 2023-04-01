# Obsrvd

Dead simple Observable.

## Installation

```sh
yarn add @mvr-studio/obsrvd
```

## Usage

```tsx
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
  })
}
```
