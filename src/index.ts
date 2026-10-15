import { encodeFrames } from '@leofcoin/binary'

const asBytes = (source: any): Uint8Array => {
  if (source instanceof Uint8Array) return source
  // Keep legacy ArrayLike coercion. Typed-array callers take the zero-copy path.
  const bytes = new Uint8Array(source.length)
  bytes.set(source as ArrayLike<number>)
  return bytes
}

export default (input: any[], prefix?: string | any[] | ArrayLike<number>) =>
  encodeFrames(input.map(asBytes), prefix ? asBytes(prefix) : undefined)
