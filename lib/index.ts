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
  validateOptions(options)

  const { contentPath, outputPath, raw } = options
  const parser = new Remarkable('default').use(meta)

  if(options.remarkableOptions) {
    parser.set(options.remarkableOptions)
  }

  const doseParse = raw || false
  const mdFiles = getMDFiles(contentPath)
  const jsonObj = constructJSONObj(parser as RemarkableParser, mdFiles, doseParse)

  writeJSON(outputPath, jsonObj)
  return jsonObj
}


const validateOptions = (options: MdToJSONConverterOptions) => {
  const { contentPath, outputPath } = options
  if(!contentPath) throw new Error('\'contentPath\' is required')
  if(!outputPath) throw new Error('\'outputPath\' is required')
}
