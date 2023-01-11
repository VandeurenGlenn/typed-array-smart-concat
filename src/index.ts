import varint from 'varint'

export default (input: any[], prefix: string | any[] | ArrayLike<number>) => {

  const encodedArray = []
  
  const length = input.reduce((total: number, current: string | any[]): number => {
    const encoded = varint.encode(current.length)
    encodedArray.push(encoded)
    total += current.length + encoded.length
    return total
  }, 0)
  
  const typedArray = new Uint8Array(prefix ? prefix.length + length : length)

  let currentIndex = 0
  let index = 0
  if (prefix) {
    typedArray.set(prefix as ArrayLike<number>)
    currentIndex += prefix.length
  }
  for (const source of input) {    
    typedArray.set(encodedArray[index], currentIndex)
    currentIndex += encodedArray[index].length
    typedArray.set(source, currentIndex)
    currentIndex += source.length
    index += 1
  }

  return typedArray
}