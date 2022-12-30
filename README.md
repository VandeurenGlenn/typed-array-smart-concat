# typed-array-concat
> TypedArray.set() the concat() way

## install
```sh
npm i @vandeurenglenn/typed-array-concat
```

## usage
```js
import typedArrayConcat from '@vandeurenglenn/typed-array-concat'

const concated = typedArrayConcat([
  new TextEncoder('hello'),
  new TextEncoder('world')
])
console.log(new TextDecoder().decode(concated)) // helloworld

const concatedSeperated = typedArrayConcat([
  new TextEncoder('hello'),
  new TextEncoder('world')
], {
  seperator: ' '
})
console.log(new TextDecoder().decode(concatedSeperated)) // hello world
```
