import varint from 'varint'

export default input => {

  const encodedArray = []
  
  const length = input.reduce((total, current) => {
    const encoded = varint.encode(current.length)
    encodedArray.push(encoded)
    total += current.length + encoded.length
    return total
  }, 0)
  
  const typedArray = new Uint8Array(length)

  let currentIndex = 0
  let index = 0
  for (const source of input) {    
    typedArray.set(encodedArray[index], currentIndex)
    currentIndex += encodedArray[index].length
    typedArray.set(source, currentIndex)
    currentIndex += source.length
    index += 1
  }

  return typedArray
}