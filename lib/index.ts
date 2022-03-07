
import { remarkableDefaultConfig } from './config'
import { Remarkable  } from 'remarkable'
import meta from 'remarkable-meta'

const parser = new Remarkable(remarkableDefaultConfig).use(meta)

interface MdToJSONConverterOptions {
  contentPath: string
  outputPath: string
}

// cli.info(`Path: ${path.resolve(options.cwd, options.src)}`)
/*
  Required
  contentPath: string
  outputPath: string

  Optional
  remarkableConfig
*/
// contentPath, outputPath

export function converteMdToJSON (options: MdToJSONConverterOptions) {
  console.log(options)
}
