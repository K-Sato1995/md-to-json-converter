/* eslint-disable */
import pkg from '../dist/index.js'
import { converteMdToJSON } from '../dist/index.js'

console.log(pkg)
console.log(converteMdToJSON)


converteMdToJSON({
  contentPath: 'te',
  outputPath: 't'
})