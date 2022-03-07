import glob from 'glob'

const getMDFiles = (path: string) => {
  return glob.sync(path + '/**/*.md')
}

const ppJSON = (obj: Record<string, unknown>) => {
  return JSON.stringify(obj, null, 2)
}

export { ppJSON, getMDFiles }
