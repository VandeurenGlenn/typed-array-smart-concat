import assert from 'node:assert/strict'
import test from 'node:test'
import concat from './index.js'

test('keeps established length prefixes and payload bytes', () => {
  const input = [new Uint8Array([1, 2, 3]), new Uint8Array(128).fill(42)]
  assert.deepEqual(concat(input), new Uint8Array([3, 1, 2, 3, 128, 1, ...input[1]]))
  assert.deepEqual(concat(input, new Uint8Array([99])), new Uint8Array([99, 3, 1, 2, 3, 128, 1, ...input[1]]))
  assert.deepEqual(concat([]), new Uint8Array())
  assert.deepEqual(concat([[1, 2, 3]], [99]), new Uint8Array([99, 3, 1, 2, 3]))
  assert.deepEqual(concat([new Uint8Array([1])], null), new Uint8Array([1, 1]))
})
