import typescript from "@rollup/plugin-typescript"


export default [{
  input: ['./src/index.ts'],
  external: ['@leofcoin/codecs/binary'],
  output: {
    format: 'es',
    dir: './'
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' })
  ]
}]
