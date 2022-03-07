
import { remarkableDefaultConfig } from './config'
import { Remarkable  } from 'remarkable'
import { writeJSON, getMDFiles } from './utils'
import { constructJSONObj } from './builder'
import type { JsonObj } from './builder'
import meta from 'remarkable-meta'

/* eslint-disable @typescript-eslint/no-explicit-any */
type RemarkableMeta = Record<string, any>

export type RemarkableParser = Remarkable & RemarkableMeta

interface MdToJSONConverterOptions {
  contentPath: string
  outputPath: string
  remarkableOptions?: Remarkable.Options
  raw?: boolean
}

export const converteMdToJSON = async (options: MdToJSONConverterOptions): Promise<JsonObj> => {
  const { contentPath, outputPath } = options
  const parser = new Remarkable().use(meta)

  // if(options.raw) {}

  if(options.remarkableOptions) {
    parser.set(remarkableDefaultConfig)
  }

  const mdFiles = getMDFiles(contentPath)
  const jsonObj = constructJSONObj(parser as RemarkableParser, mdFiles)

  writeJSON(outputPath, {})
  return jsonObj
}
