import glob from 'glob'
import * as fs from 'fs'

const getMDFiles = (path: string) => {
  return glob.sync(path + '/**/*.md')
}

const ppJSON = (obj: Record<string, unknown>) => {
  return JSON.stringify(obj, null, 2)
}

const writeJSON = (outputPath: string, jsonObj: Record<string, unknown>) => {
  fs.writeFile(outputPath, ppJSON(jsonObj), (err) => {
      if (err) throw err
  })    
}

export { ppJSON, getMDFiles, writeJSON }
