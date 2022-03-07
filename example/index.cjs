/* eslint-disable */
const mdToJSON = require('../dist/index.js')
const path = require('path')

const contentPath = path.join(__dirname, '/content')
const outputPath = path.join(__dirname, '/output/posts.json')

mdToJSON.converteMdToJSON({
  contentPath,
  outputPath,
}).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log('error:', err);
})
