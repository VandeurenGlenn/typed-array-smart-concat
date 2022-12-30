import smartconcat from './smart-concat.js'

const smartconcated = smartconcat([
  new TextEncoder().encode('hello'),  
  new TextEncoder().encode(' '),
  new TextEncoder().encode('world'),
  new TextEncoder().encode(' '),
  new TextEncoder().encode('can'),  
  new TextEncoder().encode(' '),
  new TextEncoder().encode('smart'),
  new TextEncoder().encode('concat'),  
  new TextEncoder().encode(' '),
  new TextEncoder().encode('yes'),  
  new TextEncoder().encode('/'),
  new TextEncoder().encode('no'),
  new TextEncoder().encode('?')
])
console.log('can smart-concat');