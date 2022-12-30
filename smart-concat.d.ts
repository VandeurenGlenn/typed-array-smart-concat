declare type TypedArray = Uint8Array | Uint16Array | Uint32Array | BigInt64Array | BigUint64Array | ArrayBuffer | SharedArrayBuffer

declare module typedArraySmartConcat {
  /**
   * 
   * @param input TypedArray[]
   * @param length Number
   */
  export default function (input: TypedArray[], options: {length: Number, seperator: String | TypedArray}):TypedArray 
}

declare module '@vandeurenglenn/typed-array-smart-concat' {
  export default typedArraySmartConcat
}