/* eslint-disable */
import pkg from '../dist/index.js'
import { converteMdToJSON } from '../dist/index.js'
import path from 'path'

const __dirname = path.resolve();
const contentPath = path.join(__dirname, './example/content')
const outputPath = path.join(__dirname, './example/output/posts.json')

converteMdToJSON({
  contentPath,
  outputPath,
}).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log('error:', err);
})

