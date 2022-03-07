import glob from 'glob'
import * as fs from 'fs'
import type { JsonObj } from './builder'

const getMDFiles = (path: string) => {
  return glob.sync(path + '/**/*.md')
}

const ppJSON = (obj: JsonObj) => {
  return JSON.stringify(obj, null, 2)
}

const writeJSON = (outputPath: string, jsonObj: JsonObj) => {
  fs.writeFile(outputPath, ppJSON(jsonObj), (err) => {
      if (err) throw err
  })    
}

export { ppJSON, getMDFiles, writeJSON }
