# typed-array-smart-concat
> TypedArray.set() the concat() way

## install
```sh
npm i @vandeurenglenn/typed-array-smart-concat
```

## usage
### concat
```js
import typedArraySmartConcat from '@vandeurenglenn/typed-array-smart-concat'

const concated = typedArraySmartConcat([
  new TextEncoder('hello'),
  new TextEncoder('world')
])

console.log(new TextDecoder().decode(concated)) // <length><value><length><value>
```

### deconcat
```js
import typedArraySmartDeconcat from '@vandeurenglenn/typed-array-smart-deconcat'

const deconcated = typedArraySmartDeconcat(concated)

console.log(new TextDecoder().decode(deconcated[0])) // hello
console.log(new TextDecoder().decode(deconcated[1])) // world
```