declare type TypedArray = Uint8Array | Uint16Array | Uint32Array | BigInt64Array | BigUint64Array

declare module typedArraySmartConcat {
  /**
   * 
   * @param input TypedArray[]
   * @param length Number
   * @param prefix TypedArray
   */
  export default function (input: TypedArray[], prefix?: TypedArray):TypedArray 
}

declare module '@vandeurenglenn/typed-array-smart-concat' {
  export default typedArraySmartConcat
}